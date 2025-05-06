export interface ServiceData {
  name: string;
  url: string;
  slug: string;
}

export const services: ServiceData[] = [
  {
    name: 'GESTIÓN DOCUMENTAL',
    url: 'assets/videos-services/gestionDocumental.mp4',
    slug: 'gestion-documental'
  },
  {
    name: 'INVESTIGACIÓN Y ESTUDIOS DE MERCADO',
    url: 'assets/videos-services/investigacionMercado.mp4',
    slug: 'investigacion-y-estudios-de-mercado'
  },
  {
    name: 'REPRESENTACIÓN LEGAL',
    url: 'assets/videos-services/representacionLegal.mp4',
    slug: 'representacion-legal-asesorias-y-consultorias-juridicas'
  },
  {
    name: 'IMPRESOS GRÁFICOS',
    url: 'assets/videos-services/impresosGraficos.mp4',
    slug: 'impresos-graficos'
  }
];

