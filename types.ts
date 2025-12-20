import React from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface Package {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

export interface Hotel {
  id: string;
  name: string;
  type: 'HOTEL' | 'POOL_VILLA';
  description: string;
  rating: number;
  image: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  content: string;
  rating: number;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}