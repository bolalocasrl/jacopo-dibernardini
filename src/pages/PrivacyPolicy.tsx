import { useEffect } from 'react'
import { useLang } from '../i18n/LangContext'
import logojacopo1 from '../assets/logojacopo1.png'

export default function PrivacyPolicy() {
  const { lang } = useLang()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const content = {
    it: {
      title: 'Privacy Policy',
      lastUpdated: 'Ultimo aggiornamento: giugno 2026',
      sections: [
        {
          title: '1. Titolare del trattamento',
          text: "Il titolare del trattamento dei dati personali è Dott. Jacopo Di Bernardini, raggiungibile all'indirizzo email jacopo.dibernardini@yahoo.it o al numero +39 380 719 0072."
        },
        {
          title: '2. Dati raccolti',
          text: 'Attraverso il modulo di contatto presente sul sito, vengono raccolti i seguenti dati personali: nome e cognome, indirizzo email, numero di telefono (facoltativo), contenuto del messaggio.'
        },
        {
          title: '3. Finalità del trattamento',
          text: "I dati raccolti vengono utilizzati esclusivamente per rispondere alle richieste di contatto e informazioni inviate dall'utente, nonché per la prenotazione di visite e consulenze."
        },
        {
          title: '4. Base giuridica',
          text: "Il trattamento dei dati si basa sul consenso espresso dall'utente al momento dell'invio del modulo di contatto, ai sensi dell'art. 6, par. 1, lett. a) del Regolamento UE 2016/679 (GDPR)."
        },
        {
          title: '5. Conservazione dei dati',
          text: 'I dati personali vengono conservati per il tempo strettamente necessario a gestire la richiesta e non oltre 12 mesi dalla data di ricezione, salvo diversi obblighi di legge.'
        },
        {
          title: '6. Condivisione dei dati',
          text: 'I dati non vengono ceduti, venduti o comunicati a terzi, ad eccezione del servizio Formspree utilizzato per la gestione tecnica del modulo di contatto, che tratta i dati in qualità di responsabile del trattamento.'
        },
        {
          title: "7. Diritti dell'utente",
          text: "L'utente ha il diritto di accedere ai propri dati, richiederne la rettifica o la cancellazione, opporsi al trattamento e richiedere la portabilità dei dati. Per esercitare questi diritti è possibile contattare il titolare all'indirizzo email jacopo.dibernardini@yahoo.it."
        },
        {
          title: '8. Cookie',
          text: 'Questo sito non utilizza cookie di profilazione. Potrebbero essere utilizzati cookie tecnici strettamente necessari al funzionamento del sito.'
        }
      ]
    },
    es: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: junio de 2026',
      sections: [
        {
          title: '1. Responsable del tratamiento',
          text: 'El responsable del tratamiento de datos personales es el Dott. Jacopo Di Bernardini, contactable en jacopo.dibernardini@yahoo.it o en el número +39 380 719 0072.'
        },
        {
          title: '2. Datos recopilados',
          text: 'A través del formulario de contacto del sitio web se recopilan los siguientes datos personales: nombre y apellidos, dirección de correo electrónico, número de teléfono (opcional), contenido del mensaje.'
        },
        {
          title: '3. Finalidad del tratamiento',
          text: 'Los datos recopilados se utilizan exclusivamente para responder a las solicitudes de contacto e información enviadas por el usuario, así como para la reserva de visitas y consultas.'
        },
        {
          title: '4. Base jurídica',
          text: 'El tratamiento de datos se basa en el consentimiento expreso del usuario en el momento del envío del formulario de contacto, de conformidad con el art. 6, apartado 1, letra a) del Reglamento UE 2016/679 (RGPD).'
        },
        {
          title: '5. Conservación de los datos',
          text: 'Los datos personales se conservan durante el tiempo estrictamente necesario para gestionar la solicitud y no más de 12 meses desde la fecha de recepción, salvo obligaciones legales diferentes.'
        },
        {
          title: '6. Compartición de datos',
          text: 'Los datos no se ceden, venden ni comunican a terceros, a excepción del servicio Formspree utilizado para la gestión técnica del formulario de contacto, que trata los datos en calidad de encargado del tratamiento.'
        },
        {
          title: '7. Derechos del usuario',
          text: 'El usuario tiene derecho a acceder a sus datos, solicitar su rectificación o supresión, oponerse al tratamiento y solicitar la portabilidad de los datos. Para ejercer estos derechos puede contactar con el responsable en jacopo.dibernardini@yahoo.it.'
        },
        {
          title: '8. Cookies',
          text: 'Este sitio web no utiliza cookies de elaboración de perfiles. Podrían utilizarse cookies técnicas estrictamente necesarias para el funcionamiento del sitio.'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: June 2026',
      sections: [
        {
          title: '1. Data Controller',
          text: 'The data controller is Dott. Jacopo Di Bernardini, reachable at jacopo.dibernardini@yahoo.it or at +39 380 719 0072.'
        },
        {
          title: '2. Data Collected',
          text: 'Through the contact form on the website, the following personal data is collected: full name, email address, phone number (optional), message content.'
        },
        {
          title: '3. Purpose of Processing',
          text: 'The data collected is used exclusively to respond to contact and information requests submitted by the user, as well as for booking visits and consultations.'
        },
        {
          title: '4. Legal Basis',
          text: 'Data processing is based on the express consent given by the user when submitting the contact form, pursuant to Art. 6(1)(a) of EU Regulation 2016/679 (GDPR).'
        },
        {
          title: '5. Data Retention',
          text: 'Personal data is retained for the time strictly necessary to handle the request and no longer than 12 months from the date of receipt, unless different legal obligations apply.'
        },
        {
          title: '6. Data Sharing',
          text: 'Data is not transferred, sold or communicated to third parties, except for the Formspree service used for the technical management of the contact form, which processes data as a data processor.'
        },
        {
          title: '7. User Rights',
          text: 'The user has the right to access their data, request its rectification or deletion, object to processing and request data portability. To exercise these rights, please contact the data controller at jacopo.dibernardini@yahoo.it.'
        },
        {
          title: '8. Cookies',
          text: 'This website does not use profiling cookies. Strictly necessary technical cookies may be used for the operation of the website.'
        }
      ]
    }
  }

  const c = content[lang]

  return (
    <div className="min-h-screen bg-[#2a2520] text-[#f5f0e8]">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <img src={logojacopo1} alt="JDB" className="h-12 w-auto opacity-60 mx-auto mb-8" />
          <div className="w-12 h-px bg-[#c9b87a] mb-6 mx-auto" />
          <h1 className="font-serif text-3xl md:text-4xl text-[#f5f0e8] mb-3">{c.title}</h1>
          <p className="text-[#f5f0e8]/30 text-xs tracking-widest">{c.lastUpdated}</p>
        </div>
        <div className="space-y-8">
          {c.sections.map((section, i) => (
            <div key={i} className="border-t border-[#c9b87a]/10 pt-8">
              <h2 className="text-[#c9b87a] text-sm tracking-widest uppercase mb-3">{section.title}</h2>
              <p className="text-[#f5f0e8]/60 text-sm leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-[#c9b87a]/10 text-center">
          <button
            onClick={() => window.history.back()}
            className="text-[#c9b87a] text-xs tracking-widest uppercase hover:text-[#f5f0e8] transition-colors"
          >
            ← Torna al sito
          </button>
        </div>
      </div>
    </div>
  )
}
