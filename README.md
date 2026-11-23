# SetupLab

SetupLab es un proyecto de comercio tecnológico orientado a componentes informáticos, periféricos, equipos PC gaming y servicios técnicos. El sitio está pensado para Viedma y Carmen de Patagones, Argentina, y presenta a SetupLab como un emprendimiento unipersonal dedicado al armado, la actualización, el mantenimiento y el asesoramiento de equipos.

## Objetivo del sitio web

Ofrecer una presencia web profesional, moderna y responsive que comunique claramente los servicios de SetupLab, muestre ejemplos de trabajos, presente al equipo y facilite el contacto con potenciales clientes.

## Tecnologías utilizadas

- HTML5 semántico.
- CSS3, con Flexbox y CSS Grid.
- Bootstrap 5.
- JavaScript ES6+.
- Git y GitHub para el control de versiones.
- GitHub Pages para la publicación.

No se utiliza ningún framework adicional.

## Páginas

- `index.html` — Inicio: hero de presentación, llamados a la acción y resúmenes de servicios, trabajos y la empresa.
- `equipo.html` — Equipo: misión, visión, valores y fichas de los integrantes.
- `servicios.html` — Servicios: detalle de armado personalizado de PC, mantenimiento y reparación, y actualización con asesoramiento.
- `trabajos.html` — Trabajos: galería visual de seis ejemplos de proyectos organizada con CSS Grid.
- `contacto.html` — Contacto: datos de contacto, WhatsApp, correo electrónico, ubicación y formulario preparado para Formspree.

## Estructura de carpetas

```text
TFI-SetupLab/
├── index.html
├── equipo.html
├── servicios.html
├── trabajos.html
├── contacto.html
├── AGENTS.md
├── README.md
├── .gitignore
└── assets/
    ├── css/        # Bootstrap, estilos de la plantilla y estilos propios de SetupLab
    ├── img/        # Logo, fotografías, fondos e ilustraciones del sitio
    ├── js/         # Bootstrap, dependencias y scripts propios
    └── webfonts/   # Fuentes Font Awesome
```

La raíz del repositorio es esta carpeta: contiene directamente los cinco archivos HTML.

## Ejecución local

El proyecto no requiere instalación ni pasos de compilación.

1. Descargar o clonar el repositorio.
2. Ubicarse en la raíz del proyecto.
3. Abrir `index.html` en el navegador.

También es posible levantar un servidor local estático, por ejemplo con Python:

```bash
python -m http.server 8000
```

Luego visitar `http://localhost:8000`.

## Publicación con GitHub Pages

El sitio se publica desde la rama `main` usando la carpeta raíz `/`.

1. Subir el proyecto al repositorio público `TFI-SetupLab`.
2. Ingresar a `Settings` → `Pages`.
3. En `Build and deployment`, elegir `Deploy from a branch`.
4. Seleccionar la rama `main` y la carpeta `/ (root)`.
5. Guardar los cambios.

La URL pública tendrá el formato:

```text
https://<nombre-de-usuario>.github.io/TFI-SetupLab/
```

## Configuración pendiente

El formulario de `contacto.html` está preparado para Formspree, pero todavía debe reemplazarse el marcador `TU_ENDPOINT_FORMSPREE` en el atributo `action` por el endpoint real entregado por Formspree. Hasta ese momento, el formulario no envía mensajes.

## Autor

Alejandro Millanao.
