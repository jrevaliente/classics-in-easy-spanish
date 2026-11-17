# Continuidad — Classics in Easy Catalan

Actualizado: 17 noviembre 2026. Companion publicado y QA de la web pública completado.

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

## Último punto verificado — publicación y QA completados
- Publicación de los 21 archivos del companion en main: commit `9b4b717e7b3b7dedf02ff12f260369750912f05b`.
- GitHub Pages: ejecución `44057921792`, estado completed / success. URL: https://github.com/jrevaliente/classics-in-easy-spanish/actions/runs/44057921792
- Los 21 archivos se recuperaron desde la web pública con HTTP 200 y bytes idénticos a ese commit, incluidas portada, CSV, TSV, APKG, PDFs, JSON, CSS y JavaScript.
- Navegador de escritorio: portada y diseño revisados; búsqueda `aguila` encuentra `àguila`; revelar/ocultar, dirección inversa, filtro del capítulo 7 (20 entradas), anterior/siguiente, barajar y cero resultados comprobados.
- Reproducción iniciada para capítulos 7 y 10; ambos alcanzan readyState 4 y avance de tiempo. Velocidad 0.85× comprobada; empezar el 10 pausa el 7. Se dejaron los reproductores pausados a 1×. No constituye escucha integral.
- Navegación de timeline, mapa de personajes y printable comprobada; las diez soluciones HTML están cerradas inicialmente y se probó abrir/cerrar una. PDFs de actividades y soluciones siguen separados.
- ZIP de respaldo: `CLASSICS_IN_EASY_CATALAN_COMPANION_VERIFICADO_20261117.zip`, con carpeta completa, continuidad y QA actualizados. No hay cargas manuales pendientes para esta entrega.
- Comprobaciones estructurales repetidas: JSON y CSV 163 entradas; SQLite APKG 163 notas y 163 tarjetas; checksum de portada original correcto.

## Estado y trabajo pendiente
La entrega web solicitada está completada. No volver a subir ni regenerar estos recursos por el mero hecho de abrir otro chat. Solo continuar con nuevas instrucciones o fallos concretos observados.

Límites conservados: sin escucha completa ni cotejo palabra por palabra; sin prueba de importación en la aplicación Anki; sin nueva revisión móvil en navegador en este cierre. El original de portada es 1024 × 1536; una resolución superior requiere otra fuente.

## URL pública
https://jrevaliente.github.io/classics-in-easy-spanish/classics-in-easy-catalan/

## Para continuar
Leer este archivo y el estado real de GitHub main. Continuar desde el último punto comprobado. No regenerar recursos ya publicados sin motivo. No afirmar que se hizo escucha completa de los audios ni sincronización con el manuscrito.
