# FoodStore - Evaluación 1 Programación 3

## Descripción breve del proyecto

FoodStore es una aplicación frontend de e-commerce de comida rápida desarrollada con **HTML5**, **CSS3**, **JavaScript** y **TypeScript**.

La aplicación permite a los clientes:
- ✅ Visualizar un catálogo de productos (Hamburguesas, Pizzas, Papas, Bebidas)
- ✅ Buscar productos por nombre
- ✅ Filtrar productos por categoría
- ✅ Agregar productos al carrito
- ✅ Visualizar el carrito con total calculado
- ✅ Eliminar productos del carrito
- ✅ Persistencia de datos en localStorage

### Características técnicas
- **TypeScript**: Tipado estricto con interfaces (`Product`, `CartItem`, `Icategoria`)
- **localStorage**: Persistencia del carrito entre sesiones
- **DOM Manipulation**: Renderizado dinámico de productos y carrito
- **Vite + TypeScript**: Configuración modular y optimizada
- **Estructura MVC**: Separación clara entre datos, tipos y lógica

---

## Instrucciones para ejecutarlo

### 1. Clonar el repositorio
```bash
git "https://github.com/Cain-Cabrera/FoodStore---Ecommerce-.git"
```

### 2. Instalar dependencias con pnpm
```bash
pnpm install
```

> **Nota**: Si no tienes pnpm instalado, ejecuta: `npm install -g pnpm`

### 3. Levantar el servidor de desarrollo
```bash
pnpm dev
```

El servidor estará disponible en **http://localhost:5173**

### 4. Acceder a la aplicación
- **Home (Catálogo)**: http://localhost:5173/src/pages/store/home/home.html
- **Carrito**: http://localhost:5173/src/pages/store/cart/cart.html

---

## Estructura del proyecto

```
src/
├── pages/
│   └── store/
│       ├── home/
│       │   ├── home.html        ← Catálogo de productos
│       │   └── home.ts          ← Lógica: render, búsqueda, filtros, carrito
│       └── cart/
│           ├── cart.html        ← Vista del carrito
│           └── cart.ts          ← Lógica: render, cantidades, total, eliminar
├── types/
│   ├── product.ts               ← Interfaces Product y CartItem
│   └── categoria.ts             ← Interface Icategoria
└── data/
    └── data.ts                  ← PRODUCTS array y getCategories()
```

---

## Funcionalidades implementadas

### 1. Carrito básico con persistencia ✅
- Agregar productos desde el catálogo
- Guardar en localStorage
- Actualizar cantidad si el producto ya existe
- Visualizar productos en vista de carrito

### 2. Búsqueda y filtrado ✅
- Campo de búsqueda por nombre (case-insensitive)
- Filtrado por categoría desde menú lateral
- Opción "Todos" para ver catálogo completo

### 3. Visualización del carrito ✅
- Tabla con nombre, precio, cantidad y subtotal
- Cálculo automático del total
- Mensaje si el carrito está vacío

### 4. Eliminación de items ✅
- Botón "Eliminar" por producto
- Recalculates total automáticamente

---

## Tecnologías utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Variables CSS
- **JavaScript**: DOM manipulation, eventos
- **TypeScript**: Tipado estricto, interfaces
- **Vite**: Bundler moderno
- **localStorage**: Persistencia de datos

---

## Criterios cumplidos

- ✅ Correcto funcionamiento de funcionalidades solicitadas
- ✅ Uso adecuado de JavaScript y TypeScript
- ✅ Manipulación del DOM dinámica
- ✅ Uso de localStorage para carrito
- ✅ Organización modular del código
- ✅ Estructura esperada respetada (src/pages, src/types, src/data)
- ✅ Registro de páginas en vite.config.ts

---

**Autor**: Cain  
**Fecha**: Mayo 2026  
**Evaluación**: Programación 3 - UTN
