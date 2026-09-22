/*
 * Электронное меню «Суши-Муши» — вариант в стиле кафе.
 * Три языка (русский, английский, арабский), светлая и ночная темы,
 * «Мой заказ» и отправка готового заказа в WhatsApp.
 * Сервер не нужен: всё считается прямо в браузере.
 */
(function () {
	"use strict";

	const MENU = window.SUSHI_MENU;
	const root = document.documentElement;
	const IMAGES = "images/dishes/";
	const ORDER = ["sets", "cold", "baked", "fried", "classic", "pizza", "snacks", "rolldogs", "drinks"];
	const LANGS = ["ru", "en", "ar"];
	const DARK_THEMES = ["night"];
	const ARABIC_FONTS = "https://fonts.googleapis.com/css2?family=Cairo:wght@600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";

	const UI = {
		ru: {
			title: "Суши-Муши — меню",
			slogan: ["То место,", "о котором", "все спрашивают"],
			toMenu: "Смотреть меню", nav: "Разделы меню", language: "Язык",
			myOrder: "Мой заказ", total: "Итого", close: "Закрыть", clear: "Очистить заказ",
			confirmClear: "Очистить весь заказ?", empty: "Пока пусто — нажмите «+» рядом с блюдом",
			ready: (min) => `Примерное время приготовления — около ${min} мин`,
			sendWhatsapp: "Отправить заказ в WhatsApp", orCall: "или позвоните",
			composition: "Состав", inSet: "В сете", notInMenu: "в меню отдельно нет",
			dealSeparate: "По отдельности", dealSet: "В сете", dealSave: "Выгода",
			pieces: (n) => `${n} шт.`, kcal: (n) => `≈ ${n} ккал`, minutes: (n) => `≈ ${n} мин`,
			askPrice: "цену уточняйте по телефону", added: (name) => `В заказе: ${name}`,
			openDish: (name) => `Посмотреть ролл ${name} в меню`,
			backToSet: (name) => `Вернуться к сету «${name}»`,
			add: "Добавить", more: "Добавить ещё", less: "Убрать одну",
			prices: "Цены", toNight: "Ночная тема", toDay: "Светлая тема",
			extras: "Приборы и соусы",
			extrasNote: (n) => `Посчитали на ${n} чел. Уберите лишнее — кафе не положит зря`,
			looks: "Оформление",
			looksButtons: "Кнопки",
			btnBlack: "Чёрные", btnWood: "Деревянные", btnOutline: "Контурные",
			floorNote: "Калорийность и время приготовления указаны примерно.",
		},
		en: {
			title: "Sushi-Mushi — menu",
			slogan: ["The place", "everyone", "asks about"],
			toMenu: "See the menu", nav: "Menu sections", language: "Language",
			myOrder: "My order", total: "Total", close: "Close", clear: "Clear the order",
			confirmClear: "Clear the whole order?", empty: "Nothing yet — tap “+” next to a dish",
			ready: (min) => `Ready in about ${min} min`,
			sendWhatsapp: "Send the order on WhatsApp", orCall: "or call us",
			composition: "Ingredients", inSet: "In the set", notInMenu: "not sold separately",
			dealSeparate: "Separately", dealSet: "In the set", dealSave: "You save",
			pieces: (n) => `${n} pcs`, kcal: (n) => `≈ ${n} kcal`, minutes: (n) => `≈ ${n} min`,
			askPrice: "ask for the price by phone", added: (name) => `Added: ${name}`,
			openDish: (name) => `See ${name} in the menu`,
			backToSet: (name) => `Back to the “${name}” set`,
			add: "Add", more: "One more", less: "One less",
			prices: "Prices", toNight: "Dark theme", toDay: "Light theme",
			extras: "Cutlery and sauces",
			extrasNote: (n) => `Counted for ${n} people. Remove what you do not need`,
			looks: "Look",
			looksButtons: "Buttons",
			btnBlack: "Black", btnWood: "Wood", btnOutline: "Outline",
			floorNote: "Calories and cooking time are approximate.",
		},
		ar: {
			title: "سوشي موشي — القائمة",
			slogan: ["المكان", "الذي يسأل", "عنه الجميع"],
			toMenu: "تصفّح القائمة", nav: "أقسام القائمة", language: "اللغة",
			myOrder: "طلبي", total: "الإجمالي", close: "إغلاق", clear: "مسح الطلب",
			confirmClear: "هل تمسح الطلب بالكامل؟", empty: "القائمة فارغة — اضغط «+» بجانب الطبق",
			ready: (min) => `جاهز خلال ${min} دقيقة تقريبًا`,
			sendWhatsapp: "أرسل الطلب عبر واتساب", orCall: "أو اتصل بنا",
			composition: "المكوّنات", inSet: "داخل الطقم", notInMenu: "لا تُباع منفردة",
			dealSeparate: "منفردة", dealSet: "داخل الطقم", dealSave: "التوفير",
			pieces: (n) => `${n} قطع`, kcal: (n) => `≈ ${n} سعرة`, minutes: (n) => `≈ ${n} دقيقة`,
			askPrice: "اسأل عن السعر هاتفيًا", added: (name) => `أُضيف: ${name}`,
			openDish: (name) => `شاهد ${name} في القائمة`,
			backToSet: (name) => `العودة إلى طقم «${name}»`,
			add: "أضف", more: "زيادة", less: "إنقاص",
			prices: "الأسعار", toNight: "الوضع الليلي", toDay: "الوضع النهاري",
			extras: "أدوات وصلصات",
			extrasNote: (n) => `حُسبت لـ ${n} أشخاص. احذف ما لا تحتاجه`,
			looks: "المظهر",
			looksButtons: "الأزرار",
			btnBlack: "سوداء", btnWood: "خشبية", btnOutline: "بإطار",
			floorNote: "السعرات ووقت التحضير تقريبية.",
		},
	};

	const ICON = {
		plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
		minus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg>',
		eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
		eyeOff: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 5.1A10.4 10.4 0 0 1 12 5c6.4 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.2M6.6 6.6C3.9 8.3 2 12 2 12s3.6 7 10 7c1.9 0 3.6-.6 5-1.5"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>',
		bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
		phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.5l2.6 3.3-1.6 2.5a11 11 0 0 0 7.1 7.1l2.5-1.6 3.3 2.6-1.3 3A2 2 0 0 1 17 21 15 15 0 0 1 3 7a2 2 0 0 1 .5-2.2l3.1-1.3z"/></svg>',
		whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1.2-4A8.5 8.5 0 1 1 8 18.9L4 20z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .9a5 5 0 0 1-2.8-2.8l.9-1-1-2L9 8.5z"/></svg>',
		chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
		arrowBack: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
		moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
		sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
	};

	// ---------- хранилище: в приватном режиме браузера может быть недоступно ----------
	const store = {
		get(key, fallback) {
			try {
				const raw = localStorage.getItem(`sushi-mushi-interior-${key}`);
				return raw === null ? fallback : JSON.parse(raw);
			} catch (e) { return fallback; }
		},
		set(key, value) {
			try { localStorage.setItem(`sushi-mushi-interior-${key}`, JSON.stringify(value)); } catch (e) { /* без сохранения */ }
		},
	};

	// ---------- все позиции ----------
	const byId = new Map();
	const sectionOf = new Map(); // блюдо → раздел, по нему считаем число человек
	const lines = new Map(); // ключ строки заказа → { item, variant }
	for (const section of MENU.sections)
		for (const item of section.items) {
			byId.set(item.id, item);
			sectionOf.set(item.id, section.id);
			if (item.variants) for (const v of item.variants) lines.set(`${item.id}:${v.id}`, { item, variant: v });
			else if (item.price != null) lines.set(item.id, { item, variant: null });
		}
	const sections = ORDER.map((id) => MENU.sections.find((s) => s.id === id)).filter(Boolean);

	let lang = pickLanguage();
	let darkTheme = DARK_THEMES.includes(store.get("darkTheme", "night")) ? store.get("darkTheme", "night") : "night";
	let theme = DARK_THEMES.includes(store.get("theme", "day")) ? store.get("theme", "day") : "day";
	let pricesHidden = store.get("prices", "shown") === "hidden";
	let order = sanitize(store.get("order", {}));
	let extras = store.get("extras", {}); // { id: { qty, touched } } — что гость поправил руками

	function pickLanguage() {
		const saved = store.get("lang", null);
		if (LANGS.includes(saved)) return saved;
		for (const tag of navigator.languages || [navigator.language || ""]) {
			const code = String(tag).slice(0, 2).toLowerCase();
			if (LANGS.includes(code)) return code;
		}
		return "ru";
	}

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
	const t = (key) => UI[lang][key];
	const text = (field) => (field && (field[lang] || field.ru)) || "";   // название: запасной язык — русский
	const only = (field) => (field && field[lang]) || "";                 // состав: без подмены языка

	let nf = numberFormat();
	function numberFormat() {
		const locale = lang === "ar" ? "ar-u-nu-latn" : lang === "en" ? "en-US" : "ru-RU";
		return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });
	}
	const money = (value) => `${nf.format(value)} ₽`;
	const priceTag = (value, cls = "price") => `<span class="${cls}" dir="ltr">${money(value)}</span>`;
	const unitPrice = (key) => { const { item, variant } = lines.get(key); return variant ? variant.price : item.price; };
	const lineName = (key, code) => {
		const { item, variant } = lines.get(key);
		const pick = (field) => (field && (field[code || lang] || field.ru)) || "";
		return variant ? `${pick(item.name)}, ${pick(variant.name)}` : pick(item.name);
	};
	const orderTotal = () => Object.keys(order).reduce((sum, key) => sum + unitPrice(key) * order[key], 0);

	let toastTimer = null;
	function toast(message) {
		const el = $("toast");
		el.textContent = message;
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
				fullName: ref && line.name && line.name.ru !== ref.name.ru ? ref.name : null,
				photo: ref ? ref.photo : line.photo,
				pieces: ref ? ref.pieces : line.pieces,
				id: ref ? ref.id : null,
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
		if (!qty)
			return `${priceTag(unitPrice(key))}<button class="add" type="button" data-act="plus" aria-label="${t("add")}: ${label}">${ICON.plus}</button>`;
		return `${priceTag(unitPrice(key))}<span class="stepper" role="group" aria-label="${label}">
			<button type="button" data-act="minus" aria-label="${t("less")}">${ICON.minus}</button>
			<output aria-live="polite">${nf.format(qty)}</output>
			<button type="button" data-act="plus" aria-label="${t("more")}">${ICON.plus}</button>
		</span>`;
	}
	const buy = (key) => `<div class="buy" data-key="${esc(key)}">${buyInner(key)}</div>`;
	const noPrice = () => `<div class="buy buy--none"><span class="ask">${esc(t("askPrice"))}</span></div>`;

	function change(key, dir) {
		const next = (order[key] || 0) + dir;
		const added = dir > 0 && !order[key];
		if (next > 0) order[key] = Math.min(next, 99);
		else delete order[key];
		store.set("order", order);
		document.querySelectorAll(`#menu [data-key="${CSS.escape(key)}"]`).forEach((el) => { el.innerHTML = buyInner(key); });
		refreshOrder();
		if (added) toast(t("added")(lineName(key)));
	}

	// ---------- карточки блюд ----------
	const badge = (item) => (item.badge === "new" ? '<span class="badge">New</span>' : "");
	const photoTag = (photo, alt, cls) =>
		`<img class="${cls}" src="${IMAGES}${photo}.webp" alt="${esc(alt)}" loading="lazy" decoding="async">`;

	// штуки и калории — на карточке; время приготовления — только в развёрнутом «листочке»
	function facts(item, info, withTime = true) {
		const list = [];
		if (item.pieces) list.push(t("pieces")(nf.format(item.pieces)));
		const kcal = info ? info.kcal : item.kcal;
		if (kcal) list.push(t("kcal")(nf.format(kcal)));
		if (withTime && item.time) list.push(t("minutes")(nf.format(item.time)));
		return list;
	}

	function leaf(item, info) {
		const chips = facts(item, info).map((f) => `<li>${esc(f)}</li>`).join("");
		if (!info) {
			const desc = only(item.desc);
			return `${desc ? `<p class="leaf-label">${esc(t("composition"))}</p><p class="leaf-desc">${esc(desc)}</p>` : ""}
				${chips ? `<ul class="facts">${chips}</ul>` : ""}`;
		}
		const rows = info.rows.map((r) => {
			const sub = `${r.fullName ? `<small>${esc(text(r.fullName))}</small>` : ""}${r.inMenu ? "" : `<small>${esc(t("notInMenu"))}</small>`}`;
			// у ролла из меню название нажимается: переносит к его карточке с составом и фото
			const name = r.id
				? `<button type="button" class="set-name set-jump" data-jump="${esc(r.id)}" data-from="${esc(item.id)}" aria-label="${esc(t("openDish")(text(r.name)))}"><span class="set-jump-name">${esc(text(r.name))}</span><span class="set-jump-hint" aria-hidden="true">↗</span>${sub}</button>`
				: `<span class="set-name">${esc(text(r.name))}${sub}</span>`;
			return `<li class="set-row${r.inMenu ? "" : " set-row--unknown"}">
				${r.photo ? photoTag(r.photo, text(r.name), "set-thumb") : '<span class="set-thumb set-thumb--empty" aria-hidden="true">?</span>'}
				${name}
				<span class="set-price">${r.from != null ? `<span class="price" dir="ltr">${range(r.from, r.to)}</span>` : "—"}</span>
			</li>`;
		}).join("");
		const deal = info.known && info.saveMin > 0
			? `<div class="deal">
				<div><span>${esc(t("dealSeparate"))}</span><s class="price" dir="ltr">${range(info.min, info.max)}</s></div>
				<div><span>${esc(t("dealSet"))}</span><b class="price" dir="ltr">${money(item.price)}</b></div>
				<div class="deal-save"><span>${esc(t("dealSave"))}</span><b class="price" dir="ltr">${info.saveMin === info.saveMax ? "" : "≥ "}${money(info.saveMin)}</b></div>
			</div>`
			: "";
		return `<p class="leaf-label">${esc(t("inSet"))}</p><ul class="set-rows">${rows}</ul>${deal}
			${chips ? `<ul class="facts">${chips}</ul>` : ""}`;
	}

	function renderItem(item) {
		const info = item.set ? setInfo(item) : null;
		const shortFacts = facts(item, info, false);
		let media = "";
		if (item.photo) media = photoTag(item.photo, text(item.name), "dish-photo");
		else if (info) {
			const shots = info.rows.filter((r) => r.photo).slice(0, 3);
			media = `<span class="dish-collage" aria-hidden="true">${shots.map((r) => photoTag(r.photo, "", "")).join("")}</span>`;
		}
		const expandable = Boolean(item.desc || info || item.kcal || item.time);
		const body = item.variants
			? `<ul class="variants">${item.variants.map((v) =>
				`<li><span class="variant-name">${esc(text(v.name))}</span>${buy(`${item.id}:${v.id}`)}</li>`).join("")}</ul>`
			: item.price == null ? noPrice() : buy(item.id);
		return `<article class="dish${media ? "" : " dish--plain"}${item.set ? " dish--set" : ""}" data-dish="${esc(item.id)}">
			${media ? `<div class="dish-media" data-toggle>${media}</div>` : ""}
			<div class="dish-main">
				${expandable
					? `<button class="dish-title" type="button" data-toggle aria-expanded="false" aria-controls="leaf-${esc(item.id)}">
						<span class="dish-name">${esc(text(item.name))}${badge(item)}</span>${ICON.chevron}</button>`
					: `<h3 class="dish-title"><span class="dish-name">${esc(text(item.name))}${badge(item)}</span></h3>`}
				${shortFacts.length && !item.variants ? `<p class="dish-facts">${esc(shortFacts.join(" · "))}</p>` : ""}
				${body}
			</div>
			${expandable ? `<div class="leaf" id="leaf-${esc(item.id)}"><div class="leaf-inner"><div class="leaf-paper">${leaf(item, info)}</div></div></div>` : ""}
		</article>`;
	}

	// ---------- переход из сета к роллу и обратно ----------
	function openDish(dish) {
		if (dish.classList.contains("open")) return;
		dish.classList.add("open");
		const title = dish.querySelector("button.dish-title");
		if (title) title.setAttribute("aria-expanded", "true");
	}

	let backTimer = null;
	function jumpToDish(id, fromId) {
		const dish = document.querySelector(`[data-dish="${CSS.escape(id)}"]`);
		if (!dish) return;
		openDish(dish);
		dish.scrollIntoView({ block: "center", behavior: "smooth" });
		dish.classList.remove("flash");
		void dish.offsetWidth; // перезапускаем подсветку, если нажали второй раз
		dish.classList.add("flash");

		const set = byId.get(fromId);
		const back = $("back-to-set");
		if (!set || !back) return;
		back.innerHTML = `${ICON.arrowBack}<span>${esc(t("backToSet")(text(set.name)))}</span>`;
		back.dataset.back = fromId;
		back.hidden = false;
		clearTimeout(backTimer);
		backTimer = setTimeout(() => { back.hidden = true; }, 40000);
	}

	// ---------- меню целиком ----------
	function renderMenu() {
		$("nav").innerHTML = sections.map((s) => `<a href="#${s.id}" data-section="${s.id}">${esc(text(s.title))}</a>`).join("");
		$("menu").innerHTML = sections.map((s) => `
			<section class="section section--${s.id}" id="${s.id}" aria-labelledby="h-${s.id}">
				<header class="section-head">
					<h2 class="section-title" id="h-${s.id}">${esc(text(s.title))}</h2>
					<span class="section-mark" aria-hidden="true">${esc(s.mark || "")}</span>
				</header>
				<div class="items">${s.items.map(renderItem).join("")}</div>
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
		$("bar-count").textContent = nf.format(count);
		$("open-order").setAttribute("aria-label", `${t("myOrder")}: ${nf.format(count)}`);
		if ($("order-sheet").open) renderOrderLines();
	}

	// ---------- приборы и соусы ----------
	// Ролл на 8 штук считаем за одного человека, пиццу — за двоих. Это и есть «на сколько персон».
	function personsCount() {
		let people = 0;
		for (const key of Object.keys(order)) {
			const { item } = lines.get(key);
			const where = sectionOf.get(item.id);
			if (item.pieces) people += (item.pieces / 8) * order[key];
			else if (where === "pizza") people += 2 * order[key];
			else if (where === "rolldogs") people += order[key];
		}
		return Math.max(1, Math.min(20, Math.ceil(people)));
	}

	// больше, чем на компанию + один запасной, положить нельзя: это спасает от горы лишних соусов
	const extraLimit = (persons) => persons + 1;
	function extraQty(extra, persons) {
		const saved = extras[extra.id];
		if (saved && saved.touched) return Math.max(0, Math.min(saved.qty, extraLimit(persons)));
		// палочки и соус нужны каждому, васаби и имбирь ест примерно половина компании
		return Math.max(1, Math.min(extraLimit(persons), Math.ceil(persons * (extra.perPerson || 1))));
	}

	function changeExtra(id, dir) {
		const persons = personsCount();
		const extra = MENU.extras.find((e) => e.id === id);
		const next = Math.max(0, Math.min(extraLimit(persons), extraQty(extra, persons) + dir));
		extras[id] = { qty: next, touched: true };
		store.set("extras", extras);
		renderExtras();
	}

	function renderExtras() {
		const box = $("extras");
		if (!box) return;
		const persons = personsCount();
		box.hidden = Object.keys(order).length === 0;
		box.innerHTML = `<p class="extras-title">${esc(t("extras"))}</p>
			<p class="extras-note">${esc(t("extrasNote")(nf.format(persons)))}</p>
			<ul class="extras-list">${MENU.extras.map((extra) => {
				const qty = extraQty(extra, persons);
				return `<li class="extra" data-extra="${esc(extra.id)}">
					<span class="extra-name">${esc(text(extra.name))}</span>
					<span class="stepper stepper--small" role="group" aria-label="${esc(text(extra.name))}">
						<button type="button" data-extra-act="minus" aria-label="${t("less")}"${qty === 0 ? " disabled" : ""}>${ICON.minus}</button>
						<output>${nf.format(qty)}</output>
						<button type="button" data-extra-act="plus" aria-label="${t("more")}"${qty >= extraLimit(persons) ? " disabled" : ""}>${ICON.plus}</button>
					</span>
				</li>`;
			}).join("")}</ul>`;
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
					<span class="line-name">${esc(text(item.name))}</span>
					<span class="line-unit">${variant ? `${esc(text(variant.name))} · ` : ""}${priceTag(unitPrice(key))}</span>
				</div>
				<span class="stepper" role="group" aria-label="${esc(lineName(key))}">
					<button type="button" data-act="minus" aria-label="${t("less")}">${ICON.minus}</button>
					<output>${nf.format(order[key])}</output>
					<button type="button" data-act="plus" aria-label="${t("more")}">${ICON.plus}</button>
				</span>
				${priceTag(unitPrice(key) * order[key], "line-sum price")}
			</div>`;
		}).join("") : `<p class="empty">${esc(t("empty"))}</p>`;

		renderExtras();

		const minutes = readyIn();
		$("ready-note").hidden = !minutes;
		$("ready-note").textContent = minutes ? t("ready")(nf.format(minutes)) : "";
		$("order-total").textContent = money(orderTotal());
		$("send-whatsapp").hidden = keys.length === 0;
		$("clear-order").hidden = keys.length === 0;

		if (focusKey) {
			const again = document.querySelector(`#order-lines [data-key="${CSS.escape(focusKey)}"] [data-act="${focusAct}"]`);
			if (again) again.focus();
		}
	}

	// заказ в кафе уходит всегда по-русски: его читают повар и кассир
	function whatsappText() {
		const ru = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 });
		const sum = (value) => `${ru.format(value)} ₽`;
		const rows = Object.keys(order).map((key) =>
			`• ${lineName(key, "ru")} × ${order[key]} — ${sum(unitPrice(key) * order[key])}`);
		const persons = personsCount();
		const kit = MENU.extras.map((extra) => `${extra.name.ru.toLowerCase()} — ${extraQty(extra, persons)}`).join(", ");
		return ["Здравствуйте! Хочу сделать заказ:", ...rows, `Приборы: ${kit}`, `Итого: ${sum(orderTotal())}`]
			.join("\n").replace(/[  ]/g, " ");
	}

	// ---------- язык ----------
	function applyLanguage() {
		root.lang = lang;
		root.dir = lang === "ar" ? "rtl" : "ltr";
		document.title = t("title");
		nf = numberFormat();
		if (lang === "ar" && !$("arabic-fonts")) {
			const link = document.createElement("link");
			link.id = "arabic-fonts";
			link.rel = "stylesheet";
			link.href = ARABIC_FONTS;
			document.head.appendChild(link);
		}
		$("slogan").innerHTML = t("slogan").map((part) => `<span>${esc(part)}</span>`).join(" ");
		document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
		document.querySelectorAll("[data-i18n-label]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nLabel)); });
		$("nav").setAttribute("aria-label", t("nav"));
		$("lang-btn").setAttribute("aria-label", t("language"));
		$("lang-btn").querySelector("span").textContent = { ru: "РУ", en: "EN", ar: "ع" }[lang];
		$("lang-menu").querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
		$("send-whatsapp").innerHTML = `${ICON.whatsapp}<span>${esc(t("sendWhatsapp"))}</span>`;
		renderContacts();
		renderMenu();
		refreshOrder();
		applyPrices();
		applyTheme();
	}

	// ---------- цены: скрыть / показать ----------
	// Только значок-глазик, без подписи и подсказки: хозяин скрывает цены и передаёт телефон гостю,
	// а гость не должен догадаться, как вернуть их обратно.
	function applyPrices() {
		root.dataset.prices = pricesHidden ? "hidden" : "shown";
		const btn = $("prices");
		btn.innerHTML = pricesHidden ? ICON.eyeOff : ICON.eye;
		btn.setAttribute("aria-pressed", String(pricesHidden));
		btn.setAttribute("aria-label", t("prices"));
	}

	// ---------- светлая и ночная тема ----------
	// По умолчанию сайт светлый: тёмную гость включает сам, выбор запоминается.
	function applyTheme() {
		root.dataset.theme = theme;
		if (theme === "day") delete root.dataset.dark; else root.dataset.dark = "1";
		const btn = $("theme");
		if (!btn) return;
		btn.innerHTML = theme === "day" ? ICON.moon : ICON.sun;
		btn.setAttribute("aria-pressed", String(theme !== "day"));
		btn.setAttribute("aria-label", theme === "day" ? t("toNight") : t("toDay"));
		const meta = document.querySelector('meta[name="theme-color"]');
		if (meta) meta.setAttribute("content", getComputedStyle(root).getPropertyValue("--black").trim() || "#121212");
		renderLooks();
	}

	// ---------- переключатель оформления в подвале ----------
	// Пока Амин выбирает вид, переключатель стоит внизу страницы: гости туда почти не доезжают.
	function renderLooks() {
		const box = $("looks");
		if (!box) return;
		const rows = [
			{ id: "buttons", current: root.dataset.buttons || "black", title: t("looksButtons"), options: [
				["black", t("btnBlack")], ["wood", t("btnWood")], ["outline", t("btnOutline")]] },
		];
		box.innerHTML = `<p class="looks-title">${esc(t("looks"))}</p>` + rows.map((row) => `
			<div class="looks-row" data-look="${row.id}">
				<span class="looks-label">${esc(row.title)}</span>
				<div class="looks-chips">${row.options.map(([value, label]) =>
					`<button type="button" data-look-value="${value}" aria-pressed="${String(value === row.current)}">${esc(label)}</button>`).join("")}</div>
			</div>`).join("");
	}

	// ---------- контакты ----------
	function renderContacts() {
		const phoneLinks = MENU.phones.map((p) =>
			`<a class="phone" href="tel:${p.tel}" dir="ltr">${ICON.phone}<span>${p.label}</span></a>`).join("");
		document.querySelectorAll("[data-phones]").forEach((el) => { el.innerHTML = phoneLinks; });
		document.querySelectorAll("[data-address]").forEach((el) => { el.textContent = text(MENU.address); });
		document.querySelectorAll("[data-hours]").forEach((el) => { el.textContent = text(MENU.hours); });
		document.querySelectorAll("[data-prices-date]").forEach((el) => { el.textContent = text(MENU.pricesDate); });
		$("bar-icon").innerHTML = ICON.bag;
	}

	// ---------- события ----------
	function closeLangMenu() {
		$("lang-menu").hidden = true;
		$("lang-btn").setAttribute("aria-expanded", "false");
	}

	document.addEventListener("click", (event) => {
		const act = event.target.closest("[data-act]");
		if (act) {
			const holder = act.closest("[data-key]");
			if (holder) change(holder.dataset.key, act.dataset.act === "plus" ? 1 : -1);
			return;
		}
		const extraAct = event.target.closest("[data-extra-act]");
		if (extraAct) {
			const row = extraAct.closest("[data-extra]");
			if (row) changeExtra(row.dataset.extra, extraAct.dataset.extraAct === "plus" ? 1 : -1);
			return;
		}
		const look = event.target.closest("[data-look-value]");
		if (look) {
			const value = look.dataset.lookValue;
			if (value === "black") delete root.dataset.buttons; else root.dataset.buttons = value;
			store.set("buttons", value);
			renderLooks();
			return;
		}
		const jump = event.target.closest("[data-jump]");
		if (jump) { jumpToDish(jump.dataset.jump, jump.dataset.from); return; }
		const toggle = event.target.closest("[data-toggle]");
		if (toggle) {
			const dish = toggle.closest(".dish");
			const open = dish.classList.toggle("open");
			const btn = dish.querySelector("button.dish-title");
			if (btn) btn.setAttribute("aria-expanded", String(open));
			return;
		}
		const langOption = event.target.closest("[data-lang]");
		if (langOption) {
			lang = langOption.dataset.lang;
			store.set("lang", lang);
			closeLangMenu();
			applyLanguage();
			return;
		}
		if (event.target.closest("#lang-btn")) {
			const opening = $("lang-menu").hidden;
			$("lang-menu").hidden = !opening;
			$("lang-btn").setAttribute("aria-expanded", String(opening));
			return;
		}
		closeLangMenu();
		const closeBtn = event.target.closest("[data-close]");
		if (closeBtn) closeBtn.closest("dialog").close();
	});

	document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeLangMenu(); });

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

	const backBtn = $("back-to-set");
	if (backBtn) backBtn.addEventListener("click", () => {
		backBtn.hidden = true;
		clearTimeout(backTimer);
		const set = document.querySelector(`[data-dish="${CSS.escape(backBtn.dataset.back)}"]`);
		if (!set) return;
		openDish(set);
		set.scrollIntoView({ block: "start", behavior: "smooth" });
	});

	$("open-order").addEventListener("click", () => {
		renderOrderLines();
		$("order-sheet").showModal();
		const box = $("extras");
		if (!box.hidden && !Object.keys(extras).length) {
			box.classList.remove("pulse");
			void box.offsetWidth;
			box.classList.add("pulse");
		}
	});

	$("send-whatsapp").addEventListener("click", () => {
		if (!Object.keys(order).length) return;
		window.open(`https://wa.me/${MENU.whatsapp}?text=${encodeURIComponent(whatsappText())}`, "_blank", "noopener");
	});

	$("clear-order").addEventListener("click", () => {
		if (!window.confirm(t("confirmClear"))) return;
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

	applyLanguage();
})();
