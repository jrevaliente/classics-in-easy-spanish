# Continuidad — Classics in Easy Catalan

Actualizado: 17 noviembre 2026. Companion construido; publicación y QA de la web pública en curso.

## Solicitud autorizada
Crear y configurar el companion en este repositorio, con portada original, diez audios, Vocabulary CSV, Anki y flashcards, Conflict Timeline, Character & Conflict Map y Printable Reading Companion. Subir todo lo posible, crear las carpetas y entregar un ZIP de respaldo. El usuario autoriza publicar en main y GitHub Pages.

## Fuentes recuperadas y utilizadas
- Audio.txt: Library libfile_318fb7c775b08191be5f841a0fe8c581; original conservado en audio/Audio-original.txt.
- Portada: Library libfile_dc7fc8f283208191966bce4a13887730. Original 1024 × 1536, conservado byte por byte en assets/cover-original.png. SHA-256 d38dba64bb736a07a4c1ee87e337dd5b3062e8e3fe2380c716faf92b1d641a51. JPEG optimizado para mostrar en web. No se ha inventado una resolución mayor.
- ZIP de ejemplo: Library libfile_18d807b433e88191a43656804a075d3d. Contrastado con los companions Cthulhu y Scarlet Plague del repositorio.
- Manuscrito maestro vigente: https://docs.google.com/document/d/1Fvpn4NDBU-PbGEEptwKnPAEHcIFI7w0tw-MtZllKpx0/edit ; recuperado el 17 noviembre 2026. No modificado. Contiene ocho cuentos A2 con apoyo y dos retos opcionales B1.

## Trabajo preparado y verificado
- index.html del companion y acceso desde el índice raíz del repositorio.
- assets/: CSS adaptable, JavaScript de interacción, portada original y JPEG, 163 entradas en vocabulary.json.
- audio/: diez enlaces, títulos y duraciones en tracks.json. Los archivos reales son `07 .mp3` y `10 .mp3`, con espacio antes de la extensión; usar `%20`. El usuario ya confirmó estos enlaces. No eliminarlos ni sustituirlos por 07.mp3/10.mp3.
- Los diez MP3 respondieron HTTP 206 con Content-Type audio/mpeg y muestra de 128 bytes. Esto verifica disponibilidad, no escucha integral ni sincronización palabra por palabra.
- downloads/: CSV UTF-8 con 163 entradas; TSV Anki con 163 notas; APKG con 163 notas y tarjetas, contextos, ejemplos y etiquetas de capítulo. Comprobada SQLite interna del APKG.
- Flashcards web: Catalan → English y English → Catalan; filtros por capítulo y búsqueda sin distinción de acentos; revelar, anterior, siguiente y barajar.
- Timeline de los diez cuentos y tablas de relaciones/conflictos por cuento, derivados de los relatos actuales. Incluyen avisos de spoilers; no se presenta una geografía real ni una cronología compartida.
- Printable Reading Companion: 60 preguntas y respuestas del manuscrito; soluciones HTML plegadas y separadas. PDF de actividades sin soluciones (10 páginas) y PDF separado de soluciones (10 páginas). Revisión visual de páginas representativas realizada.
- Validados enlaces locales y anclas, recuentos JSON/CSV/TSV/APKG y checksum de portada. JavaScript supera node --check.

## Punto actual y siguiente trabajo
1. Subir el conjunto a main con actualización protegida contra cambios concurrentes.
2. Comprobar el despliegue Pages y la página pública, sus descargas y las interacciones en navegador. La vista local no es accesible desde el navegador remoto; revisar la URL pública tras desplegar.
3. Registrar aquí commit, despliegue y resultados finales. Entregar ZIP y especificar solo cargas manuales realmente pendientes.

## URL prevista
https://jrevaliente.github.io/classics-in-easy-spanish/classics-in-easy-catalan/

## Para continuar
Leer este archivo y el estado real de GitHub main. Continuar desde el último punto comprobado. No regenerar recursos ya publicados sin motivo. No afirmar que se hizo escucha completa de los audios ni sincronización con el manuscrito.
