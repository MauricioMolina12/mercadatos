export interface ServiceData {
  name: string;
  url: string;
  slug: string;
  description: string;
  content: { title: string; content: string }[];
}

export const services: ServiceData[] = [
  {
    name: 'GESTIÓN DOCUMENTAL',
    url: 'assets/videos-services/gestionDocumental.mp4',
    slug: 'gestion-documental',
    description:
      'Servicio integral que abarca desde la organización, digitalización y custodia de documentos hasta la asesoría técnica especializada en políticas archivísticas, garantizando el cumplimiento normativo, la conservación física de la información y la eficiencia en su administración.',
    content: [
      {
        title: 'Gestión integral de documentos físicos y digitales',
        content: `Brindamos un servicio completo de gestión documental que abarca desde la producción hasta la disposición final de los documentos, tanto físicos como digitales. Esto incluye la creación de instrumentos archivísticos, la organización de archivos, la digitalización e indexación de documentos, y el diseño e implementación de políticas archivísticas alineadas con la normativa vigente.`,
      },
      {
        title: 'Cumplimiento normativo y asesoría especializada',
        content: `Aseguramos el cumplimiento de la Ley 594 de 2000 (Ley General de Archivos), la Ley 1581 de 2012 sobre protección de datos personales, y otras disposiciones legales aplicables. Nuestro equipo de expertos ofrece asesoría técnica especializada para garantizar que cada organización implemente una gestión documental responsable, eficiente y legalmente válida.`,
      },
      {
        title: 'Digitalización y acceso electrónico',
        content: `Transformamos documentos físicos en archivos digitales mediante procesos de escaneo, indexación y clasificación, permitiendo un acceso rápido, seguro y estructurado a la información. Implementamos herramientas tecnológicas que optimizan la consulta, recuperación y distribución de documentos, impulsando así la eficiencia operativa y la sostenibilidad.`,
      },
      {
        title: 'Custodia física segura y conservación',
        content: `Contamos con locaciones bioseguras para la custodia documental, donde aplicamos protocolos rigurosos de organización, desinfección, codificación y almacenamiento físico. Garantizamos la trazabilidad y el acceso controlado a la documentación, preservando su integridad y confidencialidad en todo momento.`,
      },
      {
        title: 'Inventario y diagnóstico documental',
        content: `Elaboramos inventarios detallados de fondos documentales y realizamos diagnósticos que permiten evaluar el estado actual de la gestión documental de una entidad. Identificamos riesgos, brechas normativas y oportunidades de mejora, generando recomendaciones prácticas para optimizar el manejo de la información.`,
      },
      {
        title: 'Soluciones tecnológicas y administración de la información',
        content: `Ofrecemos plataformas de software especializadas para la administración documental, que integran funcionalidades como gestión de archivos, correspondencia, digitalización y trazabilidad. Nuestras soluciones son compatibles con sistemas operativos y bases de datos ampliamente utilizados, y están diseñadas para integrarse con los procesos de tu organización.`,
      },
      {
        title: 'Capacitación y fortalecimiento institucional',
        content: `Realizamos programas de capacitación para funcionarios, orientados a fortalecer sus competencias en la gestión documental. Promovemos la apropiación del conocimiento archivístico y fomentamos una cultura organizacional orientada a la protección, acceso y conservación de la información como activo estratégico.`,
      },
    ],
  },
  {
    name: 'INVESTIGACIÓN Y ESTUDIOS DE MERCADO',
    url: 'assets/videos-services/investigacionMercado.mp4',
    slug: 'investigacion-y-estudios-de-mercado',
    description:
      'Realizamos estudios cuantitativos y cualitativos para entender las dinámicas del mercado, identificar oportunidades, analizar la competencia y conocer a profundidad el comportamiento del consumidor, con el fin de apoyar la toma de decisiones estratégicas en tu organización.',
    content: [
      {
        title: 'Tipos de Estudios',
        content:
          'Realizamos estudios cuantitativos como encuestas y análisis estadísticos, y cualitativos como grupos focales y entrevistas en profundidad, para recopilar datos relevantes del mercado.',
      },
      {
        title: 'Análisis de Competencia',
        content:
          'Identificamos fortalezas, debilidades, estrategias y posicionamiento de tus principales competidores para definir ventajas competitivas sostenibles.',
      },
      {
        title: 'Segmentación y Perfilamiento',
        content:
          'Determinamos los diferentes tipos de consumidores, sus características, comportamientos y preferencias para crear estrategias enfocadas y efectivas.',
      },
      {
        title: 'Estudios de Satisfacción',
        content:
          'Evaluamos la percepción y el nivel de satisfacción de los clientes sobre productos, servicios o marcas, para mejorar la experiencia del usuario.',
      },
      {
        title: 'Tendencias del Mercado',
        content:
          'Monitoreamos y analizamos las tendencias del mercado en diferentes sectores para anticipar cambios y proponer acciones estratégicas.',
      },
    ],
  },
  {
    name: 'REPRESENTACIÓN LEGAL, ASESORÍAS Y CONSULTORÍAS JURÍDICAS',
    url: 'assets/videos-services/representacionLegal.mp4',
    slug: 'representacion-legal-asesorias-y-consultorias-juridicas',
    description:
      'Brindamos acompañamiento legal especializado en distintas áreas del derecho, ofreciendo representación jurídica, asesorías estratégicas y consultoría normativa, enfocadas en proteger los intereses de nuestros clientes y garantizar el cumplimiento de la legislación vigente.',
    content: [
      {
        title: 'Áreas del Derecho',
        content:
          'Ofrecemos servicios en derecho laboral, civil, comercial, administrativo, penal y constitucional, según las necesidades de nuestros clientes.',
      },
      {
        title: 'Asesoría Preventiva',
        content:
          'Acompañamos a personas y organizaciones para mitigar riesgos jurídicos y tomar decisiones informadas desde el punto de vista legal.',
      },
      {
        title: 'Consultoría Normativa',
        content:
          'Brindamos análisis y aplicación de normativas vigentes, elaboración de conceptos jurídicos y cumplimiento regulatorio.',
      },
      {
        title: 'Representación Legal',
        content:
          'Asumimos la defensa jurídica en procesos judiciales o administrativos, actuando como apoderados ante diferentes instancias.',
      },
      {
        title: 'Gestión de Contratos',
        content:
          'Redactamos, revisamos y negociamos contratos de diversa índole para asegurar claridad, legalidad y seguridad jurídica.',
      },
    ],
  },
  {
    name: 'IMPRESOS GRÁFICOS',
    url: 'assets/videos-services/impresosGraficos.mp4',
    slug: 'impresos-graficos',
    description:
      'Ofrecemos soluciones de impresión gráfica de alta calidad, incluyendo diseño y producción de materiales promocionales, corporativos e informativos, adaptados a las necesidades visuales y comunicacionales de tu marca o institución.',
    content: [
      {
        title: 'Diseño Gráfico',
        content:
          'Creamos piezas gráficas originales y profesionales que reflejan la identidad visual de tu marca o proyecto.',
      },
      {
        title: 'Producción de Material Publicitario',
        content:
          'Ofrecemos impresión de folletos, volantes, catálogos, pendones, etiquetas, material POP y más.',
      },
      {
        title: 'Impresión Corporativa',
        content:
          'Producimos papelería institucional como carpetas, hojas membreteadas, tarjetas de presentación y cuadernos personalizados.',
      },
      {
        title: 'Impresión a Gran Formato',
        content:
          'Contamos con equipos de alta tecnología para impresión en formatos grandes como vallas, banners y adhesivos.',
      },
      {
        title: 'Acabados Especiales',
        content:
          'Aplicamos acabados como plastificado, troquelado, barniz UV, laminado mate o brillante para dar un toque profesional a cada pieza.',
      },
    ],
  },
];
