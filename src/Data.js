// Our product database.
const sampleProducts = [
  //                  ----------------Тонік----------------
  //  Noel
  {
    id: 4,
    name: "Noel Original",
    category: "Тонік",
    price: 12.5,
    volume: 0.2,
    description: "",

    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/2030579/noel_4820137823916_images_2030579832._S.jpg"
    ]
  },
  {
    id: 13,
    name: "Noel Ginger flavor",
    category: "Тонік",
    price: 12.5,
    volume: 0.2,
    description: "",
    popular: false,
    imageUrls: [
      "http://goodfriend.com.ua/5216-large_default/noel02.jpg",
      "http://goodfriend.com.ua/5216-large_default/noel02.jpg"
    ]
  },

  //                  ----------------Джин-----------------
  // Gordon's
  {
    id: 12,
    name: "Gordon's London Dry (37,5%)",
    category: "Джин",
    price: 330,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://secure.ce-tescoassets.com/assets/SK/440/5000289925440/ShotType1_540x540.jpg",
      "https://secure.ce-tescoassets.com/assets/SK/440/5000289925440/ShotType1_540x540.jpg"
    ]
  },
  {
    id: 14,
    name: "Gordon's London Dry (37,5%)",
    category: "Джин",
    price: 379,
    volume: 1,
    description: "",
    popular: true,
    imageUrls: [
      "https://secure.ce-tescoassets.com/assets/SK/440/5000289925440/ShotType1_540x540.jpg",
      "https://secure.ce-tescoassets.com/assets/SK/440/5000289925440/ShotType1_540x540.jpg"
    ]
  },
  {
    id: 3,
    name: "Gordon's (Premium) Pink",
    category: "Джин",
    price: 355,
    volume: 0.7,
    popular: false,
    imageUrls: [
      "https://spb.wine-shopper.ru/image/cache/catalog/0-gg/000000_0-5-340x340.jpg",
      "https://spb.wine-shopper.ru/image/cache/catalog/0-gg/000000_0-5-340x340.jpg"
    ]
  },
  //  Tanqueray
  {
    id: 15,
    name: "Tanqueray London Dry Gin (47,3%)",
    category: "Джин",
    price: 370,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://artdrink.com.ua/image/cache/data/goods/gin/Gin-Tanqueray-London-Dry-1l-880x720.jpg",
      "https://artdrink.com.ua/image/cache/data/goods/gin/Gin-Tanqueray-London-Dry-1l-880x720.jpg"
    ]
  },
  {
    id: 16,
    name: "Tanqueray London Dry Gin (47,3%)",
    category: "Джин",
    price: 499,
    volume: 1,
    description: "",
    popular: false,
    imageUrls: [
      "https://artdrink.com.ua/image/cache/data/goods/gin/Gin-Tanqueray-London-Dry-1l-880x720.jpg",
      "https://artdrink.com.ua/image/cache/data/goods/gin/Gin-Tanqueray-London-Dry-1l-880x720.jpg"
    ]
  },
  {
    id: 7,
    name: "Tanqueray Flor de Sevilla Gin",
    category: "Джин",
    price: 599,
    volume:0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.drinksupermarket.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/a/tanqueray-flor-de-sevilla-premixed-275ml.jpg"
    ]
  },
  {
    id: 10,
    name: "Tanqueray №TEN",
    category: "Джин",
    price: 740,
    volume:0.7,
    description: "",

    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/1836194/tanqueray_5000281020761_images_1836194663._S.jpg"
    ]
  },
  // The Botanist
  {
    id: 2,
    name: "The Botanist",
    category: "Джин",
    price: 750,
    volume: 0.7,
    description:
      `The Botanist — унікальний джин, який створюється на шотландському острові Айла.
      Джим Макюен, головний майстер винокурні Bruichladdich, відомої своїми односолодовими віскі, ще 2004 року висловив 
      ідею випускати джин, використовуючи надзвичайну різноманітність флори острова Айла.
      Однак знадобилося багато часу для того, щоб втілити цю ідею в життя.
      
      Досвідченому майстру довелося додатково вивчити виробництво джина та купити рідкісний перегінний куб 
      ломондського типу, що дає змогу виконувати тривалу 24-годинну дистиляцію. Крім того, Джим залучив до роботи 
      двох місцевих ботаніків, які допомогли йому знайти та вибрати рослини для унікального букета майбутнього джина. 
      Першу партію джина випустили в серпні 2010 року. Джим Макюен назвав його The Botanist на честь тих людей, 
      без яких цей продукт не з'явився б на світ.

      The Botanist дистилюється з 22 унікальними рослинними компонентами, зібраними на острові Айла: яблучною м'ятою, 
      чебрецем, вереском, пижмом, листям берези й іншими. Вони дарують джину його тонкий аромат і неповторний характер, 
      поєднуючись із 9 класичними інгредієнтами, зокрема з коріандром, ягодами ялівцю, цедрою, локрицею. 
      Смак напою багатий і м'який, спочатку трохи холодний, а згодом — теплий і чистий, з домінантним свіжим тоном 
      цитрусових.

      Цей дивовижний джин зачаровує як у чистому вигляді, так і в складі коктейлів.`,

    popular: false,
    imageUrls: [
      "https://spb.wine-shopper.ru/image/cache/catalog/gin/Botanist-340x340.jpg",
      "https://spb.wine-shopper.ru/image/cache/catalog/gin/Botanist-340x340.jpg"
    ]
  },
  
  //                  -------------Горілка--------------
  // RADA Premium Classic 2+1
  {
    id: 17,
    name: "RADA Premium Classic",
    category: "Горілка",
    price: 120,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://okwine.ua/files/product/multimedia_image/0c029490-387b-11ea-b010-c372953fe15e.jpg",
      "https://okwine.ua/files/product/multimedia_image/0c029490-387b-11ea-b010-c372953fe15e.jpg"
    ]
  },
  //  Ketel One
  {
    id: 18,
    name: "Ketel One",
    category: "Горілка",
    price: 449,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://alcoland.com.ua/2532-large_default/vodka-ketel-one-07l.jpg",
      "https://alcoland.com.ua/2532-large_default/vodka-ketel-one-07l.jpg"
    ]
  },
  //  Belvedere 0.5 & 0.7
  {
    id: 1,
    name: "Belvedere",
    category: "Горілка",
    price: 430,
    volume: 0.5, 
    description:
      `Belvedere - Горілка кришталево чистого, прозорого кольору. 
      Смак горілки округлий, з повнотілою текстурою, легкими нотами ванілі та відтінками білого перцю і спецій. 
      Аромат горілки відкривається ледь помітним відтінком ванілі та м'якими нюансами вершків. 
      Подається охолодженою в чистому вигляді. Також горілка Belvedere вирізняється смаком, 
      у якому відчуваються солодкі нотки, тому її часто використовують для виготовлення коктейлів.`,
    popular: true,
    imageUrls: [
      "https://wine-shopper.ru/image/cache/catalog/VODKA/23578-600x600.jpg",
      "https://wine-shopper.ru/image/cache/catalog/VODKA/23578-600x600.jpg"
    ]
  },
  {
    id: 19,
    name: "Belvedere",
    category: "Горілка",
    price: 570,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://wine-shopper.ru/image/cache/catalog/VODKA/23578-600x600.jpg",
      "https://wine-shopper.ru/image/cache/catalog/VODKA/23578-600x600.jpg"
    ]
  },
  //  Ciroc
  {
    id: 20,
    name: "Ciroc",
    category: "Горілка",
    price: 649,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://napoli.ua/39107-large_default/vodka-ciroc-0-7-l.jpg",
      "https://napoli.ua/39107-large_default/vodka-ciroc-0-7-l.jpg"
    ]
  },
  //  Koskenkorva
  {
    id: 8,
    name: "Koskenkorva",
    category: "Горілка",
    price: 175,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://wine-shopper.ru/image/cache/catalog/0-%D0%BC%D0%BC/mm39-340x340.jpg",
      "https://wine-shopper.ru/image/cache/catalog/0-%D0%BC%D0%BC/mm39-340x340.jpg"
    ]
  },
  {
    id: 21,
    name: "Koskenkorva",
    category: "Горілка",
    price: 249,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://wine-shopper.ru/image/cache/catalog/0-%D0%BC%D0%BC/mm39-340x340.jpg",
      "https://wine-shopper.ru/image/cache/catalog/0-%D0%BC%D0%BC/mm39-340x340.jpg"
    ]
  },
  {
    id: 22,
    name: "Koskenkorva",
    category: "Горілка",
    price: 279,
    volume: 1,
    description: "",
    popular: true,
    imageUrls: [
      "https://wine-shopper.ru/image/cache/catalog/0-%D0%BC%D0%BC/mm39-340x340.jpg",
      "https://wine-shopper.ru/image/cache/catalog/0-%D0%BC%D0%BC/mm39-340x340.jpg"
    ]
  },

  //                          ----------------Текіла----------------
  //Jose Cuervo
  {
    id: 5,
    name: "Jose Cuervo Especial Silver",
    category: "Текіла",
    price: 259,
    volume: 0.5,
    description: "",
    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/2377983/jose_cuervo_7501035042384_images_2377983241._S.jpg",
      "https://i1.rozetka.ua/goods/2377983/jose_cuervo_7501035042384_images_2377983241._S.jpg"
    ]
  },
  {
    id: 23,
    name: "Jose Cuervo Especial Silver",
    category: "Текіла",
    price: 470,
    volume: 1,
    description: "",
    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/2377983/jose_cuervo_7501035042384_images_2377983241._S.jpg",
      "https://i1.rozetka.ua/goods/2377983/jose_cuervo_7501035042384_images_2377983241._S.jpg"
    ]
  },
  {
    id: 24,
    name: "Jose Cuervo Tradicional Silver 100% agave",
    category: "Текіла",
    price: 510,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://alcoreviews.com/wp-content/uploads/base_of_pic/Jose_Cuervo_Tradicional_Silver/1.png",
      "https://alcoreviews.com/wp-content/uploads/base_of_pic/Jose_Cuervo_Tradicional_Silver/1.png"
    ]
  },
  {
    id: 25,
    name: "Jose Cuervo Tradicional Reposado 100% agave",
    category: "Текіла",
    price: 549,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/3283154/jose_cuervo_7501035012219_images_3283154999._S.jpg",
      "https://i1.rozetka.ua/goods/3283154/jose_cuervo_7501035012219_images_3283154999._S.jpg"
    ]
  },
  //Don Julio
  {
    id: 26,
    name: "Don Julio Blanco",
    category: "Текіла",
    price: 1030,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.binnys.com/media/catalog/product/cache/eab16ae251e4410504af434c6d9419db/1/1/112046.jpg",
      "https://www.binnys.com/media/catalog/product/cache/eab16ae251e4410504af434c6d9419db/1/1/112046.jpg"
    ]
  },
  {
    id: 27,
    name: "Don Julio Reposado",
    category: "Текіла",
    price: 1150,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.whisky.fr/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/m/3/m3779.jpg",
      "https://www.whisky.fr/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/m/3/m3779.jpg"
    ]
  },
  {
    id: 9,
    name: "Don Julio Anejo",
    category: "Текіла",
    price: 1299,
    volume:0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.kroger.com/product/images/xlarge/front/0067454500006"
    ]
  },
  //True Tequila
  {
    id: 11,
    name: "True Tequila «Silver»",
    category: "Текіла",
    price: 334,
    volume: 1,
    description: "",
    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/1792961/true_tequila_8411640010144_images_1792961802._S.jpg"
    ]
  },

  //                             ------------------Ром-----------------
  //  Captain Morgan
  {
    id: 28,
    name: "Captain Morgan Original Spiced Gold",
    category: "Ром",
    price: 179,
    volume: 0.5,
    description: "",
    popular: false,
    imageUrls: [
      "https://m.media-amazon.com/images/I/415dc8m-FtL.jpg"
    ]
  },
  {
    id: 29,
    name: "Captain Morgan Original Spiced Gold",
    category: "Ром",
    price: 249,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://m.media-amazon.com/images/I/415dc8m-FtL.jpg"
    ]
  },
  {
    id: 30,
    name: "Captain Morgan Original Spiced Gold",
    category: "Ром",
    price: 330,
    volume: 1,
    description: "",
    popular: false,
    imageUrls: [
      "https://m.media-amazon.com/images/I/415dc8m-FtL.jpg"
    ]
  },
  {
    id: 31,
    name: "Captain Morgan White Rum",
    category: "Ром",
    price: 300,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://alcoelite.com.ua/image/cache/catalog/new-alcogol/rom/captain-morgan-white-1-760x760.jpg"
    ]
  },
  {
    id: 32,
    name: "Captain Morgan White Rum",
    category: "Ром",
    price: 331,
    volume: 1,
    description: "",
    popular: false,
    imageUrls: [
      "https://alcoelite.com.ua/image/cache/catalog/new-alcogol/rom/captain-morgan-white-1-760x760.jpg"
    ]
  },
  {
    id: 33,
    name: "Captain Morgan Dark Rum",
    category: "Ром",
    price: 220,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://okwine.ua/files/product/1968974880745457288/84e81e30-4d92-11ea-8bb7-e9e0b5cd883f.jpg"
    ]
  },
  {
    id: 34,
    name: "Captain Morgan Dark Rum",
    category: "Ром",
    price: 330,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://okwine.ua/files/product/1968974880745457288/84e81e30-4d92-11ea-8bb7-e9e0b5cd883f.jpg"
    ]
  },
  {
    id: 35,
    name: "Captain Morgan Dark Rum",
    category: "Ром",
    price: 385,
    volume: 1,
    description: "",
    popular: true,
    imageUrls: [
      "https://okwine.ua/files/product/1968974880745457288/84e81e30-4d92-11ea-8bb7-e9e0b5cd883f.jpg"
    ]
  },
  {
    id: 36,
    name: "Captain Morgan Black Spiced",
    category: "Ром",
    price: 320,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://ambar.net.ua/image/data/ambar/2638.jpg"
    ]
  },
  {
    id: 37,
    name: "Zacapa 23 (в тубусі)",
    category: "Ром",
    price: 1399,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://irecommend.ru/sites/default/files/product-images/1660929/fOLj6tOiM4yBBEqVWcIjQ.jpg"
    ]
  },

  //                           -----------------Бренді--------------------
  //  Metaxa
  {
    id: 38,
    name: "Metaxa 5 Stars",
    category: "Бренді",
    price: 235,
    volume: 0.5,
    description: "",
    popular: false,
    imageUrls: [
      "https://fozzyshop.com.ua/99343-thickbox_default/napitok-alkogolnyj-metaxa-5-zvezd.jpg"
    ]
  },
  {
    id: 39,
    name: "Metaxa 5 Stars (в коробці)",
    category: "Бренді",
    price: 330,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://img2.zakaz.ua/20191104.1572869866.ad72436478c_2019-11-04_Victoria/20191104.1572869866.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg"
    ]
  },
  {
    id: 40,
    name: "Metaxa Honey Shot",
    category: "Бренді",
    price: 330,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://okwine.ua/files/product/1968975083472946879/0c2b2de0-4110-11ea-a13a-317b6eb4e514.jpg"
    ]
  },
  {
    id: 41,
    name: "Metaxa 5 Stars",
    category: "Бренді",
    price: 399,
    volume: 1,
    description: "",
    popular: true,
    imageUrls: [
      "https://fozzyshop.com.ua/99343-thickbox_default/napitok-alkogolnyj-metaxa-5-zvezd.jpg"
    ]
  },
  //  Saint Rémy
  {
    id: 42,
    name: "Saint Rémy XO (в коробці)",
    category: "Бренді",
    price: 340,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://pictures.mydutyfree.net/images/products/19/79/original/brandy-saint-remy-authentic-xo-1l.1979.jpg"
    ]
  },
  {
    id: 43,
    name: "Saint Rémy VSOP",
    category: "Бренді",
    price: 199,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://i2.rozetka.ua/goods/14904914/st_remy_3035540006172_images_14904914942.jpg"
    ]
  },
  {
    id: 44,
    name: "Saint Rémy VSOP (в коробці)",
    category: "Бренді",
    price: 285,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/10897059/st_remy_3161423070012_images_10897059393.jpg"
    ]
  },
  
  //                           -----------------Коньяк--------------------
  //  Rémy Martin
  {
    id: 45,
    name: "Remy Martin VS Superieur (в коробці)",
    category: "Коньяк",
    price: 699,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "http://borisfen-market.com.ua/image/data/2015/05/remy_martin_vs_korob_butilka56.jpg"
    ]
  },
  {
    id: 46,
    name: "Remy Martin VSOP (в коробці)",
    category: "Коньяк",
    price: 1299,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://s.winestyle.ru/images_gen/271/2718/0_0_orig.jpg"
    ]
  },
  //  Hennessy
  {
    id: 47,
    name: "Hennessy Very Special (в коробці)",
    category: "Коньяк",
    price: 630,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://s.winestyle.ru/images_gen/227/2277/0_0_orig.jpg"
    ]
  },
  {
    id: 48,
    name: "Hennessy Very Special (в коробці)",
    category: "Коньяк",
    price: 799,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://s.winestyle.ru/images_gen/227/2277/0_0_orig.jpg"
    ]
  },
  {
    id: 49,
    name: "Hennessy VSOP Privilège (в коробці)",
    category: "Коньяк",
    price: 1040,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://s.winestyle.ru/images_gen/225/2253/0_0_orig.jpg"
    ]
  },
  {
    id: 50,
    name: "Hennessy VSOP Privilège (в коробці)",
    category: "Коньяк",
    price: 1320,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://s.winestyle.ru/images_gen/225/2253/0_0_orig.jpg"
    ]
  },

  //                           --------------Лікери + Настоянки--------------
  //  Baileys
  {
    id: 51,
    name: "Baileys The Original",
    category: "Лікери і Настоянки",
    price: 349,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://alcoelite.com.ua/image/cache/catalog/new-alcogol/liker/baileys-original-1--01l-760x760.jpg"
    ]
  },
  {
    id: 52,
    name: "Baileys The Original",
    category: "Лікери і Настоянки",
    price: 430,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://alcoelite.com.ua/image/cache/catalog/new-alcogol/liker/baileys-original-1--01l-760x760.jpg"
    ]
  },
  {
    id: 53,
    name: "Baileys The Original",
    category: "Лікери і Настоянки",
    price: 540,
    volume: 1,
    description: "",
    popular: false,
    imageUrls: [
      "https://alcoelite.com.ua/image/cache/catalog/new-alcogol/liker/baileys-original-1--01l-760x760.jpg"
    ]
  },
  //  Sheridan's
  {
    id: 54,
    name: "Sheridan's Original",
    category: "Лікери і Настоянки",
    price: 399,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://alco-opt.com/image/cache/catalog/image/catalog/new/viberimage1-1000x1000.jpg"
    ]
  },
  {
    id: 55,
    name: "Sheridan's Original",
    category: "Лікери і Настоянки",
    price: 499,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://alco-opt.com/image/cache/catalog/image/catalog/new/viberimage1-1000x1000.jpg"
    ]
  },
  //  Cointreau
  {
    id: 56,
    name: "Cointreau",
    category: "Лікери і Настоянки",
    price: 390,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Coinreau_original_v4.jpg"
    ]
  },
  {
    id: 57,
    name: "Cointreau",
    category: "Лікери і Настоянки",
    price: 402,
    volume: 1,
    description: "",
    popular: true,
    imageUrls: [
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Coinreau_original_v4.jpg"
    ]
  },
  //  Sambuca
  {
    id: 58,
    name: "Sambuca Antica Classic",
    category: "Лікери і Настоянки",
    price: 220,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://i2.rozetka.ua/goods/1282596/volare_8004747005535_images_1282596384._S.jpg"
    ]
  },
  //  Jägermeister
  {
    id: 59,
    name: "Jägermeister",
    category: "Лікери і Настоянки",
    price: 33,
    volume: 0.04,
    description: "",
    popular: false,
    imageUrls: [
      "https://artdrink.com.ua/image/cache/data/goods/Liqueur/liker-jagermeister-40ml-880x720.jpg"
    ]
  },
  {
    id: 60,
    name: "Jägermeister / до кожної пляшки фірмові окуляри в подарунок АКЦІЯ!!!",
    category: "Лікери і Настоянки",
    price: 230,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://img3.board.com.ua/a/2006136411/wm/1-jagermeister-1l-egermejster-1l.jpg"
    ]
  },
  {
    id: 61,
    name: "Jägermeister / до кожної пляшки фірмові окуляри в подарунок АКЦІЯ!!!",
    category: "Лікери і Настоянки",
    price: 330,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://img3.board.com.ua/a/2006136411/wm/1-jagermeister-1l-egermejster-1l.jpg"
    ]
  },
  {
    id: 62,
    name: "Jägermeister / до кожної пляшки фірмові окуляри в подарунок АКЦІЯ!!!",
    category: "Лікери і Настоянки",
    price: 450,
    volume: 1,
    description: "",
    popular: true,
    imageUrls: [
      "https://img3.board.com.ua/a/2006136411/wm/1-jagermeister-1l-egermejster-1l.jpg"
    ]
  },
  //  Xenta
  {
    id: 63,
    name: "Абсент Xenta",
    category: "Лікери і Настоянки",
    price: 380,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://i2.rozetka.ua/goods/14621711/xenta_8034141060236_images_14621711859.jpg"
    ]
  },
  {
    id: 64,
    name: "Абсент Xenta",
    category: "Лікери і Настоянки",
    price: 494,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://i2.rozetka.ua/goods/14621711/xenta_8034141060236_images_14621711859.jpg"
    ]
  },
  {
    id: 65,
    name: "Абсент Xenta",
    category: "Лікери і Настоянки",
    price: 539,
    volume: 1,
    description: "",
    popular: true,
    imageUrls: [
      "https://i2.rozetka.ua/goods/14621711/xenta_8034141060236_images_14621711859.jpg"
    ]
  },
  //  Riga Black
  {
    id: 66,
    name: "Riga Black Balsam",
    category: "Лікери і Настоянки",
    price: 225,
    volume: 0.5,
    description: "",
    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/13934218/riga_4750021101380_images_13934218114._S.jpg"
    ]
  },
  {
    id: 67,
    name: "Riga Black Balsam",
    category: "Лікери і Настоянки",
    price: 260,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://i1.rozetka.ua/goods/13934218/riga_4750021101380_images_13934218114._S.jpg"
    ]
  },
  {
    id: 68,
    name: "Riga Black Currant",
    category: "Лікери і Настоянки",
    price: 199,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://img.thewhiskyexchange.com/900/liq_rig2.jpg"
    ]
  },
  {
    id: 69,
    name: "Riga Black Currant",
    category: "Лікери і Настоянки",
    price: 230,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://img.thewhiskyexchange.com/900/liq_rig2.jpg"
    ]
  },
  {
    id: 70,
    name: "Riga Black Cherry",
    category: "Лікери і Настоянки",
    price: 199,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://i2.rozetka.ua/goods/13934261/riga_4750021004933_images_13934261662._S.jpg"
    ]
  },
  {
    id: 71,
    name: "Riga Black Cherry",
    category: "Лікери і Настоянки",
    price: 230,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://i2.rozetka.ua/goods/13934261/riga_4750021004933_images_13934261662._S.jpg"
    ]
  },

  //                           -------------------Віскі------------------
  //  Johnnie Walker
  {
    id: 72,
    name: "Johnnie Walker Red Label",
    category: "Віскі",
    price: 240,
    volume: 0.5,
    description: "",
    popular: false,
    imageUrls: [
      "https://cdn.shoplightspeed.com/shops/603475/files/797583/800x1024x1/johnnie-walker-red-label-blended-scotch-whisky-750.jpg"
    ]
  },
  {
    id: 73,
    name: "Johnnie Walker Red Label",
    category: "Віскі",
    price: 389,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://cdn.shoplightspeed.com/shops/603475/files/797583/800x1024x1/johnnie-walker-red-label-blended-scotch-whisky-750.jpg"
    ]
  },
  {
    id: 74,
    name: "Johnnie Walker Red Label",
    category: "Віскі",
    price: 430,
    volume: 1,
    description: "",
    popular: true,
    imageUrls: [
      "https://cdn.shoplightspeed.com/shops/603475/files/797583/800x1024x1/johnnie-walker-red-label-blended-scotch-whisky-750.jpg"
    ]
  },
  {
    id: 75,
    name: "Johnnie Walker Red Label (на гойдалці)",
    category: "Віскі",
    price: 1899,
    volume: 3,
    description: "",
    popular: false,
    imageUrls: [
      "https://lh3.googleusercontent.com/proxy/OHXc4UCzUGq9F9Mlz7mjPXusyXZJJhvvkMW4BbsT0BXHvfKNjxL8W16RCIj0Qxc9oMn2aq-6RNvtNp4FT6zLCraonjGzuOdOb0b2-rQn"
    ]
  },
  {
    id: 76,
    name: "Johnnie Walker Red Rye Finish",
    category: "Віскі",
    price: 414,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/product/1968975121297179858/2d7802d0-1c07-11ea-a5bb-65ffb570eff8.jpg"
    ]
  },
  {
    id: 77,
    name: "Johnnie Walker Black Label 12 YO (в коробці)",
    category: "Віскі",
    price: 549,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://winetime.com.ua/modules/pages/pictures/1407838809_48981.jpg"
    ]
  },
  {
    id: 78,
    name: "Johnnie Walker Black Label 12 YO (в коробці)",
    category: "Віскі",
    price: 699,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://winetime.com.ua/modules/pages/pictures/1407838809_48981.jpg"
    ]
  },
  {
    id: 79,
    name: "Johnnie Walker Black Label 12 YO (в коробці)",
    category: "Віскі",
    price: 920,
    volume: 1,
    description: "",
    popular: false,
    imageUrls: [
      "https://winetime.com.ua/modules/pages/pictures/1407838809_48981.jpg"
    ]
  },
  {
    id: 80,
    name: "Johnnie Walker Black Label 12 YO  (на гойдалці)",
    category: "Віскі",
    price: 3670,
    volume: 3,
    description: "",
    popular: false,
    imageUrls: [
      "https://s.winestyle.ru/images_gen/664/66498/0_0_orig.jpg"
    ]
  },
  //  Bell's
  {
    id: 81,
    name: "Bell's Spiced",
    category: "Віскі",
    price: 220,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/product/1968975119560737902/701bc2a0-111e-11ea-9a0d-83c3ef562493.jpg"
    ]
  },
  {
    id: 82,
    name: "Bell's Original",
    category: "Віскі",
    price: 230,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/product/multimedia_image/efdb4f30-2265-11ea-96df-013e9f65b738.jpg"
    ]
  },
  {
    id: 83,
    name: "Bell's Original",
    category: "Віскі",
    price: 320,
    volume: 1,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/product/multimedia_image/efdb4f30-2265-11ea-96df-013e9f65b738.jpg"
    ]
  },
  //  Black &White
  {
    id: 84,
    name: "Black &White ",
    category: "Віскі",
    price: 310,
    volume: 1,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/resize/400x400/product/full_viski-blek-end-vajt-black-white-6-let-40-1l.jpg"
    ]
  },
  //  VAT 69
  {
    id: 85,
    name: "VAT 69",
    category: "Віскі",
    price: 310,
    volume: 1,
    description: "",
    popular: false,
    imageUrls: [
      "https://alcostore.com.ua/image/cache/data/New5/Vat_69_1l-800x600.jpg"
    ]
  },
  //  The Singleton of Dufftown 12 YO (в коробці)
  {
    id: 86,
    name: "The Singleton of Dufftown 12 YO (в коробці)",
    category: "Віскі",
    price: 885,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://i2.rozetka.ua/goods/11289044/the_singleton_5000281021621_images_11289044460.jpg"
    ]
  },
  //  Talisker 10 YO (в коробці)
  {
    id: 87,
    name: "Talisker 10 YO (в коробці)",
    category: "Віскі",
    price: 1099,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://foodlikedrive.com/image/cache/data/%D0%B3%D1%80%D0%B0%D0%BF%D0%BF%D0%B0/455555555555/14/talisker_10_years%2Cp-37000028%2Cs-600-500x500.jpg"
    ]
  },
  //  Glenmorangie
  {
    id: 88,
    name: "Glenmorangie The Original 10 YO (в коробці)",
    category: "Віскі",
    price: 799,
    volume: 0.5,
    description: "",
    popular: true,
    imageUrls: [
      "https://alco-sale.com.ua/files/products/viski-glenmorangie-10-y.o.550x700.jpg.pagespeed.ce.ZBgTQe0C0J.jpg"
    ]
  },
  {
    id: 89,
    name: "Glenmorangie The Original 10 YO (в коробці)",
    category: "Віскі",
    price: 999,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://alco-sale.com.ua/files/products/viski-glenmorangie-10-y.o.550x700.jpg.pagespeed.ce.ZBgTQe0C0J.jpg"
    ]
  },
  {
    id: 90,
    name: "Glenmorangie Lasanta 12 YO (в коробці)",
    category: "Віскі",
    price: 1420,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://horeca.org.ua/image/cache/catalog/viski/glenmorangie-lasanta-07-600x667.jpg"
    ]
  },
  {
    id: 91,
    name: "Glenmorangie Quinta Ruban 14 YO (в коробці)",
    category: "Віскі",
    price: 1510,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://i8.rozetka.ua/goods/16487108/glenmorangie_5010494951813_images_16487108499._S.jpg"
    ]
  },
  {
    id: 92,
    name: "Glenmorangie Nectar d'Or (в коробці)",
    category: "Віскі",
    price: 1550,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "https://winetime.com.ua/modules/pages/pictures/1479999146_62466.jpg"
    ]
  },
  //  Ardbeg
  {
    id: 93,
    name: "Ardbeg 10 YO (в коробці)",
    category: "Віскі",
    price: 1299,
    volume: 0.7,
    description: "",
    popular: true,
    imageUrls: [
      "http://borisfen-market.com.ua/image/data/2017/04/3+58.jpg"
    ]
  },
  {
    id: 94,
    name: "Ardbeg Uigeadail (в коробці)",
    category: "Віскі",
    price: 2130,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://s.winestyle.ru/images_gen/326/3266/0_0_orig.jpg"
    ]
  },
  {
    id: 95,
    name: "Ardbeg Corryvreckan (в коробці)",
    category: "Віскі",
    price: 2540,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "http://borisfen-market.com.ua/image/data/2017/04/1+32.jpg"
    ]
  },
  //  Bulleit
  {
    id: 96,
    name: "Bulleit Bourbon",
    category: "Віскі",
    price: 520,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "http://borisfen-market.com.ua/image/data/2016/04/bullet_bourbon.jpg"
    ]
  },
  {
    id: 97,
    name: "Bulleit Rye",
    category: "Віскі",
    price: 630,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "http://borisfen-market.com.ua/image/data/2016/04/bullet_rye.jpg"
    ]
  },
  //  Crown Royal De Luxe (в коробці)
  {
    id: 98,
    name: "Crown Royal De Luxe (в коробці)",
    category: "Віскі",
    price: 620,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://winetime.com.ua/modules/pages/pictures/1561536234_49395.jpg"
    ]
  },
  //  Bushmills
  {
    id: 99,
    name: "Bushmills Original",
    category: "Віскі",
    price: 580,
    volume: 1,
    description: "",
    popular: false,
    imageUrls: [
      "https://thewhiskypedia.ru/uploads/goods/500x700x1758/BushmillsOriginal.jpg"
    ]
  },
  {
    id: 100,
    name: "Bushmills Black Bush",
    category: "Віскі",
    price: 940,
    volume: 1,
    description: "",
    popular: false,
    imageUrls: [
      "https://fozzyshop.com.ua/99360-large_default/viski-bushmills-black-bush-bushmils-blek-bush-1l.jpg"
    ]
  },

  //                           -------------------Вермути-----------------
  //  Torino
  {
    id: 101,
    name: "Torino Bianco Montanaro",
    category: "Вермути",
    price: 499,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.whisky.fr/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/m/5/m55686_1.jpg"
    ]
  },
  {
    id: 102,
    name: "Torino Rosso Montanaro",
    category: "Вермути",
    price: 499,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.whisky.fr/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/m/5/m55688.jpg"
    ]
  },
  {
    id: 103,
    name: "Torino Extra Dry Montanaro",
    category: "Вермути",
    price: 499,
    volume: 0.7,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.binnys.com/media/catalog/product/cache/eab16ae251e4410504af434c6d9419db/9/5/957359.jpg"
    ]
  },
  //                           ------------------Шампанське---------------
  //  Moёt & Chandon
  {
    id: 104,
    name: "Moёt & Chandon Impérial",
    category: "Шампанське",
    price: 370,
    volume: 0.2,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/product/full_shampanskoe-moet-shando-bryut-imperial-moet-chandon-brut-imperial-bel-12-0-375-l-kor.jpg"
    ]
  },
  {
    id: 105,
    name: "Moёt & Chandon Impérial",
    category: "Шампанське",
    price: 810,
    volume: 0.375,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/product/full_shampanskoe-moet-shando-bryut-imperial-moet-chandon-brut-imperial-bel-12-0-375-l-kor.jpg"
    ]
  },
  {
    id: 106,
    name: "Moёt & Chandon Impérial",
    category: "Шампанське",
    price: 1270,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://d3r6kbofdnmd8.cloudfront.net/media/catalog/product/cache/image/1536x/a4e40ebdc3e371adff845072e1c73f37/M/H/MH006_moet_chandon_brut_imperial_750.jpg"
    ]
  },
  {
    id: 107,
    name: "Moёt & Chandon Rosé Impérial",
    category: "Шампанське",
    price: 450,
    volume: 0.2,
    description: "",
    popular: false,
    imageUrls: [
      "https://thedigestive.ru/images/positions/original/image_1844_1.jpg"
    ]
  },
  {
    id: 108,
    name: "Moёt & Chandon Rosé Impérial (в коробці)",
    category: "Шампанське",
    price: 1620,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://alcoelite.com.ua/image/cache/catalog/new-alcogol/shampanskoe/moet-chandon-brut-imperial-rose-v-suvenirnoj-upakovne-760x760.jpg"
    ]
  },
  //  Veuve Clicquot
  {
    id: 109,
    name: "Veuve Clicquot",
    category: "Шампанське",
    price: 1520,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.everythingwine.ca/media/catalog/product/cache/8a06f60378faee05050fb1019d00427e/5/6/563338_Champagne_Veuve_Clicquot_Brut.jpg"
    ]
  },
  //  Dom Pérignon Vintage (в коробці)
  {
    id: 110,
    name: "Dom Pérignon Vintage (в коробці)",
    category: "Шампанське",
    price: 4550,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.grandcru.online/upload/iblock/d24/d243e76c1cf84e269a950a83ffedc3d1.jpg"
    ]
  },

  //                           ---------------Ігристе вино----------------
  //  Terra
  {
    id: 111,
    name: "Terra Serena Prosecco Frizzante», DOC Treviso (сухе, біле, Італія)",
    category: "Ігристе вино",
    price: 75,
    volume: 0.2,
    description: "",
    popular: true,
    imageUrls: [
      "https://icf.listex.info/med/351eaee6-0f40-1a54-ba78-54c9de0bab81.jpg"
    ]
  },
  {
    id: 112,
    name: "Terra Serena Prosecco Frizzante», DOC Treviso (сухе, біле, Італія)",
    category: "Ігристе вино",
    price: 200,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/product/1968974897237460778/239e1f60-11cb-11ea-aade-dde2d28af920.jpg"
    ]
  },
  {
    id: 113,
    name: "Terra Serena «Prosecco Spumante», DOC Treviso (сухе, біле, Італія)",
    category: "Ігристе вино",
    price: 240,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://i2.rozetka.ua/goods/1333693/terra_serena_8010719001764_images_1333693899._S.jpg"
    ]
  },
  {
    id: 114,
    name: "Terra Fresca «Spago» Frizzante (сухе, біле, Італія)",
    category: "Ігристе вино",
    price: 149,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://i2.rozetka.ua/goods/11292371/copy_abbazia_8001592003068_5c890a24897f9_images_11292371136._S.jpg"
    ]
  },
  //  Val d'Oca «Prosecco DOC Extra dry Blue Millesimato» (сухе, біле, блакитна пл., Італія) 
  {
    id: 115,
    name: "Val d'Oca «Prosecco DOC Extra dry Blue Millesimato» (сухе, біле, блакитна пл., Італія)",
    category: "Ігристе вино",
    price: 310,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "http://borisfen-market.com.ua/image/data/2016/04/val_doca_prosecco_Millesimato.jpg"
    ]
  },
  //  Peter
  {
    id: 116,
    name: "Peter Mertes «Sparkling» (газ., н/сол., біл., Latinium, Німеччина)",
    category: "Ігристе вино",
    price: 44,
    volume: 0.2,
    description: "",
    popular: false,
    imageUrls: [
      "https://fozzyshop.com.ua/83243-large_default/vino-igristoe-peter-mertes-sparkling-beloe-polusladkoe.jpg"
    ]
  },
  {
    id: 117,
    name: "Peter Mertes «Sparkling Breeze» (газ., н/сух., біл., Latinium, Німеччина)",
    category: "Ігристе вино",
    price: 104,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://okwine.ua/files/product/multimedia_image/37f7a8a0-2e45-11ea-b4f5-791b0a06f50a.jpg"
    ]
  },
  {
    id: 118,
    name: "Peter Mertes «Sparkling» (газ., н/сол., біле, Latinium, Німеччина)",
    category: "Ігристе вино",
    price: 104,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://alcoland.com.ua/2543-large_default/vino-peter-mertes-sparkling-beloe-polusladkoe-075l.jpg"
    ]
  },
  //  Arte Latino Cava
  {
    id: 119,
    name: "Arte Latino Cava «Brut» (сухе, біле, Іспанія) ",
    category: "Ігристе вино",
    price: 209,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/resize/400x400/product/1968975087851800437/b26c0850-e5d5-11e9-9b06-6b04068cfc36.jpg"
    ]
  },
  {
    id: 120,
    name: "Arte Latino Cava «Semi Seco» (н/сухе, біле, Іспанія) ",
    category: "Ігристе вино",
    price: 209,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/product/1968975096131355879/d293bcb0-1517-11ea-b341-9927573f2a0c.jpg"
    ]
  },
  //  San Mare
  {
    id: 121,
    name: "San Mare Fragolino «Зі смаком полуниці» (сол., біл., ігристе)",
    category: "Ігристе вино",
    price: 83,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://icf.listex.info/med/fefc8c83-f661-a836-01f8-59b8ed9cb716.jpg"
    ]
  },
  {
    id: 122,
    name: "San Mare Fragolino «Зі смаком полуниці» (сол., черв., ігристе)",
    category: "Ігристе вино",
    price: 83,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://icf.listex.info/med/6e3c47f0-2b44-b1d3-f767-03ca32b00e7b.jpg"
    ]
  },
  {
    id: 123,
    name: "San Mare Pesca «Зі смаком персика » (н/сол., біл., ігристе)",
    category: "Ігристе вино",
    price: 105,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/13215405/san_mare_8008820160678_images_13215405342._S.jpg"
    ]
  },
  {
    id: 124,
    name: "San Mare Lambrusco dell'Emilia «Bianco» (н/сол., біле, натуральне)",
    category: "Ігристе вино",
    price: 90,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://img2.zakaz.ua/20191120.1574248184.ad72436478c_2019-11-20_Pavel_Auchan_Alexey/20191120.1574248184.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg"
    ]
  },
  {
    id: 125,
    name: "San Mare Lambrusco dell'Emilia «Rosso» (н/сол., черв., натуральне)",
    category: "Ігристе вино",
    price: 120,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://img3.zakaz.ua/src.1581001471.ad72436478c_2020-02-06_Aliona/src.1581001471.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg"
    ]
  },

  //                           -------------------Вино--------------------
  //  Рислінг» (н/сол., біле, Latinium, Німеччина) 
  {
    id: 126,
    name: "Рислінг» (н/сол., біле, Latinium, Німеччина)",
    category: "Вино",
    price: 149,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/product/1968975154633508470/083205b0-1c0d-11ea-a5bb-65ffb570eff8.jpg"
    ]
  },
  //  Гевюрцтрамінер (н/сол., біле, Latinium, Pfalz, Німеччина) 0,75 л
  {
    id: 127,
    name: "Гевюрцтрамінер (н/сол., біле, Latinium, Pfalz, Німеччина)",
    category: "Вино",
    price: 139,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "http://borisfen-market.com.ua/image/data/2015/07/peter_Mertes.jpg"
    ]
  },
  //  Mud House «Marlborough Sauvignon Blanc» (сухе, біле, Нова Зеландія) 
  {
    id: 128,
    name: "Mud House «Marlborough Sauvignon Blanc» (сухе, біле, Нова Зеландія) ",
    category: "Вино",
    price: 260,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/12639520/mud_house_5010134912310_images_12639520342.jpg"
    ]
  },
  //  Frontera
  {
    id: 129,
    name: "Frontera 'Carmenere' (н/сухе, черв., Чилі) ",
    category: "Вино",
    price: 145,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/11290415/copy_frontera_7804320559001_5c88d4c41514a_images_11290415214._S.jpg"
    ]
  },
  {
    id: 130,
    name: "Frontera Cabernet «Blush» (сол., рож., Чилі) ",
    category: "Вино",
    price: 145,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/resize/400x400/product/full_vino-kaberne-blash-cabernet-blush-frontera-roz-slad-0-75l.jpg"
    ]
  },
  {
    id: 131,
    name: "Frontera «Cabernet Sauvignon» (н/сухе, черв., Чилі)",
    category: "Вино",
    price: 135,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://i2.rozetka.ua/goods/1945436/frontera_7804320559001_images_1945436276._S.jpg"
    ]
  },
  {
    id: 132,
    name: "Frontera «Chardonnay» (н/сухе, біле, Чилі)",
    category: "Вино",
    price: 135,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://alcoland.com.ua/2571-thickbox_default/vino-frontera-chardonnay-beloe-polusukhoe-075l.jpg"
    ]
  },
  {
    id: 133,
    name: "Frontera «Late Harvest» (сол., біле, Чилі) ",
    category: "Вино",
    price: 135,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://okwine.ua/files/resize/400x400/product/full_Late-Harvest_Frontera.jpg"
    ]
  },
  {
    id: 134,
    name: "Frontera «Merlot» (н/сухе, черв., Чилі)",
    category: "Вино",
    price: 145,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://i.otzovik.com/objects/b/700000/692631.png"
    ]
  },
  {
    id: 135,
    name: "Frontera «Sauvignon Blanc» (сухе, біле, Чилі)",
    category: "Вино",
    price: 145,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/product/full_vino-sovinon-blan-sauvignon-blanc-frontera-bel-sukh-12-0-75l-1.jpg"
    ]
  },
  {
    id: 136,
    name: "Frontera «Sweet Red» (сол., черв., Чилі)",
    category: "Вино",
    price: 145,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://od.fozzyshop.com.ua/100857-large_default/vino-frontera-sweet-red-krasnoe-sladkoe.jpg"
    ]
  },
  //  Terra Fresca
  {
    id: 137,
    name: "Terra Fresca «Bianco Amabile» (н/сол., біле, Італія)",
    category: "Вино",
    price: 99,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/11292041/copy_maison_castel_3211209267126_5c89025fbd380_images_11292041340._S.jpg"
    ]
  },
  {
    id: 138,
    name: "Terra Fresca «Rosso Amabile» (н/сол., черв., Італія)",
    category: "Вино",
    price: 99,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://okwine.ua/files/product/multimedia_image/c7f4a3a0-338f-11ea-95f9-53d20df4ba15.jpg"
    ]
  },
  {
    id: 139,
    name: "Terra Fresca «Bianco» (н/сухе, біле, Італія)",
    category: "Вино",
    price: 99,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://fozzyshop.com.ua/69677-thickbox_default/vino-terra-fresca-bianco-beloe-polusukhoe.jpg"
    ]
  },
  {
    id: 140,
    name: "Terra Fresca «Rosso» (н/сухе, черв., Італія)",
    category: "Вино",
    price: 99,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://fozzyshop.com.ua/69679-thickbox_default/vino-terra-fresca-rosso-krasnoe-polusukhoe.jpg"
    ]
  },
  {
    id: 141,
    name: "Terra Fresca «Rosato» (н/сухе, рож., Італія) ",
    category: "Вино",
    price: 99,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  //  Sensi
  {
    id: 142,
    name: "Sensi Chianti «Dalcampo» (сухе, черв., DOCG, Італія)",
    category: "Вино",
    price: 155,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://lh3.googleusercontent.com/proxy/v763Pmip0FO-3_VPrNgd8VXKQPuvqOMVJ3T8rKLhlxniBg8eKZO-ciyU8sfYJYDtwmfBEJHkIm2oMqwMJ1l5pmV7gz1QCt0OSxTc0_rtIdNrVxHwxza-Uvw-eJx57i6Q6-1kqWYJHFc"
    ]
  },
  {
    id: 143,
    name: "Sensi  «Chianti» (сухе, черв., DOCG, Італія) ",
    category: "Вино",
    price: 155,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      ""
    ]
  },
  //  Pierre Chainier
  {
    id: 144,
    name: "Pierre Chainier «Rose d'Anjou» (н/сухе, рож., Франція)",
    category: "Вино",
    price: 175,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://lh3.googleusercontent.com/proxy/Fol5AsBW-a0TQBv9YqCRgdqc-HwjgKC0q2o5IcihckkwKmQQBT1ehp3VPBzUU4gIW-7oYRQ8KDcaZX-rx9S5UptHWcRBzB65EDm5C9Q3E8e4t38bSqw3m8kHrih_3HaV"
    ]
  },
  //  Geo
  {
    id: 145,
    name: "Geo «Alazani Valley» (н/сол., біле, Грузія)",
    category: "Вино",
    price: 129,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://okwine.ua/files/product/full_vino-alazanskaya-dolina-alazani-valley-geo-bel-p-slad-0-75l-1.jpg"
    ]
  },
  {
    id: 146,
    name: "Geo «Alazani Valley» (н/сол., черв., Грузія) ",
    category: "Вино",
    price: 131,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://okwine.ua/files/resize/400x400/product/full_vino-alazanskaya-dolina-alazani-valley-geo-kr-p-slad-0-75l.jpg"
    ]
  },
  //  Don Simon
  {
    id: 147,
    name: "Don Simon «Tinto» (сухе, черв., Іспанія) ",
    category: "Вино",
    price: 84,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://okwine.ua/files/resize/400x400/product/full_vino-tinto-tinto-don-simon-kr-sukh-12-0-75l.jpg"
    ]
  },
  {
    id: 148,
    name: "Don Simon «Blanco» (сухе, біле, Іспанія) ",
    category: "Вино",
    price: 84,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://okwine.ua/files/resize/400x400/product/full_vino-blanko-blanco-don-simon-bel-sukh-0-75l.jpg"
    ]
  },
  {
    id: 149,
    name: "Don Simon «Rosado» (сухе, рож., Іспанія)",
    category: "Вино",
    price: 90,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://fozzyshop.com.ua/69148-thickbox_default/vino-don-simon-rosado-rozovoe-sukhoe.jpg"
    ]
  },
  //  Maison Castel
  {
    id: 150,
    name: "Maison Castel «Cabernet Sauvignon» (сухе, черв., Францiя, Pays d'Oc IGP)",
    category: "Вино",
    price: 155,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://media-verticommnetwork1.netdna-ssl.com/wines/maison-castel-cabernet-sauvignon-1425845-s453.jpg"
    ]
  },
  {
    id: 151,
    name: "Maison Castel «Chardonnay» (сухе, біле., Францiя, VDF)",
    category: "Вино",
    price: 155,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://hola.com.ua/image/cache/catalog/incoming/goods/11290852/copy_frontera_7804320135854_5c88da0d92ede_images_11290852740-1000x1000.jpg"
    ]
  },
  {
    id: 152,
    name: "Maison Castel «Gewurztraminer» (напівсухе, біле., Францiя, Pays d'Oc IGP) ",
    category: "Вино",
    price: 164,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://www.maisoncastel.wine/img/cepages-gewurztraminer-thumb.jpg"
    ]
  },
  {
    id: 153,
    name: "Maison Castel «Grenache Medium Sweet» (н/солод., черв., Францiя, Pays d'Oc IGP)",
    category: "Вино",
    price: 155,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://hola.com.ua/image/cache/catalog/incoming/goods/11291407/copy_maison_castel_3211201046439_5c88ecaa055e2_images_11291407020-1000x1000.jpg"
    ]
  },
  {
    id: 154,
    name: "Maison Castel «Merlot» (сухе, черв., Францiя, Pays d'Oc IGP) ",
    category: "Вино",
    price: 164,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://i2.rozetka.ua/goods/11291454/copy_maison_castel_3211209117841_5c88f35b4a51b_images_11291454360._S.jpg"
    ]
  },
  {
    id: 155,
    name: "Maison Castel «Sauvignon Blanc» (сухе, біле., Францiя, Côtes de Gascogne IGP)",
    category: "Вино",
    price: 164,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://media-verticommnetwork1.netdna-ssl.com/wines/maison-castel-sauvignon-blanc-1457788-s453.jpg"
    ]
  },
  {
    id: 156,
    name: "Maison Castel «Syrah» (сухе, черв., Францiя, Pays d'Oc IGP) ",
    category: "Вино",
    price: 164,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://i1.rozetka.ua/goods/11291769/copy_maison_castel_3211201046521_5c88fc7899bb1_images_11291769444._S.jpg"
    ]
  },
  //  Casillero del Diablo
  {
    id: 157,
    name: "Casillero del Diablo 'Carmenere' (сухе, черв., Чилі)",
    category: "Вино",
    price: 159,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://okwine.ua/files/resize/400x400/product/full_Carmenere-Casillero-del-Diablo.jpg"
    ]
  },
  {
    id: 158,
    name: "Casillero del Diablo «Cabernet Sauvignon» (сухе, черв., Чилі)",
    category: "Вино",
    price: 159,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://alcoland.com.ua/2576-large_default/vino-casillero-del-diablo-cabernet-sauvignon-krasnoe-sukhoe-075l.jpg"
    ]
  },
  {
    id: 159,
    name: "Casillero del Diablo «Chardonnay» (сухе, біле, Чилі) ",
    category: "Вино",
    price: 199,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://alcoland.com.ua/2577-thickbox_default/vino-casillero-del-diablo-chardonnay-beloe-sukhoe-075l.jpg"
    ]
  },
  {
    id: 160,
    name: "Casillero del Diablo «Merlot» (сухе, черв., Чилі)",
    category: "Вино",
    price: 199,
    volume: 0.75,
    description: "",
    popular: false,
    imageUrls: [
      "https://cdn11.bigcommerce.com/s-7a906/images/stencil/500x500/products/4016/4055/concha_y_toro_casillero_del_diablo_merlot__54681.1347907498.jpg?c=2"
    ]
  },
  {
    id: 161,
    name: "Casillero del Diablo «Sauvignon Blanc» (сухе, біле, Чилі) 2+1 / ціна за три пляшки",
    category: "Вино",
    price: 470,
    volume: 0.75,
    description: "",
    popular: true,
    imageUrls: [
      "https://digitalcontent.api.tesco.com/v2/media/ghs/849da465-1db7-4cb8-93f5-ae77bd08043f/snapshotimagehandler_581275370.jpeg?h=540&w=540"
    ]
  }
];

// List of item categories.
const categories = [
  {
    name: "Усі категорії",
    title: "Усі категорії",
    icon: "list"
  },
  {
    name: "Горілка",
    title: "Горілка",
    icon: "play_arrow"
  },
  {
    name: "Джин",
    title: "Джин",
    icon: "play_arrow"
  },
  {
    name: "Тонік",
    title: "Тонік",
    icon: "play_arrow"
  },
  {
    name: "Текіла",
    title: "Текіла",
    icon: "play_arrow"
  },
  {
    name: "Ром",
    title: "Ром",
    icon: "play_arrow"
  },
  {
    name: "Бренді",
    title: "Бренді",
    icon: "play_arrow"
  },
  {
    name: "Коньяк",
    title: "Коньяк",
    icon: "play_arrow"
  },
  {
    name: "Лікери і Настоянки",
    title: "Лікери і Настоянки",
    icon: "play_arrow"
  },
  {
    name: "Віскі",
    title: "Віскі",
    icon: "play_arrow"
  },
  {
    name: "Вермути",
    title: "Вермути",
    icon: "play_arrow"
  },
  {
    name: "Шампанське",
    title: "Шампанське",
    icon: "play_arrow"
  },
  {
    name: "Ігристе вино",
    title: "Ігристе вино",
    icon: "play_arrow"
  },
  {
    name: "Вино",
    title: "Вино",
    icon: "play_arrow"
  }
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Головна", url: "/", icon: "home", id: 0 },
  {
    name: "Категорії",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: "/?category=" + x.name,
        icon: x.icon
      };
    })
  },

];


export { sampleProducts, categories, dataForTheMenu };
