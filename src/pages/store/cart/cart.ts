import type { CartItem } from '../../../types/product';

const contenidoCarrito = document.getElementById('contenido-carrito') as HTMLElement;
let carrito: CartItem[] = JSON.parse(localStorage.getItem('carrito') || '[]');

const guardarCarrito = (): void => {
  localStorage.setItem('carrito', JSON.stringify(carrito));
};

const eliminarDelCarrito = (id: number): void => {
  carrito = carrito.filter(item => item.id !== id);
  guardarCarrito();
  renderCarrito();
};

const cambiarCantidad = (id: number, delta: number): void => {
  const item = carrito.find(item => item.id === id);
  if (!item) return;

  item.cantidad += delta;

  if (item.cantidad <= 0) {
    carrito = carrito.filter(i => i.id !== id);
  }

  guardarCarrito();
  renderCarrito();
};

const renderCarrito = (): void => {
  if (carrito.length === 0) {
    contenidoCarrito.innerHTML = `
      <div class="carrito-vacio">
        <h2>Tu carrito está vacío</h2>
        <p>Volvé al inicio para agregar productos</p>
        <a href="../home/home.html">Ir a comprar</a>
      </div>
    `;
    return;
  }

  let total = 0;

  const filas = carrito
    .map(item => {
      const subtotal = item.precio * item.cantidad;
      total += subtotal;
      return `
        <tr>
          <td class="nombre-producto">${item.nombre}</td>
          <td>$${item.precio.toLocaleString('es-AR')}</td>
          <td>
            <div class="ctrl-cantidad">
              <button class="btn-cantidad" data-id="${item.id}" data-delta="-1">−</button>
              <span>${item.cantidad}</span>
              <button class="btn-cantidad" data-id="${item.id}" data-delta="1">+</button>
            </div>
          </td>
          <td class="subtotal">$${subtotal.toLocaleString('es-AR')}</td>
          <td>
            <button class="btn-borrar" data-id="${item.id}">Eliminar</button>
          </td>
        </tr>
      `;
    })
    .join('');

  contenidoCarrito.innerHTML = `
    <table class="tabla-carrito">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${filas}
      </tbody>
    </table>
    <div class="carrito-resumen">
      <div class="fila-resumen">
        <span>Productos:</span>
        <span>${carrito.reduce((acc, i) => acc + i.cantidad, 0)}</span>
      </div>
      <div class="fila-resumen">
        <span>Total:</span>
        <span>$${total.toLocaleString('es-AR')}</span>
      </div>
      <button class="btn-finalizar" id="btn-finalizar">Finalizar Compra</button>
    </div>
  `;

};

// Un solo listener, registrado una vez, fuera de renderCarrito
contenidoCarrito.addEventListener('click', (e: Event) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains('btn-borrar')) {
    const id = Number(target.dataset.id);
    eliminarDelCarrito(id);
  }

  if (target.classList.contains('btn-cantidad')) {
    const id = Number(target.dataset.id);
    const delta = Number(target.dataset.delta);
    cambiarCantidad(id, delta);
  }

  if (target.id === 'btn-finalizar') {
    alert('¡Compra finalizada! Gracias por tu pedido.');
    carrito = [];
    guardarCarrito();
    renderCarrito();
  }
});

// Inicializar
renderCarrito();