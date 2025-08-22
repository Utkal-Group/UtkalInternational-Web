
import { blackrice, carde, feature1, feature2, feature3, feature4, greenCoffee1, icon1, icon2, icon3,  pro1, pro2, pro3, pro4, ragi, rosted1, Slider1, Slider2, Slider3, Slider4, Slider5, test1, tur1 } from '@/assests/Home'
import{navArrType} from '@/types/index'


export const navArr = [
  {
    id: 1,
    lang: 'en',
    data: [
      { id: 1, title: "Home", path: "/" },
      { id: 2, title: "About", path: "/about" },
      { id: 3, title: "Product", path: "/ourblog" },
      { id: 4, title: " Catalog", path: "/product" },
      { id: 5, title: "Contact", path: "/contact" },
    ],
  },
  {
    id: 2,
    lang: 'de',
    data: [
      { id: 1, title: "Startseite", path: "/" },
      { id: 2, title: "Über uns", path: "/about" },
      { id: 3, title: "Produkt", path: "/ourblog" },
      { id: 4, title: "katalog", path: "/product" },
      { id: 5, title: "Kontakt", path: "/contact" },
    ],
  },
  {
    id: 3,
    lang: 'es',
    data: [
      { id: 1, title: "Inicio", path: "/" },
      { id: 2, title: "Acerca de", path: "/about" },
      { id: 3, title: "Producto", path: "/ourblog" },
      { id: 4, title: "Catálogo ", path: "/product" },
      { id: 5, title: "Contacto", path: "/contact" },
    ],
  },
  {
    id: 4,
    lang: 'ar',
    data: [
      { id: 1, title: "الرئيسية", path: "/" },
      { id: 2, title: "معلومات عنا", path: "/about" },
      { id: 3, title: "المنتج", path: "/ourblog" },
      { id: 4, title: "كتالوج ", path: "/product" },
      { id: 5, title: "تواصل معنا", path: "/contact" },
    ],
  },
];



export const faq = [
  {
      lang: "en",
      title: {
          questions: "ASKED QUESTIONS",
          answer: "ANSWER PARTICULAR TOPIC"
      },
      items: [
          {
              id: 1,
              question: "Sourcing",
              answer: "We research and identify suppliers who share our values and commitment to quality, sustainability, and fair trade practices. We thoroughly assess potential suppliers to ensure they meet our quality standards and certifications."
          },
          {
              id: 2,
              question: "Fair Trade Practices",
              answer: "We ensure that suppliers pay fair prices to farmers and producers, promoting sustainable livelihoods and fair compensation. We work with suppliers who provide safe working environments and fair treatment of workers, upholding human rights and dignity."
          },
          {
              id: 3,
              question: "Quality Control & Sustainability",
              answer: "We have robust quality control measures in place to ensure our products meet the highest standards. This includes inspecting raw materials, monitoring production processes, testing finished products, and conducting regular internal audits to guarantee consistent quality. We prioritize environmentally friendly initiatives, reducing our impact through eco-efficient processes and waste reduction."
          },
          {
              id: 4,
              question: "Supply Chain Management",
              answer: "We manage our supply chain to ensure efficient delivery of products. This includes logistics, which encompasses procuring raw materials, planning production, and managing inventory. Through transportation, we partner with reliable carriers for timely and safe delivery. Our goal is to deliver products quickly and safely, meeting customer deadlines and expectations."
          },
      ],
  },
  {
      lang: "de",
      title: {
          questions: "HÄUFIG GESTELLTE FRAGEN",
          answer: "ANTWORTEN ZUM BESTIMMTEN THEMA"
      },
      items: [
          {
              id: 1,
              question: "Beschaffung",
              answer: "Wir recherchieren und identifizieren Lieferanten, die unsere Werte und unser Engagement für Qualität, Nachhaltigkeit und fairen Handel teilen. Wir bewerten potenzielle Lieferanten gründlich, um sicherzustellen, dass sie unsere Qualitätsstandards und Zertifizierungen erfüllen."
          },
          {
              id: 2,
              question: "Fair Trade Praktiken",
              answer: "Wir stellen sicher, dass Lieferanten faire Preise an Landwirte und Produzenten zahlen, um nachhaltige Lebensgrundlagen und faire Entlohnung zu fördern. Wir arbeiten mit Lieferanten zusammen, die sichere Arbeitsbedingungen bieten und die Rechte und Würde der Arbeiter achten."
          },
          {
              id: 3,
              question: "Qualitätskontrolle & Nachhaltigkeit",
              answer: "Wir haben robuste Qualitätskontrollmaßnahmen, um sicherzustellen, dass unsere Produkte die höchsten Standards erfüllen. Dazu gehört die Inspektion von Rohstoffen, die Überwachung der Produktionsprozesse, die Prüfung der Fertigprodukte und die Durchführung regelmäßiger interner Audits, um eine gleichbleibende Qualität zu garantieren. Wir priorisieren umweltfreundliche Initiativen, um unsere Auswirkungen durch umweltfreundliche Prozesse und Abfallreduzierung zu minimieren."
          },
          {
              id: 4,
              question: "Lieferkettenmanagement",
              answer: "Wir verwalten unsere Lieferkette, um eine effiziente Lieferung der Produkte zu gewährleisten. Dazu gehören Logistik, Beschaffung von Rohmaterialien, Produktionsplanung und Bestandsverwaltung. Bei der Beförderung arbeiten wir mit zuverlässigen Transporteuren für pünktliche und sichere Lieferungen zusammen. Unser Ziel ist es, Produkte schnell und sicher zu liefern und die Fristen und Erwartungen der Kunden zu erfüllen."
          },
      ],
  },
  {
      lang: "es",
      title: {
          questions: "PREGUNTAS FRECUENTES",
          answer: "RESPUESTA A UN TEMA PARTICULAR"
      },
      items: [
          {
              id: 1,
              question: "Abastecimiento",
              answer: "Investigamos e identificamos proveedores que comparten nuestros valores y compromiso con la calidad, la sostenibilidad y las prácticas de comercio justo. Evaluamos a fondo a los proveedores potenciales para asegurarnos de que cumplan con nuestros estándares de calidad y certificaciones."
          },
          {
              id: 2,
              question: "Prácticas de Comercio Justo",
              answer: "Nos aseguramos de que los proveedores paguen precios justos a los agricultores y productores, promoviendo medios de vida sostenibles y una compensación justa. Trabajamos con proveedores que ofrecen ambientes de trabajo seguros y un trato justo a los trabajadores, respetando los derechos humanos y la dignidad."
          },
          {
              id: 3,
              question: "Control de Calidad y Sostenibilidad",
              answer: "Contamos con sólidas medidas de control de calidad para garantizar que nuestros productos cumplan con los más altos estándares. Esto incluye la inspección de materias primas, el monitoreo de los procesos de producción, la prueba de productos terminados y la realización de auditorías internas regulares para garantizar una calidad constante. Priorizamos iniciativas amigables con el medio ambiente, reduciendo nuestro impacto a través de procesos ecoeficientes y reducción de residuos."
          },
          {
              id: 4,
              question: "Gestión de la Cadena de Suministro",
              answer: "Gestionamos nuestra cadena de suministro para garantizar una entrega eficiente de productos. Esto incluye la logística, que abarca la adquisición de materias primas, la planificación de la producción y la gestión del inventario. A través del transporte, colaboramos con transportistas confiables para entregas puntuales y seguras. Nuestro objetivo es entregar productos de manera rápida y segura, cumpliendo con los plazos y expectativas de los clientes."
          },
      ],
  },
  {
      lang: "ar",
      title: {
          questions: "الأسئلة المتكررة",
          answer: "الإجابة على موضوع معين"
      },
      items: [
          {
              id: 1,
              question: "المصدر",
              answer: "نقوم بالبحث وتحديد الموردين الذين يشاركون قيمنا والتزامنا بالجودة، والاستدامة، وممارسات التجارة العادلة. نقوم بتقييم الموردين المحتملين بشكل شامل لضمان توافقهم مع معايير الجودة والشهادات لدينا."
          },
          {
              id: 2,
              question: "ممارسات التجارة العادلة",
              answer: "نضمن أن يدفع الموردون أسعارًا عادلة للمزارعين والمنتجين، مما يعزز سبل العيش المستدامة والتعويض العادل. نعمل مع الموردين الذين يوفرون بيئات عمل آمنة ومعاملة عادلة للعمال، مع احترام حقوق الإنسان وكرامتهم."
          },
          {
              id: 3,
              question: "مراقبة الجودة والاستدامة",
              answer: "لدينا تدابير قوية لمراقبة الجودة لضمان أن منتجاتنا تلبي أعلى المعايير. يشمل ذلك فحص المواد الخام، ومراقبة عمليات الإنتاج، واختبار المنتجات النهائية، وإجراء تدقيقات داخلية منتظمة لضمان جودة مستمرة. نحن نولي الأولوية للمبادرات الصديقة للبيئة، وتقليل تأثيرنا من خلال عمليات صديقة للبيئة وتقليل النفايات."
          },
          {
              id: 4,
              question: "إدارة سلسلة التوريد",
              answer: "ندير سلسلة التوريد الخاصة بنا لضمان تسليم المنتجات بكفاءة. يشمل ذلك اللوجستيات، التي تتضمن شراء المواد الخام، وتخطيط الإنتاج، وإدارة المخزون. من خلال النقل، نتعاون مع ناقلين موثوقين لتسليمات في الوقت المناسب وآمنة. هدفنا هو تسليم المنتجات بسرعة وأمان، مع تلبية المواعيد النهائية وتوقعات العملاء."
          },
      ],
  },
];


export const feature = [
  {
      id: 1,
      lang: "en",
      content: [
          {
              id: 0,
              heading: "WHAT WE DO",
              title: '"WELCOME TO UTKAL  INTERNATIONAL"',
          },
          {
              id: 1,
              heading: "Coffee Beans",
              title: "Experience the rich aroma and robust flavor of our coffee beans, cultivated in the pristine hill regions of Koraput.",
              image: feature1
          },
          {
              id: 2,
              heading: "Cashew and Nuts",
              title: "Our cashew nuts are sourced directly from the fertile lands of Koraput, known for producing top-grade organic products.",
              image: feature2
          },
          {
              id: 3,
              heading: "Foxnuts",
              title: "We provide top-quality fox nuts (also known as Makhana), renowned for their health benefits and versatile uses.",
              image: feature3
          },
          {
              id: 4,
              heading: "Grains",
              title: "Our range of organic grains includes rice, millet, and other cereals, cultivated using traditional farming techniques in Koraput.",
              image: feature4
          },
      ]
  },
  {
      id: 2,
      lang: "de",
      content: [
          {
              id: 0,
              heading: "WAS WIR TUN",
              title: "WILLKOMMEN UTKAL ZU ORGANISCH",
          },
          {
              id: 1,
              heading: "Kaffeebohnen",
              title: "Erleben Sie das reiche Aroma und den kräftigen Geschmack unserer Kaffeebohnen, die in den unberührten Hügelregionen von Koraput angebaut werden.",
              image: feature1
          },
          {
              id: 2,
              heading: "Cashewnüsse",
              title: "Unsere Cashewnüsse stammen direkt aus den fruchtbaren Böden von Koraput, die für die Produktion hochwertiger Bio-Produkte bekannt sind.",
              image: feature2
          },
          {
              id: 3,
              heading: "Schwimmende Nüsse",
              title: "Wir bieten hochwertige Fuchsnüsse (auch als Makhana bekannt) an, die für ihre gesundheitlichen Vorteile und vielseitigen Einsatzmöglichkeiten bekannt sind.",
              image: feature3
          },
          {
              id: 4,
              heading: "Getreide",
              title: "Unser Sortiment an Bio-Getreide umfasst Reis, Hirse und andere Getreide, die nach traditionellen Anbaumethoden in Koraput kultiviert werden.",
              image: feature4
          },
      ]
  },
  {
      id: 3,
      lang: "es",
      content: [
          {
              id: 0,
              heading: "QUÉ HACEMOS",
              title: "BIENVENIDO UTKAL A LO ORGÁNICO",
          },
          {
              id: 1,
              heading: "Granos de café",
              title: "Experimenta el rico aroma y el robusto sabor de nuestros granos de café, cultivados en las prístinas regiones montañosas de Koraput.",
              image: feature1
          },
          {
              id: 2,
              heading: "Nuez de anacardo",
              title: "Nuestros anacardos se obtienen directamente de las fértiles tierras de Koraput, conocidas por producir productos orgánicos de primera calidad.",
              image: feature2
          },
          {
              id: 3,
              heading: "Mukhwas",
              title: "Proporcionamos nueces de zorro de alta calidad (también conocidas como Makhana), famosas por sus beneficios para la salud y su uso versátil.",
              image: feature3
          },
          {
              id: 4,
              heading: "Granos",
              title: "Nuestra gama de granos orgánicos incluye arroz, mijo y otros cereales, cultivados utilizando técnicas agrícolas tradicionales en Koraput.",
              image: feature4
          },
      ]
  },
  {
      id: 4,
      lang: "ar",
      content: [
          {
              id: 0,
              heading: "ماذا نفعل",
              title: "مرحبا بكم في أوتكل إلى العضوي",
          },
          {
              id: 1,
              heading: "حبوب القهوة",
              title: "استمتع برائحة غنية ونكهة قوية لحبوب القهوة الخاصة بنا، المزروعة في المناطق الجبلية النقية في كورابوت.",
              image: feature1
          },
          {
              id: 2,
              heading: "الكاجو والمكسرات",
              title: "يتم الحصول على كاجو المكسرات الخاصة بنا مباشرة من الأراضي الخصبة في كورابوت، المعروفة بإنتاج منتجات عضوية عالية الجودة.",
              image: feature2
          },
          {
              id: 3,
              heading: "المكسرات",
              title: "نقدم مكسرات عالية الجودة (المعروفة أيضًا باسم مخانا)، المعروفة بفوائدها الصحية واستخداماتها المتنوعة.",
              image: feature3
          },
          {
              id: 4,
              heading: "الحبوب",
              title: "تشمل مجموعتنا من الحبوب العضوية الأرز والدخن وغيرها من الحبوب، المزروعة باستخدام تقنيات الزراعة التقليدية في كورابوت.",
              image: feature4
          },
      ]
  },
];

  export const cardArr = [
    {
      id:1,
      image:pro1,
    },
    {
  
     id:2,
     image: pro2,
  
    },
    {
  
      id:3,
      image: pro3,
  
     },
     {
  
      id:4,
      image: pro4,
  
     },
    
    
  
  ]
  export const sliderArr = [
    {
        lang: "en",
        title: {
            heading: "OUR FEEDBACK",
            subheading: "What Our Clients Say",
        },
        content: [
            {
                id: 1,
                img: test1,
                paragraph: "Utkal International's organic grains exceeded my expectations in quality and taste. The commitment to no chemicals and superior freshness is evident."
            },
            {
                id: 2,
                img: test1,
                paragraph: "I appreciate the transparency and fair trade practices. Supporting local farmers while enjoying nutrient-rich products is a win-win."
            },
            {
                id: 3,
                img: test1,
                paragraph: "The spices are incredibly flavorful and pure. The absence of synthetic additives makes a noticeable difference in our meals."
            }
        ],
    },
    {
        lang: "de",
        title: {
            heading: "UNSERE BEWERTUNGEN",
            subheading: "Was unsere Kunden sagen",
        },
        content: [
            {
                id: 1,
                img: test1,
                paragraph: "Die Bio-Körner von Utkal International haben meine Erwartungen an Qualität und Geschmack übertroffen. Das Engagement für chemiefreie und überlegene Frische ist offensichtlich."
            },
            {
                id: 2,
                img: test1,
                paragraph: "Ich schätze die Transparenz und die fairen Handelspraktiken. Lokale Bauern zu unterstützen und gleichzeitig nährstoffreiche Produkte zu genießen, ist eine Win-Win-Situation."
            },
            {
                id: 3,
                img: test1,
                paragraph: "Die Gewürze sind unglaublich geschmackvoll und rein. Das Fehlen synthetischer Zusatzstoffe macht einen spürbaren Unterschied in unseren Mahlzeiten."
            }
        ],
    },
    {
        lang: "es",
        title: {
            heading: "NUESTROS COMENTARIOS",
            subheading: "Lo que dicen nuestros clientes",
        },
        content: [
            {
                id: 1,
                img: test1,
                paragraph: "Los granos orgánicos de Utkal International superaron mis expectativas en calidad y sabor. El compromiso con la ausencia de químicos y la frescura superior es evidente."
            },
            {
                id: 2,
                img: test1,
                paragraph: "Aprecio la transparencia y las prácticas de comercio justo. Apoyar a los agricultores locales mientras disfruto de productos ricos en nutrientes es un ganar-ganar."
            },
            {
                id: 3,
                img: test1,
                paragraph: "Las especias son increíblemente sabrosas y puras. La ausencia de aditivos sintéticos hace una diferencia notable en nuestras comidas."
            }
        ],
    },
    {
        lang: "ar",
        title: {
            heading: "ملاحظاتنا",
            subheading: "ماذا يقول عملاؤنا",
        },
        content: [
            {
                id: 1,
                img: test1,
                paragraph: "تجاوزت الحبوب العضوية من Utkal International توقعاتي من حيث الجودة والطعم. الالتزام بعدم استخدام المواد الكيميائية والنضارة الفائقة واضح."
            },
            {
                id: 2,
                img: test1,
                paragraph: "أقدر الشفافية وممارسات التجارة العادلة. دعم المزارعين المحليين مع الاستمتاع بمنتجات غنية بالمغذيات هو فوز للجميع."
            },
            {
                id: 3,
                img: test1,
                paragraph: "التوابل لذيذة للغاية ونقية. غياب الإضافات الصناعية يحدث فرقًا ملحوظًا في وجباتنا."
            }
        ],
    },
];

  
  
  

  export const cardarr = [
    {
      lang: "en",
      title: "MD MESSAGE",
      subtitle: "ORGANIC EXCELLENCE GLOBALLY DELIVERED",
      content: [
        {
          id: 1,
          title: 'SURESH MISHRA',
          description: 'At Utkal International, we deliver exceptional organic products that exceed global standards. We surpass client expectations through tailored services and personalized solutions designed to meet their unique needs. Our commitment to quality and sustainability ensures that every product reflects our dedication to ethical practices and environmental stewardship. We pride ourselves on customer satisfaction and adaptability, continuously evolving to stay ahead in a dynamic market. Together, let’s grow and thrive in the organic market, fostering a community that values health, wellness, and responsible sourcing. By partnering with us, you join a movement toward a greener future, where every choice contributes to a healthier planet for generations to come.',
          imageSrc: pro3,
        }
      ],
    },
    {
      lang: "de",
      title: "MD BOTSCHAFT",
      subtitle: "BIOLOGISCHE EXZELLENZ GLOBAL GELIEFERT",
      content: [
        {
          id: 1,
          title: 'SURESH MISHRA',
          description: 'Bei Utkal International liefern wir außergewöhnliche Bio-Produkte, die über den globalen Standards liegen. Wir übertreffen die Erwartungen unserer Kunden durch maßgeschneiderte Dienstleistungen und personalisierte Lösungen, die auf ihre einzigartigen Bedürfnisse zugeschnitten sind. Unser Engagement für Qualität und Nachhaltigkeit gewährleistet, dass jedes Produkt unser Engagement für ethische Praktiken und Umweltschutz widerspiegelt. Wir legen Wert auf Kundenzufriedenheit und Anpassungsfähigkeit, und entwickeln uns ständig weiter, um in einem dynamischen Markt an der Spitze zu bleiben. Lassen Sie uns gemeinsam im Biobereich wachsen und gedeihen und eine Gemeinschaft schaffen, die Gesundheit, Wellness und verantwortungsbewusste Beschaffung schätzt. Wenn Sie sich uns anschließen, werden Sie Teil einer Bewegung in Richtung einer grüneren Zukunft, in der jede Entscheidung zu einem gesünderen Planeten für zukünftige Generationen beiträgt.',
          imageSrc: pro3,
        }
      ],
    },
    {
      lang: "es",
      title: "MENSAJE DEL MD",
      subtitle: "EXCELENCIA ORGÁNICA ENTREGADA GLOBALMENTE",
      content: [
        {
          id: 1,
          title: 'SURESH MISHRA',
          description: 'En Utkal International, ofrecemos productos orgánicos excepcionales que superan los estándares globales. Superamos las expectativas de los clientes a través de servicios personalizados y soluciones diseñadas para satisfacer sus necesidades únicas. Nuestro compromiso con la calidad y la sostenibilidad garantiza que cada producto refleje nuestra dedicación a las prácticas éticas y al cuidado del medio ambiente. Nos enorgullecemos de la satisfacción del cliente y de la adaptabilidad, evolucionando continuamente para mantenernos a la vanguardia en un mercado dinámico. Juntos, crezcamos y prosperemos en el mercado orgánico, fomentando una comunidad que valora la salud, el bienestar y la adquisición responsable. Al asociarse con nosotros, se une a un movimiento hacia un futuro más verde, donde cada elección contribuye a un planeta más saludable para las generaciones venideras.',
          imageSrc: pro3,
        }
      ],
    },
    {
      lang: "ar",
      title: "رسالة المدير العام",
      subtitle: "التميز العضوي موزع عالميًا",
      content: [
        {
          id: 1,
          title: 'سوريش ميشرا',
          description: 'في Utkal International، نقدم منتجات عضوية استثنائية تتجاوز المعايير العالمية. نتجاوز توقعات العملاء من خلال خدمات مخصصة وحلول مصممة لتلبية احتياجاتهم الفريدة. يضمن التزامنا بالجودة والاستدامة أن يعكس كل منتج التزامنا بالممارسات الأخلاقية ورعاية البيئة. نفخر برضا العملاء وقابليتنا للتكيف، ونتطور باستمرار للبقاء في المقدمة في سوق ديناميكي. دعونا ننمو ونزدهر معًا في السوق العضوي، مما يعزز مجتمعًا يقدّر الصحة والرفاهية والمصادر المسؤولة. من خلال الشراكة معنا، تنضم إلى حركة نحو مستقبل أكثر خضرة، حيث تسهم كل خيار في كوكب أكثر صحة للأجيال القادمة.',
          imageSrc: pro3,
        }
      ],
    },
  ]; 
import { butterfly, cherry, leaf, man, plant1, plant2, plant3, plant4, plant5, plant6 } from '@/assests/Farming'
import { slider2 } from '@/components/product/src/asserts/home';
    
    export const contentData = [
      {
        image: plant1,
        title: "OUR PRODUCTS",
        subtitle: "ORGANIC PRODUCT",
        features: [
          { image:cherry, title: "Fresh & Pesticide Free", description: "Agriculture was the key development rise of sedentary human species." },
          {  image:cherry ,title: "Chilled Courier Service", description: "Agriculture was the key development rise of sedentary human species." },
          { image:cherry, title: "Demand by Home Life", description: "Agriculture was the key development rise of sedentary human species." },
          { image:cherry, title: "Home Grown Goodness", description: "Agriculture was the key development rise of sedentary human species." }
        ],
        
      },
      {
        image: plant2,
        title: "OUR PRODUCTS",
        subtitle: "ORGANIC PRODUCT",
        features: [
          { image:butterfly, title: "Organic Fertilizers", description: "Using organic methods to ensure healthy growth of crops." },
          {image:butterfly,  title: "Sustainable Irrigation", description: "Ensuring water efficiency through sustainable irrigation practices." },
          { image:butterfly,title: "Pest Control Methods", description: "Implementing eco-friendly pest control for crop safety." },
          {  image:butterfly ,title: "Soil Health Monitoring", description: "Regular soil testing to monitor and improve soil health." }
        ],
       
      },

      {
        image: plant3,
        title: "OUR PRODUCTS",
        subtitle: "ORGANIC PRODUCT",
        features: [
          { image:leaf,title: "Organic Fertilizers", description: "Using organic methods to ensure healthy growth of crops." },
          {image:leaf ,title: "Sustainable Irrigation", description: "Ensuring water efficiency through sustainable irrigation practices." },
          { image:leaf, title: "Pest Control Methods", description: "Implementing eco-friendly pest control for crop safety." },
          { image:leaf, title: "Soil Health Monitoring", description: "Regular soil testing to monitor and improve soil health." }
        ],
       
      },

      {
        image: plant4,
        title: "OUR PRODUCTS",
        subtitle: "ORGANIC PRODUCT",
        features: [
          { image:man, title: "Organic Fertilizers", description: "Using organic methods to ensure healthy growth of crops." },
          { image:man ,title: "Sustainable Irrigation", description: "Ensuring water efficiency through sustainable irrigation practices." },
          {image:man, title: "Pest Control Methods", description: "Implementing eco-friendly pest control for crop safety." },
          {image:man,  title: "Soil Health Monitoring", description: "Regular soil testing to monitor and improve soil health." }
        ],
       
      },
      {
        image: plant5,
        title: "OUR PRODUCTS",
        subtitle: "ORGANIC PRODUCT",
        features: [
          { image:butterfly ,title: "Organic Fertilizers", description: "Using organic methods to ensure healthy growth of crops." },
          { image:butterfly, title: "Sustainable Irrigation", description: "Ensuring water efficiency through sustainable irrigation practices." },
          {  image:butterfly,title: "Pest Control Methods", description: "Implementing eco-friendly pest control for crop safety." },
          { image:butterfly, title: "Soil Health Monitoring", description: "Regular soil testing to monitor and improve soil health." }
        ],
      
      },
      {
        image: plant6,
        title: "OUR PRODUCTS",
        subtitle: "ORGANIC PRODUCT",
        features: [
          {image:butterfly, title: "Organic Fertilizers", description: "Using organic methods to ensure healthy growth of crops." },
          {  image:butterfly,title: "Sustainable Irrigation", description: "Ensuring water efficiency through sustainable irrigation practices." },
          {image:butterfly,  title: "Pest Control Methods", description: "Implementing eco-friendly pest control for crop safety." },
          { image:butterfly, title: "Soil Health Monitoring", description: "Regular soil testing to monitor and improve soil health." }
        ],
       
      },
    ];
    export const pricingData = {
      en: [
        {
          title: "Organic Cashew Nuts",
          price: "Increasing demand in international markets.",
          description: "Rich in healthy fats, protein, and essential minerals.",
          image: feature2,
        },
        {
          title: "Organic Jaggery",
          price: "Popular as a healthier sugar alternative.",
          description: "Natural sweetener, rich in iron and nutrients.",
          image: Slider2,
        },
        {
          title: "Fox Nuts (Makhana)",
          price: "Rising popularity in health-conscious sectors.",
          description: "High in protein and fiber, low in calories.",
          image: feature3,
        },
        {
          title: "Koraput Black Pepper",
          price: "Sought after in global markets, especially Europe.",
          description: "Unique aroma, rich in antioxidants.",
          image: Slider1,
        },
        {
          title: "Organic Ginger",
          price: "Increasing demand in health and wellness.",
          description: "Medicinal properties, enhances flavor in dishes.",
          image: Slider4,
        },
        {
          title: "Organic Cardamom",
          price: "High demand domestically and internationally.",
          description: "Strong flavor and aroma, versatile in cooking.",
          image: carde,
        },
        {
          title: "Organic Coffee",
          price: "Popular in specialty coffee markets.",
          description: "Rich flavor, low acidity, unique to the region.",
          image: feature1,
        },
        {
          title: "Organic Ragi Seeds",
          price: "Gluten-free, making it a great option for those with gluten intolerance.",
          description: "Rich in calcium, iron, and fiber, promoting bone health and digestion.",
          image: ragi,
        },
        {
          title: "Organic Black Rice",
          price: "High in antioxidants, particularly anthocyanins, which can help reduce inflammation.",
          description: "Contains fiber, vitamins, and minerals, contributing to overall health and well-being.",
          image: blackrice,
        },
      ],
      es: [
        {
          title: "Nueces de Anacardo Orgánicas",
          price: "Demanda creciente en los mercados internacionales.",
          description: "Ricas en grasas saludables, proteínas y minerales esenciales.",
          image: feature2,
        },
        {
          title: "Jaggery Orgánico",
          price: "Popular como una alternativa de azúcar más saludable.",
          description: "Endulzante natural, rico en hierro y nutrientes.",
          image: Slider2,
        },
        {
          title: "Nueces Fox (Makhana)",
          price: "Creciente popularidad en sectores conscientes de la salud.",
          description: "Ricas en proteínas y fibra, bajas en calorías.",
          image: feature3,
        },
        {
          title: "Pimienta Negra de Koraput",
          price: "Buscada en mercados globales, especialmente en Europa.",
          description: "Aroma único, rica en antioxidantes.",
          image: Slider1,
        },
        {
          title: "Jengibre Orgánico",
          price: "Demanda creciente en salud y bienestar.",
          description: "Propiedades medicinales, realza el sabor en los platos.",
          image: Slider4,
        },
        {
          title: "Cardamomo Orgánico",
          price: "Alta demanda a nivel nacional e internacional.",
          description: "Sabor y aroma intensos, versátil en la cocina.",
          image: carde,
        },
        {
          title: "Café Orgánico",
          price: "Popular en mercados de café de especialidad.",
          description: "Sabor rico, baja acidez, único de la región.",
          image: feature1,
        },
        {
          title: "Semillas de Ragi Orgánicas",
          price: "Sin gluten, lo que lo convierte en una gran opción para quienes tienen intolerancia al gluten.",
          description: "Ricas en calcio, hierro y fibra, promueven la salud ósea y la digestión.",
          image: ragi,
        },
        {
          title: "Arroz Negro Orgánico",
          price: "Alto en antioxidantes, particularmente antocianinas, que pueden ayudar a reducir la inflamación.",
          description: "Contiene fibra, vitaminas y minerales, contribuyendo a la salud y el bienestar general.",
          image: blackrice,
        },
      ],
      de: [
        {
          title: "Bio-Cashewkerne",
          price: "Steigende Nachfrage auf internationalen Märkten.",
          description: "Reich an gesunden Fetten, Proteinen und essentiellen Mineralien.",
          image: feature2,
        },
        {
          title: "Bio-Jaggery",
          price: "Beliebt als gesündere Zuckeralternative.",
          description: "Natürlicher Süßstoff, reich an Eisen und Nährstoffen.",
          image: Slider2,
        },
        {
          title: "Fox-Nüsse (Makhana)",
          price: "Steigende Beliebtheit in gesundheitsbewussten Sektoren.",
          description: "Reich an Proteinen und Ballaststoffen, kalorienarm.",
          image: feature3,
        },
        {
          title: "Koraput Schwarzer Pfeffer",
          price: "In globalen Märkten, besonders in Europa, gefragt.",
          description: "Einzigartiges Aroma, reich an Antioxidantien.",
          image: Slider1,
        },
        {
          title: "Bio-Ingwer",
          price: "Steigende Nachfrage im Gesundheits- und Wellnessbereich.",
          description: "Heilende Eigenschaften, verbessert den Geschmack in Gerichten.",
          image: Slider4,
        },
        {
          title: "Bio-Kardamom",
          price: "Hohe Nachfrage national und international.",
          description: "Starker Geschmack und Aroma, vielseitig in der Küche.",
          image: carde,
        },
        {
          title: "Bio-Kaffee",
          price: "Beliebt auf dem Markt für Spezialitätenkaffee.",
          description: "Reicher Geschmack, niedrige Säure, einzigartig in der Region.",
          image: feature1,
        },
        {
          title: "Bio-Ragi-Samen",
          price: "Glutenfrei, was es zu einer großartigen Option für Menschen mit Glutenunverträglichkeit macht.",
          description: "Reich an Kalzium, Eisen und Ballaststoffen, fördert die Knochengesundheit und Verdauung.",
          image: ragi,
        },
        {
          title: "Bio-Schwarzer Reis",
          price: "Reich an Antioxidantien, insbesondere Anthocyanen, die Entzündungen reduzieren können.",
          description: "Enthält Ballaststoffe, Vitamine und Mineralien und trägt zur allgemeinen Gesundheit und zum Wohlbefinden bei.",
          image: blackrice,
        },
      ],
      ar: [
        {
          title: "مكسرات الكاجو العضوية",
          price: "زيادة الطلب في الأسواق الدولية.",
          description: "غني بالدهون الصحية والبروتينات والمعادن الأساسية.",
          image: feature2,
        },
        {
          title: "جاغري عضوي",
          price: "شائع كبديل صحي للسكر.",
          description: "محلى طبيعي، غني بالحديد والمواد الغذائية.",
          image: Slider2,
        },
        {
          title: "المكسرات (ماخانا)",
          price: "شعبية متزايدة في القطاعات المهتمة بالصحة.",
          description: "غني بالبروتين والألياف، منخفض السعرات الحرارية.",
          image: feature3,
        },
        {
          title: "فلفل كورابوت الأسود",
          price: "مطلوب في الأسواق العالمية، وخاصة في أوروبا.",
          description: "رائحة فريدة، غنية بمضادات الأكسدة.",
          image: Slider1,
        },
        {
          title: "زنجبيل عضوي",
          price: "زيادة الطلب في الصحة والعافية.",
          description: "خصائص طبية، يعزز النكهة في الأطباق.",
          image: Slider4,
        },
        {
          title: "هيل عضوي",
          price: "طلب مرتفع محليًا ودوليًا.",
          description: "نكهة ورائحة قوية، متعددة الاستخدامات في الطهي.",
          image: carde,
        },
        {
          title: "قهوة عضوية",
          price: "شائعة في أسواق القهوة الخاصة.",
          description: "نكهة غنية، حموضة منخفضة، فريدة من نوعها في المنطقة.",
          image: feature1,
        },
        {
          title: "بذور راجي العضوية",
          price: "خالٍ من الغلوتين، مما يجعله خيارًا رائعًا لمن يعانون من حساسية الغلوتين.",
          description: "غني بالكالسيوم والحديد والألياف، يعزز صحة العظام والهضم.",
          image: ragi,
        },
        {
          title: "أرز أسود عضوي",
          price: "غني بمضادات الأكسدة، وخاصة الأنثوسيانين، والتي يمكن أن تساعد في تقليل الالتهاب.",
          description: "يحتوي على الألياف والفيتامينات والمعادن، مما يسهم في الصحة العامة والرفاهية.",
          image: blackrice,
        },
      ],
    };
    
    
    export const sliderhomeArr=[
      {
        id:1,
        img:Slider1,
      },
    
      {
        id:2,
        img:rosted1,
      },
      {
        id:3,
        img:Slider3,
      },
      {
        id:6,
        img:greenCoffee1
      },
      {
        id:4,
        img:tur1,
      },
      {
        id:5,
        img:Slider5,
      },

    ]
    export const slidericonArr=[
      {
        id:1,
        img:icon1,
      },
      {
        id:2,
        img:icon2,
      },
      {
        id:3,
        img:icon3,
      },
    ]