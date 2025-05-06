export interface Entity {
  name: string;
  department: string;
  type: 'PÚBLICA' | 'PRIVADA';
}

export interface service {
  name: string;
  url: string;
  slug: string;
}

export interface department{
    name: string;
    image: string;
}
