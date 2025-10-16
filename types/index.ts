export interface Dentist {
  id: string;
  name: string;
  slug: string;
  neighborhood: string;
  address: string;
  phone: string;
  website?: string;
  image?: string;
  
  // Pricing
  price?: number; // Price for basic cleaning
  priceRange?: {
    min: number;
    max: number;
  };
  
  // Ratings & Reviews
  rating?: number; // 1-5 stars
  reviewCount?: number;
  
  // Features
  speaksSpanish?: boolean;
  acceptsMedicaid?: boolean;
  acceptsInsurance?: boolean;
  emergencies?: boolean;
  acceptsNewPatients?: boolean;
  
  // Services
  services?: string[];
  
  // Hours
  hours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  
  // Additional info
  description?: string;
  yearsInPractice?: number;
  languages?: string[];
  
  // Premium listing
  featured?: boolean;
  verified?: boolean;
}