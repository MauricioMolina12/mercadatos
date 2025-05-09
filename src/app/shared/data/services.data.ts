export interface ServiceData {
  name: string;
  url: string;
  slug: string;
  description: string;
  information?: any[];
}

export const services: ServiceData[] = [
  {
    name: 'GESTIÓN DOCUMENTAL',
    url: 'assets/videos-services/gestionDocumental.mp4',
    slug: 'gestion-documental',
    description: 'Servicio integral que abarca desde la organización, digitalización y custodia de documentos hasta la asesoría técnica especializada en políticas archivísticas, garantizando el cumplimiento normativo, la conservación física de la información y la eficiencia en su administración.',
    information: [
      {
        title: 'Marco Jurídico',
        items: [
          'Ley 80 de 1989 (Artículo 2, Parágrafo. Modificado por el Artículo 49 de la Ley 594 de 2000).',
          'Ley 594 de 2000, Ley General de Archivos y decretos reglamentarios.',
          'Ley 1581 de 2012.',
          'Decreto 2609 de 2012.',
          'Ley 1712 de 2014, Ley de Transparencia y del derecho de acceso a la información pública.',
          'Demás Decretos, Circulares y Directrices expedidas por las entidades competentes en relación con la Gestión Documental.',
        ],
        image: 'assets/marco-juridico.jpg',
      },
      {
        title: 'Metodología',
        'Nuestros servicios en Gestión Documental son:': [
          'Creación de Tablas de Retención',
          'Documental y de Valoración Documental.',
          'Creación de Manuales y Procedimientos.',
          'Organización del Comité de Archivos.',
          'Asesorías de Implementación de Políticas de Archivo.',
          'Asesorías de Implementación de Gestión de Calidad.',
          'Capacitación.',
        ],
        image: 'assets/metodologia.jpg',
      },
      {
        title: 'Digitalización',
        subtitle:
          'Dentro del proceso de Gestión Documental se realizan las actividades de clasificación, ordenación, digitalización e indexación de documentos.',
        items: [
          'Creación de Tablas de Retención',
          'Documental y de Valoración Documental.',
          'Creación de Manuales y Procedimientos.',
          'Organización del Comité de Archivos.',
          'Asesorías de Implementación de Políticas de Archivo.',
          'Asesorías de Implementación de Gestión de Calidad.',
          'Capacitación.',
        ],
        image: 'assets/metodologia.jpg',
      },
      {
        title: 'Custodia',
        items: [
          'Atención de consultas.',
          'Solicitud.',
          'Recepción.',
          'Búsquedas físicas ya través de medios electrónicos.',
          'Almacenamiento de la documentación.',
          'Ubicación Física y estantería.',
          'Atención a solicitudes de consultas.',
          'Búsqueda en el Software.',
          'Locaciones bioseguras.',
          'Sistema Integrado de Conservación implementado.',
          'Organización de la información física.',
          'Codificación de la información custodiada.',
          'Desinfección y depuración de archivos físicos.',
        ],
        image: 'assets/custodia.jpg',
      },
      {
        title: 'Asesoría Técnica Especializada',
        items: [
          'Orientar a las entidades en el desarrollo de los procesos que conllevan a laconstrucción de instrumentos archivísticos.',
          'Apropiación de nuestros clientes del conocimiento de los procesos encaminados al cumplimiento de la función archivística.',
        ],
        image: 'assets/asesoriaTecnica.jpg',
      },
      {
        title: 'Diagnóstico Integral de Archivo',
        items: [
          'Proceso de verificación de los estados actuales de la gestión documental de entidades públicas y privadas.',
          'Análisis de hallazgos administrativos, archivísticos, conservación, infraestructura y tecnología.',
          'Validación del cumplimiento normativo de la entidad en materia de gestión documental, identificación de aspectos críticos, debilidades, fortalezas, oportunidades y amenazas de la entidad entorno al cumplimiento de la función archivística.',
        ],
        image: 'assets/diagnostico.jpg',
      },
      {
        title: 'Administración de la información',
        subtitle:
          'Presentamos un software desarrollado para la administración integral de toda la documentación generada por la mediana y gran empresa de hoy. Cubriendoprocesos como manejo de archivo, correspondencia, digitalización de documentos y el tratamiento de la Información electrónica todo bajo una mismaherramienta. Trabaja en Sistemas Operativos Windows: M3, XP, 2000, Vista, NT SERVER 2000 Y 2003, con bases de datos: SQL u ORACLE 9i o superior, y con cualquier navegador de Internet que trabaje en ambientes Windows. Desarrollamos actividades de clasificación, ordenación y descripción de los fondos documentales de las entidades, respetando el principio de procedencia y orden original de los documentos de archivo.',
        subtitle2:
          'Nuestro sub-proceso tecnológico de digitalización consiste en convertir un documento en soporte análogo (papel, video, casettes, cinta, película, microfilm) en uno o varios archivos digitales que contienen la imagen codificada, íntegra del documento.',
        keywords: [
          'Sistemas Operativos Windows: M3, XP, 2000, Vista, NT SERVER 2000 Y 2003',
          'SQL u ORACLE 9i o superior',
        ],
        image: 'assets/administracion.jpg',
      },
      {
        title: 'Inventario documental',
        items: [
          'Elaboración y codificación de documentos.',
          'Recuperación de la información de manera exacta y precisa.',
          'Organización en series o asuntos de un fondo documental.',
        ],
        image: 'assets/inventario.jpg',
      },
      {
        title:
          'Gestión de consulta y préstamo de documentos de manera electrónica, telefónica y/o física',
        items: [
          'Garantizar equipos y personal que realice la copia escaneada de la documentación requerida por los funcionarios de nuestros clientes.',
          'Garantizar la disponibilidad de los canales de comunicación entre funcionarios de la entidad contratante y la MERCADATOS S.A. con el objetivo de suplir de manera oportuna la documentación que se requiera.',
          'Garantizar equipos y personal encargado de las labores de control y gestión de la información con el objetivo de contar con un sistema de archivocompleto y actualizado que sustente la toma efectiva de decisiones y garantice los derechos de conservación y acceso a la misma, consagrados para los usuarios de la entidad contratante.',
          'Garantizar personal, equipos, vehículos y condiciones idóneas y seguras en los cuales se trasporte la documentación hasta las instalaciones de la entidad contratante., con la frecuencia que se requiera.',
          'Recogida de documentos como labor que comprende actualizar los fondos documentales a medida que se adelantan los trámites correspondientes a la labor administrativa, legal o financiera de la entidad contratante, esto proporciona un archivo actualizado y ordenado acorde con la gestión pública de los recursos.',
          'Labores de coordinación y control estadístico.',
        ],
        image: 'assets/gestion-consulta.jpg',
      },
      {
        title: 'Conservación y almacenamiento de documentos',
        items: [
          'Garantizar el espacio y el control de las condiciones medio ambientales y administrativas, que garanticen la conservación del papel.',
          'Proveer los elementos en cantidad y tipo suficientes e idóneos que permitan la adecuada conservación de los documentos (Cajas, Ganchos, Carpetas, Legajos, Elementos de Agrupación, Cintas, Bolsas Plásticas o dePapel).'
        ],
        image: 'assets/conservacion.jpg',
      },
    ],
  },
  {
    name: 'INVESTIGACIÓN Y ESTUDIOS DE MERCADO',
    url: 'assets/videos-services/investigacionMercado.mp4',
    slug: 'investigacion-y-estudios-de-mercado',
    description: 'Realizamos estudios cuantitativos y cualitativos para entender las dinámicas del mercado, identificar oportunidades, analizar la competencia y conocer a profundidad el comportamiento del consumidor, con el fin de apoyar la toma de decisiones estratégicas en tu organización.'
  },
  {
    name: 'REPRESENTACIÓN LEGAL, ASESORÍAS Y CONSULTORÍAS JURÍDICAS',
    url: 'assets/videos-services/representacionLegal.mp4',
    slug: 'representacion-legal-asesorias-y-consultorias-juridicas',
    description: 'Brindamos acompañamiento legal especializado en distintas áreas del derecho, ofreciendo representación jurídica, asesorías estratégicas y consultoría normativa, enfocadas en proteger los intereses de nuestros clientes y garantizar el cumplimiento de la legislación vigente.'
  },
  {
    name: 'IMPRESOS GRÁFICOS',
    url: 'assets/videos-services/impresosGraficos.mp4',
    slug: 'impresos-graficos',
    description: 'Ofrecemos soluciones de impresión gráfica de alta calidad, incluyendo diseño y producción de materiales promocionales, corporativos e informativos, adaptados a las necesidades visuales y comunicacionales de tu marca o institución.'
  },
];
