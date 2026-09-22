/*
 * Меню «Суши-Муши», Учкекен. Всё меню — в этом одном файле.
 *
 * Названия, составы и разделы записаны на трёх языках: ru — русский,
 * en — английский, ar — арабский. Цены общие для всех языков.
 *
 * Откуда данные: цены и позиции — из актуального «меню» в Instagram (13.09.2026).
 * Чего там нет (закуски, ролл-доги, напитки, «Минато», пиццы «Сладкая» и «Фирменная») —
 * из старого меню, которое присылают в WhatsApp. Такие позиции помечены source: "whatsapp".
 *
 * Поля позиции:
 *   price   — цена в рублях; null — цена не указана в меню (заказать нельзя, «уточняйте»)
 *   pieces  — сколько штук в порции (по фото и по сетам: ролл — 8 шт.)
 *   kcal    — ПРИМЕРНАЯ калорийность порции (оценка по типовым рецептам, у заведения данных нет)
 *   time    — ПРИМЕРНОЕ время приготовления, минут
 *   photo   — имя файла из images/dishes (без .webp)
 *   variants — варианты с разной ценой (3/6/9 шт.)
 *   set     — состав сета: ref — ссылка на ролл из меню; name — как написано в сете;
 *             from/to — если в сете не уточнено, какой именно ролл (цена «от — до»)
 */
window.SUSHI_MENU = {
	"phones": [
		{
			"tel": "+79886144532",
			"label": "+7 988 614-45-32"
		},
		{
			"tel": "+79288299929",
			"label": "+7 928 829-99-29"
		}
	],
	"whatsapp": "79886144532",
	"address": {
		"ru": "Учкекен, ул. Ленина, 87",
		"en": "Uchkeken, 87 Lenina St.",
		"ar": "أوتشكيكين، شارع لينين 87"
	},
	"hours": {
		"ru": "Ежедневно 10:00–21:00",
		"en": "Daily 10:00–21:00",
		"ar": "يوميًا 10:00–21:00"
	},
	"pricesDate": {
		"ru": "Цены на сентябрь 2026",
		"en": "Prices as of September 2026",
		"ar": "الأسعار لشهر سبتمبر 2026"
	},
	"extras": [
		{
			"id": "chopsticks",
			"perPerson": 1,
			"name": { "ru": "Палочки", "en": "Chopsticks", "ar": "عيدان طعام" }
		},
		{
			"id": "wasabi",
			"perPerson": 0.5,
			"name": { "ru": "Васаби", "en": "Wasabi", "ar": "واسابي" }
		},
		{
			"id": "ginger",
			"perPerson": 0.5,
			"name": { "ru": "Имбирь", "en": "Pickled ginger", "ar": "زنجبيل مخلل" }
		},
		{
			"id": "soy",
			"perPerson": 1,
			"name": { "ru": "Соевый соус", "en": "Soy sauce", "ar": "صلصة الصويا" }
		}
	],
	"sections": [
		{
			"id": "pizza",
			"title": {
				"ru": "Пицца",
				"en": "Pizza",
				"ar": "بيتزا"
			},
			"mark": "ピザ",
			"items": [
				{
					"id": "pizza-seafood",
					"photo": "pizza-seafood",
					"name": {
						"ru": "Морепродукты",
						"en": "Seafood",
						"ar": "مأكولات بحرية"
					},
					"price": 750,
					"kcal": 1650,
					"time": 20,
					"desc": {
						"ru": "белый соус, моцарелла, крабовые палочки, лосось, икра, унаги",
						"en": "white sauce, mozzarella, crab sticks, salmon, caviar, unagi sauce",
						"ar": "صلصة بيضاء، موزاريلا، أصابع سلطعون، سلمون، كافيار، صلصة أوناغي"
					}
				},
				{
					"id": "pizza-julienne",
					"photo": "pizza-julienne",
					"name": {
						"ru": "Жюльен",
						"en": "Julienne",
						"ar": "جوليان"
					},
					"price": 650,
					"kcal": 1750,
					"time": 20,
					"desc": {
						"ru": "белый соус, моцарелла, курица, грибы, сливочный соус",
						"en": "white sauce, mozzarella, chicken, mushrooms, cream sauce",
						"ar": "صلصة بيضاء، موزاريلا، دجاج، فطر، صلصة كريمة"
					}
				},
				{
					"id": "pizza-four-cheese",
					"photo": "pizza-four-cheese",
					"name": {
						"ru": "4 Сыра",
						"en": "4 Cheeses",
						"ar": "أربعة أجبان"
					},
					"price": 650,
					"kcal": 1850,
					"time": 20,
					"desc": {
						"ru": "белый соус, 4 вида сыра, сырный ломтик",
						"en": "white sauce, 4 kinds of cheese, cheese slice",
						"ar": "صلصة بيضاء، أربعة أنواع جبن، شريحة جبن"
					}
				},
				{
					"id": "pizza-caesar",
					"photo": "pizza-caesar",
					"name": {
						"ru": "Цезарь",
						"en": "Caesar",
						"ar": "سيزر"
					},
					"price": 650,
					"kcal": 1600,
					"time": 20,
					"desc": {
						"ru": "белый соус, моцарелла, курица, помидоры, салат, соус цезарь",
						"en": "white sauce, mozzarella, chicken, tomatoes, lettuce, Caesar dressing",
						"ar": "صلصة بيضاء، موزاريلا، دجاج، طماطم، خس، صلصة سيزر"
					}
				},
				{
					"id": "pizza-four-seasons",
					"photo": "pizza-four-seasons",
					"name": {
						"ru": "4 Сезона",
						"en": "4 Seasons",
						"ar": "أربعة فصول"
					},
					"price": null,
					"kcal": 1650,
					"time": 20,
					"desc": {
						"ru": "красный соус, моцарелла, грибы, маслины, колбаса, помидоры",
						"en": "red sauce, mozzarella, mushrooms, black olives, sausage, tomatoes",
						"ar": "صلصة حمراء، موزاريلا، فطر، زيتون أسود، سجق، طماطم"
					}
				},
				{
					"id": "pizza-margherita",
					"photo": "pizza-margherita",
					"name": {
						"ru": "Маргарита",
						"en": "Margherita",
						"ar": "مارغريتا"
					},
					"price": 650,
					"kcal": 1450,
					"time": 20,
					"desc": {
						"ru": "красный соус, моцарелла, помидоры, зелень",
						"en": "red sauce, mozzarella, tomatoes, herbs",
						"ar": "صلصة حمراء، موزاريلا، طماطم، أعشاب"
					}
				},
				{
					"id": "pizza-pepperoni",
					"photo": "pizza-pepperoni",
					"name": {
						"ru": "Пепперони",
						"en": "Pepperoni",
						"ar": "بيبروني"
					},
					"price": 650,
					"kcal": 1700,
					"time": 20,
					"desc": {
						"ru": "красный соус, моцарелла, колбаса",
						"en": "red sauce, mozzarella, sausage",
						"ar": "صلصة حمراء، موزاريلا، سجق"
					}
				},
				{
					"id": "pizza-burger",
					"photo": "pizza-burger",
					"name": {
						"ru": "Бургер",
						"en": "Burger",
						"ar": "برغر"
					},
					"price": 750,
					"kcal": 1900,
					"time": 20,
					"desc": {
						"ru": "красный соус, моцарелла, колбаса, помидоры, корнишоны, красный лук, соус бургер, фри",
						"en": "red sauce, mozzarella, sausage, tomatoes, gherkins, red onion, burger sauce, fries",
						"ar": "صلصة حمراء، موزاريلا، سجق، طماطم، خيار مخلل، بصل أحمر، صلصة البرغر، بطاطس مقلية"
					}
				},
				{
					"id": "pizza-mushroom",
					"photo": "pizza-mushroom",
					"name": {
						"ru": "Грибная",
						"en": "Mushroom",
						"ar": "فطر"
					},
					"price": 650,
					"kcal": 1500,
					"time": 20,
					"desc": {
						"ru": "белый соус, моцарелла, грибы, помидоры, зелень",
						"en": "white sauce, mozzarella, mushrooms, tomatoes, herbs",
						"ar": "صلصة بيضاء، موزاريلا، فطر، طماطم، أعشاب"
					}
				},
				{
					"id": "pizza-assorti",
					"photo": "pizza-assorti",
					"name": {
						"ru": "Ассорти",
						"en": "Assorted",
						"ar": "مشكّلة"
					},
					"price": 650,
					"kcal": 1700,
					"time": 20,
					"desc": {
						"ru": "ассорти соус, моцарелла, курица/колбаса, помидоры, грибы, зелень",
						"en": "assorted sauce, mozzarella, chicken or sausage, tomatoes, mushrooms, herbs",
						"ar": "صلصة مشكّلة، موزاريلا، دجاج أو سجق، طماطم، فطر، أعشاب"
					}
				},
				{
					"id": "pizza-chicken",
					"photo": "pizza-chicken",
					"name": {
						"ru": "Куриная",
						"en": "Chicken",
						"ar": "دجاج"
					},
					"price": 650,
					"kcal": 1600,
					"time": 20,
					"desc": {
						"ru": "белый соус, моцарелла, курица, помидоры, зелень",
						"en": "white sauce, mozzarella, chicken, tomatoes, herbs",
						"ar": "صلصة بيضاء، موزاريلا، دجاج، طماطم، أعشاب"
					}
				},
				{
					"id": "pizza-teriyaki",
					"photo": "pizza-teriyaki",
					"name": {
						"ru": "Терияки",
						"en": "Teriyaki",
						"ar": "ترياكي"
					},
					"price": 750,
					"kcal": 1700,
					"time": 20,
					"desc": {
						"ru": "красный соус, моцарелла, курица, болгарский перец, красный лук, зеленый лук, соус терияки",
						"en": "red sauce, mozzarella, chicken, bell pepper, red onion, spring onion, teriyaki sauce",
						"ar": "صلصة حمراء، موزاريلا، دجاج، فلفل حلو، بصل أحمر، بصل أخضر، صلصة ترياكي"
					}
				},
				{
					"id": "pizza-spicy",
					"photo": "pizza-spicy",
					"name": {
						"ru": "Спайси",
						"en": "Spicy",
						"ar": "حارة"
					},
					"price": 650,
					"kcal": 1650,
					"time": 20,
					"desc": {
						"ru": "спайси соус, моцарелла, курица, помидоры, корнишоны, зелень",
						"en": "spicy sauce, mozzarella, chicken, tomatoes, gherkins, herbs",
						"ar": "صلصة حارة، موزاريلا، دجاج، طماطم، خيار مخلل، أعشاب"
					}
				},
				{
					"id": "pizza-napolitano",
					"photo": "pizza-napolitano",
					"name": {
						"ru": "Неаполитано",
						"en": "Napolitano",
						"ar": "نابوليتانو"
					},
					"price": 750,
					"kcal": 1500,
					"time": 20,
					"desc": {
						"ru": "красный соус, моцарелла, салатный микс, помидоры, унаги",
						"en": "red sauce, mozzarella, mixed greens, tomatoes, unagi sauce",
						"ar": "صلصة حمراء، موزاريلا، خضار ورقية مشكّلة، طماطم، صلصة أوناغي"
					}
				},
				{
					"id": "pizza-village",
					"photo": "pizza-village",
					"name": {
						"ru": "Деревенская",
						"en": "Country style",
						"ar": "ريفية"
					},
					"price": 650,
					"kcal": 1650,
					"time": 20,
					"desc": {
						"ru": "ассорти соус, моцарелла, колбаса, болгарский перец, маслины",
						"en": "assorted sauce, mozzarella, sausage, bell pepper, black olives",
						"ar": "صلصة مشكّلة، موزاريلا، سجق، فلفل حلو، زيتون أسود"
					}
				},
				{
					"id": "pizza-special",
					"photo": "pizza-special",
					"name": {
						"ru": "Особая",
						"en": "Special",
						"ar": "خاصة"
					},
					"price": 650,
					"kcal": 1650,
					"time": 20,
					"desc": {
						"ru": "ассорти соус, моцарелла, колбаса, болгарский перец, помидоры черри, халапеньо",
						"en": "assorted sauce, mozzarella, sausage, bell pepper, cherry tomatoes, jalapeño",
						"ar": "صلصة مشكّلة، موزاريلا، سجق، فلفل حلو، طماطم كرزية، هالابينو"
					}
				},
				{
					"id": "pizza-gourmet",
					"photo": "pizza-gourmet",
					"name": {
						"ru": "Гурман",
						"en": "Gourmet",
						"ar": "غورميه"
					},
					"price": 650,
					"kcal": 1650,
					"time": 20,
					"desc": {
						"ru": "ассорти соус, моцарелла, колбаса, помидоры, корнишоны",
						"en": "assorted sauce, mozzarella, sausage, tomatoes, gherkins",
						"ar": "صلصة مشكّلة، موزاريلا، سجق، طماطم، خيار مخلل"
					}
				},
				{
					"id": "pizza-sweet",
					"photo": "pizza-sweet",
					"name": {
						"ru": "Сладкая",
						"en": "Sweet",
						"ar": "حلوة"
					},
					"price": 650,
					"kcal": 1750,
					"time": 20,
					"source": "whatsapp",
					"desc": {
						"ru": "белый соус сладкий, моцарелла, банан, груша, шоколад",
						"en": "sweet white sauce, mozzarella, banana, pear, chocolate",
						"ar": "صلصة بيضاء حلوة، موزاريلا، موز، كمثرى، شوكولاتة"
					}
				},
				{
					"id": "pizza-signature",
					"photo": "pizza-signature",
					"name": {
						"ru": "Фирменная",
						"en": "Signature",
						"ar": "المميزة"
					},
					"price": 750,
					"kcal": 1700,
					"time": 20,
					"source": "whatsapp",
					"desc": {
						"ru": "белый соус, моцарелла, грибы, говяжья ветчина, салат",
						"en": "white sauce, mozzarella, mushrooms, beef ham, lettuce",
						"ar": "صلصة بيضاء، موزاريلا، فطر، لحم بقري مدخّن، خس"
					}
				}
			]
		},
		{
			"id": "classic",
			"title": {
				"ru": "Классические роллы",
				"en": "Classic rolls",
				"ar": "رولات كلاسيكية"
			},
			"mark": "巻き",
			"items": [
				{
					"id": "maki-cream",
					"photo": "maki-cream",
					"name": {
						"ru": "Ролл сливочный",
						"en": "Cream cheese roll",
						"ar": "رول جبن كريمي"
					},
					"price": 150,
					"pieces": 8,
					"kcal": 230,
					"time": 10,
					"desc": {
						"ru": "рис, нори, творожный сыр, унаги",
						"en": "rice, nori, cream cheese, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، صلصة أوناغي"
					}
				},
				{
					"id": "maki-cucumber",
					"photo": "maki-cucumber",
					"name": {
						"ru": "Ролл с огурцом",
						"en": "Cucumber roll",
						"ar": "رول خيار"
					},
					"price": 150,
					"pieces": 8,
					"kcal": 210,
					"time": 10,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, унаги",
						"en": "rice, nori, cream cheese, cucumber, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، صلصة أوناغي"
					}
				},
				{
					"id": "maki-avocado",
					"photo": "maki-avocado",
					"name": {
						"ru": "Ролл с авокадо",
						"en": "Avocado roll",
						"ar": "رول أفوكادو"
					},
					"price": 150,
					"pieces": 8,
					"kcal": 230,
					"time": 10,
					"desc": {
						"ru": "рис, нори, творожный сыр, авокадо, унаги",
						"en": "rice, nori, cream cheese, avocado, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، أفوكادو، صلصة أوناغي"
					}
				},
				{
					"id": "maki-salmon",
					"photo": "maki-salmon",
					"name": {
						"ru": "Ролл с лососем",
						"en": "Salmon roll",
						"ar": "رول سلمون"
					},
					"price": 200,
					"pieces": 8,
					"kcal": 230,
					"time": 10,
					"desc": {
						"ru": "рис, нори, творожный сыр, лосось, унаги",
						"en": "rice, nori, cream cheese, salmon, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، سلمون، صلصة أوناغي"
					}
				},
				{
					"id": "maki-crab",
					"photo": "maki-crab",
					"name": {
						"ru": "Ролл Краб",
						"en": "Crab roll",
						"ar": "رول سلطعون"
					},
					"price": 200,
					"pieces": 8,
					"kcal": 220,
					"time": 10,
					"desc": {
						"ru": "рис, нори, творожный сыр, крабовые палочки, унаги",
						"en": "rice, nori, cream cheese, crab sticks, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، أصابع سلطعون، صلصة أوناغي"
					}
				},
				{
					"id": "maki-salmon-avocado",
					"photo": "maki-salmon-avocado",
					"name": {
						"ru": "Ролл с лососем и авокадо",
						"en": "Salmon and avocado roll",
						"ar": "رول سلمون وأفوكادو"
					},
					"price": 200,
					"pieces": 8,
					"kcal": 240,
					"time": 10,
					"desc": {
						"ru": "рис, нори, творожный сыр, лосось, авокадо, унаги",
						"en": "rice, nori, cream cheese, salmon, avocado, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، سلمون، أفوكادو، صلصة أوناغي"
					}
				},
				{
					"id": "maki-salmon-cucumber",
					"photo": "maki-salmon-cucumber",
					"name": {
						"ru": "Ролл с лососем и огурцом",
						"en": "Salmon and cucumber roll",
						"ar": "رول سلمون وخيار"
					},
					"price": 200,
					"pieces": 8,
					"kcal": 225,
					"time": 10,
					"desc": {
						"ru": "рис, нори, творожный сыр, лосось, огурец, унаги",
						"en": "rice, nori, cream cheese, salmon, cucumber, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، سلمون، خيار، صلصة أوناغي"
					}
				},
				{
					"id": "maki-crab-cucumber",
					"photo": "maki-crab-cucumber",
					"name": {
						"ru": "Ролл с крабом и огурцом",
						"en": "Crab and cucumber roll",
						"ar": "رول سلطعون وخيار"
					},
					"price": 200,
					"pieces": 8,
					"kcal": 215,
					"time": 10,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, крабовые палочки, унаги",
						"en": "rice, nori, cream cheese, cucumber, crab sticks, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أصابع سلطعون، صلصة أوناغي"
					}
				}
			]
		},
		{
			"id": "cold",
			"title": {
				"ru": "Холодные роллы",
				"en": "Cold rolls",
				"ar": "رولات باردة"
			},
			"mark": "ロール",
			"items": [
				{
					"id": "philadelphia",
					"photo": "philadelphia",
					"name": {
						"ru": "Филадельфия классик",
						"en": "Philadelphia classic",
						"ar": "فيلادلفيا كلاسيك"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 560,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, лосось, унаги",
						"en": "rice, nori, cream cheese, salmon, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، سلمون، صلصة أوناغي"
					}
				},
				{
					"id": "philadelphia-cucumber",
					"photo": "philadelphia-cucumber",
					"name": {
						"ru": "Филадельфия с огурцом",
						"en": "Philadelphia with cucumber",
						"ar": "فيلادلفيا بالخيار"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 530,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, лосось, унаги",
						"en": "rice, nori, cream cheese, cucumber, salmon, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، صلصة أوناغي"
					}
				},
				{
					"id": "philadelphia-light",
					"photo": "philadelphia-light",
					"name": {
						"ru": "Филадельфия лайт",
						"en": "Philadelphia light",
						"ar": "فيلادلفيا لايت"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 540,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, зеленый лук, лосось, унаги",
						"en": "rice, nori, cream cheese, spring onion, salmon, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، بصل أخضر، سلمون، صلصة أوناغي"
					}
				},
				{
					"id": "philadelphia-caviar",
					"photo": "philadelphia-caviar",
					"name": {
						"ru": "Филадельфия с икрой",
						"en": "Philadelphia with roe",
						"ar": "فيلادلفيا ببيض السمك"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 560,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, икра масаго, лосось, унаги",
						"en": "rice, nori, cream cheese, cucumber, masago roe, salmon, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، بيض سمك ماساغو، سلمون، صلصة أوناغي"
					}
				},
				{
					"id": "philadelphia-double",
					"photo": "philadelphia-double",
					"name": {
						"ru": "Двойная Филадельфия",
						"en": "Double Philadelphia",
						"ar": "فيلادلفيا مزدوجة"
					},
					"price": 440,
					"pieces": 8,
					"kcal": 620,
					"time": 15,
					"badge": "new",
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, лосось, икра масаго, лосось, унаги",
						"en": "rice, nori, cream cheese, cucumber, salmon, masago roe, salmon, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، بيض سمك ماساغو، سلمون، صلصة أوناغي"
					}
				},
				{
					"id": "philadelphia-ebi",
					"photo": "philadelphia-ebi",
					"name": {
						"ru": "Филадельфия Эби",
						"en": "Philadelphia Ebi",
						"ar": "فيلادلفيا إيبي"
					},
					"price": 450,
					"pieces": 8,
					"kcal": 560,
					"time": 15,
					"badge": "new",
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, креветка, лосось, унаги",
						"en": "rice, nori, cream cheese, cucumber, shrimp, salmon, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، روبيان، سلمون، صلصة أوناغي"
					}
				},
				{
					"id": "tokyo",
					"photo": "tokyo",
					"name": {
						"ru": "Токио",
						"en": "Tokyo",
						"ar": "طوكيو"
					},
					"price": 450,
					"pieces": 8,
					"kcal": 590,
					"time": 15,
					"badge": "new",
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, авокадо, икра масаго, крабовая палочка, лосось, унаги",
						"en": "rice, nori, cream cheese, cucumber, avocado, masago roe, crab stick, salmon, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أفوكادو، بيض سمك ماساغو، أصابع سلطعون، سلمون، صلصة أوناغي"
					}
				},
				{
					"id": "green-roll",
					"photo": "green-roll",
					"name": {
						"ru": "Грин Ролл",
						"en": "Green roll",
						"ar": "غرين رول"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 520,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, лосось, спайси соус, икра масаго, микрозелень",
						"en": "rice, nori, cream cheese, cucumber, salmon, spicy sauce, masago roe, microgreens",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، صلصة حارة، بيض سمك ماساغو، براعم خضراء"
					}
				},
				{
					"id": "sakura",
					"photo": "sakura",
					"name": {
						"ru": "Сакура",
						"en": "Sakura",
						"ar": "ساكورا"
					},
					"price": 420,
					"pieces": 8,
					"kcal": 580,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, угорь, авокадо, тартар из лосося с икрой масаго, унаги",
						"en": "rice, nori, cream cheese, cucumber, eel, avocado, salmon tartare with masago roe, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، ثعبان البحر، أفوكادو، تارتار سلمون مع بيض ماساغو، صلصة أوناغي"
					}
				},
				{
					"id": "minato",
					"photo": "minato",
					"name": {
						"ru": "Минато",
						"en": "Minato",
						"ar": "ميناتو"
					},
					"price": 430,
					"pieces": 8,
					"kcal": 560,
					"time": 15,
					"source": "whatsapp",
					"desc": {
						"ru": "рис, нори, творожный сыр, манго, креветка темпура, авокадо, тартар из манго и икры, соус",
						"en": "rice, nori, cream cheese, mango, tempura shrimp, avocado, mango and roe tartare, sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، مانجو، روبيان تمبورا، أفوكادو، تارتار مانجو مع بيض السمك، صلصة"
					}
				},
				{
					"id": "california-salmon",
					"photo": "california-salmon",
					"name": {
						"ru": "Калифорния лосось",
						"en": "California salmon",
						"ar": "كاليفورنيا سلمون"
					},
					"price": 400,
					"pieces": 8,
					"kcal": 480,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, лосось, огурец, икра масаго, унаги",
						"en": "rice, nori, cream cheese, salmon, cucumber, masago roe, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، سلمون، خيار، بيض سمك ماساغو، صلصة أوناغي"
					}
				},
				{
					"id": "california-crab",
					"photo": "california-crab",
					"name": {
						"ru": "Калифорния краб",
						"en": "California crab",
						"ar": "كاليفورنيا سلطعون"
					},
					"price": 400,
					"pieces": 8,
					"kcal": 450,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, краб, огурец, икра масаго, унаги",
						"en": "rice, nori, cream cheese, crab, cucumber, masago roe, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، سلطعون، خيار، بيض سمك ماساغو، صلصة أوناغي"
					}
				},
				{
					"id": "california-double",
					"photo": "california-double",
					"name": {
						"ru": "Калифорния двойная",
						"en": "California double",
						"ar": "كاليفورنيا مزدوجة"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 500,
					"time": 15,
					"badge": "new",
					"desc": {
						"ru": "рис, нори, творожный сыр, краб, лосось, огурец, икра масаго, унаги",
						"en": "rice, nori, cream cheese, crab, salmon, cucumber, masago roe, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، سلطعون، سلمون، خيار، بيض سمك ماساغو، صلصة أوناغي"
					}
				},
				{
					"id": "california-ebi",
					"photo": "california-ebi",
					"name": {
						"ru": "Калифорния Эби",
						"en": "California Ebi",
						"ar": "كاليفورنيا إيبي"
					},
					"price": 420,
					"pieces": 8,
					"kcal": 470,
					"time": 15,
					"badge": "new",
					"desc": {
						"ru": "рис, нори, творожный сыр, креветка, огурец, икра масаго, унаги",
						"en": "rice, nori, cream cheese, shrimp, cucumber, masago roe, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، روبيان، خيار، بيض سمك ماساغو، صلصة أوناغي"
					}
				},
				{
					"id": "tori-maki",
					"photo": "tori-maki",
					"name": {
						"ru": "Тори Маки",
						"en": "Tori maki",
						"ar": "توري ماكي"
					},
					"price": 390,
					"pieces": 8,
					"kcal": 520,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, курица обжаренная, кунжут, укроп, унаги",
						"en": "rice, nori, cream cheese, cucumber, pan-fried chicken, sesame, dill, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، دجاج محمّر، سمسم، شبت، صلصة أوناغي"
					}
				},
				{
					"id": "crazy-salmon",
					"photo": "crazy-salmon",
					"name": {
						"ru": "Бешеный лосось",
						"en": "Crazy salmon",
						"ar": "سلمون كريزي"
					},
					"price": 400,
					"pieces": 8,
					"kcal": 560,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, лосось, икра масаго, фирменный соус, кунжут, унаги",
						"en": "rice, nori, cream cheese, cucumber, salmon, masago roe, signature sauce, sesame, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، بيض سمك ماساغو، صلصة المطعم، سمسم، صلصة أوناغي"
					}
				},
				{
					"id": "crazy-salmon-double",
					"photo": "crazy-salmon-double",
					"name": {
						"ru": "Бешеный лосось с двойной шапкой",
						"en": "Crazy salmon, double topping",
						"ar": "سلمون كريزي بطبقة مضاعفة"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 620,
					"time": 15,
					"badge": "new",
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, лосось, икра масаго, фирменные соусы, кунжут, унаги",
						"en": "rice, nori, cream cheese, cucumber, salmon, masago roe, signature sauces, sesame, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، بيض سمك ماساغو، صلصات المطعم، سمسم، صلصة أوناغي"
					}
				},
				{
					"id": "wild-salmon",
					"photo": "wild-salmon",
					"name": {
						"ru": "Дикий лосось",
						"en": "Wild salmon",
						"ar": "سلمون بري"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 600,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, крабовые палочки, лосось, икра масаго, фирменные соусы, унаги",
						"en": "rice, nori, cream cheese, cucumber, crab sticks, salmon, masago roe, signature sauces, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أصابع سلطعون، سلمون، بيض سمك ماساغو، صلصات المطعم، صلصة أوناغي"
					}
				},
				{
					"id": "tsunami",
					"photo": "tsunami",
					"name": {
						"ru": "Цунами",
						"en": "Tsunami",
						"ar": "تسونامي"
					},
					"price": 390,
					"pieces": 8,
					"kcal": 540,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, крабовая палочка, икра масаго, спайси соус",
						"en": "rice, nori, cream cheese, cucumber, crab stick, masago roe, spicy sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أصابع سلطعون، بيض سمك ماساغو، صلصة حارة"
					}
				},
				{
					"id": "bonsai",
					"photo": "bonsai",
					"name": {
						"ru": "Бонсай",
						"en": "Bonsai",
						"ar": "بونساي"
					},
					"price": 440,
					"pieces": 8,
					"kcal": 520,
					"time": 15,
					"badge": "new",
					"desc": {
						"ru": "рис, нори, творожный сыр, огурцы, лосось, авокадо, крабовая палочка, икра масаго, унаги",
						"en": "rice, nori, cream cheese, cucumber, salmon, avocado, crab stick, masago roe, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، أفوكادو، أصابع سلطعون، بيض سمك ماساغو، صلصة أوناغي"
					}
				},
				{
					"id": "samurai",
					"photo": "samurai",
					"name": {
						"ru": "Самурай",
						"en": "Samurai",
						"ar": "ساموراي"
					},
					"price": 440,
					"pieces": 8,
					"kcal": 560,
					"time": 15,
					"badge": "new",
					"desc": {
						"ru": "рис, нори, творожный сыр, огурцы, лист салата, кунжут, крабовая палочка, лосось, шрирача, икра масаго, терияки, зеленый лук",
						"en": "rice, nori, cream cheese, cucumber, lettuce leaf, sesame, crab stick, salmon, sriracha, masago roe, teriyaki, spring onion",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، ورق خس، سمسم، أصابع سلطعون، سلمون، صلصة سريراتشا، بيض سمك ماساغو، ترياكي، بصل أخضر"
					}
				},
				{
					"id": "crazy-shrimp",
					"photo": "crazy-shrimp",
					"name": {
						"ru": "Бешеная креветка",
						"en": "Crazy shrimp",
						"ar": "روبيان كريزي"
					},
					"price": 450,
					"pieces": 8,
					"kcal": 590,
					"time": 15,
					"badge": "new",
					"desc": {
						"ru": "рис, нори, творожный сыр, огурцы, крабовая палочка, креветка, лосось, унаги, зеленый лук, фирменный соус, икра масаго",
						"en": "rice, nori, cream cheese, cucumber, crab stick, shrimp, salmon, unagi sauce, spring onion, signature sauce, masago roe",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أصابع سلطعون، روبيان، سلمون، صلصة أوناغي، بصل أخضر، صلصة المطعم، بيض سمك ماساغو"
					}
				},
				{
					"id": "oishi",
					"photo": "oishi",
					"name": {
						"ru": "Ойси",
						"en": "Oishi",
						"ar": "أويشي"
					},
					"price": 440,
					"pieces": 8,
					"kcal": 580,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурцы, крабовая палочка/креветка, лосось, сливочный соус, унаги, зеленый лук",
						"en": "rice, nori, cream cheese, cucumber, crab stick or shrimp, salmon, cream sauce, unagi sauce, spring onion",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أصابع سلطعون أو روبيان، سلمون، صلصة كريمة، صلصة أوناغي، بصل أخضر"
					}
				},
				{
					"id": "oishi-lime",
					"photo": "oishi-lime",
					"name": {
						"ru": "Ойси Лайм",
						"en": "Oishi lime",
						"ar": "أويشي لايم"
					},
					"price": 440,
					"pieces": 8,
					"kcal": 590,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурцы, крабовая палочка/креветка, лосось, сливочный соус, унаги, лайм, икра масаго",
						"en": "rice, nori, cream cheese, cucumber, crab stick or shrimp, salmon, cream sauce, unagi sauce, lime, masago roe",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أصابع سلطعون أو روبيان، سلمون، صلصة كريمة، صلصة أوناغي، ليمون أخضر، بيض سمك ماساغو"
					}
				},
				{
					"id": "new-york",
					"photo": "new-york",
					"name": {
						"ru": "Нью-Йорк",
						"en": "New York",
						"ar": "نيويورك"
					},
					"price": 430,
					"pieces": 8,
					"kcal": 560,
					"time": 15,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурцы, авокадо, угорь/лосось, спайси соус, унаги",
						"en": "rice, nori, cream cheese, cucumber, avocado, eel or salmon, spicy sauce, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أفوكادو، ثعبان البحر أو سلمون، صلصة حارة، صلصة أوناغي"
					}
				},
				{
					"id": "cheese-roll",
					"photo": "cheese-roll",
					"name": {
						"ru": "Чизз Ролл",
						"en": "Cheese roll",
						"ar": "تشيز رول"
					},
					"price": 430,
					"pieces": 8,
					"kcal": 610,
					"time": 15,
					"badge": "new",
					"desc": {
						"ru": "рис, нори, творожный сыр, огурцы, лосось, сырный ломтик, унаги",
						"en": "rice, nori, cream cheese, cucumber, salmon, cheese slice, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، شريحة جبن، صلصة أوناغي"
					}
				}
			]
		},
		{
			"id": "baked",
			"title": {
				"ru": "Запеченные роллы",
				"en": "Baked rolls",
				"ar": "رولات بالفرن"
			},
			"mark": "焼き",
			"items": [
				{
					"id": "billy",
					"photo": "billy",
					"name": {
						"ru": "Билли",
						"en": "Billy",
						"ar": "بيلي"
					},
					"price": 400,
					"pieces": 8,
					"kcal": 580,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, крабовая палочка, спайси соус, унаги",
						"en": "rice, nori, cream cheese, cucumber, crab stick, spicy sauce, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أصابع سلطعون، صلصة حارة، صلصة أوناغي"
					}
				},
				{
					"id": "boston",
					"photo": "boston",
					"name": {
						"ru": "Бостон",
						"en": "Boston",
						"ar": "بوسطن"
					},
					"price": 400,
					"pieces": 8,
					"kcal": 600,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, лосось, кунжут, унаги",
						"en": "rice, nori, cream cheese, cucumber, salmon, sesame, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، سمسم، صلصة أوناغي"
					}
				},
				{
					"id": "typhoon",
					"photo": "typhoon",
					"name": {
						"ru": "Тайфун",
						"en": "Typhoon",
						"ar": "تايفون"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 660,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, лосось, краб, креветки, сыр моцарелла, икра масаго, унаги",
						"en": "rice, nori, cream cheese, cucumber, salmon, crab, shrimp, mozzarella, masago roe, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، سلطعون، روبيان، جبن موزاريلا، بيض سمك ماساغو، صلصة أوناغي"
					}
				},
				{
					"id": "baked-philadelphia",
					"photo": "baked-philadelphia",
					"name": {
						"ru": "Запеченная Филадельфия",
						"en": "Baked Philadelphia",
						"ar": "فيلادلفيا بالفرن"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 640,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, лосось, унаги, кунжут",
						"en": "rice, nori, cream cheese, cucumber, salmon, unagi sauce, sesame",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، صلصة أوناغي، سمسم"
					}
				},
				{
					"id": "baked-philadelphia-spicy",
					"photo": "baked-philadelphia-spicy",
					"name": {
						"ru": "Запеченная Филадельфия с соусом Спайси",
						"en": "Baked Philadelphia with spicy sauce",
						"ar": "فيلادلفيا بالفرن مع صلصة حارة"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 660,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, лосось, спайси соус, унаги",
						"en": "rice, nori, cream cheese, cucumber, salmon, spicy sauce, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، صلصة حارة، صلصة أوناغي"
					}
				},
				{
					"id": "alaska",
					"photo": "alaska",
					"name": {
						"ru": "Аляска",
						"en": "Alaska",
						"ar": "ألاسكا"
					},
					"price": 450,
					"pieces": 8,
					"kcal": 680,
					"time": 20,
					"badge": "new",
					"desc": {
						"ru": "рис, нори, творожный сыр, огурцы, крабовая палочка, креветка, лосось, унаги, зеленый лук, фирменный соус, икра масаго",
						"en": "rice, nori, cream cheese, cucumber, crab stick, shrimp, salmon, unagi sauce, spring onion, signature sauce, masago roe",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أصابع سلطعون، روبيان، سلمون، صلصة أوناغي، بصل أخضر، صلصة المطعم، بيض سمك ماساغو"
					}
				},
				{
					"id": "baked-oishi",
					"photo": "baked-oishi",
					"name": {
						"ru": "Запеченный Ойси",
						"en": "Baked Oishi",
						"ar": "أويشي بالفرن"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 670,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, креветка, лосось, сливочный соус, унаги, зеленый лук",
						"en": "rice, nori, cream cheese, cucumber, shrimp, salmon, cream sauce, unagi sauce, spring onion",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، روبيان، سلمون، صلصة كريمة، صلصة أوناغي، بصل أخضر"
					}
				},
				{
					"id": "baked-crazy-salmon",
					"photo": "baked-crazy-salmon",
					"name": {
						"ru": "Запеченный Бешеный лосось",
						"en": "Baked crazy salmon",
						"ar": "سلمون كريزي بالفرن"
					},
					"price": 400,
					"pieces": 8,
					"kcal": 650,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, лосось, икра масаго, унаги, кунжут",
						"en": "rice, nori, cream cheese, cucumber, salmon, masago roe, unagi sauce, sesame",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، بيض سمك ماساغو، صلصة أوناغي، سمسم"
					}
				},
				{
					"id": "baked-crab",
					"photo": "baked-crab",
					"name": {
						"ru": "Запеченный с крабом",
						"en": "Baked crab roll",
						"ar": "رول سلطعون بالفرن"
					},
					"price": 390,
					"pieces": 8,
					"kcal": 620,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, крабовая палочка, икра масаго, спайси соус, унаги, кунжут",
						"en": "rice, nori, cream cheese, cucumber, crab stick, masago roe, spicy sauce, unagi sauce, sesame",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أصابع سلطعون، بيض سمك ماساغو، صلصة حارة، صلصة أوناغي، سمسم"
					}
				}
			]
		},
		{
			"id": "fried",
			"title": {
				"ru": "Жареные роллы",
				"en": "Fried rolls",
				"ar": "رولات مقلية"
			},
			"mark": "天ぷら",
			"items": [
				{
					"id": "hot-chic",
					"photo": "hot-chic",
					"name": {
						"ru": "Горячий шик",
						"en": "Hot Chic",
						"ar": "هوت شيك"
					},
					"price": 410,
					"pieces": 8,
					"kcal": 780,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, лосось, огурец, фирменный соус, икра масаго, унаги",
						"en": "rice, nori, cream cheese, salmon, cucumber, signature sauce, masago roe, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، سلمون، خيار، صلصة المطعم، بيض سمك ماساغو، صلصة أوناغي"
					}
				},
				{
					"id": "hot-ebi",
					"photo": "hot-ebi",
					"name": {
						"ru": "Горячий Эби",
						"en": "Hot Ebi",
						"ar": "هوت إيبي"
					},
					"price": 420,
					"pieces": 8,
					"kcal": 790,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, креветка, фирменный соус, икра масаго, унаги",
						"en": "rice, nori, cream cheese, cucumber, shrimp, signature sauce, masago roe, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، روبيان، صلصة المطعم، بيض سمك ماساغو، صلصة أوناغي"
					}
				},
				{
					"id": "tempura-salmon",
					"photo": "tempura-salmon",
					"name": {
						"ru": "Темпура лосось",
						"en": "Salmon tempura",
						"ar": "تمبورا سلمون"
					},
					"price": 400,
					"pieces": 8,
					"kcal": 720,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, лосось, унаги",
						"en": "rice, nori, cream cheese, cucumber, salmon, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، سلمون، صلصة أوناغي"
					}
				},
				{
					"id": "tempura-crab",
					"photo": "tempura-crab",
					"name": {
						"ru": "Темпура краб",
						"en": "Crab tempura",
						"ar": "تمبورا سلطعون"
					},
					"price": 400,
					"pieces": 8,
					"kcal": 700,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, крабовые палочки, унаги",
						"en": "rice, nori, cream cheese, cucumber, crab sticks, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أصابع سلطعون، صلصة أوناغي"
					}
				},
				{
					"id": "ebi-tempura",
					"photo": "ebi-tempura",
					"name": {
						"ru": "Эби Темпура",
						"en": "Ebi tempura",
						"ar": "إيبي تمبورا"
					},
					"price": 430,
					"pieces": 8,
					"kcal": 730,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, креветка, унаги",
						"en": "rice, nori, cream cheese, cucumber, shrimp, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، روبيان، صلصة أوناغي"
					}
				},
				{
					"id": "chicken-tempura",
					"photo": "chicken-tempura",
					"name": {
						"ru": "Чикен Темпура",
						"en": "Chicken tempura",
						"ar": "تمبورا دجاج"
					},
					"price": 390,
					"pieces": 8,
					"kcal": 740,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, курица, унаги",
						"en": "rice, nori, cream cheese, cucumber, chicken, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، دجاج، صلصة أوناغي"
					}
				},
				{
					"id": "tempura-pie",
					"photo": "tempura-pie",
					"name": {
						"ru": "Темпура Пай",
						"en": "Tempura Pie",
						"ar": "تمبورا باي"
					},
					"price": 430,
					"pieces": 8,
					"kcal": 850,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, лосось, крабовые палочки, огурец, фирменный соус, сырный соус, унаги, картофель пай",
						"en": "rice, nori, cream cheese, salmon, crab sticks, cucumber, signature sauce, cheese sauce, unagi sauce, crispy potato straws",
						"ar": "أرز، أوراق نوري، جبن كريمي، سلمون، أصابع سلطعون، خيار، صلصة المطعم، صلصة جبن، صلصة أوناغي، بطاطس مقرمشة رفيعة"
					}
				},
				{
					"id": "tempura-ebi-pie",
					"photo": "tempura-ebi-pie",
					"name": {
						"ru": "Темпура Эбипай",
						"en": "Tempura Ebi Pie",
						"ar": "تمبورا إيبي باي"
					},
					"price": 440,
					"pieces": 8,
					"kcal": 870,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, огурец, крабовые палочки, креветка в кляре, фирменный соус, сырный соус, унаги, картофель пай",
						"en": "rice, nori, cream cheese, cucumber, crab sticks, battered shrimp, signature sauce, cheese sauce, unagi sauce, crispy potato straws",
						"ar": "أرز، أوراق نوري، جبن كريمي، خيار، أصابع سلطعون، روبيان مقرمش، صلصة المطعم، صلصة جبن، صلصة أوناغي، بطاطس مقرمشة رفيعة"
					}
				},
				{
					"id": "tempura-spicy",
					"photo": "tempura-spicy",
					"name": {
						"ru": "Темпура Спайси",
						"en": "Spicy tempura",
						"ar": "تمبورا حارة"
					},
					"price": 400,
					"pieces": 8,
					"kcal": 760,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, крабовая палочка, огурец, спайси соус, икра масаго",
						"en": "rice, nori, cream cheese, crab stick, cucumber, spicy sauce, masago roe",
						"ar": "أرز، أوراق نوري، جبن كريمي، أصابع سلطعون، خيار، صلصة حارة، بيض سمك ماساغو"
					}
				},
				{
					"id": "caesar-roll",
					"photo": "caesar-roll",
					"name": {
						"ru": "Цезарь ролл",
						"en": "Caesar roll",
						"ar": "رول سيزر"
					},
					"price": 400,
					"pieces": 8,
					"kcal": 760,
					"time": 20,
					"desc": {
						"ru": "рис, нори, творожный сыр, курица/креветка, помидор, салат, соус Цезарь, сыр, унаги",
						"en": "rice, nori, cream cheese, chicken or shrimp, tomato, lettuce, Caesar dressing, cheese, unagi sauce",
						"ar": "أرز، أوراق نوري، جبن كريمي، دجاج أو روبيان، طماطم، خس، صلصة سيزر، جبن، صلصة أوناغي"
					}
				}
			]
		},
		{
			"id": "sets",
			"title": {
				"ru": "Сеты",
				"en": "Sets",
				"ar": "أطقم"
			},
			"mark": "セット",
			"items": [
				{
					"id": "set-dopamine",
					"name": {
						"ru": "Дофаминовый сет",
						"en": "Dopamine set",
						"ar": "طقم دوبامين"
					},
					"price": 3500,
					"pieces": 48,
					"time": 35,
					"badge": "new",
					"set": [
						{
							"name": {
								"ru": "Филадельфия XL",
								"en": "Philadelphia XL",
								"ar": "فيلادلفيا XL"
							}
						},
						{
							"ref": "cheese-roll"
						},
						{
							"ref": "california-double",
							"name": {
								"ru": "Калифорния 2х",
								"en": "California double",
								"ar": "كاليفورنيا مزدوجة"
							}
						},
						{
							"name": {
								"ru": "Зеленый Дракон",
								"en": "Green Dragon",
								"ar": "التنين الأخضر"
							}
						},
						{
							"name": {
								"ru": "Авокадо Эби",
								"en": "Avocado Ebi",
								"ar": "أفوكادو إيبي"
							}
						},
						{
							"name": {
								"ru": "Мистер Крабс",
								"en": "Mister Crabs",
								"ar": "مستر كرابس"
							}
						}
					]
				},
				{
					"id": "set-combo-1",
					"name": {
						"ru": "Комбо 1",
						"en": "Combo 1",
						"ar": "كومبو 1"
					},
					"price": 1500,
					"pieces": 40,
					"time": 30,
					"set": [
						{
							"ref": "billy",
							"name": {
								"ru": "Запеченный Билли",
								"en": "Baked Billy",
								"ar": "بيلي بالفرن"
							}
						},
						{
							"ref": "boston",
							"name": {
								"ru": "Запеченный Бостон",
								"en": "Baked Boston",
								"ar": "بوسطن بالفرن"
							}
						},
						{
							"ref": "california-salmon",
							"name": {
								"ru": "Калифорния",
								"en": "California",
								"ar": "كاليفورنيا"
							}
						},
						{
							"ref": "hot-chic"
						},
						{
							"name": {
								"ru": "Классический ролл",
								"en": "Classic roll",
								"ar": "رول كلاسيكي"
							},
							"from": 150,
							"to": 200,
							"pieces": 8,
							"kcal": 225,
							"photo": "maki-salmon"
						}
					]
				},
				{
					"id": "set-combo-2",
					"name": {
						"ru": "Комбо 2",
						"en": "Combo 2",
						"ar": "كومبو 2"
					},
					"price": 2350,
					"pieces": 56,
					"time": 35,
					"set": [
						{
							"ref": "hot-chic"
						},
						{
							"ref": "tempura-salmon"
						},
						{
							"ref": "tempura-spicy"
						},
						{
							"ref": "billy"
						},
						{
							"ref": "boston"
						},
						{
							"ref": "tsunami"
						},
						{
							"ref": "california-salmon",
							"name": {
								"ru": "Калифорния",
								"en": "California",
								"ar": "كاليفورنيا"
							}
						}
					]
				},
				{
					"id": "set-fried",
					"name": {
						"ru": "Жареный",
						"en": "Fried set",
						"ar": "طقم مقلي"
					},
					"price": 1200,
					"pieces": 32,
					"time": 25,
					"set": [
						{
							"ref": "hot-chic"
						},
						{
							"name": {
								"ru": "Темпура",
								"en": "Tempura",
								"ar": "تمبورا"
							},
							"from": 390,
							"to": 430,
							"pieces": 8,
							"kcal": 720,
							"photo": "tempura-salmon"
						},
						{
							"ref": "caesar-roll",
							"name": {
								"ru": "Цезарь",
								"en": "Caesar",
								"ar": "سيزر"
							}
						},
						{
							"ref": "tempura-spicy"
						}
					]
				},
				{
					"id": "set-baked",
					"name": {
						"ru": "Запеченный",
						"en": "Baked set",
						"ar": "طقم بالفرن"
					},
					"price": 1750,
					"pieces": 40,
					"time": 30,
					"set": [
						{
							"ref": "billy"
						},
						{
							"ref": "boston"
						},
						{
							"ref": "baked-philadelphia",
							"name": {
								"ru": "Филадельфия",
								"en": "Philadelphia",
								"ar": "فيلادلفيا"
							}
						},
						{
							"ref": "baked-crab"
						},
						{
							"ref": "typhoon"
						}
					]
				},
				{
					"id": "set-cold",
					"name": {
						"ru": "Холодный",
						"en": "Cold set",
						"ar": "طقم بارد"
					},
					"price": 1650,
					"pieces": 40,
					"time": 25,
					"set": [
						{
							"ref": "philadelphia",
							"name": {
								"ru": "Филадельфия",
								"en": "Philadelphia",
								"ar": "فيلادلفيا"
							}
						},
						{
							"ref": "crazy-salmon"
						},
						{
							"ref": "california-crab"
						},
						{
							"ref": "tsunami"
						},
						{
							"name": {
								"ru": "Классический ролл",
								"en": "Classic roll",
								"ar": "رول كلاسيكي"
							},
							"from": 150,
							"to": 200,
							"pieces": 8,
							"kcal": 225,
							"photo": "maki-salmon"
						}
					]
				}
			]
		},
		{
			"id": "snacks",
			"title": {
				"ru": "Закуски",
				"en": "Snacks",
				"ar": "مقبلات"
			},
			"mark": "スナック",
			"source": "whatsapp",
			"items": [
				{
					"id": "fries",
					"photo": "fries",
					"name": {
						"ru": "Картофель фри",
						"en": "French fries",
						"ar": "بطاطس مقلية"
					},
					"price": 150,
					"kcal": 380,
					"time": 10
				},
				{
					"id": "potato-wedges",
					"photo": "potato-wedges",
					"name": {
						"ru": "Картофель по-деревенски",
						"en": "Potato wedges",
						"ar": "بطاطس ودجز"
					},
					"price": 150,
					"kcal": 350,
					"time": 10
				},
				{
					"id": "onion-rings",
					"photo": "onion-rings",
					"name": {
						"ru": "Луковые кольца",
						"en": "Onion rings",
						"ar": "حلقات بصل"
					},
					"price": 130,
					"kcal": 330,
					"time": 10
				},
				{
					"id": "cheese-sticks",
					"photo": "cheese-sticks",
					"name": {
						"ru": "Сырные палочки",
						"en": "Cheese sticks",
						"ar": "أصابع جبن"
					},
					"price": 150,
					"kcal": 330,
					"time": 10
				},
				{
					"id": "tempura-shrimp",
					"photo": "tempura-shrimp",
					"name": {
						"ru": "Креветки в кляре",
						"en": "Battered shrimp",
						"ar": "روبيان مقرمش"
					},
					"price": 375,
					"kcal": 350,
					"time": 10
				},
				{
					"id": "nuggets",
					"photo": "nuggets",
					"name": {
						"ru": "Наггетсы",
						"en": "Nuggets",
						"ar": "ناغتس"
					},
					"time": 10,
					"variants": [
						{
							"id": "3",
							"name": {
								"ru": "3 шт.",
								"en": "3 pcs",
								"ar": "3 قطع"
							},
							"price": 50,
							"kcal": 160
						},
						{
							"id": "6",
							"name": {
								"ru": "6 шт.",
								"en": "6 pcs",
								"ar": "6 قطع"
							},
							"price": 95,
							"kcal": 320
						},
						{
							"id": "9",
							"name": {
								"ru": "9 шт.",
								"en": "9 pcs",
								"ar": "9 قطع"
							},
							"price": 130,
							"kcal": 480
						}
					]
				},
				{
					"id": "strips",
					"photo": "strips",
					"name": {
						"ru": "Стрипсы",
						"en": "Chicken strips",
						"ar": "ستريبس دجاج"
					},
					"time": 10,
					"variants": [
						{
							"id": "3",
							"name": {
								"ru": "3 шт.",
								"en": "3 pcs",
								"ar": "3 قطع"
							},
							"price": 140,
							"kcal": 250
						},
						{
							"id": "5",
							"name": {
								"ru": "5 шт.",
								"en": "5 pcs",
								"ar": "5 قطع"
							},
							"price": 220,
							"kcal": 420
						},
						{
							"id": "8",
							"name": {
								"ru": "8 шт.",
								"en": "8 pcs",
								"ar": "8 قطع"
							},
							"price": 320,
							"kcal": 670
						}
					]
				},
				{
					"id": "wings",
					"photo": "wings",
					"name": {
						"ru": "Острые крылышки",
						"en": "Spicy wings",
						"ar": "أجنحة حارة"
					},
					"time": 15,
					"variants": [
						{
							"id": "3",
							"name": {
								"ru": "3 шт.",
								"en": "3 pcs",
								"ar": "3 قطع"
							},
							"price": 140,
							"kcal": 290
						},
						{
							"id": "5",
							"name": {
								"ru": "5 шт.",
								"en": "5 pcs",
								"ar": "5 قطع"
							},
							"price": 220,
							"kcal": 480
						},
						{
							"id": "8",
							"name": {
								"ru": "8 шт.",
								"en": "8 pcs",
								"ar": "8 قطع"
							},
							"price": 320,
							"kcal": 770
						}
					]
				}
			]
		},
		{
			"id": "rolldogs",
			"title": {
				"ru": "Ролл-доги",
				"en": "Roll-dogs",
				"ar": "رول دوغ"
			},
			"mark": "ロールドッグ",
			"source": "whatsapp",
			"items": [
				{
					"id": "rolldog-fish",
					"name": {
						"ru": "Ролл-Дог с рыбой",
						"en": "Fish roll-dog",
						"ar": "رول دوغ بالسمك"
					},
					"price": 450,
					"time": 15
				},
				{
					"id": "rolldog-crab",
					"name": {
						"ru": "Ролл-Дог краб",
						"en": "Crab roll-dog",
						"ar": "رول دوغ بالسلطعون"
					},
					"price": 420,
					"time": 15
				},
				{
					"id": "sandwich-roll",
					"name": {
						"ru": "Сендвич-Ролл с курицей",
						"en": "Chicken sandwich roll",
						"ar": "ساندويتش رول بالدجاج"
					},
					"price": 420,
					"time": 15
				}
			]
		},
		{
			"id": "drinks",
			"title": {
				"ru": "Напитки",
				"en": "Drinks",
				"ar": "مشروبات"
			},
			"mark": "ドリンク",
			"source": "whatsapp",
			"items": [
				{
					"id": "karachay-pear",
					"name": {
						"ru": "Карачаевская груша",
						"en": "Karachay pear soda",
						"ar": "كمثرى قراتشاي"
					},
					"price": 55
				},
				{
					"id": "kinza-cola",
					"name": {
						"ru": "Kinza Кола",
						"en": "Kinza Cola",
						"ar": "كينزا كولا"
					},
					"price": 100
				},
				{
					"id": "kinza-lemon",
					"name": {
						"ru": "Kinza Лимон",
						"en": "Kinza Lemon",
						"ar": "كينزا ليمون"
					},
					"price": 100
				},
				{
					"id": "kinza-pomegranate",
					"name": {
						"ru": "Kinza Гранат",
						"en": "Kinza Pomegranate",
						"ar": "كينزا رمان"
					},
					"price": 100
				},
				{
					"id": "kinza-currant",
					"name": {
						"ru": "Kinza Смородина",
						"en": "Kinza Currant",
						"ar": "كينزا كشمش"
					},
					"price": 100
				}
			]
		}
	]
};
