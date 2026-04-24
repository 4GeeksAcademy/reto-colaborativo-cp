async function cargarProductos() {
    try {
        const res = await fetch('./productos.json');
        const productos = await res.json();

        const grid = document.getElementById('productosGrid');

        const primeros20 = productos.slice(0, 20);

        primeros20.forEach(prod => {
            const card = document.createElement('a');
            card.href = `detalle-producto.html?id=${prod.id}`;
            card.className = "group block cursor-pointer border border-gray-200 rounded-xl p-3 hover:shadow-md transition";
            card.setAttribute('aria-label', `Ver detalle de ${prod.nombre}`);

            card.innerHTML = `
                <div class="bg-gray-100 rounded-xl overflow-hidden">
                    <img src="${prod.imagen}" 
                         alt="${prod.nombre}" 
                         class="w-full h-72 object-cover group-hover:scale-105 transition duration-300">
                </div>

                <div class="mt-3">
                    <h3 class="text-sm font-medium">${prod.nombre}</h3>
                    <p class="text-gray-500 text-sm">$${prod.precio}</p>
                </div>
            `;

            grid.appendChild(card);
        });

    } catch (error) {
        console.error("Error cargando productos:", error);
    }
}

// 👇 importante: esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", cargarProductos);