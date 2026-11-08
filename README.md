# VANGUARD & CO. — Tienda de Ropa & Sastrería Masculina
### E-Commerce Tradicional Premium para Hombre

Bienvenido a **VANGUARD & CO.**, una solución completa de comercio electrónico tradicional para indumentaria masculina, diseñada bajo los más exigentes estándares estéticos de la sastrería moderna y el diseño web responsivo contemporáneo.

---

## 🌟 Características Principales

### 1. Portada / Home Completa y Tradicional
- **Barra de Anuncios Superior:** Beneficios de compra, cuotas sin interés, envíos y acceso directo a WhatsApp Concierge.
- **Header Principal & Navegación:**
  - Logotipo de lujo tipográfico.
  - Buscador predictivo en tiempo real con sugerencias instantáneas mientras el usuario escribe.
  - Indicador de favoritos (Wishlist) con contador dinámico.
  - Bolsa de compras con contador de prendas y acceso a Drawer lateral.
  - Barra de categorías tradicional: *Trajes & Blazers*, *Camisas & Remeras*, *Pantalones & Jeans*, *Abrigos & Cuero*, *Calzado*, *Accesorios*, *Guía de Talles*, *Sobre Nosotros*, *Locales & Contacto* y sección destacada de *SALE %*.
- **Hero Banner de Alto Impacto:** Fotografía editorial, distintivo de temporada Otoño/Invierno 2026 y llamadas a la acción (CTAs).
- **Pilares de Confianza:** Envío gratis desde \$50.000, 3 y 6 cuotas sin interés bancarias, primer cambio a domicilio bonificado y confección en fibras nobles.
- **Mosaico Visual de Categorías:** Accesos directos con animaciones de zoom y filtrado automático.
- **Pestañas de Selección Rápida en Home:** Destacados, Nuevos Ingresos, Más Vendidos y Ofertas de Temporada.
- **Banner Editorial Lookbook:** *El Arte del Buen Vestir* con estilismo casual sastorial.
- **Testimonios de Clientes Verificados:** Opiniones reales con calificación de 5 estrellas.

### 2. Catálogo Interactivo con Filtros Avanzados
- **Filtro por Categorías:** Clasificación por rubros de moda masculina.
- **Filtro por Rango de Precios:** Slider interactivo con actualización en tiempo real del límite presupuestario.
- **Filtro por Talles:** Chips de talles estándar (S, M, L, XL, XXL) y numéricos sastoriales (40 a 56).
- **Ordenamiento Flexible:** Por recomendados, menor precio, mayor precio, mejor calificados y orden alfabético.
- **Tarjetas de Producto Detalladas:**
  - Badges (*Bestseller*, *Pieza Ícono*, *Oferta*, *Tendencia*).
  - Botón de favoritos (Wishlist) interactivo.
  - Botón de Vista Rápida (*Quick View*) flotante.
  - Paleta de muestras de color (*color swatches*).
  - Cálculo automático de 3 cuotas fijas sin interés.
  - Botón de agregar al carrito con retroalimentación inmediata.

### 3. Modal de Vista Rápida (Quick View)
- Galería fotográfica interactiva con selector de miniaturas.
- Selector de talle y selector de color con indicador activo.
- Control de cantidad (*stepper*).
- Desglose de composición textil, calce y especificaciones de confección.
- Acceso directo a la Guía de Talles.

### 4. Carrito de Compras (Drawer Lateral)
- Despliegue lateral animado sin recargar la página.
- Barra medidora de progreso para **Envío Gratis** (con cálculo dinámico de cuánto falta para alcanzarlo).
- Control de cantidades por producto y botón para remover ítems.
- Sistema de **Cupones de Descuento** con validación interactiva:
  - `VALENTI10`: 10% de descuento.
  - `HOMBRE2026`: 15% de descuento especial.
  - `PRIMERACOMPRA`: 20% de descuento de bienvenida.
- Persistencia total mediante `localStorage` (no se pierden las prendas al recargar).

### 5. Checkout Completo (Proceso de Pago Paso a Paso)
- **Paso 1:** Datos de contacto y comprador (Nombre, DNI, Email, Teléfono).
- **Paso 2:** Dirección de entrega y selección de logística (*Envío a Domicilio*, *Envío Express 24hs*, o *Retiro Gratuito en Tienda Flagship*).
- **Paso 3:** Selección de medio de pago:
  - Tarjeta de crédito/débito con simulación de cuotas sin interés.
  - Transferencia bancaria (con 10% OFF extra automático).
  - MercadoPago.
- **Confirmación de Orden:** Genera un número de pedido oficial (`#VNT-XXXXXX`), muestra el desglose final y resetea el carrito.

### 6. Secciones Informativas Tradicionales
- **Sobre Nosotros:** Historia del atelier, tradición artesanal y selección de materias primas.
- **Guía de Talles:** Tablas métricas comparativas para Trajes, Camisas, Pantalones y Calzado con consejos sobre cómo tomarse las medidas corporales.
- **Preguntas Frecuentes (FAQ):** Acordeón interactivo con respuestas a las dudas más comunes sobre envíos, cambios y composturas sastoriales.
- **Locales & Contacto:** Direcciones y horarios de las boutiques insignia (Palermo Soho y Recoleta) y formulario de contacto funcional.

---

## 📁 Estructura del Proyecto

```text
E COMMERCE/
│
├── index.html          # Estructura principal semántica HTML5
├── server.js           # Servidor local Node.js nativo (sin dependencias externas)
├── README.md           # Documentación completa del proyecto
│
├── css/
│   └── styles.css      # Hoja de estilos con variables CSS, animaciones y diseño responsivo
│
├── js/
│   ├── products.js     # Catálogo con 24 productos reales, categorías y cupones
│   ├── cart.js         # Lógica del carrito, cálculos y persistencia en localStorage
│   └── app.js          # Controlador principal de navegación, filtros, modales y eventos
│
└── assets/             # Carpeta para recursos estáticos adicionales
```

---

## 🚀 Cómo Abrir y Ejecutar el E-Commerce

Tienes dos maneras sencillas de usar el sitio:

### Opción 1: Abrir directamente en el navegador (Sin servidor)
1. Ve a la carpeta `c:\Users\maria\OneDrive\Escritorio\E COMMERCE`.
2. Haz doble clic en el archivo **`index.html`**.
3. Se abrirá automáticamente en Google Chrome, Microsoft Edge, Firefox o tu navegador predeterminado con todas las funciones operativas.

### Opción 2: Ejecutar el Servidor Local
Abre una consola de comandos (PowerShell o CMD) en la carpeta del proyecto y ejecuta:

```powershell
agy-node.cmd server.js
```
*(o si tienes Node.js en tu PATH: `node server.js`)*

Luego abre tu navegador en:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 👔 Catálogo de Prendas Incluidas
El catálogo cuenta con 24 prendas representativas del guardarropa masculino tradicional:
1. **Trajes & Blazers:** Traje Sartorial Napoli Super 120s, Blazer Desestructurado Lino & Algodón, Traje Milano Doble Botonadura.
2. **Camisas & Remeras:** Camisa Oxford Royal Cuello Italiano, Camisa de Lino Francés Riviera, Remera Pima Heavyweight 240g, Remera Henley Waffle Knit.
3. **Pantalones & Jeans:** Pantalón Chino Sartorial Stretch, Jean Selvage Denim Raw 14oz Japonés, Pantalón de Vestir con Pinzas y Ajustadores Laterales.
4. **Abrigos & Camperas:** Campera Biker Cuero Vacuno Plena Flor, Sobretodo Wool-Blend Chesterfield, Sweater Cuello Tortuga Lana Merino, Parka Técnica Impermeable.
5. **Calzado:** Zapatos Oxford Brogue cosidos Goodyear, Chelsea Boots Gamuza Tabaco, Zapatillas Minimalist Leather Blancas, Mocasines Penny Loafer.
6. **Accesorios:** Reloj Cronógrafo Minimalist 40mm Zafiro, Cinturón Reversible Cuero Curtido Vegetal, Billetera Slim RFID, Corbata de Seda Natural Jacquard, Bufanda de Cachemira & Lana Merino, Bolso Weekender de Viaje.

---

© 2026 **VANGUARD & CO.** — All rights reserved.
