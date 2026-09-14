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
      ["Les montures Azylis épousent de vrais visages : acétate léger et charnières polies à la main, pour un confort tel qu'on oublie qu'on les porte.",
       "تُصمَّم نظارات أزيليس لتناسب الوجوه الحقيقية: أسيتات خفيف ومفصلات مصقولة يدويًا، لراحة تنسيك أنك ترتديها.",
       "Las monturas Azylis se ajustan a rostros reales: acetato ligero y bisagras pulidas a mano, para un ajuste que olvidarás llevar."],
    "Shop the edit": ["Voir la sélection", "تسوّق المجموعة", "Ver la selección"],
    "Feather-light build": ["Légèreté absolue", "خفة متناهية", "Ligereza absoluta"],
    "18 g of Italian acetate": ["18 g d'acétate italien", "18 غرامًا من الأسيتات الإيطالي", "18 g de acetato italiano"],
    "Hand-finished hinges": ["Charnières finies à la main", "مفصلات بلمسة يدوية", "Bisagras acabadas a mano"],
    "Polished across five passes": ["Polies en cinq passes", "مصقولة على خمس مراحل", "Pulidas en cinco pasadas"],
    "Fit guarantee": ["Ajustement garanti", "ضمان المقاس", "Ajuste garantizado"],
    "30 days, adjusted free": ["30 jours, réglages offerts", "30 يومًا مع تعديل مجاني", "30 días, ajuste gratuito"],
    "Scroll": ["Défiler", "مرّر", "Desplazar"],

    /* ---- the sale ---- */
    "Sale on now": ["Promotion en cours", "التخفيضات بدأت", "Rebajas en marcha"],
    "Half price on the frames you've been eyeing.":
      ["Moitié prix sur les montures qui vous font de l'œil.",
       "نصف السعر على الإطارات التي وقعت في عينك.",
       "Mitad de precio en las monturas que tienes en el punto de mira."],
    "Claim 50% off": ["Profitez des -50 %", "احصل على خصم 50٪", "Aprovecha el 50 %"],

    /* ---- visit the store ---- */
    "The store": ["Le magasin", "المتجر", "La tienda"],
    "Come and try them on": ["Venez les essayer", "تعال وجرّبها", "Ven a probártelas"],
    "Inside the store": ["Dans le magasin", "داخل المتجر", "Dentro de la tienda"],
    "Now open": ["Ouvert", "مفتوح الآن", "Ya abierto"],
    "A fitting gets you the rest of the way. Bring the pair you wear now — we will measure it, shape the acetate to your temples and hand it back sitting where it should.":
      ["Un essayage fait le reste. Apportez la paire que vous portez actuellement : nous la mesurons, ajustons les branches à vos tempes et vous la rendons parfaitement ajustée.",
       "القياس يكمل الباقي. أحضر نظارتك الحالية: نقيسها، ونشكّل الأسيتات على صدغيك، ونعيدها إليك في مكانها الصحيح تمامًا.",
       "Una prueba hace el resto. Trae las gafas que llevas ahora: las medimos, moldeamos el acetato a tus sienes y te las devolvemos en su sitio."],
    "Where": ["Adresse", "العنوان", "Dónde"],
    "Casablanca, Morocco": ["Casablanca, Maroc", "الدار البيضاء، المغرب", "Casablanca, Marruecos"],
    "Opening hours": ["Horaires", "ساعات العمل", "Horario"],
    "Monday to Saturday, 10:00 – 19:00": ["Du lundi au samedi, 10h00 – 19h00", "من الاثنين إلى السبت، 10:00 – 19:00", "De lunes a sábado, 10:00 – 19:00"],
    "Fittings": ["Essayages", "القياس", "Pruebas"],
    "Walk in, or write ahead and we will keep the shapes you like aside.":
      ["Passez quand vous voulez, ou écrivez-nous à l'avance et nous mettrons de côté les modèles qui vous plaisent.",
       "تفضّل بالزيارة متى شئت، أو راسلنا وسنحتفظ لك بالأشكال التي تفضّلها.",
       "Pásate cuando quieras, o escríbenos y apartamos las formas que te gusten."],
    "See what is in stock": ["Voir ce qui est en magasin", "شاهد المتوفر", "Ver lo que hay en tienda"],

    /* ---- perks strip ---- */
    "Total protection": ["Protection totale", "حماية كاملة", "Protección total"],
    "UV 400 protection": ["Protection UV 400", "حماية UV 400", "Protección UV 400"],
    "Always clean": ["Toujours propres", "دائمًا نظيفة", "Siempre limpias"],
    "Lens cloth included": ["Chiffon microfibre inclus", "قطعة تنظيف مرفقة", "Gamuza incluida"],
    "Gift ready": ["Prêtes à offrir", "جاهزة كهدية", "Listas para regalar"],
    "Free pouch with every pair": ["Pochette offerte avec chaque paire", "جراب مجاني مع كل نظارة", "Funda gratis con cada par"],

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
    "5 colours": ["5 coloris", "5 ألوان", "5 colores"],
    "6 colours": ["6 coloris", "6 ألوان", "6 colores"],
    "7 colours": ["7 coloris", "7 ألوان", "7 colores"],
    "8 colours": ["8 coloris", "8 ألوان", "8 colores"],
    "9 colours": ["9 coloris", "9 ألوان", "9 colores"],
    "Sale": ["Promo", "تخفيض", "Oferta"],
    "frames": ["montures", "إطارًا", "monturas"],
    "Acetate frame with UV400 lenses, fitted and adjusted at our store in Casablanca.":
      ["Monture en acétate et verres UV400, ajustée dans notre magasin de Casablanca.",
       "إطار من الأسيتات مع عدسات UV400، يُضبط في متجرنا بالدار البيضاء.",
       "Montura de acetato con lentes UV400, ajustada en nuestra tienda de Casablanca."],
    "Every pair is checked and adjusted by hand before it leaves the store — hinges tightened, temples shaped to sit level. Cash on delivery across Morocco, and a free adjustment in store whenever you need one.":
      ["Chaque paire est vérifiée et ajustée à la main avant de quitter le magasin : charnières resserrées, branches ajustées pour un maintien parfait. Paiement à la livraison partout au Maroc, et un réglage gratuit en magasin dès que vous en avez besoin.",
       "يُفحص كل زوج ويُضبط يدويًا قبل مغادرة المتجر: تُشدّ المفصلات وتُشكَّل الأذرع لتستقر باستواء. الدفع عند الاستلام في كل المغرب، وضبط مجاني في المتجر متى احتجت إليه.",
       "Cada par se revisa y ajusta a mano antes de salir de la tienda: bisagras apretadas, varillas moldeadas para asentar rectas. Pago contra reembolso en todo Marruecos y un ajuste gratuito en tienda cuando lo necesites."],

    /* ---- categories ---- */
    "Shop by category": ["Parcourir par catégorie", "تسوّق حسب الفئة", "Comprar por categoría"],
    "Men": ["Homme", "رجال", "Hombre"],
    "Women": ["Femme", "نساء", "Mujer"],
    "Lenses": ["Verres", "العدسات", "Lentes"],
    "Sunglasses men": ["Solaires homme", "شمسية رجالية", "Gafas de sol hombre"],
    "Sunglasses women": ["Solaires femme", "شمسية نسائية", "Gafas de sol mujer"],
    "Lenses men": ["Optique homme", "عدسات رجالية", "Lentes hombre"],
    "Lenses women": ["Optique femme", "عدسات نسائية", "Lentes mujer"],
    "Clip-ons": ["Lunettes à clips", "نظارات بكليبس", "Gafas con clip"],
    "Clearance": ["Déstockage", "تصفية المخزون", "Liquidación"],
    "Last pieces at reduced prices — while they last.":
      ["Dernières pièces à prix réduit — jusqu'à épuisement des stocks.",
       "آخر القطع بأسعار مخفّضة — حتى نفاد الكمية.",
       "Últimas piezas a precio reducido, hasta agotar existencias."],
    "Tinted frames cut a little squarer and a little wider, for faces that need the room.":
      ["Des montures teintées plus carrées et plus larges, pour les visages qui ont besoin d'espace.",
       "مونتيرات ملوّنة أكثر تربيعًا واتساعًا، للوجوه التي تحتاج مساحة أكبر.",
       "Monturas tintadas más cuadradas y anchas, para rostros que necesitan más espacio."],
    "Tinted frames with softer geometry, balanced to sit light on the bridge.":
      ["Des montures teintées à la géométrie plus douce, équilibrées pour un appui léger sur le nez.",
       "مونتيرات ملوّنة بهندسة أنعم، متوازنة لتستقر بخفة على الأنف.",
       "Monturas tintadas de geometría más suave, equilibradas para posarse ligeras sobre la nariz."],
    "Optical frames that take a magnetic sun clip — one pair that works indoors and out.":
      ["Des montures optiques qui reçoivent un clip solaire magnétique : une seule paire, en intérieur comme en extérieur.",
       "مونتيرات بصرية تقبل كليبس شمسي مغناطيسي: زوج واحد يناسب الداخل والخارج.",
       "Monturas ópticas que admiten un clip solar magnético: un solo par para dentro y fuera."],
    "Discover": ["Découvrir", "اكتشف", "Descubrir"],

    /* ---- testimonials ---- */
    "What our clients say": ["Ce que disent nos clients", "آراء عملائنا", "Lo que dicen nuestros clientes"],
    "Seen in Azylis": ["Vu avec des Azylis", "بنظارات أزيليس", "Visto en Azylis"],
    "Spotted in the store": ["De passage en magasin", "شوهد في المتجر", "Visto en la tienda"],
    "The pros pick": ["Les pros aussi", "حتى المحترفون", "Los profesionales también"],
    "theirs here too.": ["choisissent les leurs ici.", "يختارون نظاراتهم من هنا.", "eligen las suyas aquí."],
    "A familiar face from the pitch, fitted at our store in Casablanca — the same frames and the same fitting as everyone who walks in.":
      ["Un visage bien connu des terrains, ajusté dans notre magasin de Casablanca — les mêmes montures et le même essayage que pour chacun de nos clients.",
       "وجه مألوف من الملاعب، جرى قياس نظارته في متجرنا بالدار البيضاء — نفس الإطارات ونفس القياس كأي زائر.",
       "Una cara conocida del césped, ajustada en nuestra tienda de Casablanca: las mismas monturas y la misma prueba que cualquiera que entra."],
    "Filmed at our store, Casablanca": ["Filmé dans notre magasin, Casablanca", "صُوِّر في متجرنا، الدار البيضاء", "Grabado en nuestra tienda, Casablanca"],
    "More from our clients": ["D'autres avis de nos clients", "المزيد من آراء عملائنا", "Más opiniones de nuestros clientes"],
    "“I bought a pair of sun frames from Azylis and I am completely satisfied. The quality is exceptional and the service was excellent.”":
      ["« J'ai acheté des lunettes de soleil chez Azylis et j'en suis entièrement satisfait. La qualité est exceptionnelle et le service excellent. »",
       "«اشتريت نظارة شمسية من أزيليس وأنا راضٍ تمامًا. الجودة استثنائية والخدمة ممتازة.»",
       "«Compré unas gafas de sol en Azylis y estoy totalmente satisfecho. La calidad es excepcional y el servicio, excelente.»"],
    "“Delighted with my purchase. The frames are beautifully made and delivery was quick, right across the country.”":
      ["« Ravi de mon achat. Les montures sont superbement finies et la livraison a été très rapide. »",
       "«سعيد جدًا بعملية الشراء. المونتير متقن الصنع والتوصيل كان سريعًا في كل أنحاء المغرب.»",
       "«Encantado con mi compra. Las monturas están muy bien hechas y la entrega fue rápida en todo el país.»"],
    "“The experience at Azylis was fantastic. The staff were helpful and the glasses I bought were perfect.”":
      ["« L'expérience chez Azylis a été fantastique. Le personnel était à l'écoute et les lunettes que j'ai achetées sont parfaites. »",
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
    "Verified buyer, Casablanca": ["Client vérifié, Casablanca", "مشترٍ موثوق، الدار البيضاء", "Comprador verificado, Casablanca"],
    "Verified buyer, Rabat": ["Client vérifié, Rabat", "مشترٍ موثوق، الرباط", "Comprador verificado, Rabat"],
    "Verified buyer, Marrakech": ["Cliente vérifiée, Marrakech", "مشترية موثوقة، مراكش", "Compradora verificada, Marrakech"],
    "Verified buyer, Tangier": ["Client vérifié, Tanger", "مشترٍ موثوق، طنجة", "Comprador verificado, Tánger"],
    "Verified buyer, Fès": ["Cliente vérifiée, Fès", "مشترية موثوقة، فاس", "Compradora verificada, Fez"],
    "Verified buyer, Agadir": ["Client vérifié, Agadir", "مشترٍ موثوق، أكادير", "Comprador verificado, Agadir"],

    /* ---- faq ---- */
    "Frequently asked questions": ["Questions fréquentes", "الأسئلة الشائعة", "Preguntas frecuentes"],
    "Everything about fit, delivery and getting them back to us. Still stuck?":
      ["Tout sur l'ajustement, la livraison et les retours. Encore une question ?",
       "كل ما يخص المقاس والتوصيل والإرجاع. ما زال لديك سؤال؟",
       "Todo sobre ajuste, entrega y devoluciones. ¿Sigues con dudas?"],
    "Talk to our team": ["Contacter notre équipe", "تحدّث مع فريقنا", "Habla con nuestro equipo"],
    "How do I know a frame will fit me?": ["Comment savoir si une monture m'ira ?", "كيف أعرف أن المونتير يناسبني؟", "¿Cómo sé si una montura me quedará bien?"],
    "Every product page shows the frame in detail. Compare it to a pair you already wear, or come and try it on in store. If it still is not right when it arrives, we adjust or exchange it free.":
      ["Chaque fiche produit présente la monture en détail. Comparez-la à une paire que vous portez déjà, ou venez l'essayer en magasin. Si elle ne vous va pas à la réception, nous l'ajustons ou l'échangeons gratuitement.",
       "تعرض كل صفحة منتج الإطار بالتفصيل. قارنه بنظارة ترتديها بالفعل، أو تفضّل بتجربته في المتجر. وإن لم يكن مناسبًا عند الاستلام، نعدّله أو نستبدله مجانًا.",
       "Cada ficha de producto muestra la montura en detalle. Compárala con unas gafas que ya uses, o ven a probártela en tienda. Si al llegar no encaja, la ajustamos o la cambiamos gratis."],
    "How long does delivery take, and what does it cost?": ["Quels sont les délais et frais de livraison ?", "كم تستغرق مدة التوصيل وما تكلفته؟", "¿Cuánto tarda el envío y cuánto cuesta?"],
    "Shipping is free worldwide and orders leave us within two working days. Expect two to four days domestically and five to nine internationally. You get a tracking link by email as soon as it ships.":
      ["La livraison est offerte dans le monde entier et les commandes partent sous deux jours ouvrés. Comptez deux à quatre jours au Maroc et cinq à neuf jours à l'international. Un lien de suivi vous est envoyé par e-mail dès l'expédition.",
       "الشحن مجاني إلى جميع أنحاء العالم، وتغادر الطلبات خلال يومي عمل. توقّع من يومين إلى أربعة داخل المغرب، ومن خمسة إلى تسعة دوليًا. ستصلك رسالة بريد إلكتروني تحتوي رابط التتبع فور الشحن.",
       "El envío es gratuito a todo el mundo y los pedidos salen en dos días laborables. Calcula de dos a cuatro días a nivel nacional y de cinco a nueve internacional. Recibirás un enlace de seguimiento por correo al enviarse."],
    "What is your return policy?": ["Quelle est votre politique de retour ?", "ما هي سياسة الإرجاع لديكم؟", "¿Cuál es vuestra política de devoluciones?"],
    "You have 7 days from receiving your order to request a return or an exchange. Items must come back unworn and undamaged, in their original packaging with all accessories and labels. Return shipping is at your cost, except when the error is ours or the product is faulty.":
      ["Vous disposez de 7 jours après réception de votre commande pour demander un retour ou un échange. Les articles doivent nous revenir non portés, non endommagés et dans leur emballage d'origine, avec tous les accessoires et étiquettes. Les frais de retour sont à la charge du client, sauf en cas d'erreur de notre part ou de produit défectueux.",
       "لديك 7 أيام من استلام طلبك لطلب الإرجاع أو الاستبدال. يجب أن تعود المنتجات غير مستعملة وغير تالفة، في عبوتها الأصلية مع جميع الملحقات والملصقات. مصاريف الإرجاع على عاتق العميل، إلا في حال وقوع خطأ من جانبنا أو وجود عيب في المنتج.",
       "Tienes 7 días desde la recepción de tu pedido para solicitar una devolución o un cambio. Los artículos deben volver sin usar y sin daños, en su embalaje original con todos los accesorios y etiquetas. Los gastos de devolución corren por cuenta del cliente, salvo error nuestro o producto defectuoso."],
    "How do returns and exchanges actually work?": ["Comment se passent les retours et échanges ?", "كيف تتم عمليات الإرجاع والاستبدال؟", "¿Cómo funcionan las devoluciones y cambios?"],
    /* the answer wraps the WhatsApp number in a link, so it arrives as two text nodes */
    "Message us on WhatsApp at": ["Contactez-nous sur WhatsApp au", "تواصل معنا عبر واتساب على الرقم", "Escríbenos por WhatsApp al"],
    "within 7 days of receiving your order, with your order number and the reason for the return. Pack the items carefully, ideally in their original packaging. For a return or exchange by personal preference (style, taste…), delivery costs are yours; you can also drop your glasses off free at one of our depots.":
      ["dans les 7 jours suivant la réception de votre commande, en indiquant votre numéro de commande et le motif du retour. Emballez soigneusement les articles, de préférence dans leur emballage d'origine. Pour un retour ou un échange par convenance personnelle (style, préférence…), les frais de livraison sont à votre charge ; vous pouvez aussi déposer gratuitement vos lunettes dans l'un de nos entrepôts.",
       "خلال 7 أيام من استلام طلبك، مع ذكر رقم الطلب وسبب الإرجاع. غلّف المنتجات بعناية، ويفضَّل في عبوتها الأصلية. في حال الإرجاع أو الاستبدال لأسباب شخصية (الذوق، التفضيل…)، تكون مصاريف التوصيل على عاتقك؛ ويمكنك أيضًا إيداع نظارتك مجانًا في أحد مستودعاتنا.",
       "en los 7 días siguientes a la recepción de tu pedido, indicando el número de pedido y el motivo de la devolución. Embala los artículos con cuidado, preferiblemente en su embalaje original. Si la devolución o el cambio es por preferencia personal (estilo, gusto…), los gastos de envío corren por tu cuenta; también puedes dejar tus gafas gratis en uno de nuestros almacenes."],
    "What if my glasses are faulty?": ["Que faire si mes lunettes présentent un défaut ?", "ماذا أفعل إذا كانت نظارتي معيبة؟", "¿Qué hago si mis gafas tienen un defecto?"],
    "If your glasses have a manufacturing defect or a quality problem, you get a free exchange with no extra cost. Our customer service team is on WhatsApp to help you through every step.":
      ["Si vos lunettes présentent un défaut de fabrication ou un problème de qualité, vous bénéficiez d'un échange gratuit, sans aucun frais supplémentaire. Notre service client est disponible sur WhatsApp pour vous accompagner à chaque étape.",
       "إذا كانت نظارتك تعاني من عيب في التصنيع أو مشكلة في الجودة، فستحصل على استبدال مجاني دون أي رسوم إضافية. فريق خدمة العملاء لدينا متاح عبر واتساب لمساعدتك في كل خطوة.",
       "Si tus gafas presentan un defecto de fabricación o un problema de calidad, tienes derecho a un cambio gratuito, sin ningún coste adicional. Nuestro servicio de atención al cliente está disponible por WhatsApp para acompañarte en cada paso."],

    /* ---- footer ---- */
    "Hand-finished acetate frames, shaped around real faces — designed, cut and fitted in Morocco.":
      ["Des montures en acétate finies à la main, pensées pour de vrais visages — dessinées, taillées et ajustées au Maroc.",
       "مونتيرات من الأسيتات بلمسة يدوية، مصممة لوجوه حقيقية — تُرسم وتُقص وتُضبط في المغرب.",
       "Monturas de acetato acabadas a mano, pensadas para rostros reales: diseñadas, cortadas y ajustadas en Marruecos."],
    "Store": ["Magasin", "المتجر", "Tienda"],
    "Casablanca, Morocco": ["Casablanca, Maroc", "الدار البيضاء، المغرب", "Casablanca, Marruecos"],
    "Follow": ["Suivez-nous", "تابعنا", "Síguenos"],
    "© 2026 Azylis. All rights reserved.": ["© 2026 Azylis. Tous droits réservés.", "© 2026 أزيليس. جميع الحقوق محفوظة.", "© 2026 Azylis. Todos los derechos reservados."],

    /* ---- product page ---- */
    "New arrivals": ["Nouveautés", "وصل حديثًا", "Novedades"],
    "Product": ["Produit", "المنتج", "Producto"],
    "Color:": ["Couleur :", "اللون:", "Color:"],
    "Add to cart": ["Ajouter au panier", "أضف إلى السلة", "Añadir al carrito"],
    "Added": ["Ajouté", "تمت الإضافة", "Añadido"],

    /* ---- the bag ---- */
    "Your bag": ["Votre panier", "سلتك", "Tu bolsa"],
    "Close": ["Fermer", "إغلاق", "Cerrar"],
    "Your bag is empty.": ["Votre panier est vide.", "سلتك فارغة.", "Tu bolsa está vacía."],
    "Browse the frames": ["Découvrir les montures", "استعرض الإطارات", "Ver las monturas"],
    "Subtotal": ["Sous-total", "المجموع الفرعي", "Subtotal"],
    "Cash on delivery — you pay when your frames arrive.":
      ["Paiement à la livraison — vous réglez à la réception de vos montures.",
       "الدفع عند الاستلام — تدفع عندما تصلك نظاراتك.",
       "Pago contra reembolso: pagas cuando recibes tus monturas."],
    "Checkout": ["Commander", "إتمام الطلب", "Finalizar compra"],
    "Order now": ["Commander", "اطلب الآن", "Pedir ahora"],
    "Continue shopping": ["Continuer mes achats", "متابعة التسوق", "Seguir comprando"],
    "Remove": ["Retirer", "إزالة", "Quitar"],
    "Quantity": ["Quantité", "الكمية", "Cantidad"],
    "Decrease quantity": ["Réduire la quantité", "تقليل الكمية", "Reducir la cantidad"],
    "Increase quantity": ["Augmenter la quantité", "زيادة الكمية", "Aumentar la cantidad"],

    /* ---- checkout ---- */
    "Progress": ["Progression", "التقدم", "Progreso"],
    "Confirm": ["Confirmation", "التأكيد", "Confirmar"],
    "Continue to details": ["Renseigner mes coordonnées", "متابعة إلى البيانات", "Continuar a los datos"],
    "Your details": ["Vos coordonnées", "بياناتك", "Tus datos"],
    "We only use these to deliver your order and to call you to confirm it.":
      ["Elles servent uniquement à livrer votre commande et à vous appeler pour la confirmer.",
       "نستخدمها فقط لتوصيل طلبك والاتصال بك لتأكيده.",
       "Solo los usamos para entregar tu pedido y llamarte para confirmarlo."],
    "Full name": ["Nom complet", "الاسم الكامل", "Nombre completo"],
    "Phone": ["Téléphone", "الهاتف", "Teléfono"],
    "City": ["Ville", "المدينة", "Ciudad"],
    "Delivery address": ["Adresse de livraison", "عنوان التوصيل", "Dirección de entrega"],
    "Notes (optional)": ["Remarques (facultatif)", "ملاحظات (اختياري)", "Notas (opcional)"],
    "Notes": ["Remarques", "ملاحظات", "Notas"],
    "Back to bag": ["Retour au panier", "الرجوع إلى السلة", "Volver a la bolsa"],
    "Review order": ["Vérifier la commande", "مراجعة الطلب", "Revisar el pedido"],
    "Review your order": ["Vérifiez votre commande", "راجع طلبك", "Revisa tu pedido"],
    "Cash on delivery — you pay when your frames arrive. We will call you first to confirm.":
      ["Paiement à la livraison — vous réglez à la réception. Nous vous appelons d'abord pour confirmer.",
       "الدفع عند الاستلام — تدفع عند التوصيل. سنتصل بك أولًا للتأكيد.",
       "Pago contra reembolso: pagas al recibir. Te llamaremos antes para confirmar."],
    "Edit details": ["Modifier mes coordonnées", "تعديل البيانات", "Editar los datos"],
    "Confirm order": ["Confirmer la commande", "تأكيد الطلب", "Confirmar el pedido"],
    "Order confirmed": ["Commande confirmée", "تم تأكيد الطلب", "Pedido confirmado"],
    "Thank you. We will call you shortly to confirm your delivery.":
      ["Merci ! Nous vous appellerons très vite pour confirmer la livraison.",
       "شكرًا لك. سنتصل بك قريبًا لتأكيد التوصيل.",
       "Gracias. Te llamaremos en breve para confirmar la entrega."],
    "Order": ["Commande", "الطلب", "Pedido"],
    "New order": ["Nouvelle commande", "طلب جديد", "Nuevo pedido"],
    "Send my order on WhatsApp": ["Envoyer ma commande par WhatsApp", "إرسال طلبي عبر واتساب", "Enviar mi pedido por WhatsApp"],
    "Sending the summary on WhatsApp lets the store confirm faster.":
      ["Envoyer le récapitulatif par WhatsApp nous permet de confirmer votre commande plus vite.",
       "إرسال الملخص عبر واتساب يساعد المتجر على التأكيد أسرع.",
       "Enviar el resumen por WhatsApp permite a la tienda confirmar más rápido."],
    "Back to the home page": ["Retour à l'accueil", "الرجوع إلى الرئيسية", "Volver al inicio"],
    "Order summary": ["Récapitulatif", "ملخص الطلب", "Resumen del pedido"],
    "Delivery": ["Livraison", "التوصيل", "Entrega"],
    "Free": ["Gratuite", "مجاني", "Gratis"],
    "Total": ["Total", "الإجمالي", "Total"],
    "Cash on delivery": ["Paiement à la livraison", "الدفع عند الاستلام", "Pago contra reembolso"],
    "Select lenses and color": ["Choisir les verres et le coloris", "اختر العدسات واللون", "Elegir lentes y color"],
    "You may also like": ["Vous aimerez aussi", "قد يعجبك أيضًا", "También te puede gustar"],
    "Back to new arrivals": ["Retour aux nouveautés", "العودة إلى الجديد", "Volver a novedades"],
    "Back to categories": ["Retour aux catégories", "العودة إلى الفئات", "Volver a las categorías"],
    "Details": ["Détails", "التفاصيل", "Detalles"],
    "Measurements": ["Dimensions", "المقاسات", "Medidas"],
    "Shipping &amp; return": ["Livraison et retours", "الشحن والإرجاع", "Envío y devolución"],
    "Shipping & return": ["Livraison et retours", "الشحن والإرجاع", "Envío y devolución"],
    "Lens width": ["Largeur des verres", "عرض العدسة", "Ancho de lente"],
    "Bridge": ["Pont", "الجسر", "Puente"],
    "Temple length": ["Longueur des branches", "طول الذراع", "Longitud de patilla"],
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
    "Softer geometry and finer rims, balanced to sit light on the bridge.": ["Une géométrie plus douce et des cerclages plus fins, équilibrés pour un appui léger sur le nez.", "هندسة أنعم وإطارات أدق، متوازنة لتستقر بخفة على الأنف.", "Geometría más suave y aros más finos, equilibrados para posarse ligeros sobre la nariz."],
    "Clear optical frames — no tint. Add your prescription, a blue-light filter or Transitions® at checkout.": ["Montures optiques claires, sans teinte. Ajoutez votre correction, un filtre lumière bleue ou Transitions® à la commande.", "مونتيرات بصرية شفافة بلا صبغة. أضف مقاسك الطبي أو فلتر الضوء الأزرق أو Transitions® عند الدفع.", "Monturas ópticas transparentes, sin tinte. Añade tu graduación, un filtro de luz azul o Transitions® al pagar."],
    "Nothing in this category yet.": ["Rien dans cette catégorie pour l'instant.", "لا يوجد شيء في هذه الفئة بعد.", "Todavía no hay nada en esta categoría."],

    /* ---- product accordions ---- */
    "Every frame ships with anti-reflective, scratch-resistant lenses. Add a blue-light filter, a photochromic tint or your own prescription at the next step — all glazing is done in our own lab.":
      ["Chaque monture est livrée avec des verres antireflets et résistants aux rayures. Ajoutez un filtre lumière bleue, une teinte photochromique ou votre correction à l'étape suivante — le montage des verres est réalisé sur place.",
       "تأتي كل نظارة بعدسات مضادة للانعكاس ومقاومة للخدش. أضف فلتر الضوء الأزرق أو صبغة متغيرة اللون أو مقاسك الطبي في الخطوة التالية — تركيب العدسات يتم لدينا.",
       "Cada montura se entrega con lentes antirreflejantes y resistentes a arañazos. Añade un filtro de luz azul, un tinte fotocromático o tu graduación en el siguiente paso: el montaje de las lentes se hace en nuestra propia tienda."],
    "Free delivery, dispatched within two working days. You have 7 days from delivery to request a return or an exchange — a faulty pair is exchanged free of charge.":
      ["Livraison offerte, expédition sous deux jours ouvrés. Vous disposez de 7 jours après la livraison pour demander un retour ou un échange — une paire défectueuse est échangée gratuitement.",
       "توصيل مجاني، ويتم الإرسال خلال يومي عمل. لديك 7 أيام من التوصيل لطلب الإرجاع أو الاستبدال — وتُستبدل النظارة المعيبة مجانًا.",
       "Entrega gratuita, despachada en dos días laborables. Tienes 7 días desde la entrega para solicitar una devolución o un cambio; un par defectuoso se cambia sin coste."],

    /* ---- screen-reader labels ---- */
    "Azylis home": ["Accueil Azylis", "الصفحة الرئيسية لأزيليس", "Inicio de Azylis"],
    "Primary": ["Navigation principale", "التنقل الرئيسي", "Navegación principal"],
    "Language": ["Langue", "اللغة", "Idioma"],
    "Breadcrumb": ["Fil d'Ariane", "مسار التنقل", "Ruta de navegación"],
    "Frame colour": ["Coloris de la monture", "لون الإطار", "Color de la montura"],
    "The Azylis sale": ["La promotion Azylis", "تخفيضات أزيليس", "La promoción de Azylis"],
    "Inside the Azylis store": ["L'intérieur du magasin Azylis", "داخل متجر أزيليس", "El interior de la tienda Azylis"],
    "The store's open sign": ["L'enseigne « ouvert » du magasin", "لافتة المتجر المفتوح", "El cartel de abierto de la tienda"],
    "What every pair includes": ["Ce que comprend chaque paire", "ما يُرفق مع كل نظارة", "Lo que incluye cada par"],
    "A client trying on frames at the store": ["Un client essaie des montures en magasin", "عميل يجرّب النظارات في المتجر", "Un cliente probándose monturas en la tienda"],
    "Previous Bestsellers": ["Meilleures ventes précédentes", "الأكثر مبيعًا السابقة", "Más vendidas anteriores"],
    "Next Bestsellers": ["Meilleures ventes suivantes", "الأكثر مبيعًا التالية", "Más vendidas siguientes"],
    "Previous categories": ["Catégories précédentes", "الفئات السابقة", "Categorías anteriores"],
    "Next categories": ["Catégories suivantes", "الفئات التالية", "Categorías siguientes"],
    "Previous New Arrivals": ["Nouveautés précédentes", "الجديد السابق", "Novedades anteriores"],
    "Next New Arrivals": ["Nouveautés suivantes", "الجديد التالي", "Novedades siguientes"],
    "Previous offers": ["Offres précédentes", "العروض السابقة", "Ofertas anteriores"],
    "Next offers": ["Offres suivantes", "العروض التالية", "Ofertas siguientes"],
    "Previous testimonials": ["Avis précédents", "الآراء السابقة", "Opiniones anteriores"],
    "Next testimonials": ["Avis suivants", "الآراء التالية", "Opiniones siguientes"],
    "Testimonial pages": ["Pages d'avis", "صفحات الآراء", "Páginas de opiniones"],
    "Instagram (opens in a new tab)": ["Instagram (nouvel onglet)", "إنستغرام (يفتح في علامة تبويب جديدة)", "Instagram (se abre en una pestaña nueva)"],
    "Facebook (opens in a new tab)": ["Facebook (nouvel onglet)", "فيسبوك (يفتح في علامة تبويب جديدة)", "Facebook (se abre en una pestaña nueva)"],
    "X (opens in a new tab)": ["X (nouvel onglet)", "X (يفتح في علامة تبويب جديدة)", "X (se abre en una pestaña nueva)"],
    "TikTok (opens in a new tab)": ["TikTok (nouvel onglet)", "تيك توك (يفتح في علامة تبويب جديدة)", "TikTok (se abre en una pestaña nueva)"]
  };

  /* ---------------- machinery ---------------- */

  var KEY = "azylis-lang";
  var DEFAULT = "fr";   // first visit lands in French; a chosen language is remembered
  var current = DEFAULT;

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
    if (lang) current = LANGS.indexOf(lang) > -1 ? lang : DEFAULT;

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
  if (LANGS.indexOf(initial) === -1) initial = DEFAULT;
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
