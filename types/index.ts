export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  color: string;
}

export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
