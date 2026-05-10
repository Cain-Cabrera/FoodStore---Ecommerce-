import { PRODUCTS, getCategories } from '../../../data/data';
import type { Product, CartItem } from '../../../types/product';

const listaCategorias = document.getElementById('lista-categorias') as HTMLUListElement;
const seccionProductos = document.getElementById('seccion-productos') as HTMLElement;
const formBusqueda = document.getElementById('form-busqueda') as HTMLFormElement;
const inputBusqueda = document.getElementById('input-busqueda') as HTMLInputElement;

// CARRITO
let carrito: CartItem[] = JSON.parse(localStorage.getItem('carrito') || '[]');

const guardarCarrito = (): void => {
  localStorage.setItem('carrito', JSON.stringify(carrito));
};

const agregarAlCarrito = (producto: Product): void => {
  const existe = carrito.find(item => item.id === producto.id);
  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  guardarCarrito();
  alert(`${producto.nombre} añadido al carrito`);
};

const mostrarProductos = (lista: Product[]): void => {
  seccionProductos.innerHTML = '';
  
  if (lista.length === 0) {
    seccionProductos.innerHTML = '<div class="sin-resultados">No se encontraron productos</div>';
    return;
  }

  lista.forEach(producto => {
    const article = document.createElement('article');
    article.classList.add('producto');
    article.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="producto-info">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p class="precio">$${producto.precio.toLocaleString('es-AR')}</p>
        <button type="button">Agregar al Carrito</button>
      </div>
    `;
    article.querySelector('button')?.addEventListener('click', () => {
      agregarAlCarrito(producto);
    });
    seccionProductos.appendChild(article);
  });
};

const cargarCategorias = (): void => {
  const liTodos = document.createElement('li');
  const aTodos = document.createElement('a');
  aTodos.textContent = 'Todos';
  aTodos.href = '#';
  aTodos.addEventListener('click', (e: Event) => {
    e.preventDefault();
    mostrarProductos(PRODUCTS);
  });
  liTodos.appendChild(aTodos);
  listaCategorias.appendChild(liTodos);

  const categorias = getCategories();
  categorias.forEach(cat => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = cat.nombre;
    a.href = '#';
    a.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const filtrados = PRODUCTS.filter(p => p.categoria === cat.nombre);
      mostrarProductos(filtrados);
    });
    li.appendChild(a);
    listaCategorias.appendChild(li);
  });
};

formBusqueda.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const texto = inputBusqueda.value.trim().toLowerCase();
  const filtrados = PRODUCTS.filter(p => p.nombre.toLowerCase().includes(texto));
  mostrarProductos(filtrados);
});

// Inicializar
cargarCategorias();
mostrarProductos(PRODUCTS);
