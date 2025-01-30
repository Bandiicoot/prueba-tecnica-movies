Recomendador de Películas

Este es un proyecto web interactivo que recomienda películas en función de las elecciones del usuario. A medida que el usuario responde preguntas, el sistema lo guía hacia una película recomendada y lo redirige a su página en IMDb.

Tecnologías Utilizadas

HTML: Estructura de la página.

CSS: Estilos y diseño visual (utilizando la metodología BEM para la organización de clases).

JavaScript: Lógica de selección y navegación entre opciones (siguiendo los principios de la arquitectura SOLID).

Características

Interfaz interactiva con preguntas y respuestas.

Recomendaciones personalizadas basadas en elecciones.

Escalabilidad: Fácil de agregar nuevas preguntas y opciones sin modificar la estructura principal.

Redirección automática a IMDb al finalizar la selección.

Escalabilidad

El código está diseñado de forma modular y escalable:

Para agregar más opciones de películas, solo es necesario modificar la estructura de nextStep en el código JavaScript.

Si se desean más preguntas, simplemente se agregan nuevos nodos a la estructura sin afectar el funcionamiento general.

No es necesario modificar la lógica central, lo que permite una fácil expansibilidad.


Abrir index.html en el navegador.https://bandiicoot.github.io/prueba-tecnica-movies/
