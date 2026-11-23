# Recursos pendientes — contenido de SetupLab (Inicio)

Estado: las imágenes raster heredadas de ZayShop (`category_img_*.jpg`,
`feature_prod_*.jpg`, `banner_img_*.jpg`, `shop_*.jpg`, `brand_*.png` y
`about-hero.svg`) son contenido de demostración de la plantilla y **no se
reutilizaron** en `index.html`. No se inventaron fotografías de productos.

Mientras llegan las imágenes definitivas, se usan ilustraciones SVG
provisionales marcadas con `data-provisional="true"`.

## Imágenes que necesitamos

| Archivo sugerido | Uso en la portada | Contenido recomendado | Dimensiones sugeridas |
|---|---|---|---|
| `hero-perifericos.jpg` | Diapositiva 1 del carrusel | Mouse, teclado y auriculares gaming sobre fondo oscuro | 1600 × 1050 px |
| `hero-componentes.jpg` | Diapositiva 2 del carrusel | Placa gráfica, procesador y memorias RAM | 1600 × 1050 px |
| `hero-pc-armadas.jpg` | Diapositiva 3 del carrusel | PC gaming armada, con iluminación azul discreta | 1600 × 1050 px |
| `categoria-perifericos.jpg` | Tarjeta «Periféricos» | Set de periféricos gaming, recuadro cuadrado | 800 × 800 px |
| `categoria-componentes.jpg` | Tarjeta «Componentes» | Componentes internos de PC, recuadro cuadrado | 800 × 800 px |
| `categoria-pc-armadas.jpg` | Tarjeta «PC armadas» | Gabinete gaming / equipo terminado, recuadro cuadrado | 800 × 800 px |
| `producto-placa-grafica.jpg` | Producto destacado | Fotografía real de placa gráfica, fondo neutro u oscuro | 800 × 600 px |
| `producto-procesador.jpg` | Producto destacado | Fotografía real de procesador | 800 × 600 px |
| `producto-memoria-ram.jpg` | Producto destacado | Fotografía real de módulos de RAM | 800 × 600 px |
| `producto-teclado.jpg` | Producto destacado | Fotografía real de teclado gaming | 800 × 600 px |

Recomendaciones:

- Usar las fotos reales definitivas; evitar fotos genéricas sin permiso.
- Mantener el sujeto centrado: las categorías se recortan en círculo y los
  productos en `aspect-ratio: 4 / 3` con `object-fit: cover`.
- Comprimir en WebP o JPEG de calidad media (≈80) para no penalizar el sitio.
- No publicar precios, marcas ni especificaciones hasta confirmarlos.
- Reemplazar los `src` en `index.html` y quitar el atributo
  `data-provisional="true"` cuando se cargue cada imagen definitiva.
