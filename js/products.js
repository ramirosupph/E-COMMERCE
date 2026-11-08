// ==========================================================================
// VANGUARD & CO. - CATÁLOGO DE PRODUCTOS (ROPA & ESTILO MASCULINO)
// ==========================================================================

const PRODUCTS = [
  // --- TRAJES & BL खेलERS ---
  {
    id: 1,
    name: "Traje Sartorial Slim Fit Napoli",
    slug: "traje-sartorial-slim-fit-napoli",
    category: "trajes",
    categoryLabel: "Trajes & Blazers",
    price: 189900,
    originalPrice: 225000,
    badge: "Más Vendido",
    badgeType: "bestseller",
    rating: 4.9,
    reviewsCount: 42,
    description: "Traje de dos piezas confeccionado artesanalmente en pura lana fría italiana Super 120s. Corte slim fit moderno con solapas de muesca, forro de satén tono sobre tono y pantalón de caída impecable sin pinzas.",
    fabric: "100% Lana Fría Super 120s Italiana | Forro 100% Viscosa Bemberg",
    fit: "Slim Fit Contemporáneo",
    details: [
      "Saco de dos botones con doble abertura trasera",
      "Pantalón con pretina reforzada y medio forro interior",
      "Botones de corozo natural pulidos a mano",
      "Bolsillos interiores para pasaporte y smartphone"
    ],
    sizes: ["46", "48", "50", "52", "54", "56"],
    colors: [
      { name: "Charcoal Gris Plomo", hex: "#374151" },
      { name: "Azul Marino Medianoche", hex: "#1e293b" },
      { name: "Negro Ónix", hex: "#111827" }
    ],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 7,
    isFeatured: true,
    isNew: false,
    isSale: true
  },
  {
    id: 2,
    name: "Blazer Desestructurado Lino & Algodón",
    slug: "blazer-desestructurado-lino-algodon",
    category: "trajes",
    categoryLabel: "Trajes & Blazers",
    price: 124500,
    originalPrice: 145000,
    badge: "Tendencia",
    badgeType: "trending",
    rating: 4.8,
    reviewsCount: 29,
    description: "La prenda imprescindible para el estilo Smart Casual. Confección italiana liviana sin hombreras para una silueta relajada y sumamente elegante. Bolsillos aplicados tipo parche.",
    fabric: "55% Lino Francés, 45% Algodón Peinado",
    fit: "Regular Tailored",
    details: [
      "Sin forro interior para máxima respirabilidad",
      "Bolsillos exteriores aplicados de parche",
      "Costuras interiores envueltas al bies",
      "Doble abertura posterior"
    ],
    sizes: ["48", "50", "52", "54"],
    colors: [
      { name: "Beige Arena", hex: "#d2b48c" },
      { name: "Azul Aviador", hex: "#3b5998" },
      { name: "Verde Salvia", hex: "#6b7a66" }
    ],
    images: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 12,
    isFeatured: true,
    isNew: true,
    isSale: false
  },
  {
    id: 3,
    name: "Traje Milano Doble Botonadura",
    slug: "traje-milano-doble-botonadura",
    category: "trajes",
    categoryLabel: "Trajes & Blazers",
    price: 215000,
    originalPrice: 249000,
    badge: "Exclusivo",
    badgeType: "exclusive",
    rating: 5.0,
    reviewsCount: 18,
    description: "Sastrería de alta gama con solapa ancha de pico y cruzado clásico de 6 botones (abrocha 2). Un corte de presencia imponente para galas, bodas o eventos corporativos de máxima jerarquía.",
    fabric: "100% Pura Lana Virgen Tasmania",
    fit: "Tailored Slim Fit",
    details: [
      "Solapa de pico ancha estilo Savile Row",
      "Botonadura 6x2 con botones de cuerno legítimo",
      "Pantalón con ajustadores laterales metálicos",
      "Terminación artesanal 'Pick stitching' en bordes"
    ],
    sizes: ["48", "50", "52", "54", "56"],
    colors: [
      { name: "Azul Marino Intenso", hex: "#0f172a" },
      { name: "Gris Grafito Tiza", hex: "#475569" }
    ],
    images: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 4,
    isFeatured: false,
    isNew: true,
    isSale: false
  },

  // --- CAMISAS & REMERAS ---
  {
    id: 4,
    name: "Camisa Oxford Royal Cuello Italiano",
    slug: "camisa-oxford-royal-cuello-italiano",
    category: "camisas",
    categoryLabel: "Camisas & Remeras",
    price: 48900,
    originalPrice: 59000,
    badge: "Esencial",
    badgeType: "essential",
    rating: 4.9,
    reviewsCount: 88,
    description: "Un clásico atemporal confeccionado en algodón Royal Oxford de 100 hilos dobles. Cuello cutaway semirrígido ideal tanto con corbata como abierto para un look casual sofisticado.",
    fabric: "100% Algodón Pima de Fibra Extra Larga (100/2)",
    fit: "Custom Fit (Entallado Medio)",
    details: [
      "Tratamiento Easy-Iron para un planchado rápido",
      "Botones de nácar genuino grabados con láser",
      "Puño simple redondeado con ojal para gemelos",
      "Refuerzos laterales 'gusset' en bajo de camisa"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Blanco Puro", hex: "#ffffff" },
      { name: "Celeste Cielo", hex: "#bfdbfe" },
      { name: "Rosa Pálido", hex: "#fed7aa" }
    ],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 25,
    isFeatured: true,
    isNew: false,
    isSale: true
  },
  {
    id: 5,
    name: "Camisa de Lino Francés Riviera",
    slug: "camisa-lino-frances-riviera",
    category: "camisas",
    categoryLabel: "Camisas & Remeras",
    price: 54900,
    originalPrice: 65000,
    badge: "Verano",
    badgeType: "summer",
    rating: 4.8,
    reviewsCount: 51,
    description: "Frescura inigualable y textura noble. Camisa de lino puro lavado para una caída suave y sin rigidez. Cuello mao o italiano suave, perfecta para días cálidos y atardeceres de verano.",
    fabric: "100% Lino Natural de Normandía",
    fit: "Relaxed Fit",
    details: [
      "Prelavado 'garment washed' que evita encogimiento",
      "Tejido transpirable e hipoalergénico",
      "Bolsillo frontal minimalista",
      "Manga regulable para arremangar con presilla"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Arena Natural", hex: "#e5dcc3" },
      { name: "Blanco Lino", hex: "#f8fafc" },
      { name: "Verde Oliva Suave", hex: "#849673" }
    ],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 14,
    isFeatured: false,
    isNew: true,
    isSale: false
  },
  {
    id: 6,
    name: "Remera Pima Cotton Heavyweight 240g",
    slug: "remera-pima-cotton-heavyweight",
    category: "camisas",
    categoryLabel: "Camisas & Remeras",
    price: 28900,
    originalPrice: 34000,
    badge: "Top Calidad",
    badgeType: "quality",
    rating: 4.9,
    reviewsCount: 114,
    description: "La remera básica definitiva. Tejida con el mejor algodón Pima peruano en gramaje pesado de 240g/m2 que no transparenta, mantiene la estructura tras los lavados y ofrece un tacto sedoso excepcional.",
    fabric: "100% Algodón Pima Peruano Peinado",
    fit: "Boxy Regular Fit",
    details: [
      "Cuello acanalado de 2.5cm indeformable",
      "Costuras reforzadas en hombros y sisa",
      "Tratamiento anti-pilling",
      "Teñido reactivo que mantiene el color negro profundo"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Negro Profundo", hex: "#111827" },
      { name: "Blanco Óptico", hex: "#ffffff" },
      { name: "Gris Carbón Melange", hex: "#374151" }
    ],
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 35,
    isFeatured: true,
    isNew: false,
    isSale: false
  },
  {
    id: 7,
    name: "Remera Henley Manga Larga Waffle Knit",
    slug: "remera-henley-manga-larga-waffle",
    category: "camisas",
    categoryLabel: "Camisas & Remeras",
    price: 38500,
    originalPrice: 46000,
    badge: "Nuevo",
    badgeType: "new",
    rating: 4.7,
    reviewsCount: 33,
    description: "Tejido térmico gofrado 'waffle' con cartera delantera de 3 botones en contraste. Diseñada para lucir sola o en capas debajo de chaquetas y sobrecamisas.",
    fabric: "96% Algodón Peinado, 4% Elastano",
    fit: "Athletic Slim",
    details: [
      "Cartera frontal reforzada con ribetes",
      "Puños acanalados elásticos",
      "Trama gofrada que retiene el calor corporal",
      "Costuras planas que evitan roces"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Crudo Almendra", hex: "#e7e0d3" },
      { name: "Verde Militar", hex: "#4b5320" },
      { name: "Azul Marino", hex: "#1e293b" }
    ],
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 19,
    isFeatured: false,
    isNew: true,
    isSale: false
  },

  // --- PANTALONES & JEANS ---
  {
    id: 8,
    name: "Pantalón Chino Sartorial Stretch",
    slug: "pantalon-chino-sartorial-stretch",
    category: "pantalones",
    categoryLabel: "Pantalones & Jeans",
    price: 52900,
    originalPrice: 62000,
    badge: "Más Vendido",
    badgeType: "bestseller",
    rating: 4.9,
    reviewsCount: 74,
    description: "El equilibrio exacto entre la comodidad de un chino y la elegancia de la sastrería. Confeccionado en sarga de algodón elástico con bolsillos traseros ojal y pretina con agarre interior antideslizante para la camisa.",
    fabric: "97% Algodón Twill, 3% Spandex",
    fit: "Tapered Slim Fit",
    details: [
      "Pretina interior 'shirt-gripper' engomada",
      "Bolsillo portamonedas secreto oculto",
      "Cierre YKK metálico de alta resistencia",
      "Ruedo listo para doblar o dobladillo clásico"
    ],
    sizes: ["40", "42", "44", "46", "48", "50"],
    colors: [
      { name: "Camel Tostado", hex: "#c19a6b" },
      { name: "Azul Marino", hex: "#1e293b" },
      { name: "Gris Cemento", hex: "#64748b" }
    ],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 22,
    isFeatured: true,
    isNew: false,
    isSale: true
  },
  {
    id: 9,
    name: "Jean Selvage Denim Raw 14oz",
    slug: "jean-selvage-denim-raw-14oz",
    category: "pantalones",
    categoryLabel: "Pantalones & Jeans",
    price: 64500,
    originalPrice: 78000,
    badge: "Premium Denim",
    badgeType: "premium",
    rating: 5.0,
    reviewsCount: 46,
    description: "Auténtico orillo japonés 'selvage' tejido en telares antiguos de lanzadera. Denim puro crudo sin lavar que con el tiempo se amolda al cuerpo y genera desgastes únicos personalizados con el uso diario.",
    fabric: "100% Algodón Japonés Kuroki 14oz Orillo Rojo",
    fit: "Straight Slim Fit",
    details: [
      "Ribete de orillo visible rojo en costura lateral",
      "Remaches ocultos de cobre estampado",
      "Parche trasero de cuero vacuno curtido al tanino",
      "Botones 'donut' metálicos estilo vintage"
    ],
    sizes: ["40", "42", "44", "46", "48"],
    colors: [
      { name: "Raw Deep Indigo", hex: "#1b263b" }
    ],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 9,
    isFeatured: true,
    isNew: false,
    isSale: false
  },
  {
    id: 10,
    name: "Pantalón de Vestir Sartorial con Pinzas",
    slug: "pantalon-vestir-sartorial-pinzas",
    category: "pantalones",
    categoryLabel: "Pantalones & Jeans",
    price: 68900,
    originalPrice: 82000,
    badge: "Tendencia",
    badgeType: "trending",
    rating: 4.8,
    reviewsCount: 39,
    description: "Corte napolitano de tiro medio-alto con doble pinza delantera y hebillas reguladoras laterales (side-adjusters) que prescinden del uso de cinturón. Elegancia formal insuperable.",
    fabric: "70% Lana Tropical, 28% Poliéster Reciclado, 2% Elastano",
    fit: "Classic Tailored Tapered",
    details: [
      "Doble pinza inglesa frontal profunda",
      "Ajustadores laterales metálicos regulables",
      "Bragueta con cierre y botón cruzado interior",
      "Dobladillo vuelto de 4cm en el bajo"
    ],
    sizes: ["42", "44", "46", "48", "50", "52"],
    colors: [
      { name: "Gris Plomo Marengo", hex: "#334155" },
      { name: "Negro Clásico", hex: "#0f172a" },
      { name: "Marrón Visón", hex: "#5c4033" }
    ],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 11,
    isFeatured: false,
    isNew: true,
    isSale: false
  },

  // --- ABRIGOS & CAMPERAS ---
  {
    id: 11,
    name: "Campera Biker Cuero Vacuno Genuino",
    slug: "campera-biker-cuero-vacuno-genuino",
    category: "abrigos",
    categoryLabel: "Abrigos & Camperas",
    price: 249000,
    originalPrice: 295000,
    badge: "Pieza Ícono",
    badgeType: "exclusive",
    rating: 5.0,
    reviewsCount: 58,
    description: "Confeccionada en cuero vacuno plena flor seleccionado a mano. Textura suave, gran cuerpo y detalles metálicos en acabado peltre envejecido. Una prenda legendaria hecha para durar toda la vida.",
    fabric: "100% Cuero Vacuno Plena Flor | Forro Acolchado Térmico",
    fit: "Regular Moto Fit",
    details: [
      "Cierres YKK metálicos de 10mm en frente y bolsillos",
      "Charreteras con broches de presión en hombros",
      "Cuello con solapas abotonables",
      "Bolsillo interno portabilletera con cremallera"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Negro Mate Envejecido", hex: "#171717" },
      { name: "Marrón Chocolate Rústico", hex: "#3e2723" }
    ],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 5,
    isFeatured: true,
    isNew: false,
    isSale: true
  },
  {
    id: 12,
    name: "Sobretodo Wool-Blend Chesterfield",
    slug: "sobretodo-wool-blend-chesterfield",
    category: "abrigos",
    categoryLabel: "Abrigos & Camperas",
    price: 198000,
    originalPrice: 235000,
    badge: "Colección Invierno",
    badgeType: "trending",
    rating: 4.9,
    reviewsCount: 31,
    description: "El sobretodo clásico de tres botones con largo por encima de la rodilla. Ideal para usar sobre trajes o para elevar un atuendo casual de jean y sweater cuello tortuga.",
    fabric: "80% Lana Merino, 20% Poliamida Italiana",
    fit: "Tailored Overcoat Fit",
    details: [
      "Bolsillos con solapa y bolsillo de pecho para pañuelo",
      "Forro completo acolchado térmico de satén",
      "Solapa de muesca clásica con ojal para flor",
      "Abertura posterior central amplia"
    ],
    sizes: ["48", "50", "52", "54", "56"],
    colors: [
      { name: "Camel Clásico", hex: "#c19a6b" },
      { name: "Gris Melange Oscuro", hex: "#374151" },
      { name: "Negro Azabache", hex: "#0f172a" }
    ],
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 8,
    isFeatured: true,
    isNew: true,
    isSale: false
  },
  {
    id: 13,
    name: "Sweater Cuello Tortuga Lana Merino Extrafina",
    slug: "sweater-cuello-tortuga-merino",
    category: "abrigos",
    categoryLabel: "Abrigos & Camperas",
    price: 62000,
    originalPrice: 72000,
    badge: "Esencial",
    badgeType: "essential",
    rating: 4.8,
    reviewsCount: 45,
    description: "Tejido en galga 14 con pura lana merino italiana de finura ultra delgada. Aislante térmico natural, suave al tacto y no pica en la piel. Impecable bajo blazer o abrigo.",
    fabric: "100% Pura Lana Merino Australiana Extrafina",
    fit: "Slim Fit",
    details: [
      "Cuello tortuga acanalado que mantiene su forma",
      "Terminaciones tubulares en cuello, puños y bajo",
      "Propiedades naturales antibacterianas y termorreguladoras",
      "Lavable a mano en agua fría"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Borgoña Vino", hex: "#4c0519" },
      { name: "Negro Clásico", hex: "#111827" },
      { name: "Crudo Nieve", hex: "#f3f4f6" }
    ],
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 16,
    isFeatured: false,
    isNew: false,
    isSale: false
  },
  {
    id: 14,
    name: "Parka Técnica Impermeable con Capucha",
    slug: "parka-tecnica-impermeable",
    category: "abrigos",
    categoryLabel: "Abrigos & Camperas",
    price: 168000,
    originalPrice: 199000,
    badge: "Resistente al Agua",
    badgeType: "quality",
    rating: 4.7,
    reviewsCount: 22,
    description: "Diseñada para climas adversos y días de lluvia sin resignar elegancia urbana. Membrana cortavientos de 10.000mm, relleno térmico reciclado y capucha ergonómica ajustable.",
    fabric: "100% Poliéster Técnico Hidrófugo DWR",
    fit: "Regular Urban Fit",
    details: [
      "Costuras termoselladas 100% a prueba de filtraciones",
      "Cierre doble cursor bidireccional cubierto con solapa imantada",
      "6 bolsillos funcionales (2 calientamanos con polar interior)",
      "Cordones elásticos reflectantes en capucha y cintura"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Verde Militar Olivo", hex: "#3f4e3c" },
      { name: "Negro Técnico", hex: "#18181b" }
    ],
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 10,
    isFeatured: false,
    isNew: true,
    isSale: false
  },

  // --- CALZADO ---
  {
    id: 15,
    name: "Zapatos Oxford Brogue Cuero Vacuno",
    slug: "zapatos-oxford-brogue-cuero-vacuno",
    category: "calzado",
    categoryLabel: "Calzado Masculino",
    price: 119000,
    originalPrice: 139000,
    badge: "Artesanal",
    badgeType: "bestseller",
    rating: 4.9,
    reviewsCount: 67,
    description: "Zapatos de vestir formales con puntera perforada tipo semi-brogue. Confeccionados en cuero box-calf flor de primera selección con vira cosida Goodyear Welted para máxima durabilidad y reparabilidad.",
    fabric: "100% Cuero Vacuno Flor Box-Calf | Suela de Cuero Cosida",
    fit: "Horma Clásica Europea (True to size)",
    details: [
      "Construcción artesanal cosida Goodyear Welted",
      "Forro interior 100% cuero absorbente de humedad",
      "Taco con inserción de goma antideslizante",
      "Cordones de algodón encerado extra duraderos"
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Coñac Suizo", hex: "#8d4925" },
      { name: "Negro Pulido Espejo", hex: "#171717" }
    ],
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 15,
    isFeatured: true,
    isNew: false,
    isSale: true
  },
  {
    id: 16,
    name: "Chelsea Boots Cuero Gamuzado Tabaco",
    slug: "chelsea-boots-cuero-gamuzado-tabaco",
    category: "calzado",
    categoryLabel: "Calzado Masculino",
    price: 128000,
    originalPrice: 148000,
    badge: "Tendencia",
    badgeType: "trending",
    rating: 4.9,
    reviewsCount: 82,
    description: "La bota urbana por excelencia. Silueta estilizada en gamuza vacuno de pelo corto tratada con protector impermeable. Elásticos laterales reforzados y tirador trasero de tela en espiga.",
    fabric: "100% Cuero Gamuzado Repelente al Agua | Suela Crepé Natural",
    fit: "Horma Estilizada Italiana",
    details: [
      "Tratamiento hidrorrepelente que previene manchas",
      "Suela crepé amortiguada para comodidad todo el día",
      "Elásticos laterales de alta tensión que no se deforman",
      "Plantilla anatómica de cuero con espuma de memoria"
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Tabaco Cálido", hex: "#6f4e37" },
      { name: "Gris Humo Marengo", hex: "#4b5563" },
      { name: "Negro Ónix", hex: "#18181b" }
    ],
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 12,
    isFeatured: true,
    isNew: true,
    isSale: false
  },
  {
    id: 17,
    name: "Zapatillas Minimalist Leather Blancas",
    slug: "zapatillas-minimalist-leather-blancas",
    category: "calzado",
    categoryLabel: "Calzado Masculino",
    price: 89900,
    originalPrice: 105000,
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: 4.8,
    reviewsCount: 140,
    description: "Sneaker de diseño sobrio sin marcas visibles exteriores. Piel lisa de ternero suave montada sobre una suela cosida Margom de caucho natural. El comodín para combinar con traje o pantalón chino.",
    fabric: "100% Cuero Ternero Liso | Suela Cosida Caucho 100%",
    fit: "Standard Sneaker",
    details: [
      "Suela cosida 360° para que nunca se despegue",
      "Talón acolchado con forro de cuero suave",
      "Plantilla removible termoformada antibacterial",
      "Incluye cordones encerados extra de repuesto"
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Blanco Monocromo", hex: "#ffffff" },
      { name: "Blanco con Talonera Verde Bosque", hex: "#14532d" }
    ],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 28,
    isFeatured: true,
    isNew: false,
    isSale: true
  },
  {
    id: 18,
    name: "Mocasines Penny Loafer Cuero Lustrado",
    slug: "mocasines-penny-loafer-cuero",
    category: "calzado",
    categoryLabel: "Calzado Masculino",
    price: 112000,
    originalPrice: 129000,
    badge: "Clásico",
    badgeType: "essential",
    rating: 4.9,
    reviewsCount: 37,
    description: "Mocasín tradicional con antifaz penny frontal. Cosido a mano en la pala para un calce flexible que se adapta al empeine. Un básico imprescindible para usar con o sin medias en primavera/verano.",
    fabric: "100% Cuero Vacuno Plena Flor Anilina",
    fit: "Comfort Loafer",
    details: [
      "Pala cosida a mano artesanalmente con hilo encerado",
      "Suela mixta cuero con media plantilla de caucho antiderrapante",
      "Forro interior completo en cuero natural transpirable",
      "Acabado lustrado a muñeca con ceras naturales"
    ],
    sizes: ["40", "41", "42", "43", "44"],
    colors: [
      { name: "Borgoña Caoba Profundo", hex: "#4a0404" },
      { name: "Negro Azabache", hex: "#111827" }
    ],
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 9,
    isFeatured: false,
    isNew: false,
    isSale: false
  },

  // --- ACCESORIOS & MARROQUINERÍA ---
  {
    id: 19,
    name: "Cinturón Reversible Cuero Curtido Vegetal",
    slug: "cinturon-reversible-cuero-curtido",
    category: "accesorios",
    categoryLabel: "Accesorios & Marroquinería",
    price: 32000,
    originalPrice: 38000,
    badge: "2 en 1",
    badgeType: "essential",
    rating: 4.8,
    reviewsCount: 92,
    description: "Hebilla giratoria inteligente que permite alternar entre lado Negro y lado Café con un simple giro de 180°. Confeccionado en cuero vacuno grueso de curtido vegetal de 35mm de ancho.",
    fabric: "100% Cuero Vacuno Curtición Vegetal 3.8mm",
    fit: "35mm de Ancho (Universal para traje o jeans)",
    details: [
      "Hebilla de aleación de zinc acabado níquel satinado mate",
      "Lado A: Negro Mate Graneado / Lado B: Café Tabaco Liso",
      "Bordes pulidos y pintados a mano",
      "Viene en caja de presentación rígida para regalo"
    ],
    sizes: ["85cm", "90cm", "95cm", "100cm", "105cm", "110cm"],
    colors: [
      { name: "Duo Negro / Café", hex: "#2b2b2b" }
    ],
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 40,
    isFeatured: true,
    isNew: false,
    isSale: false
  },
  {
    id: 20,
    name: "Reloj Cronógrafo Vanguard Minimalist 40mm",
    slug: "reloj-cronografo-vanguard-minimalist",
    category: "accesorios",
    categoryLabel: "Accesorios & Marroquinería",
    price: 135000,
    originalPrice: 165000,
    badge: "Exclusivo",
    badgeType: "exclusive",
    rating: 5.0,
    reviewsCount: 34,
    description: "Caja de acero inoxidable quirúrgico 316L pulido con cristal de zafiro antirreflejos de alta resistencia a rayaduras. Movimiento de cuarzo japonés Seiko VK64 meca-quartz con cronógrafo activo.",
    fabric: "Acero Inoxidable 316L, Cristal de Zafiro, Correa Cuero Italiano",
    fit: "Caja de 40mm / Espesor 10.5mm",
    details: [
      "Cristal de zafiro sintético irrayable con tratamiento anti-reflejo",
      "Resistencia al agua de 5 ATM (50 metros)",
      "Correa de cuero genuino italiano con pasador de cambio rápido",
      "Esfera negra mate con manecillas luminiscentes Super-LumiNova"
    ],
    sizes: ["40mm Diámetro"],
    colors: [
      { name: "Esfera Negra / Correa Café", hex: "#1f2937" },
      { name: "Esfera Blanca / Correa Negra", hex: "#f3f4f6" }
    ],
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 8,
    isFeatured: true,
    isNew: true,
    isSale: true
  },
  {
    id: 21,
    name: "Billetera Slim Bifold con Bloqueo RFID",
    slug: "billetera-slim-bifold-cuero-rfid",
    category: "accesorios",
    categoryLabel: "Accesorios & Marroquinería",
    price: 26500,
    originalPrice: 32000,
    badge: "Esencial",
    badgeType: "essential",
    rating: 4.9,
    reviewsCount: 86,
    description: "Perfil ultradelgado de tan solo 8mm que no abulta el bolsillo delantero o trasero. Capacidad para hasta 10 tarjetas, billetes estirados y protección electromagnética RFID contra clonación de tarjetas.",
    fabric: "100% Cuero Vacuno Pull-Up de Curtido Vegetal",
    fit: "Ultra Slim (10.5cm x 8cm x 0.8cm)",
    details: [
      "Malla interna con blindaje RFID que bloquea frecuencias 13.56 MHz",
      "6 ranuras para tarjetas de crédito de acceso rápido",
      "2 bolsillos ocultos para documentos o billetes",
      "Tira de extracción rápida 'pull-tab' para tarjetas secundarias"
    ],
    sizes: ["Único"],
    colors: [
      { name: "Coñac Vintage Pull-Up", hex: "#854d0e" },
      { name: "Negro Mate Carbón", hex: "#18181b" }
    ],
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 35,
    isFeatured: false,
    isNew: false,
    isSale: false
  },
  {
    id: 22,
    name: "Corbata de Seda Natural Jacquard",
    slug: "corbata-seda-natural-jacquard",
    category: "accesorios",
    categoryLabel: "Accesorios & Marroquinería",
    price: 24500,
    originalPrice: 29000,
    badge: "Seda 100%",
    badgeType: "quality",
    rating: 4.8,
    reviewsCount: 41,
    description: "Tejida en telares Jacquard en Como, Italia. Pura seda natural con estructura de microdibujo geométrico que aporta textura y luminosidad discreta al nudo formal.",
    fabric: "100% Pura Seda Natural Mulberry | Entretela de Lana Virgen",
    fit: "Ancho Clásico 7.5cm (Largo 150cm)",
    details: [
      "Entretela de doble capa de pura lana que recupera el nudo sin arrugas",
      "Trabilla trasera sujeta-pala en la misma seda",
      "Borde rematado a mano con puntada bar-tack",
      "Largo estándar de 150cm para nudo simple o Windsor"
    ],
    sizes: ["7.5cm Ancho"],
    colors: [
      { name: "Azul Marino con Microestampa", hex: "#1e3a8a" },
      { name: "Bordeaux Micro-punto", hex: "#881337" },
      { name: "Plata Grafito", hex: "#64748b" }
    ],
    images: [
      "https://images.unsplash.com/photo-1589756033938-7ea1166e67e0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 20,
    isFeatured: false,
    isNew: false,
    isSale: false
  },
  {
    id: 23,
    name: "Bufanda de Cachemira & Lana Merino Escocesa",
    slug: "bufanda-cachemira-lana-merino",
    category: "accesorios",
    categoryLabel: "Accesorios & Marroquinería",
    price: 36000,
    originalPrice: 44000,
    badge: "Invierno",
    badgeType: "trending",
    rating: 4.9,
    reviewsCount: 27,
    description: "Tacto suntuoso y abrigo liviano para días de frío. Tejida con hilados nobles de cachemira y lana virgen con flecos artesanales torsionados en los extremos.",
    fabric: "30% Cachemira, 70% Lana Merino Suave",
    fit: "180cm x 32cm con flecos",
    details: [
      "Tejido en espiga suave y flexible",
      "Flecos trenzados a mano de 8cm",
      "Aislación térmica superior sin peso excesivo",
      "Tratamiento antialérgico suave contra el cuello"
    ],
    sizes: ["Único (180x32cm)"],
    colors: [
      { name: "Tartán Gris & Carbón", hex: "#475569" },
      { name: "Camel Liso", hex: "#c19a6b" }
    ],
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 17,
    isFeatured: false,
    isNew: true,
    isSale: false
  },
  {
    id: 24,
    name: "Bolso Weekender de Viaje Cuero & Lona Encerada",
    slug: "bolso-weekender-viaje-cuero-lona",
    category: "accesorios",
    categoryLabel: "Accesorios & Marroquinería",
    price: 142000,
    originalPrice: 175000,
    badge: "Exclusivo",
    badgeType: "exclusive",
    rating: 5.0,
    reviewsCount: 38,
    description: "El compañero insustituible para escapadas de fin de semana o viajes ejecutivos. Lona de algodón encerado impermeable de 18oz con apliques y manijas en cuero vacuno grueso de talabartería.",
    fabric: "Lona Encerada Heavyweight 18oz + Cuero Vacuno Legítimo",
    fit: "Capacidad 45 Litros (Apta para cabina de avión)",
    details: [
      "Compartimento lateral aislado para zapatos con ventilación",
      "Correa de hombro desmontable de cuero acolchada",
      "Base reforzada con topes metálicos protectores",
      "Bolsillo interior con cremallera y organizador de cables"
    ],
    sizes: ["52cm x 30cm x 28cm"],
    colors: [
      { name: "Verde Bosque & Cuero Café", hex: "#2e3b2e" },
      { name: "Gris Carbón & Cuero Negro", hex: "#1f2937" }
    ],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80"
    ],
    stock: 6,
    isFeatured: true,
    isNew: false,
    isSale: true
  }
];

// Categorías del E-commerce
const CATEGORIES = [
  { id: "todos", name: "Todos los Productos", icon: "th-large" },
  { id: "trajes", name: "Trajes & Blazers", icon: "user-tie", desc: "Sastrería contemporánea italiana, cortes slim y telas nobles." },
  { id: "camisas", name: "Camisas & Remeras", icon: "tshirt", desc: "Algodón Pima peruano, lino natural y cuellos de diseño." },
  { id: "pantalones", name: "Pantalones & Jeans", icon: "columns", desc: "Chinos elastizados, denim selvage japonés y pantalones de vestir." },
  { id: "abrigos", name: "Abrigos & Camperas", icon: "snowflake", desc: "Camperas de cuero genuino, sobretodos de lana y sweaters térmicos." },
  { id: "calzado", name: "Calzado Masculino", icon: "shoe-prints", desc: "Zapatos Oxford cosidos Goodyear, Chelsea boots y zapatillas de piel." },
  { id: "accesorios", name: "Accesorios & Marroquinería", icon: "gem", desc: "Relojes cronógrafos, cinturones reversibles y billeteras RFID." }
];

// Cupones de descuento válidos
const COUPONS = {
  "VALENTI10": { discountPercent: 10, description: "10% de descuento en tu orden" },
  "HOMBRE2026": { discountPercent: 15, description: "15% OFF especial nueva temporada" },
  "PRIMERACOMPRA": { discountPercent: 20, description: "20% OFF de bienvenida en tu primera compra" }
};

// Exportar globalmente
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PRODUCTS, CATEGORIES, COUPONS };
}
