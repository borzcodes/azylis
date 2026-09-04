/* ============================================================
   Azylis — i18n
   Keyed off the English source text rather than data-i18n
   attributes, so copy rendered by product.js / shop.js is covered
   too. Order in each array: [fr, ar, es].
   Proper nouns — product names, people, SKUs, prices — are absent
   on purpose and pass through untouched.
   ============================================================ */

(function () {
  "use strict";

  var LANGS = ["en", "fr", "ar", "es"];
  var IDX   = { fr: 0, ar: 1, es: 2 };

  var T = {
    /* ---- chrome ---- */
    "Home": ["Accueil", "الرئيسية", "Inicio"],
    "Shop": ["Boutique", "المتجر", "Tienda"],
    "Collections": ["Collections", "المجموعات", "Colecciones"],
    "About": ["À propos", "من نحن", "Nosotros"],
    "Contact": ["Contact", "اتصل بنا", "Contacto"],
    "Search": ["Rechercher", "بحث", "Buscar"],
    "Account": ["Compte", "الحساب", "Cuenta"],
    "Bag": ["Panier", "السلة", "Bolsa"],
    "Menu": ["Menu", "القائمة", "Menú"],

    /* ---- hero ---- */
    "Framed for how": ["Des montures à la mesure", "نظارات تُصنع", "Monturas a la medida"],
    "you see the world": ["de votre regard", "على مقاس نظرتك للعالم", "de tu mirada"],
    "Azylis frames are shaped around real faces — lightweight acetate and hand-polished hinges for a fit you'll forget you're wearing.":
      ["Les montures Azylis épousent de vrais visages : acétate léger et charnières polies à la main, pour un confort que vous oublierez de porter.",
       "تُصمَّم نظارات أزيليس لتناسب الوجوه الحقيقية: أسيتات خفيف ومفصلات مصقولة يدويًا، لراحة تنسيك أنك ترتديها.",
       "Las monturas Azylis se ajustan a rostros reales: acetato ligero y bisagras pulidas a mano, para un ajuste que olvidarás llevar."],
    "Shop the edit": ["Voir la sélection", "تسوّق المجموعة", "Ver la selección"],
    "Find my fit": ["Trouver ma taille", "اعرف مقاسي", "Encontrar mi talla"],
    "Feather-light build": ["Légèreté absolue", "خفة متناهية", "Ligereza absoluta"],
    "18 g of Italian acetate": ["18 g d'acétate italien", "18 غرامًا من الأسيتات الإيطالي", "18 g de acetato italiano"],
    "Hand-finished hinges": ["Charnières finies à la main", "مفصلات بلمسة يدوية", "Bisagras acabadas a mano"],
    "Polished across five passes": ["Polies en cinq passages", "مصقولة على خمس مراحل", "Pulidas en cinco pasadas"],
    "Fit guarantee": ["Ajustement garanti", "ضمان المقاس", "Ajuste garantizado"],
    "30 days, adjusted free": ["30 jours, ajustement offert", "30 يومًا مع تعديل مجاني", "30 días, ajuste gratuito"],
    "Scroll": ["Défiler", "مرّر", "Desplazar"],

    /* ---- clarity ---- */
    "Built for Clarity.": ["Conçues pour la clarté.", "صُنعت من أجل الوضوح.", "Creadas para la claridad."],
    "Designed for You": ["Dessinées pour vous", "ومصمَّمة من أجلك", "Diseñadas para ti"],
    "Azylis Eyewear makes glasses designed for real faces, not mannequins. Every pair uses premium, lightweight materials and hand-polished hinges so your glasses feel completely natural.":
      ["Azylis dessine des lunettes pour de vrais visages, pas pour des mannequins. Chaque paire associe des matériaux légers haut de gamme et des charnières polies à la main, pour un port parfaitement naturel.",
       "تصنع أزيليس نظارات لوجوه حقيقية لا لعارضات. كل زوج يجمع بين مواد فاخرة خفيفة ومفصلات مصقولة يدويًا ليمنحك إحساسًا طبيعيًا تمامًا.",
       "Azylis crea gafas para rostros reales, no para maniquíes. Cada par combina materiales ligeros de alta gama y bisagras pulidas a mano para una sensación totalmente natural."],
    "Learn more": ["En savoir plus", "اعرف المزيد", "Saber más"],
    "Add new products": ["Voir les nouveautés", "أضف منتجات جديدة", "Ver novedades"],

    /* ---- the reel ---- */
    "Seen in Azylis": ["Vu en Azylis", "إطلالات أزيليس", "Visto en Azylis"],
    "Casablanca — 2026": ["Casablanca — 2026", "الدار البيضاء — 2026", "Casablanca — 2026"],

    /* ---- bento ---- */
    "Shop online, thrive in-store!": ["En ligne ou en boutique !", "تسوّق أونلاين، وجرّب في المتجر!", "¡Compra online, disfruta en tienda!"],
    "Online convenience meets in-store expertise for your ultimate eyewear experience.":
      ["La simplicité du web et l'expertise en boutique, pour une expérience optique complète.",
       "سهولة الإنترنت وخبرة المتجر معًا، لتجربة نظارات متكاملة.",
       "La comodidad online se une a la experiencia en tienda para una experiencia óptica completa."],
    "How to know the glasses that fit you":
      ["Comment savoir quelles lunettes vous vont",
       "كيف تعرف النظارة التي تناسبك",
       "Cómo saber qué gafas te quedan bien"],
    "Three checks. Get them right and any frame you love will sit where it should.":
      ["Trois repères. Respectez-les et toute monture qui vous plaît tombera juste.",
       "ثلاث خطوات؛ اضبطها وستستقر أي نظارة تحبّها في مكانها الصحيح.",
       "Tres comprobaciones. Acertadas, cualquier montura que te guste caerá en su sitio."],
    "Contrast your face shape": ["Jouez le contraste avec votre visage", "اختر ما يعاكس شكل وجهك", "Contrasta la forma de tu rostro"],
    "Round and oval faces are flattered by angular frames; square and heart-shaped faces by rounder ones. Opposites, not echoes.":
      ["Les visages ronds et ovales sont mis en valeur par des montures anguleuses ; les visages carrés et en cœur, par des formes plus rondes. Le contraire, pas l'écho.",
       "الوجوه المستديرة والبيضاوية تبرزها الإطارات الحادة الزوايا، والوجوه المربّعة والقلبية تناسبها الأشكال الأكثر استدارة: العكس لا التكرار.",
       "Los rostros redondos y ovalados lucen mejor con monturas angulosas; los cuadrados y de corazón, con formas más redondeadas. Lo contrario, no el eco."],
    "Match the width to your face": ["Ajustez la largeur à votre visage", "طابِق العرض مع عرض وجهك", "Ajusta el ancho a tu rostro"],
    "The frame should finish where your face does, never past your temples.":
      ["La monture doit s'arrêter là où s'arrête votre visage, jamais au-delà des tempes.",
       "يجب أن ينتهي الإطار حيث ينتهي وجهك، دون أن يتجاوز الصدغين.",
       "La montura debe terminar donde termina tu rostro, nunca más allá de las sienes."],
    "Read the numbers on the arm": ["Lisez les chiffres sur la branche", "اقرأ الأرقام على ذراع النظارة", "Lee los números de la varilla"],
    "Lens width, bridge and temple length are printed inside every temple. Copy them from a pair that already fits.":
      ["Largeur du verre, pont et longueur de branche sont inscrits à l'intérieur de chaque branche. Reprenez-les d'une paire qui vous va déjà.",
       "عرض العدسة ومقاس الجسر وطول الذراع مطبوعة داخل كل ذراع؛ انقلها من نظارة تناسبك بالفعل.",
       "El ancho de la lente, el puente y la longitud de la varilla vienen impresos dentro de cada varilla. Cópialos de unas gafas que ya te queden bien."],

    /* ---- perks strip ---- */
    "Total protection": ["Protection totale", "حماية كاملة", "Protección total"],
    "UV 400 protection": ["Protection UV 400", "حماية UV 400", "Protección UV 400"],
    "Always clean": ["Toujours propres", "دائمًا نظيفة", "Siempre limpias"],
    "Lens cloth included": ["Chiffon inclus", "قطعة تنظيف مرفقة", "Gamuza incluida"],
    "Gift ready": ["Prêtes à offrir", "جاهزة كهدية", "Listas para regalar"],
    "Free pouch with every pair": ["Une pochette offerte", "جراب مجاني مع كل نظارة", "Funda gratis con cada par"],

    /* ---- shelves & cards ---- */
    "Bestsellers": ["Meilleures ventes", "الأكثر مبيعًا", "Más vendidas"],
    "50% off": ["-50 %", "خصم 50٪", "50% de descuento"],
    "New Arrivals": ["Nouveautés", "وصل حديثًا", "Novedades"],
    "See all": ["Tout voir", "عرض الكل", "Ver todo"],
    "Best seller": ["Meilleure vente", "الأكثر مبيعًا", "Más vendida"],
    "Top pick": ["Coup de cœur", "الاختيار الأفضل", "Favorita"],
    "New": ["Nouveau", "جديد", "Nuevo"],
    "Just in": ["Vient d'arriver", "وصل للتو", "Recién llegado"],
    "Flash sale": ["Vente flash", "عرض خاطف", "Oferta flash"],
    "Lightweight": ["Ultra-léger", "خفيف الوزن", "Ultraligero"],
    "Sun": ["Solaire", "شمسية", "De sol"],
    "Glasses": ["Lunettes de vue", "نظارات طبية", "Gafas graduadas"],
    "Sunglasses": ["Lunettes de soleil", "نظارات شمسية", "Gafas de sol"],
    "2 colours": ["2 coloris", "لونان", "2 colores"],
    "3 colours": ["3 coloris", "3 ألوان", "3 colores"],
    "4 colours": ["4 coloris", "4 ألوان", "4 colores"],

    /* ---- categories ---- */
    "Shop by category": ["Acheter par catégorie", "تسوّق حسب الفئة", "Comprar por categoría"],
    "Men": ["Homme", "رجال", "Hombre"],
    "Women": ["Femme", "نساء", "Mujer"],
    "Lenses": ["Verres", "العدسات", "Lentes"],
    "Sunglasses men": ["Solaires homme", "شمسية رجالية", "Gafas de sol hombre"],
    "Sunglasses women": ["Solaires femme", "شمسية نسائية", "Gafas de sol mujer"],
    "Lenses men": ["Optique homme", "عدسات رجالية", "Lentes hombre"],
    "Lenses women": ["Optique femme", "عدسات نسائية", "Lentes mujer"],
    "Clip-ons": ["Lunettes à clips", "نظارات بكليبس", "Gafas con clip"],
    "Tinted frames cut a little squarer and a little wider, for faces that need the room.":
      ["Des montures teintées plus carrées et plus larges, pour les visages qui ont besoin d'espace.",
       "مونتيرات ملوّنة أكثر تربيعًا واتساعًا، للوجوه التي تحتاج مساحة أكبر.",
       "Monturas tintadas más cuadradas y anchas, para rostros que necesitan más espacio."],
    "Tinted frames with softer geometry, balanced to sit light on the bridge.":
      ["Des montures teintées à la géométrie plus douce, équilibrées pour poser léger sur le nez.",
       "مونتيرات ملوّنة بهندسة أنعم، متوازنة لتستقر بخفة على الأنف.",
       "Monturas tintadas de geometría más suave, equilibradas para posarse ligeras sobre la nariz."],
    "Optical frames that take a magnetic sun clip — one pair that works indoors and out.":
      ["Des montures optiques qui reçoivent un clip solaire magnétique : une seule paire, dedans comme dehors.",
       "مونتيرات بصرية تقبل كليبس شمسي مغناطيسي: زوج واحد يناسب الداخل والخارج.",
       "Monturas ópticas que admiten un clip solar magnético: un solo par para dentro y fuera."],
    "Discover": ["Découvrir", "اكتشف", "Descubrir"],

    /* ---- testimonials ---- */
    "What our clients say": ["Ce que disent nos clients", "آراء عملائنا", "Lo que dicen nuestros clientes"],
    "“I bought a pair of sun frames from Azylis and I am completely satisfied. The quality is exceptional and the service was excellent.”":
      ["« J'ai acheté des lunettes de soleil chez Azylis et j'en suis entièrement satisfait. La qualité est exceptionnelle et le service excellent. »",
       "«اشتريت نظارة شمسية من أزيليس وأنا راضٍ تمامًا. الجودة استثنائية والخدمة ممتازة.»",
       "«Compré unas gafas de sol en Azylis y estoy totalmente satisfecho. La calidad es excepcional y el servicio, excelente.»"],
    "“Delighted with my purchase. The frames are beautifully made and delivery was quick, right across the country.”":
      ["« Ravi de mon achat. Les montures sont superbement finies et la livraison a été rapide partout au Maroc. »",
       "«سعيد جدًا بعملية الشراء. المونتير متقن الصنع والتوصيل كان سريعًا في كل أنحاء المغرب.»",
       "«Encantado con mi compra. Las monturas están muy bien hechas y la entrega fue rápida en todo el país.»"],
    "“The experience at Azylis was fantastic. The staff were helpful and the glasses I bought were perfect.”":
      ["« L'expérience chez Azylis a été fantastique. Le personnel était serviable et les lunettes achetées étaient parfaites. »",
       "«كانت التجربة في أزيليس رائعة. الفريق كان متعاونًا والنظارات التي اشتريتها مثالية.»",
       "«La experiencia en Azylis fue fantástica. El personal fue muy atento y las gafas que compré eran perfectas.»"],
    "“Azylis offers an exceptional shopping experience — an easy site and fast delivery. I recommend them warmly.”":
      ["« Azylis offre une expérience d'achat exceptionnelle : un site convivial et une livraison rapide. Je recommande vivement. »",
       "«تقدّم أزيليس تجربة شراء استثنائية: موقع سهل وتوصيل سريع. أنصح بها بشدة.»",
       "«Azylis ofrece una experiencia de compra excepcional: una web sencilla y entrega rápida. La recomiendo mucho.»"],
    "“The fit guarantee is what sold me. They adjusted the temples twice, free, until the frames sat exactly right.”":
      ["« C'est l'ajustement garanti qui m'a convaincue. Ils ont repris les branches deux fois, gratuitement, jusqu'à ce que ce soit parfait. »",
       "«ما أقنعني هو ضمان المقاس. عدّلوا الذراعين مرتين مجانًا حتى استقرت النظارة تمامًا.»",
       "«Lo que me convenció fue el ajuste garantizado. Ajustaron las patillas dos veces, gratis, hasta que quedaron perfectas.»"],
    "“Light enough that I forget I am wearing them, which is exactly what was promised on the box.”":
      ["« Si légères que j'oublie que je les porte, exactement ce qui était promis sur la boîte. »",
       "«خفيفة لدرجة أنني أنسى أنني أرتديها، وهذا تمامًا ما وُعدت به.»",
       "«Tan ligeras que olvido que las llevo, justo lo que prometía la caja.»"],
    "Verified buyer, Casablanca": ["Acheteur vérifié, Casablanca", "مشترٍ موثوق، الدار البيضاء", "Comprador verificado, Casablanca"],
    "Verified buyer, Rabat": ["Acheteur vérifié, Rabat", "مشترٍ موثوق، الرباط", "Comprador verificado, Rabat"],
    "Verified buyer, Marrakech": ["Acheteuse vérifiée, Marrakech", "مشترية موثوقة، مراكش", "Compradora verificada, Marrakech"],
    "Verified buyer, Tangier": ["Acheteur vérifié, Tanger", "مشترٍ موثوق، طنجة", "Comprador verificado, Tánger"],
    "Verified buyer, Fès": ["Acheteuse vérifiée, Fès", "مشترية موثوقة، فاس", "Compradora verificada, Fez"],
    "Verified buyer, Agadir": ["Acheteur vérifié, Agadir", "مشترٍ موثوق، أكادير", "Comprador verificado, Agadir"],

    /* ---- faq ---- */
    "Frequently asked questions": ["Questions fréquentes", "الأسئلة الشائعة", "Preguntas frecuentes"],
    "Everything about fit, delivery and getting them back to us. Still stuck?":
      ["Tout sur l'ajustement, la livraison et les retours. Une question restante ?",
       "كل ما يخص المقاس والتوصيل والإرجاع. ما زال لديك سؤال؟",
       "Todo sobre ajuste, entrega y devoluciones. ¿Sigues con dudas?"],
    "Talk to our team": ["Parler à notre équipe", "تحدّث مع فريقنا", "Habla con nuestro equipo"],
    "How do I know a frame will fit me?": ["Comment savoir si une monture me va ?", "كيف أعرف أن المونتير يناسبني؟", "¿Cómo sé si una montura me quedará bien?"],
    "Every product page lists the lens width, bridge and temple length in millimetres. Compare those to a pair you already wear, or pick a size on the fit slider. If it still is not right when it arrives, we adjust or exchange it free.":
      ["Chaque fiche produit indique la largeur de verre, le pont et la longueur des branches en millimètres. Comparez-les à une paire que vous portez déjà, ou choisissez une taille sur le curseur. Si l'ajustement ne convient pas à la réception, nous l'ajustons ou l'échangeons gratuitement.",
       "تعرض كل صفحة منتج عرض العدسة والجسر وطول الذراع بالمليمتر. قارنها بنظارة ترتديها بالفعل، أو اختر مقاسًا من المؤشر. وإن لم تكن مناسبة عند الاستلام، نعدّلها أو نستبدلها مجانًا.",
       "Cada ficha de producto indica el ancho de lente, el puente y la longitud de las patillas en milímetros. Compáralos con unas gafas que ya uses, o elige una talla en el selector. Si al llegar no encajan, las ajustamos o cambiamos gratis."],
    "Can I try frames on before I buy?": ["Puis-je essayer avant d'acheter ?", "هل يمكنني التجربة قبل الشراء؟", "¿Puedo probarlas antes de comprar?"],
    "Yes. Virtual try-on runs on any product page, so you can see the shape on your own face before ordering. In a Azylis studio you can try the full collection and book a fitting with an optician.":
      ["Oui. L'essayage virtuel est disponible sur chaque fiche produit, pour voir la forme sur votre visage avant de commander. En studio Azylis, vous pouvez essayer toute la collection et réserver un ajustement avec un opticien.",
       "نعم. القياس الافتراضي متاح في كل صفحة منتج لترى الشكل على وجهك قبل الطلب. وفي استوديو أزيليس يمكنك تجربة المجموعة كاملة وحجز موعد ضبط مع أخصائي بصريات.",
       "Sí. El probador virtual está disponible en cada ficha de producto para ver la forma en tu rostro antes de pedir. En un estudio Azylis puedes probar toda la colección y reservar un ajuste con un óptico."],
    "How long does delivery take, and what does it cost?": ["Quels sont les délais et frais de livraison ?", "كم تستغرق مدة التوصيل وما تكلفته؟", "¿Cuánto tarda el envío y cuánto cuesta?"],
    "Shipping is free worldwide and orders leave us within two working days. Expect two to four days domestically and five to nine internationally. You get a tracking link by email as soon as it ships.":
      ["La livraison est offerte dans le monde entier et les commandes partent sous deux jours ouvrés. Comptez deux à quatre jours au Maroc et cinq à neuf jours à l'international. Un lien de suivi vous est envoyé par e-mail dès l'expédition.",
       "الشحن مجاني إلى جميع أنحاء العالم، وتغادر الطلبات خلال يومي عمل. توقّع من يومين إلى أربعة داخل المغرب، ومن خمسة إلى تسعة دوليًا. ستصلك رسالة بريد إلكتروني تحتوي رابط التتبع فور الشحن.",
       "El envío es gratuito a todo el mundo y los pedidos salen en dos días laborables. Calcula de dos a cuatro días a nivel nacional y de cinco a nueve internacional. Recibirás un enlace de seguimiento por correo al enviarse."],
    "What is your return policy?": ["Quelle est votre politique de retour ?", "ما هي سياسة الإرجاع لديكم؟", "¿Cuál es vuestra política de devoluciones?"],
    "Wear them for 30 days. If they are not right, send them back for a full refund or an exchange — no questions asked. We only ask that the frames come back undamaged and in their case.":
      ["Portez-les 30 jours. Si elles ne conviennent pas, renvoyez-les pour un remboursement intégral ou un échange, sans justification. Nous demandons seulement que les montures reviennent intactes et dans leur étui.",
       "ارتدِها لمدة 30 يومًا. إن لم تناسبك، أعِدها لاسترداد كامل المبلغ أو للاستبدال دون أي أسئلة. نطلب فقط أن تعود المونتير سليمة وفي علبتها.",
       "Úsalas 30 días. Si no te convencen, devuélvelas para un reembolso íntegro o un cambio, sin preguntas. Solo pedimos que las monturas vuelvan intactas y en su estuche."],
    "How do returns and exchanges actually work?": ["Comment se passent les retours et échanges ?", "كيف تتم عمليات الإرجاع والاستبدال؟", "¿Cómo funcionan las devoluciones y cambios?"],
    "Start a return from your account, or reply to your order email and we will send a prepaid label. Refunds are issued three to five working days after the parcel reaches us. Prescription lenses are remade once, free, if the script was wrong.":
      ["Lancez un retour depuis votre compte ou répondez à l'e-mail de commande : nous vous envoyons une étiquette prépayée. Le remboursement intervient trois à cinq jours ouvrés après réception du colis. Les verres correcteurs sont refaits une fois, gratuitement, en cas d'erreur de correction.",
       "ابدأ الإرجاع من حسابك أو ردّ على بريد الطلب وسنرسل لك ملصق شحن مدفوعًا. يتم رد المبلغ خلال ثلاثة إلى خمسة أيام عمل من وصول الطرد إلينا. وتُعاد صناعة العدسات الطبية مرة واحدة مجانًا إذا كان المقاس خاطئًا.",
       "Inicia la devolución desde tu cuenta o responde al correo del pedido y te enviaremos una etiqueta prepagada. El reembolso se emite de tres a cinco días laborables tras recibir el paquete. Las lentes graduadas se rehacen una vez, gratis, si la graduación era incorrecta."],

    /* ---- footer ---- */
    "Hand-finished acetate frames, shaped around real faces — designed, cut and fitted in Morocco.":
      ["Des montures en acétate finies à la main, pensées pour de vrais visages — dessinées, taillées et ajustées au Maroc.",
       "مونتيرات من الأسيتات بلمسة يدوية، مصممة لوجوه حقيقية — تُرسم وتُقص وتُضبط في المغرب.",
       "Monturas de acetato acabadas a mano, pensadas para rostros reales: diseñadas, cortadas y ajustadas en Marruecos."],
    "Studio": ["Studio", "الاستوديو", "Estudio"],
    "Casablanca, Morocco": ["Casablanca, Maroc", "الدار البيضاء، المغرب", "Casablanca, Marruecos"],
    "Follow": ["Suivez-nous", "تابعنا", "Síguenos"],
    "© 2026 Azylis. All rights reserved.": ["© 2026 Azylis. Tous droits réservés.", "© 2026 أزيليس. جميع الحقوق محفوظة.", "© 2026 Azylis. Todos los derechos reservados."],

    /* ---- product page ---- */
    "New arrivals": ["Nouveautés", "وصل حديثًا", "Novedades"],
    "Product": ["Produit", "المنتج", "Producto"],
    "2-Years": ["2 ans", "سنتان", "2 años"],
    "Frame Warranty": ["de garantie monture", "ضمان على المونتير", "de garantía en la montura"],
    "Color:": ["Couleur :", "اللون:", "Color:"],
    "Size:": ["Taille :", "المقاس:", "Talla:"],
    "Narrow": ["Étroit", "ضيّق", "Estrecha"],
    "Regular": ["Standard", "عادي", "Estándar"],
    "Wide fit": ["Large", "واسع", "Ancha"],
    "Add to cart": ["Ajouter au panier", "أضف إلى السلة", "Añadir al carrito"],
    "Added": ["Ajouté", "تمت الإضافة", "Añadido"],
    "Select lenses and color": ["Choisir verres et coloris", "اختر العدسات واللون", "Elegir lentes y color"],
    "You may also like": ["Vous aimerez aussi", "قد يعجبك أيضًا", "También te puede gustar"],
    "Back to new arrivals": ["Retour aux nouveautés", "العودة إلى الجديد", "Volver a novedades"],
    "Back to categories": ["Retour aux catégories", "العودة إلى الفئات", "Volver a las categorías"],
    "Details": ["Détails", "التفاصيل", "Detalles"],
    "Measurements": ["Mesures", "المقاسات", "Medidas"],
    "Shipping &amp; return": ["Livraison et retour", "الشحن والإرجاع", "Envío y devolución"],
    "Shipping & return": ["Livraison et retour", "الشحن والإرجاع", "Envío y devolución"],
    "Lens width": ["Largeur de verre", "عرض العدسة", "Ancho de lente"],
    "Bridge": ["Pont", "الجسر", "Puente"],
    "Temple length": ["Longueur de branche", "طول الذراع", "Longitud de patilla"],
    "Total width": ["Largeur totale", "العرض الكلي", "Ancho total"],
    "Weight": ["Poids", "الوزن", "Peso"],
    "Signature Azylis hand-finished frame": ["Monture Azylis finie à la main", "مونتير أزيليس بلمسة يدوية", "Montura Azylis acabada a mano"],
    "Premium Italian acetate construction": ["Acétate italien haut de gamme", "أسيتات إيطالي فاخر", "Acetato italiano de alta gama"],
    "Free worldwide shipping": ["Livraison offerte dans le monde entier", "شحن مجاني حول العالم", "Envío gratuito a todo el mundo"],
    "Havana Tortoise": ["Écaille Havane", "هافانا سلحفاتي", "Carey Havana"],
    "Midnight Black": ["Noir Minuit", "أسود منتصف الليل", "Negro Medianoche"],
    "Moss Tortoise": ["Écaille Mousse", "سلحفاتي بلون الطحلب", "Carey Musgo"],
    "Gunmetal": ["Gris acier", "رمادي معدني", "Gris acero"],
    "Brushed Gold": ["Or brossé", "ذهبي مصقول", "Oro cepillado"],

    /* ---- shop listing ---- */
    "All frames": ["Toutes les montures", "كل المونتيرات", "Todas las monturas"],
    "Men's frames": ["Montures homme", "مونتيرات رجالية", "Monturas de hombre"],
    "Women's frames": ["Montures femme", "مونتيرات نسائية", "Monturas de mujer"],
    "All": ["Tout", "الكل", "Todo"],
    "Every frame we make, hand-finished in Italian acetate.": ["Toutes nos montures, finies à la main en acétate italien.", "كل مونتيراتنا، بلمسة يدوية من الأسيتات الإيطالي.", "Todas nuestras monturas, acabadas a mano en acetato italiano."],
    "Shapes cut a little squarer and a little wider, for faces that need the room.": ["Des formes plus carrées et plus larges, pour les visages qui ont besoin d'espace.", "أشكال أكثر تربيعًا واتساعًا، للوجوه التي تحتاج مساحة أكبر.", "Formas más cuadradas y anchas, para rostros que necesitan más espacio."],
    "Softer geometry and finer rims, balanced to sit light on the bridge.": ["Une géométrie plus douce et des cerclages plus fins, équilibrés pour poser léger sur le nez.", "هندسة أنعم وإطارات أدق، متوازنة لتستقر بخفة على الأنف.", "Geometría más suave y aros más finos, equilibrados para posarse ligeros sobre la nariz."],
    "Clear optical frames — no tint. Add your prescription, a blue-light filter or Transitions® at checkout.": ["Montures optiques claires, sans teinte. Ajoutez votre correction, un filtre lumière bleue ou Transitions® au paiement.", "مونتيرات بصرية شفافة بلا صبغة. أضف مقاسك الطبي أو فلتر الضوء الأزرق أو Transitions® عند الدفع.", "Monturas ópticas transparentes, sin tinte. Añade tu graduación, un filtro de luz azul o Transitions® al pagar."],
    "Nothing in this category yet.": ["Rien dans cette catégorie pour l'instant.", "لا يوجد شيء في هذه الفئة بعد.", "Todavía no hay nada en esta categoría."]
  };

  /* ---------------- machinery ---------------- */

  var KEY = "azylis-lang";
  var current = "en";

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function remember(l) {
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }

  function lookup(en) {
    if (current === "en") return en;
    var row = T[en];
    if (!row) return en;
    return row[IDX[current]] || en;
  }

  /* collect the text nodes worth touching, stashing the English original */
  function textNodes(root) {
    var out = [];
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "TITLE") return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    while (w.nextNode()) out.push(w.currentNode);
    return out;
  }

  var ATTRS = ["aria-label", "title", "placeholder"];

  function apply(lang) {
    if (lang) current = LANGS.indexOf(lang) > -1 ? lang : "en";

    var html = document.documentElement;
    html.setAttribute("lang", current);
    html.setAttribute("dir", current === "ar" ? "rtl" : "ltr");

    textNodes(document.body).forEach(function (n) {
      if (n.__en === undefined) n.__en = n.nodeValue;
      var raw = n.__en;
      var trimmed = raw.trim();
      /* copy that wraps across source lines carries newlines and indentation
         inside the node, so collapse runs of whitespace before looking up */
      var norm = trimmed.replace(/\s+/g, " ");
      var hit = lookup(norm);
      if (hit === norm) { n.nodeValue = raw; return; }
      n.nodeValue = raw.replace(trimmed, hit);
    });

    ATTRS.forEach(function (a) {
      [].forEach.call(document.querySelectorAll("[" + a + "]"), function (el) {
        var store = "__" + a;
        if (el[store] === undefined) el[store] = el.getAttribute(a);
        el.setAttribute(a, lookup(el[store]));
      });
    });

    [].forEach.call(document.querySelectorAll("[data-lang]"), function (b) {
      var on = b.getAttribute("data-lang") === current;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    remember(current);
  }

  /* ---------------- boot ---------------- */

  var initial = stored();
  if (LANGS.indexOf(initial) === -1) initial = "en";
  current = initial;
  document.documentElement.setAttribute("lang", current);
  document.documentElement.setAttribute("dir", current === "ar" ? "rtl" : "ltr");

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lang]");
    if (!b) return;
    apply(b.getAttribute("data-lang"));
  });

  window.I18N = { apply: apply, t: lookup, lang: function () { return current; } };

  document.addEventListener("DOMContentLoaded", function () { apply(); });
})();
