
export interface ContactDetails {
  name: string;
  designation: string;
  company: string;
  phone: string;
  email: string;
  website: string;
  address: {
    office: string;
    building: string;
    estate: string;
    road: string;
    area: string;
    cityPin: string;
  };
}

export interface ServiceFormData {
  name: string;
  phone: string;
  serviceType: string;
  message: string;
}

export enum ServiceType {
  GENERAL = 'General Pest Control',
  TERMITES = 'Termite Treatment',
  RODENTS = 'Rodent Control',
  COCKROACH = 'Cockroach Management',
  BEDBUGS = 'Bed Bug Treatment',
  OTHER = 'Other Services'
}
