export type Lang = 'it' | 'es' | 'en'

export const translations = {
  it: {
    nav: {
      home: 'Home',
      about: 'Chi sono',
      services: 'Servizi',
      contact: 'Contatti',
    },
    hero: {
      title: 'Dott. Jacopo Di Bernardini',
      subtitle: 'Fisioterapista & Chiropratico',
      cta: 'Prenota una visita',
      locations: 'Barcelona · Milano · Roma',
    },
    about: {
      title: 'Chi sono',
      p1: 'Mi chiamo Jacopo Di Bernardini e sono un fisioterapista specializzato nel trattamento dei disturbi muscoloscheletrici, nella riabilitazione ortopedica e nella fisioterapia sportiva.',
      p2: 'Da oltre dieci anni aiuto persone e sportivi a recuperare funzionalità, ridurre il dolore e migliorare la qualità della vita attraverso percorsi terapeutici personalizzati.',
      p3: 'Nel corso della mia carriera ho lavorato in ambito clinico e sportivo, collaborando con società professionistiche e seguendo atleti di diversi livelli competitivi.',
      p4: 'Da settembre 2026 chiropratico, dopo un percorso universitario quinquennale presso il Barcelona College of Chiropractic.',
      p5: 'Credo in un approccio globale al paziente, che unisca valutazione accurata, trattamento manuale, esercizio terapeutico ed educazione al movimento.',
      formation: 'Formazione',
      experience: 'Esperienza',
    },
    services: {
      title: 'Servizi',
      subtitle: 'Un approccio globale alla salute del paziente',
      items: [
        {
          title: 'Fisioterapia',
          description: 'Trattamento dei disturbi muscoloscheletrici, riabilitazione post-operatoria e terapia del dolore cronico.',
        },
        {
          title: 'Chiropratica',
          description: 'Diagnosi e trattamento dei disturbi del sistema neuromuscoloscheletrico con approccio manuale specializzato.',
        },
        {
          title: 'Fisioterapia Sportiva',
          description: 'Prevenzione e recupero degli infortuni per atleti di tutti i livelli competitivi.',
        },
        {
          title: 'Riabilitazione Ortopedica',
          description: 'Percorsi riabilitativi personalizzati post-chirurgici e per patologie ortopediche.',
        },
        {
          title: 'Terapia Posturale',
          description: 'Valutazione posturale globale e rieducazione del movimento per migliorare la qualità della vita.',
        },
        {
          title: 'Terapia Manuale',
          description: 'Tecniche manuali avanzate per il trattamento di dolori articolari, muscolari e vertebrali.',
        },
      ],
    },
    contact: {
      title: 'Contatti',
      subtitle: 'Prenota una visita o richiedimi informazioni',
      name: 'Nome e Cognome',
      email: 'Email',
      phone: 'Telefono',
      message: 'Messaggio',
      send: 'Invia messaggio',
      sending: 'Invio in corso...',
      success: 'Messaggio inviato! Ti risponderò al più presto.',
      error: "Errore nell'invio. Riprova o contattami direttamente.",
      directContact: 'Contatto diretto',
      locations: 'Sedi',
    },
    footer: {
      rights: 'Tutti i diritti riservati',
      vat: 'C.F.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      services: 'Servicios',
      contact: 'Contacto',
    },
    hero: {
      title: 'Dott. Jacopo Di Bernardini',
      subtitle: 'Fisioterapeuta & Quiropráctico',
      cta: 'Reservar consulta',
      locations: 'Barcelona · Milán · Roma',
    },
    about: {
      title: 'Sobre mí',
      p1: 'Me llamo Jacopo Di Bernardini y soy fisioterapeuta especializado en el tratamiento de trastornos musculoesqueléticos, rehabilitación ortopédica y fisioterapia deportiva.',
      p2: 'Durante más de diez años he ayudado a personas y deportistas a recuperar funcionalidad, reducir el dolor y mejorar su calidad de vida a través de tratamientos personalizados.',
      p3: 'A lo largo de mi carrera he trabajado en el ámbito clínico y deportivo, colaborando con clubes profesionales y siguiendo a atletas de distintos niveles competitivos.',
      p4: 'Desde septiembre de 2026 también quiropráctico, tras una licenciatura de cinco años en el Barcelona College of Chiropractic.',
      p5: 'Creo en un enfoque global del paciente, que combine evaluación precisa, tratamiento manual, ejercicio terapéutico y educación del movimiento.',
      formation: 'Formación',
      experience: 'Experiencia',
    },
    services: {
      title: 'Servicios',
      subtitle: 'Un enfoque global para la salud del paciente',
      items: [
        {
          title: 'Fisioterapia',
          description: 'Tratamiento de trastornos musculoesqueléticos, rehabilitación postoperatoria y terapia del dolor crónico.',
        },
        {
          title: 'Quiropráctica',
          description: 'Diagnóstico y tratamiento de trastornos del sistema neuromusculoesquelético con enfoque manual especializado.',
        },
        {
          title: 'Fisioterapia Deportiva',
          description: 'Prevención y recuperación de lesiones para deportistas de todos los niveles competitivos.',
        },
        {
          title: 'Rehabilitación Ortopédica',
          description: 'Programas de rehabilitación personalizados post-quirúrgicos y para patologías ortopédicas.',
        },
        {
          title: 'Terapia Postural',
          description: 'Evaluación postural global y reeducación del movimiento para mejorar la calidad de vida.',
        },
        {
          title: 'Terapia Manual',
          description: 'Técnicas manuales avanzadas para el tratamiento de dolores articulares, musculares y vertebrales.',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Reserva una consulta o solicita información',
      name: 'Nombre y Apellido',
      email: 'Email',
      phone: 'Teléfono',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      success: 'Mensaje enviado. Te responderé lo antes posible.',
      error: 'Error al enviar. Inténtalo de nuevo o contáctame directamente.',
      directContact: 'Contacto directo',
      locations: 'Sedes',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      vat: 'NIF',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      title: 'Dott. Jacopo Di Bernardini',
      subtitle: 'Physiotherapist & Chiropractor',
      cta: 'Book an appointment',
      locations: 'Barcelona · Milan · Rome',
    },
    about: {
      title: 'About me',
      p1: 'My name is Jacopo Di Bernardini and I am a physiotherapist specialising in musculoskeletal disorders, orthopaedic rehabilitation and sports physiotherapy.',
      p2: 'For over ten years I have been helping people and athletes regain function, reduce pain and improve quality of life through personalised therapeutic programmes.',
      p3: 'Throughout my career I have worked in both clinical and sports settings, collaborating with professional clubs and working with athletes at various competitive levels.',
      p4: 'From September 2026 I am also a chiropractor, following a five-year degree at the Barcelona College of Chiropractic.',
      p5: 'I believe in a global approach to the patient, combining accurate assessment, manual therapy, therapeutic exercise and movement education.',
      formation: 'Education',
      experience: 'Experience',
    },
    services: {
      title: 'Services',
      subtitle: 'A global approach to patient health',
      items: [
        {
          title: 'Physiotherapy',
          description: 'Treatment of musculoskeletal disorders, post-operative rehabilitation and chronic pain therapy.',
        },
        {
          title: 'Chiropractic',
          description: 'Diagnosis and treatment of neuromusculoskeletal system disorders with a specialised manual approach.',
        },
        {
          title: 'Sports Physiotherapy',
          description: 'Injury prevention and recovery for athletes at all competitive levels.',
        },
        {
          title: 'Orthopaedic Rehabilitation',
          description: 'Personalised post-surgical and orthopaedic rehabilitation programmes.',
        },
        {
          title: 'Postural Therapy',
          description: 'Global postural assessment and movement re-education to improve quality of life.',
        },
        {
          title: 'Manual Therapy',
          description: 'Advanced manual techniques for the treatment of joint, muscle and spinal pain.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Book an appointment or request information',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Message sent! I will get back to you as soon as possible.',
      error: 'Sending error. Please try again or contact me directly.',
      directContact: 'Direct contact',
      locations: 'Locations',
    },
    footer: {
      rights: 'All rights reserved',
      vat: 'Tax ID',
    },
  },
}
