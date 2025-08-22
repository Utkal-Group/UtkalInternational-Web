'use client';
import React, { useContext } from 'react';
import { LanguageContext } from '@/LanguageContext'; // Ensure this is correctly imported
import { md } from '../../asserts/home';

export default function TeamMembers() {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error('LanguageContext not found. Make sure you are wrapping your app with LanguageProvider.');
  }

  const { language } = languageContext;

  // Explicitly define the type for the language keys
  type LanguageKey = 'en' | 'de' | 'es' | 'ar';

  // Multilingual content
  const content: Record<LanguageKey, { title: string; name: string; heading: string; message: string }> = {
    en: {
      title: 'MD MESSAGE',
      name: 'Suresh Mishra',
      heading: 'ORGANIC EXCELLENCE GLOBALLY DELIVERED',
      message: `
        At Utkal International, we deliver exceptional organic products that exceed global standards. 
        We surpass client expectations through tailored services and personalized solutions designed to meet their unique needs. 
        Our commitment to quality and sustainability ensures that every product reflects our dedication to ethical practices 
        and environmental stewardship. We pride ourselves on customer satisfaction and adaptability, continuously evolving to 
        stay ahead in a dynamic market. Together, let’s grow and thrive in the organic market, fostering a community that values 
        health, wellness, and responsible sourcing. By partnering with us, you join a movement toward a greener future, where every 
        choice contributes to a healthier planet for generations to come.
      `,
    },
    de: {
      title: 'MD-BOTSCHAFT',
      name: 'Suresh Mishra',
      heading: 'BIOLOGISCHE EXZELLENZ WELTWEIT GELIEFERT',
      message: `
        Bei Utkal International liefern wir außergewöhnliche Bio-Produkte, die die globalen Standards übertreffen. 
        Wir übertreffen die Erwartungen der Kunden durch maßgeschneiderte Dienstleistungen und individuelle Lösungen, die auf ihre 
        einzigartigen Bedürfnisse zugeschnitten sind. Unser Engagement für Qualität und Nachhaltigkeit stellt sicher, dass jedes Produkt 
        unser Engagement für ethische Praktiken und Umweltbewusstsein widerspiegelt. Wir sind stolz auf Kundenzufriedenheit und 
        Anpassungsfähigkeit und entwickeln uns kontinuierlich weiter, um in einem dynamischen Markt einen Schritt voraus zu sein. 
        Lassen Sie uns gemeinsam wachsen und im Bio-Markt gedeihen, eine Gemeinschaft fördern, die Gesundheit, Wohlbefinden und 
        verantwortungsbewusste Beschaffung schätzt.
      `,
    },
    es: {
      title: 'MENSAJE DEL DIRECTOR GENERAL',
      name: 'Suresh Mishra',
      heading: 'EXCELENCIA ORGÁNICA ENTREGADA GLOBALMENTE',
      message: `
        En Utkal International, entregamos productos orgánicos excepcionales que superan los estándares globales. 
        Superamos las expectativas de los clientes a través de servicios personalizados y soluciones adaptadas a sus 
        necesidades únicas. Nuestro compromiso con la calidad y la sostenibilidad garantiza que cada producto refleje 
        nuestra dedicación a prácticas éticas y responsabilidad ambiental. Nos enorgullecemos de la satisfacción del cliente 
        y la adaptabilidad, evolucionando continuamente para mantenernos a la vanguardia en un mercado dinámico. Juntos, 
        crezcamos y prosperemos en el mercado orgánico, fomentando una comunidad que valore la salud, el bienestar y el abastecimiento responsable.
      `,
    },
    ar: {
      title: 'رسالة المدير العام',
      name: 'سوريش ميشرا',
      heading: 'التفوق العضوي يتم تقديمه عالميًا',
      message: `
        في Utkal International، نقدم منتجات عضوية استثنائية تتجاوز المعايير العالمية. 
        نتجاوز توقعات العملاء من خلال خدمات مخصصة وحلول شخصية مصممة لتلبية احتياجاتهم الفريدة. 
        يضمن التزامنا بالجودة والاستدامة أن يعكس كل منتج تفانينا في الممارسات الأخلاقية 
        والحفاظ على البيئة. نحن نفخر برضا العملاء وقدرتنا على التكيف، ونتطور باستمرار للبقاء في الطليعة في 
        سوق ديناميكي. دعونا ننمو ونتطور معًا في السوق العضوية، ونعزز مجتمعًا يقدر الصحة والعافية 
        والمصادر المسؤولة. من خلال الشراكة معنا، تنضمون إلى حركة نحو مستقبل أكثر خضرة، حيث يساهم كل 
        اختيار في كوكب أكثر صحة للأجيال القادمة.
      `,
    },
  };

  // Cast `language` to `LanguageKey` to ensure type safety
  const { title, name, heading, message } = content[language as LanguageKey];

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
      <h2 className="text-2xl font-bold text-center text-green-600">{title}</h2>
      <h3 className="text-xl font-semibold mt-2">{name}</h3>
      <div className="flex flex-row items-start justify-between w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg mt-4">
        <div className="flex-1 p-4">
          <h4 className="text-lg font-bold text-green-600">{heading}</h4>
          <p className="mt-2 text-gray-700 whitespace-pre-line">{message}</p>
        </div>
        <div className="flex-none w-48 h-48 rounded-full overflow-hidden bg-gray-200">
          <img 
            src={md.src} // Replace with the actual path of your uploaded image
            alt="Suresh Mishra"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
