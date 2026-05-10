import type { Product } from '../types/product';
import type { Icategoria } from '../types/categoria';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    nombre: "Hamburguesa Triple",
    descripcion: "Hamburguesa con triple carne y queso derretido",
    precio: 15000,
    imagen: "/assets/hamburguesa.jpg",
    categoria: "Hamburguesas"
  },
  {
    id: 2,
    nombre: "Pizza XXL",
    descripcion: "Pizza con pepperoni y ultra queso",
    precio: 12000,
    imagen: "/assets/pizza.jpg",
    categoria: "Pizzas"
  },
  {
    id: 3,
    nombre: "Papas Fritas",
    descripcion: "Papas fritas crocantes con sal",
    precio: 7000,
    imagen: "/assets/papas.jpg",
    categoria: "Papas Fritas"
  },
  {
    id: 4,
    nombre: "Gaseosa",
    descripcion: "Bebida gaseosa bien fría",
    precio: 4000,
    imagen: "/assets/bebida.jpg",
    categoria: "Bebidas"
  }
];

export const getCategories = (): Icategoria[] => {
  const categoriesSet = new Set(PRODUCTS.map(p => p.categoria));
  return Array.from(categoriesSet).map(categoria => ({ nombre: categoria }));
};
