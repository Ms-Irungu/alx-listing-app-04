import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

// Interface for the Button component
export interface ButtonProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  disabled?: boolean;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
  images: string[];
  description: string;
  reviews?: Review[]; 
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  content: string;
}
