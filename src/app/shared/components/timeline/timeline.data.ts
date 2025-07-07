import { timeline } from '../../models/timeline';

export const timelineHistory: timeline[] = [
  {
    name: 'Fundación',
    description:
      'Mercadatos nace como una idea familiar para suplir una necesidad local.',
    descriptionInternal: `
    El 10 de enero de 1993, Aura Arrieta de Ruiz y Wilfrido Ruiz Ávila fundan Mercadatos en un garaje de Barranquilla.
    Inspirados por una necesidad evidente en el mercado de papelería y muebles de oficina, deciden emprender desde casa.
    Con apenas algunos muebles, mucho esfuerzo y una visión clara, inician un camino empresarial que cambiaría sus vidas y la forma de hacer gestión documental en la región.
    `.trim(),
    image: 'assets/foto-cofounders.jpg',
    date: '1993',
    quote: 'Todo empezó con un garage... – Aura Arrieta',
  },
  {
    name: 'Renuncia y primeros clientes',
    description:
      'Wilfrido apuesta todo por la empresa, fortaleciendo la relación con proveedores.',
    descriptionInternal: `
    Durante este periodo, Wilfrido Ruiz toma una decisión trascendental: renunciar a su trabajo en Dadan para dedicarse por completo a Mercadatos.
    Este paso representa un acto de confianza total en el proyecto familiar.
    Gracias a su determinación, logran establecer relaciones comerciales con proveedores clave del sector, permitiéndoles mejorar su capacidad operativa, ampliar su catálogo de productos y consolidar los primeros grandes clientes de la compañía.
    `.trim(),
    image: 'assets/foto-mission.jpg',
    date: '1994–1996',
    quote: 'Confiar en un sueño es dar el paso cuando no hay garantías, solo convicción. – Wilfrido Ruiz'
  },
  {
    name: 'Primer traslado y gran contrato',
    description:
      'La empresa se traslada a una sede formal y consigue su primer contrato importante.',
    descriptionInternal: `
    En estos años, Mercadatos deja atrás el garaje y se muda al Edificio Las Delicias, ubicado en la calle 72 con 39.
    Este cambio marca el crecimiento físico y estratégico de la empresa.
    Con una nueva imagen y mayor capacidad operativa, logran su primer gran contrato con Ético Serrano para la producción de tiqueteras, lo cual impulsa la inversión en nueva maquinaria y consolida su reputación como proveedor confiable en la región.
    `.trim(),
    image: 'assets/foto-vission.jpg',
    date: '1996–1998',
    quote: 'Salimos del garaje con la misma humildad, pero con la determinación de crecer. – Elvis Ruiz'
  },
  {
    name: 'Homologación y expansión',
    description:
      'La empresa se convierte en pionera en servicios homologados del transporte.',
    descriptionInternal: `
    Hacia finales de los años 90, Mercadatos alcanza un nuevo hito al convertirse en la primera empresa en la región Caribe homologada por el Ministerio de Transporte para emitir licencias de conducción.
    Para cumplir con estos estándares, adquieren maquinaria especializada para la producción de rollos holográficos, lo que representa un gran avance tecnológico.
    Sin embargo, este negocio sería abandonado más adelante debido a su baja rentabilidad, dejando importantes lecciones sobre sostenibilidad empresarial.
    `.trim(),
    image: 'assets/foto-vission.jpg',
    date: 'Finales de los 90',
    quote: 'Innovar también es aprender cuándo avanzar y cuándo soltar. – Equipo Mercadatos'
  },
  {
    name: 'Nuevas sedes y crisis',
    description:
      'Mercadatos crece territorialmente, pero atraviesa una crisis personal y empresarial.',
    descriptionInternal: `
    La expansión continúa con la apertura de nuevas sedes, entre ellas una importante en la calle 43 con carrera 69, buscando estar más cerca de los clientes.
    Sin embargo, en diciembre de 2006, Wilfrido sufre una isquemia que lo aleja de la dirección de la empresa.
    Este evento marca una etapa difícil tanto para la familia como para la organización, que debe encontrar la forma de seguir operando en medio de la incertidumbre, manteniendo su compromiso con la calidad y el servicio.
    `.trim(),
    image: 'assets/foto-vission.jpg',
    date: '2000–2006',
    quote: 'La verdadera fortaleza de una empresa se mide cuando la vida pone a prueba el corazón de su gente. – Aura Arrieta'
  },
  {
    name: 'Relevo y nueva dirección',
    description:
      'Los hijos asumen el liderazgo, dando inicio a una nueva etapa.',
    descriptionInternal: `
    Tras la enfermedad de Wilfrido, sus hijos, especialmente Elvis, asumen el liderazgo de la empresa.
    Con ideas frescas y visión renovada, deciden diversificar el portafolio de servicios, incursionando con éxito en la gestión documental.
    El primer gran cliente de esta nueva línea es Cajacopi, una EPS que deposita su confianza en Mercadatos.
    Esto abre la puerta a nuevos contratos en el sector salud y marca el inicio de una transición generacional que asegura la continuidad de la empresa.
    `.trim(),
    image: 'assets/foto-vission.jpg',
    date: '2007–2009',
    quote: 'No heredamos solo una empresa, heredamos una visión y el deber de cuidarla. – Elvis Ruiz'
  },
  {
    name: 'Consolidación nacional',
    description:
      'La empresa consolida servicios clave y gana presencia en varias regiones del país.',
    descriptionInternal: `
    Durante esta etapa, Mercadatos consolida su presencia a nivel nacional.
    Gana importantes clientes como Concaja y Cafava, fortaleciendo su servicio de gestión documental con innovaciones como RUAT y tecnologías de huella digital.
    La empresa invierte en capacitación, mejora de procesos y equipos, lo que le permite posicionarse como una de las compañías más confiables del sector documental en la región y más allá.
    `.trim(),
    image: 'assets/foto-vission.jpg',
    date: '2010–2015',
    quote: 'Cada cliente nuevo fue una validación de que el esfuerzo sostenido da frutos duraderos. – Dirección Comercial'
  },
  {
    name: 'Presencia regional y nacional',
    description:
      'Mercadatos se consolida en la costa y Bogotá como referente del sector.',
    descriptionInternal: `
    La empresa alcanza su madurez corporativa con una fuerte presencia en la región Caribe y una expansión importante en Bogotá.
    Se convierte en aliado estratégico de entidades públicas como el Distrito de Barranquilla, la Gobernación del Atlántico, la CRA, y también de diversas empresas privadas.
    El modelo de negocio se adapta a los retos digitales y a las nuevas demandas del mercado, consolidando un legado familiar basado en la innovación, la confianza y el servicio.
    `.trim(),
    image: 'assets/foto-vission.jpg',
    date: '2016–Presente',
    quote: 'Hemos evolucionado con el país, adaptándonos sin perder nuestra esencia. – Dirección General'
  },
];
