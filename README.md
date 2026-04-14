<div align="center">
  <img src="./Cecilia_Perdomo.png" alt="Banner Cecilia Perdomo">
</div>

# Mi primer proyecto profesional colaborativo

## 🎯 Tu reto
Estás trabajando en un pequeño equipo de desarrollo dentro de una consultora y acaba de llegar un nuevo proyecto: una reconocida marca de ropa con sede en Francia quiere un prototipo visual y funcional para su próxima tienda online.

El cliente ha sido claro con los requisitos:
- SEO bien trabajado (estructura semántica, contenido indexable, buenas prácticas).
- Diseño moderno y consistente.
- Responsive completo: móvil, tablet y escritorio.

Antes de avanzar a desarrollo completo, necesitan ver un prototipo que incluya al menos 5 vistas principales:
- Home
- Catálogo
- Vista de producto
- Carrito
- Formulario de pago (checkout)

Ha llegado el momento de brillar. La consultora armó un equipo para el proyecto y te asignó a ti y a otra persona para sacarlo adelante.

<div align="center">
  <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d" alt="Moda elegante" />
</div>

## Especificaciones por vista
Tu project manager te ha compartido un documento con la estructura mínima de cada vista para evitar olvidos y asegurar que el prototipo cubra lo que el cliente espera.

1) Página de inicio (Home)
- Barra superior (navbar) con:
  - Logo
  - Barra de búsqueda
  - Menú de cuenta de usuario
- Sección Hero destacando productos especiales o campañas de la marca.
- Dos secciones con listados horizontales (cards de producto):
  - Nuevos lanzamientos
  - Más vendidos
- Footer con secciones:
  - Categorías: calzado, camisas, pantalones, accesorios
  - Legal: términos y condiciones, política de privacidad, sobre la marca
  - Contacto
- La navbar y el footer se reutilizan en todas las demás vistas.
2) Catálogo
- Mantiene navbar y footer.
- Incluye una barra de filtros antes del listado:
  - Filtro por categoría
  - Filtro por talla
- Listado de productos en rejilla (grid) 4×5 (20 productos visibles como referencia).
3) Vista de producto
- Diseño en dos columnas:
  - Izquierda: foto del producto ocupando aproximadamente la mitad del ancho.
  - Derecha: información principal del producto:
    - Nombre
    - Código o referencia
    - Talla
    - Precio
    - Selector de cantidad
    - Botón "Agregar al carrito"
  - Debajo, una sección de descripción detallada:
    - Materiales
    - Uso recomendado / escenarios donde se puede usar la prenda
4) Carrito
- Vista completa del carrito (no un panel lateral).
- Listado de productos añadidos con:
  - Miniatura
  - Precio unitario
  - Cantidad
  - Total por producto
  - Cuadro de totalización con:
    - Subtotal
    - Impuestos
    - Total
    - Botón "Comprar"
- Añadir 3 productos de ejemplo para mostrar el comportamiento visual.
5) Formulario de pago (Checkout)
F- lujo en 3 pasos:
  - Datos personales
  - Dirección de entrega
  - Pago con tarjeta (datos de tarjeta)

## Instalación
Para comenzar el proyecto: 
```bash
$ pip3 install flask && python3 server.py
```

## Desarrollo web
💻 [Cecilia Perdomo](https://portfolio-cecilia.vercel.app/) - 14 de Abril de 2026