export type TabType = 'kontraktor' | 'developer';

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface TabContent {
  type: TabType;
  quote: string;
  features: TabFeature[];
}

export interface TabFeature {
  title: string;
  description: string;
}

export interface FormData {
  name: string;
  company: string;
  whatsapp: string;
  businessType: string;
}

export interface CompanyLogo {
  icon: string;
  name: string;
}
