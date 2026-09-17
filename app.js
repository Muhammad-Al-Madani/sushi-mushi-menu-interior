/*
 * Электронное меню «Суши-Муши». Общая логика для двух вариантов оформления:
 *   interior — в стиле самого кафе (карточки раскрываются «листочком»);
 *   classic  — как их меню в Instagram (всё написано сразу).
 * Сервер не нужен: меню, «Мой заказ» и сообщение в WhatsApp собираются прямо в браузере.
 */
(function () {
	"use strict";

	const MENU = window.SUSHI_MENU;
	const root = document.documentElement;
	const VARIANT = root.dataset.variant === "classic" ? "classic" : "interior";
	const IMAGES = "images/dishes/";
	const ORDER = VARIANT === "classic"
		? ["pizza", "classic", "cold", "baked", "fried", "sets", "snacks", "rolldogs", "drinks"]
		: ["sets", "cold", "baked", "fried", "classic", "pizza", "snacks", "rolldogs", "drinks"];

	const ICON = {
		plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
		minus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg>',
		eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
		eyeOff: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 5.1A10.4 10.4 0 0 1 12 5c6.4 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.2M6.6 6.6C3.9 8.3 2 12 2 12s3.6 7 10 7c1.9 0 3.6-.6 5-1.5"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>',
		bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
		phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.5l2.6 3.3-1.6 2.5a11 11 0 0 0 7.1 7.1l2.5-1.6 3.3 2.6-1.3 3A2 2 0 0 1 17 21 15 15 0 0 1 3 7a2 2 0 0 1 .5-2.2l3.1-1.3z"/></svg>',
		whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1.2-4A8.5 8.5 0 1 1 8 18.9L4 20z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .9a5 5 0 0 1-2.8-2.8l.9-1-1-2L9 8.5z"/></svg>',
		chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
		moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
		sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
	};

	// ---------- хранилище: в приватном режиме браузера может быть недоступно ----------
	const store = {
		get(key, fallback) {
			try {
				const raw = localStorage.getItem(`sushi-mushi-${VARIANT}-${key}`);
				return raw === null ? fallback : JSON.parse(raw);
			} catch (e) { return fallback; }
		},
		set(key, value) {
			try { localStorage.setItem(`sushi-mushi-${VARIANT}-${key}`, JSON.stringify(value)); } catch (e) { /* без сохранения */ }
		},
	};

	// ---------- все позиции ----------
	const byId = new Map();
	const lines = new Map(); // ключ строки заказа → { item, variant }
	for (const section of MENU.sections)
		for (const item of section.items) {
			byId.set(item.id, item);
			if (item.variants) for (const v of item.variants) lines.set(`${item.id}:${v.id}`, { item, variant: v });
			else if (item.price != null) lines.set(item.id, { item, variant: null });
		}
	const sections = ORDER.map((id) => MENU.sections.find((s) => s.id === id)).filter(Boolean);

	let order = sanitize(store.get("order", {}));
	let pricesHidden = store.get("prices", "shown") === "hidden";
	const DARK_THEMES = ["night", "lacquer", "veranda"];
	let darkTheme = DARK_THEMES.includes(store.get("darkTheme", "night")) ? store.get("darkTheme", "night") : "night";
	let theme = DARK_THEMES.includes(store.get("theme", "day")) ? store.get("theme", "day") : "day";

	function sanitize(saved) {
		const clean = {};
		if (saved && typeof saved === "object")
			for (const [key, qty] of Object.entries(saved))
				if (lines.has(key) && Number.isFinite(qty) && qty > 0) clean[key] = Math.min(99, Math.round(qty));
		return clean;
	}

	// ---------- помощники ----------
	const $ = (id) => document.getElementById(id);
	const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
	const nf = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 });
	const money = (value) => `${nf.format(value)} ₽`;
	const unitPrice = (key) => { const { item, variant } = lines.get(key); return variant ? variant.price : item.price; };
	const lineName = (key) => { const { item, variant } = lines.get(key); return variant ? `${item.name}, ${variant.name}` : item.name; };
	const orderTotal = () => Object.keys(order).reduce((sum, key) => sum + unitPrice(key) * order[key], 0);

	function plural(n, one, few, many) {
		const d10 = n % 10, d100 = n % 100;
		if (d10 === 1 && d100 !== 11) return one;
		if (d10 >= 2 && d10 <= 4 && (d100 < 12 || d100 > 14)) return few;
		return many;
	}

	let toastTimer = null;
	function toast(text) {
		const el = $("toast");
		el.textContent = text;
		el.hidden = false;
		clearTimeout(toastTimer);
		toastTimer = setTimeout(() => { el.hidden = true; }, 1700);
	}

	// ---------- сеты: состав, «по отдельности» и выгода ----------
	function setInfo(item) {
		let min = 0, max = 0, known = true, kcal = 0, kcalKnown = true;
		const rows = item.set.map((line) => {
			const ref = line.ref ? byId.get(line.ref) : null;
			const from = ref ? ref.price : line.from;
			const to = ref ? ref.price : line.to;
			if (from == null) known = false;
			else { min += from; max += to; }
			const k = ref ? ref.kcal : line.kcal;
			if (k == null) kcalKnown = false; else kcal += k;
			return {
				name: line.name || ref.name,
				fullName: ref && line.name && line.name !== ref.name ? ref.name : "",
				photo: ref ? ref.photo : line.photo,
				pieces: ref ? ref.pieces : line.pieces,
				from, to, inMenu: Boolean(ref || line.from),
			};
		});
		return { rows, known, min, max, saveMin: min - item.price, saveMax: max - item.price, kcal: kcalKnown ? kcal : null };
	}

	const range = (from, to) => (from === to ? money(from) : `${nf.format(from)}–${money(to)}`);

	// ---------- кнопки «+» и счётчик ----------
	function buyInner(key) {
		const qty = order[key] || 0;
		const label = esc(lineName(key));
		const price = `<span class="price">${money(unitPrice(key))}</span>`;
		if (!qty)
			return `${price}<button class="add" type="button" data-act="plus" aria-label="Добавить: ${label}">${ICON.plus}</button>`;
		return `${price}<span class="stepper" role="group" aria-label="${label}">
			<button type="button" data-act="minus" aria-label="Убрать одну">${ICON.minus}</button>
			<output aria-live="polite">${qty}</output>
			<button type="button" data-act="plus" aria-label="Добавить ещё">${ICON.plus}</button>
		</span>`;
	}
	const buy = (key) => `<div class="buy" data-key="${esc(key)}">${buyInner(key)}</div>`;
	const noPrice = '<div class="buy buy--none"><span class="ask">цену уточняйте по телефону</span></div>';

	function change(key, dir) {
		const next = (order[key] || 0) + dir;
		const added = dir > 0 && !order[key];
		if (next > 0) order[key] = Math.min(next, 99);
		else delete order[key];
		store.set("order", order);
		document.querySelectorAll(`#menu [data-key="${CSS.escape(key)}"]`).forEach((el) => { el.innerHTML = buyInner(key); });
		refreshOrder();
		if (added) toast(`В заказе: ${lineName(key)}`);
	}

	// ---------- вариант «в стиле кафе» ----------
	const badge = (item) => (item.badge === "new" ? '<span class="badge">New</span>' : "");
	const photoTag = (photo, alt, cls) =>
		`<img class="${cls}" src="${IMAGES}${photo}.webp" alt="${esc(alt)}" loading="lazy" decoding="async">`;

	// штуки и калории — на карточке; время приготовления — только в развёрнутом «листочке»
	function interiorFacts(item, info, withTime = true) {
		const facts = [];
		if (item.pieces) facts.push(`${item.pieces} шт.`);
		const kcal = info ? info.kcal : item.kcal;
		if (kcal) facts.push(`≈ ${nf.format(kcal)} ккал`);
		if (withTime && item.time) facts.push(`≈ ${item.time} мин`);
		return facts;
	}

	function interiorSheet(item, info) {
		const facts = interiorFacts(item, info).map((f) => `<li>${esc(f)}</li>`).join("");
		if (!info) {
			return `${item.desc ? `<p class="leaf-label">Состав</p><p class="leaf-desc">${esc(item.desc)}</p>` : ""}
				${facts ? `<ul class="facts">${facts}</ul>` : ""}`;
		}
		const rows = info.rows.map((r) => `<li class="set-row${r.inMenu ? "" : " set-row--unknown"}">
			${r.photo ? photoTag(r.photo, r.name, "set-thumb") : '<span class="set-thumb set-thumb--empty" aria-hidden="true">?</span>'}
			<span class="set-name">${esc(r.name)}${r.fullName ? `<small>${esc(r.fullName)}</small>` : ""}${r.inMenu ? "" : "<small>в меню отдельно нет</small>"}</span>
			<span class="set-price">${r.from != null ? `<span class="price">${range(r.from, r.to)}</span>` : "—"}</span>
		</li>`).join("");
		const deal = info.known && info.saveMin > 0
			? `<div class="deal">
				<div><span>По отдельности</span><s class="price">${range(info.min, info.max)}</s></div>
				<div><span>В сете</span><b class="price">${money(item.price)}</b></div>
				<div class="deal-save"><span>Выгода</span><b class="price">${info.saveMin === info.saveMax ? "" : "от "}${money(info.saveMin)}</b></div>
			</div>`
			: "";
		return `<p class="leaf-label">В сете</p><ul class="set-rows">${rows}</ul>${deal}
			${facts ? `<ul class="facts">${facts}</ul>` : ""}`;
	}

	function interiorItem(item) {
		const info = item.set ? setInfo(item) : null;
		const facts = interiorFacts(item, info, false);
		let media = "";
		if (item.photo) media = photoTag(item.photo, item.name, "dish-photo");
		else if (info) {
			const shots = info.rows.filter((r) => r.photo).slice(0, 3);
			media = `<span class="dish-collage" aria-hidden="true">${shots.map((r) => photoTag(r.photo, "", "")).join("")}</span>`;
		}
		const expandable = Boolean(item.desc || info || item.kcal || item.time);
		const body = item.variants
			? `<ul class="variants">${item.variants.map((v) => `<li><span class="variant-name">${esc(v.name)}</span>${buy(`${item.id}:${v.id}`)}</li>`).join("")}</ul>`
			: item.price == null ? noPrice : buy(item.id);
		return `<article class="dish${media ? "" : " dish--plain"}${item.set ? " dish--set" : ""}" data-dish="${esc(item.id)}">
			${media ? `<div class="dish-media" data-toggle>${media}</div>` : ""}
			<div class="dish-main">
				${expandable
					? `<button class="dish-title" type="button" data-toggle aria-expanded="false" aria-controls="leaf-${esc(item.id)}">
						<span class="dish-name">${esc(item.name)}${badge(item)}</span>${ICON.chevron}</button>`
					: `<h3 class="dish-title"><span class="dish-name">${esc(item.name)}${badge(item)}</span></h3>`}
				${facts.length && !item.variants ? `<p class="dish-facts">${esc(facts.join(" · "))}</p>` : ""}
				${body}
			</div>
			${expandable ? `<div class="leaf" id="leaf-${esc(item.id)}"><div class="leaf-inner"><div class="leaf-paper">${interiorSheet(item, info)}</div></div></div>` : ""}
		</article>`;
	}

	// ---------- вариант «как у вас» ----------
	// цена прямо в названии, как на их картинках: «Филадельфия классик -410₽»
	const printed = (price) => `<span class="price">-${nf.format(price)}₽</span>`;

	function classicItem(item) {
		const info = item.set ? setInfo(item) : null;
		const newMark = item.badge === "new" ? '<span class="new" aria-label="Новинка">New</span>' : "";
		const name = item.set ? `${esc(item.name)} ${item.pieces}шт` : esc(item.name);
		const title = item.price != null ? `${name} ${printed(item.price)}` : name;
		const desc = info ? info.rows.map((r) => r.name).join(", ") : item.desc;
		const body = item.variants
			? `<ul class="variants">${item.variants.map((v) =>
				`<li><span class="variant-name">${esc(v.name)} ${printed(v.price)}</span>${buy(`${item.id}:${v.id}`)}</li>`).join("")}</ul>`
			: item.price == null ? noPrice : buy(item.id);
		return `<article class="row${item.photo ? "" : " row--plain"}">
			${item.photo ? `<div class="row-media">${photoTag(item.photo, item.name, "row-photo")}${newMark}</div>` : ""}
			<div class="row-text">
				<h3 class="row-name">${title}${item.photo ? "" : newMark}</h3>
				${desc ? `<p class="row-desc">${esc(desc)}</p>` : ""}
				${body}
			</div>
		</article>`;
	}

	// ---------- меню целиком ----------
	function renderMenu() {
		$("nav").innerHTML = sections.map((s) => `<a href="#${s.id}" data-section="${s.id}">${esc(s.title)}</a>`).join("");
		const render = VARIANT === "classic" ? classicItem : interiorItem;
		$("menu").innerHTML = sections.map((s) => `
			<section class="section section--${s.id}" id="${s.id}" aria-labelledby="h-${s.id}">
				<header class="section-head">
					<h2 class="section-title" id="h-${s.id}">${esc(s.title)}${VARIANT === "classic" ? ":" : ""}</h2>
					<span class="section-mark" aria-hidden="true">${VARIANT === "classic" ? "Суши -Муши" : esc(s.mark || "")}</span>
				</header>
				<div class="items">${s.items.map(render).join("")}</div>
			</section>`).join("");
		watchSections();
	}

	// подсветка текущего раздела в навигации
	let observer = null;
	function watchSections() {
		if (observer) observer.disconnect();
		if (!("IntersectionObserver" in window)) return;
		const links = new Map([...$("nav").querySelectorAll("a")].map((a) => [a.dataset.section, a]));
		observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				links.forEach((a) => a.removeAttribute("aria-current"));
				const link = links.get(entry.target.id);
				if (link) {
					link.setAttribute("aria-current", "true");
					link.scrollIntoView({ block: "nearest", inline: "center" });
				}
			}
		}, { rootMargin: "-35% 0px -60% 0px" });
		document.querySelectorAll(".section").forEach((s) => observer.observe(s));
	}

	// ---------- «Мой заказ» ----------
	// Сумма не висит на экране: на панели только число позиций, итог — в окне заказа.
	function refreshOrder() {
		const count = Object.values(order).reduce((n, qty) => n + qty, 0);
		$("orderbar").hidden = count === 0;
		$("bar-count").textContent = String(count);
		$("open-order").setAttribute("aria-label", `Мой заказ: ${count} ${plural(count, "позиция", "позиции", "позиций")}`);
		if ($("order-sheet").open) renderOrderLines();
	}

	function readyIn() {
		const times = Object.keys(order).map((key) => lines.get(key).item.time || 0);
		return times.length ? Math.max(...times) : 0;
	}

	function renderOrderLines() {
		const keys = Object.keys(order);
		const focused = document.activeElement && document.activeElement.closest("#order-lines [data-key]");
		const focusKey = focused && focused.dataset.key;
		const focusAct = document.activeElement && document.activeElement.dataset.act;

		$("order-lines").innerHTML = keys.length ? keys.map((key) => {
			const { item, variant } = lines.get(key);
			return `<div class="line" data-key="${esc(key)}">
				<div class="line-text">
					<span class="line-name">${esc(item.name)}</span>
					<span class="line-unit">${variant ? `${esc(variant.name)} · ` : ""}<span class="price">${money(unitPrice(key))}</span></span>
				</div>
				<span class="stepper" role="group" aria-label="${esc(lineName(key))}">
					<button type="button" data-act="minus" aria-label="Убрать одну">${ICON.minus}</button>
					<output>${order[key]}</output>
					<button type="button" data-act="plus" aria-label="Добавить ещё">${ICON.plus}</button>
				</span>
				<span class="line-sum price">${money(unitPrice(key) * order[key])}</span>
			</div>`;
		}).join("") : '<p class="empty">Пока пусто — нажмите «+» рядом с блюдом</p>';

		const minutes = readyIn();
		$("ready-note").hidden = !minutes;
		$("ready-note").textContent = minutes ? `Примерное время приготовления — около ${minutes} мин` : "";
		$("order-total").textContent = money(orderTotal());
		$("send-whatsapp").hidden = keys.length === 0;
		$("clear-order").hidden = keys.length === 0;

		if (focusKey) {
			const again = document.querySelector(`#order-lines [data-key="${CSS.escape(focusKey)}"] [data-act="${focusAct}"]`);
			if (again) again.focus();
		}
	}

	function whatsappText() {
		const rows = Object.keys(order).map((key) =>
			`• ${lineName(key)} × ${order[key]} — ${money(unitPrice(key) * order[key])}`);
		// неразрывные пробелы из форматирования чисел меняем на обычные — так текст надёжнее в любом мессенджере
		return ["Здравствуйте! Хочу сделать заказ:", ...rows, `Итого: ${money(orderTotal())}`].join("\n").replace(/[\u00a0\u202f]/g, " ");
	}

	// ---------- цены: скрыть / показать ----------
	// Только значок-глазик, без подписи и подсказки: хозяин скрывает цены и передаёт телефон гостю,
	// а гость не должен догадаться, как вернуть их обратно.
	function applyPrices() {
		root.dataset.prices = pricesHidden ? "hidden" : "shown";
		const btn = $("prices");
		btn.innerHTML = pricesHidden ? ICON.eyeOff : ICON.eye;
		btn.setAttribute("aria-pressed", String(pricesHidden));
		btn.setAttribute("aria-label", "Цены");
	}

	// ---------- светлая и ночная тема ----------
	// По умолчанию сайт светлый: ночную гость включает сам, выбор запоминается.
	function applyTheme() {
		root.dataset.theme = theme;
		if (theme === "day") delete root.dataset.dark; else root.dataset.dark = "1";
		const btn = $("theme");
		if (!btn) return;
		const label = theme === "night" ? "Светлая тема" : "Ночная тема";
		btn.innerHTML = theme === "night" ? ICON.sun : ICON.moon;
		btn.setAttribute("aria-pressed", String(theme === "night"));
		btn.setAttribute("aria-label", label);
		const meta = document.querySelector('meta[name="theme-color"]');
		if (meta) meta.setAttribute("content", getComputedStyle(root).getPropertyValue("--black").trim() || "#121212");
	}

	// ручка для демо-панели: она подключается только по ссылке с ?demo
	window.SUSHI_UI = {
		themes: ["day", ...DARK_THEMES],
		getTheme: () => theme,
		setTheme(next) {
			theme = DARK_THEMES.includes(next) ? next : "day";
			if (theme !== "day") { darkTheme = theme; store.set("darkTheme", darkTheme); }
			store.set("theme", theme);
			applyTheme();
		},
	};

	// ---------- контакты ----------
	function renderContacts() {
		const phoneLinks = MENU.phones.map((p) => `<a class="phone" href="tel:${p.tel}">${ICON.phone}<span>${p.label}</span></a>`).join("");
		document.querySelectorAll("[data-phones]").forEach((el) => { el.innerHTML = phoneLinks; });
		document.querySelectorAll("[data-address]").forEach((el) => { el.textContent = MENU.address; });
		document.querySelectorAll("[data-hours]").forEach((el) => { el.textContent = MENU.hours; });
		document.querySelectorAll("[data-prices-date]").forEach((el) => { el.textContent = MENU.pricesDate; });
		$("send-whatsapp").innerHTML = `${ICON.whatsapp}<span>Отправить заказ в WhatsApp</span>`;
		$("bar-icon").innerHTML = ICON.bag;
	}

	// ---------- события ----------
	document.addEventListener("click", (event) => {
		const act = event.target.closest("[data-act]");
		if (act) {
			const holder = act.closest("[data-key]");
			if (holder) change(holder.dataset.key, act.dataset.act === "plus" ? 1 : -1);
			return;
		}
		const toggle = event.target.closest("[data-toggle]");
		if (toggle) {
			const dish = toggle.closest(".dish");
			const open = dish.classList.toggle("open");
			const btn = dish.querySelector("button.dish-title");
			if (btn) btn.setAttribute("aria-expanded", String(open));
			return;
		}
		const closeBtn = event.target.closest("[data-close]");
		if (closeBtn) closeBtn.closest("dialog").close();
	});

	$("prices").addEventListener("click", () => {
		pricesHidden = !pricesHidden;
		store.set("prices", pricesHidden ? "hidden" : "shown");
		applyPrices();
	});

	const themeBtn = $("theme");
	if (themeBtn) themeBtn.addEventListener("click", () => {
		theme = theme === "day" ? darkTheme : "day";
		store.set("theme", theme);
		applyTheme();
	});

	$("open-order").addEventListener("click", () => {
		renderOrderLines();
		$("order-sheet").showModal();
	});

	$("send-whatsapp").addEventListener("click", () => {
		if (!Object.keys(order).length) return;
		window.open(`https://wa.me/${MENU.whatsapp}?text=${encodeURIComponent(whatsappText())}`, "_blank", "noopener");
	});

	$("clear-order").addEventListener("click", () => {
		if (!window.confirm("Очистить весь заказ?")) return;
		order = {};
		store.set("order", order);
		renderMenu();
		refreshOrder();
		$("order-sheet").close();
	});

	// закрытие окна нажатием на затемнённый фон
	document.querySelectorAll("dialog").forEach((dialog) => {
		dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
	});

	renderContacts();
	renderMenu();
	refreshOrder();
	applyPrices();
	applyTheme();
})();
