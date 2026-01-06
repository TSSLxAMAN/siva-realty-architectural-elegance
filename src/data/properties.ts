import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import property4 from '@/assets/property-4.jpg';
import property5 from '@/assets/property-5.jpg';
import property6 from '@/assets/property-6.jpg';

export interface Property {
  id: string;
  title: string;
  location: string;
  type: string;
  image: string;
  description: string;
  specs: {
    area: string;
    bedrooms?: number;
    bathrooms?: number;
    year: number;
  };
}

export const properties: Property[] = [
  {
    id: 'skyline-penthouse',
    title: 'Skyline Penthouse',
    location: 'Manhattan, NY',
    type: 'Residential',
    image: property3,
    description: 'A stunning penthouse with panoramic city views, featuring floor-to-ceiling windows and contemporary finishes throughout.',
    specs: {
      area: '4,200 sq ft',
      bedrooms: 4,
      bathrooms: 3,
      year: 2023
    }
  },
  {
    id: 'coastal-retreat',
    title: 'Coastal Retreat',
    location: 'Malibu, CA',
    type: 'Residential',
    image: property6,
    description: 'Minimalist beach house with unobstructed ocean views. Natural materials meet modern design in this coastal sanctuary.',
    specs: {
      area: '3,800 sq ft',
      bedrooms: 3,
      bathrooms: 4,
      year: 2022
    }
  },
  {
    id: 'urban-loft',
    title: 'Urban Loft',
    location: 'Brooklyn, NY',
    type: 'Residential',
    image: property1,
    description: 'Spacious open-plan loft with high ceilings and abundant natural light. Perfect blend of industrial charm and modern luxury.',
    specs: {
      area: '2,400 sq ft',
      bedrooms: 2,
      bathrooms: 2,
      year: 2021
    }
  },
  {
    id: 'villa-serene',
    title: 'Villa Serene',
    location: 'Miami, FL',
    type: 'Residential',
    image: property2,
    description: 'Contemporary villa featuring clean lines, infinity pool, and seamless indoor-outdoor living spaces.',
    specs: {
      area: '5,600 sq ft',
      bedrooms: 5,
      bathrooms: 6,
      year: 2023
    }
  },
  {
    id: 'heritage-townhouse',
    title: 'Heritage Townhouse',
    location: 'Boston, MA',
    type: 'Residential',
    image: property5,
    description: 'Thoughtfully renovated townhouse blending historic character with modern amenities and timeless design.',
    specs: {
      area: '3,200 sq ft',
      bedrooms: 4,
      bathrooms: 3,
      year: 2020
    }
  },
  {
    id: 'commerce-tower',
    title: 'Commerce Tower',
    location: 'Chicago, IL',
    type: 'Commercial',
    image: property4,
    description: 'Premium commercial space with state-of-the-art facilities. Designed for forward-thinking businesses.',
    specs: {
      area: '12,000 sq ft',
      year: 2022
    }
  }
];
