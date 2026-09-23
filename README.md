# Portfolio — Mateo Jorge

Sitio estático, sin dependencias ni paso de compilación. Se abre directamente con `index.html` o se publica tal cual en cualquier hosting estático (GitHub Pages, Netlify, Vercel).

## Estructura

- `index.html`: estructura de la página (cabecera, pie, visor de dibujos).
- `css/styles.css`: sistema visual (colores, tipografía, grilla, comportamiento responsive).
- `js/projects.js`: **todo el contenido**: datos personales, perfil y proyectos con su secuencia de bloques.
- `js/images.js`: dimensiones y anchos disponibles de cada imagen (se genera junto con las imágenes).
- `js/app.js`: renderizado y navegación. Rutas por ancla: `#indice`, `#perfil`, `#<slug>`.
- `img/<proyecto>/<nombre>-<ancho>.webp`: imágenes recortadas de las láminas originales, en 2 o 3 anchos para carga responsive.

## Datos

Datos personales y perfil tomados del CV (`cv/Mateo-Jorge-CV.pdf`). No quedan datos pendientes. Si en el futuro algún campo lleva `{ pending: "..." }` en `js/projects.js`, el sitio lo muestra como "A confirmar".

## Agregar un proyecto

1. Exportar las imágenes en WebP a `img/<slug>/` con el formato `<nombre>-<ancho>.webp` (por ejemplo 1000, 2000 y el ancho máximo, hasta 3000 px).
2. Registrar cada imagen en `js/images.js` con su ancho, su alto y la lista de anchos disponibles.
3. Copiar un objeto de `PROJECTS` en `js/projects.js`, cambiar `slug`, datos y `blocks`. El orden del arreglo es el orden del índice (actualmente por escala de trabajo, de 1:75 a territorio).

Los tipos de bloque disponibles están documentados al principio de `js/projects.js`.
