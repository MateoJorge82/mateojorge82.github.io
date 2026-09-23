/*
  CONTENIDO DEL PORTFOLIO
  -----------------------
  Todo el texto y la secuencia de imágenes del sitio sale de este archivo.
  Para agregar un proyecto: copiar un objeto de PROJECTS, cambiar el "slug",
  poner sus imágenes en img/<slug>/ (ver README) y armar la secuencia en "blocks".

  Los valores marcados con PENDIENTE (o con { pending: "..." }) no están en el
  material de origen y se muestran en el sitio como "a confirmar".

  Tipos de bloque:
    { t: "hero", img }                        imagen principal, ancho completo
    { t: "text", label, body: [párrafos] }    texto con etiqueta lateral
    { t: "figure", img, size: "full"|"wide"|"medium", mat }  una imagen o dibujo
    { t: "row", imgs: [...] }                 dos o tres imágenes a igual altura
    { t: "split", label, body, img, flip }    texto y figura en paralelo
    { t: "figures", items: [[valor, rótulo]] } datos del proyecto
    { t: "legend", title, items: [[nº, capa, [componentes]]] }  capas constructivas
  "mat: true" apoya el dibujo sobre una lámina blanca (dibujos con fondo blanco).
*/

window.SITE = {
  name: "Mateo Jorge",
  role: "Arquitectura",
  city: "Montevideo, Uruguay",
  email: "mateojorge1999@gmail.com",
  phone: "+598 93 586 800",
  linkedin: "https://www.linkedin.com/in/mateo-jorge-11186a284",
  cvFile: "cv/Mateo-Jorge-CV.pdf"
};

// Fuente: CV de Mateo Jorge (Mateo_Jorge_CV.pdf).
window.PROFILE = {
  intro: [
    "Soy estudiante avanzado de Arquitectura, con interés en el desarrollo de proyectos y en la ejecución de obras.",
    "Me motiva tanto el trabajo en estudio —desde la concepción hasta el detalle constructivo— como el trabajo en obra, el seguimiento de procesos y la resolución técnica. Me considero una persona comprometida, con disposición al aprendizaje y al trabajo en equipo. Busco una oportunidad para seguir formándome y aportar activamente en equipos de arquitectura o construcción."
  ],
  education: [
    ["2022 – actualidad", "Facultad de Arquitectura, Diseño y Urbanismo", "Universidad de la República"],
    ["2018 – 2021", "Facultad de Medicina", "Universidad de la República — cursada hasta 4.º año"],
    ["2012 – 2017", "Colegio Seminario", "Secundaria y bachillerato"]
  ],
  // Cursos de proyecto documentados en las láminas del archivo.
  courses: [
    ["2026 S1", "Proyecto Tema Específico (PTE)", "Taller Ex-Schelotto", "Casa Fabricada"],
    ["2025 S2", "Proyecto Edilicio Avanzado (PEA)", "Taller Ex-Schelotto", "Escuela de Alta Gastronomía"],
    ["2025 S1", "Proyecto Edilicio Avanzado (PEA)", "Taller Apolo", "Co–Macchina"],
    ["2024 S2", "Proyecto Edilicio Básico (PEB)", "Taller Martín", "Hibridación Urbana"]
  ],
  competitions: [
    ["2026", "Concurso de Vivienda 2026 — anteproyecto Casa de la Rifa 2027", "Concurso de Vivienda 26"]
  ],
  software: [["Revit", "Avanzado"], ["AutoCAD", "Avanzado"], ["Microsoft Office", "Intermedio"], ["Adobe Photoshop", "Básico"], ["Adobe Illustrator", "Básico"], ["QGIS", "Principiante"]],
  languages: [["Español", ""], ["Inglés", "Cambridge C2 Proficiency"], ["Italiano", "A2"]],
  experience: [["2013 – 2018", "Voluntariado", "Obras sociales «Horneros» y «Castores»"]],
  // Sus datos de contacto están en el CV en PDF; no se publican en la página.
  references: [["Julio César Pérez", "Ingeniero civil"], ["María Estrada", "Arquitecta"]]
};

window.PROJECTS = [
  /* ------------------------------------------------------------------ */
  {
    slug: "vivienda-26",
    title: "Concurso de Vivienda 26",
    subtitle: "Una casa sobre pilotes en el bosque costero",
    place: "Ocean Park",
    year: "2026",
    frame: "Concurso",
    scale: "1:75",
    cover: "vivienda-26/exterior-bosque",
    coverPos: "58% 50%",
    meta: [
      ["Lugar", "Ocean Park"],
      ["Año", "2026"],
      ["Marco", "Concurso de Vivienda 2026 — Diseño anteproyecto Casa de la Rifa 2027"],
      ["Programa", "Vivienda unifamiliar en dos niveles"],
      ["Sistema", "Madera: glulam, CLT y wood frame"],
      ["Autores", "Mateo Jorge, Sebastián Cabrera"]
    ],
    blocks: [
      { t: "hero", img: { src: "vivienda-26/exterior-bosque", alt: "Render exterior de la vivienda de madera entre pinos, al atardecer, elevada sobre pilotes." } },
      { t: "text", label: "Propuesta", body: [
        "El predio conserva la vegetación y la topografía de un ecosistema costero. La vivienda se implanta sobre pilotes para no alterar el suelo natural ni la vegetación existente, y organiza sus visuales hacia la copa de los árboles, los claros del terreno y el horizonte.",
        "La madera resuelve a la vez estructura, terminaciones y equipamiento. Es el material del paisaje forestal que rodea la casa, y el proyecto la usa como transición entre la arquitectura y el bosque."
      ]},
      { t: "split", small: true, label: "Implantación", img: { src: "vivienda-26/implantacion", alt: "Diagrama de implantación del volumen en el predio con la orientación y la playa.", cap: "Implantación", mat: true },
        body: ["La implantación busca visuales múltiples desde el interior: hacia la vegetación principal, hacia los claros del predio y, más lejos, hacia la playa."] },
      { t: "row", mat: true, size: "medium", imgs: [
        { src: "vivienda-26/organizacion-espacial", alt: "Diagrama axonométrico de la organización espacial sobre la grilla de 1,5 m.", cap: "Organización espacial — grilla de 1,5 × 1,5 m" },
        { src: "vivienda-26/esquema-estructural", alt: "Esquema estructural explotado: cubierta, entrepiso, pilares y muros de madera.", cap: "Esquema estructural" }
      ]},
      { t: "text", label: "Organización", body: [
        "La casa se ordena sobre una grilla modular de 1,5 × 1,5 m y se desarrolla en dos niveles. Abajo, el servicio y la cocina-comedor, vinculados al exterior; arriba, los espacios privados.",
        "La sala de estar es el núcleo del proyecto: ocupa un nivel elevado con cubierta propia y prescinde del mobiliario convencional. El equipamiento se adosa a los muros para dejar libre la relación visual con el exterior, y el estar funciona como lugar de permanencia y observación del bosque."
      ]},
      { t: "figure", size: "full", img: { src: "vivienda-26/axonometria-explotada", alt: "Axonometría explotada de la vivienda: cubiertas, estructura de glulam, muros de CLT, wood frame, parrillero y fundaciones numerados del 01 al 09.", cap: "Axonometría explotada — sistema constructivo", mat: true } },
      { t: "legend", title: "Capas y componentes", items: [
        ["01", "Cubierta", ["Chapa de acero galvanizada c. 22", "Alfajías 1 × 1\"", "Lana de roca 100 mm", "Lámina de polietileno 200 micrones", "Cielorraso panel fenólico 20 mm", "Vigas de madera 3 × 6\""]],
        ["02", "Estructura", ["Vigas glulam 16 × 40 cm", "Escuadra estructural reforzada 10 × 10 cm, e 5 mm", "Tornillos estructurales Ø10", "Pilares de CLT 24 × 24 cm en planta baja, 16 × 16 cm en N100"]],
        ["03", "Muro CLT", ["Placa CLT 12 cm vista", "Lámina de polietileno 200 micrones", "Lana de roca 80 mm", "Cámara de aire 20 mm", "Subestructura anclada a CLT", "Paneles HPL 20 mm"]],
        ["04", "Wood frame", ["Panel fenólico 20 mm", "Placa de yeso 15 mm", "Lana de roca 70 mm", "Placa estructural OSB 20 mm", "Cámara de aire 20 mm", "Paneles HPL 20 mm"]],
        ["05", "Panel plegable", ["Cerramiento de 3 hojas, marco de aluminio anodizado", "Apertura slide-pivot-stack"]],
        ["06", "Aberturas", ["Vidrio DVH 6-12-6", "Marco de aluminio anodizado negro", "Antemarco de madera"]],
        ["07", "Cerramiento inferior", ["Terminación madera 15 mm", "Manta acústica 5 mm", "CLT 140 mm visto"]],
        ["08", "Parrillero", ["Ladrillos de BTC", "Interior de ladrillo refractario"]],
        ["09", "Fundaciones", ["Placa de anclaje de acero e 20 mm", "Tornillos Ø16 mm, l 250 mm", "Dado de hormigón 40 × 40 × 40/140 cm"]]
      ]},
      { t: "text", label: "Materialidad", body: [
        "La estructura es un sistema mixto de madera: vigas de glulam y pilares sostienen muros portantes de CLT en planta baja, mientras que el nivel superior se estructura en wood frame. Los interiores se terminan en madera maciza; el exterior se reviste con paneles HPL en tono madera claro, que establecen una transición cromática y material con la vegetación."
      ]},
      { t: "row", mat: true, imgs: [
        { src: "vivienda-26/planta-baja", alt: "Planta baja acotada, escala 1:75.", cap: "Planta baja — 1:75" },
        { src: "vivienda-26/planta-alta", alt: "Planta alta acotada, escala 1:75.", cap: "Planta alta — 1:75" }
      ]},
      { t: "figure", size: "full", img: { src: "vivienda-26/cortes", alt: "Cortes AA y BB de la vivienda con niveles, escala 1:75.", cap: "Cortes AA y BB — 1:75", mat: true } },
      { t: "row", imgs: [
        { src: "vivienda-26/interior-estar", alt: "Render interior: estufa central de ladrillo oscuro, escalera y comedor con vista a los pinos.", cap: "Estar y comedor" },
        { src: "vivienda-26/interior-mirador", alt: "Render interior de la sala de estar elevada con banco corrido y ventanas en esquina hacia el bosque.", cap: "Sala de estar elevada" }
      ]},
      { t: "split", flip: true, label: "Aberturas", img: { src: "vivienda-26/estrategia-aberturas", alt: "Desarrollo de fachadas con porcentajes de lleno y vano por orientación.", cap: "Estrategia de aberturas", mat: true },
        body: ["La proporción entre lleno y vano responde a la orientación de cada fachada. Va de 17 % de aberturas en la fachada más cerrada, que controla asoleamiento y privacidad, a 41 % en la más abierta, orientada hacia la vegetación principal. La envolvente funciona así como un marco que media entre el interior y el paisaje."] },
      { t: "figure", size: "full", img: { src: "vivienda-26/fachadas", alt: "Fachadas este y oeste con árboles de fondo, escala 1:75.", cap: "Fachadas este y oeste — 1:75", mat: true } },
      { t: "figure", size: "medium", img: { src: "vivienda-26/exterior-deck", alt: "Render exterior: volumen de dos niveles revestido en madera, con deck elevado y escalera hacia la arena.", cap: "Deck de acceso" } }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "casa-fabricada",
    title: "Casa Fabricada",
    subtitle: "Una vivienda como catálogo de piezas",
    place: "", // proyecto sin sitio: el emplazamiento es abstracto
    year: "2026",
    frame: "PTE",
    scale: "1:100",
    cover: "casa-fabricada/exterior",
    meta: [
      ["Curso", "Proyecto Tema Específico (PTE), S1 2026"],
      ["Taller", "Ex-Schelotto — director interino Pedro Barrán"],
      ["Equipo docente", "Maurizio Rodríguez, Felipe Vázquez, Camilo Álvarez, Bruno Spadoni"],
      ["Autores", "Mateo Jorge, Rocío Reyes"],
      ["Programa", "Vivienda flexible prefabricada"],
      ["Sistema", "Retícula metálica de 4,5 × 3 m, paneles de CLT y GLT"]
    ],
    blocks: [
      { t: "hero", img: { src: "casa-fabricada/exterior", alt: "Render exterior al atardecer: tres volúmenes de madera con cubiertas a un agua y una galería con cubierta translúcida." } },
      { t: "text", label: "Propuesta", body: [
        "La vivienda se piensa como un sistema flexible, capaz de adaptarse a distintas formas de habitar a lo largo del tiempo. En lugar de proyectar para un usuario tipo, se proyecta para personas con necesidades cambiantes, buscando espacios cómodos, cálidos y apropiables.",
        "La atmósfera de referencia es la de la cabaña: la madera como material principal del interior y la luz natural como herramienta de proyecto."
      ]},
      { t: "split", label: "Off-site", img: { src: "casa-fabricada/off-site", alt: "Secuencia de montaje: transporte de piezas, izado del módulo con grúa y módulo terminado.", cap: "Fabricación, transporte y montaje", mat: true },
        body: ["La prefabricación fuera de obra reduce el impacto ambiental, acorta los tiempos de construcción y deja abierta la posibilidad de desmontar, reutilizar o adaptar las piezas. El método permite, además, armar un catálogo de componentes."] },
      { t: "split", flip: true, label: "Unidad", img: { src: "casa-fabricada/unidad-axonometria", alt: "Axonometría explotada de la unidad: cubierta ligera, paneles con aislación, paneles técnicos y cimentación de mínimo impacto.", cap: "La unidad del sistema", mat: true },
        body: ["Una retícula metálica de 4,5 × 3 m estructura el proyecto, y los espacios se definen con piezas de 1,5 m de ancho y 3 m de altura. Cubierta liviana con canalón integrado, paneles con aislación térmica y terminación exterior, paneles técnicos para servicios y ampliaciones, y una cimentación de mínimo impacto. Los paneles de piso y pared son intercambiables: el usuario define el espacio."] },
      { t: "row", mat: true, size: "medium", imgs: [
        { src: "casa-fabricada/catalogo", alt: "Catálogo de paneles y aberturas intercambiables.", cap: "Catálogo — A. paneles, B. aberturas" },
        { src: "casa-fabricada/servicios-pastillas", alt: "Módulos de servicio prefabricados: cocina y baños como piezas insertables.", cap: "Servicios como módulos insertables" }
      ]},
      { t: "text", label: "Catálogo", body: [
        "Dentro de la estructura se integran dispositivos —envolvente, paneles que funcionan como muros, servicios— que forman un catálogo ofrecido al usuario para personalizar su espacio. Cocina y baños se resuelven como módulos prefabricados, «pastillas» que se insertan en el sistema."
      ]},
      { t: "figure", size: "wide", img: { src: "casa-fabricada/planta", alt: "Planta de la vivienda de 12 por 9 m sobre la retícula, escala 1:100.", cap: "Planta — 1:100", mat: true } },
      { t: "figures", items: [["4,5 × 3 m", "retícula estructural"], ["1,5 m", "módulo de panel"], ["3 m", "altura de pieza"], ["12 × 9 m", "planta"]] },
      { t: "figure", size: "wide", img: { src: "casa-fabricada/seccion-aa", alt: "Sección AA con las cuatro cubiertas a un agua, escala 1:100.", cap: "Sección AA — 1:100", mat: true } },
      { t: "figure", size: "full", img: { src: "casa-fabricada/axonometria-explotada", alt: "Axonometría explotada: cubiertas, estructura metálica, paneles opacos, vidriados y plegables, cerramiento inferior y fundaciones numerados del 01 al 10.", cap: "Axonometría explotada — componentes 01 a 10", mat: true } },
      { t: "legend", title: "Componentes", items: [
        ["01", "Cubierta", ["Chapa de acero galvanizada c. 22", "Perfiles metálicos de anclaje", "Lana de roca 100 mm", "Cielorraso placa GLT 20 mm", "Viga de acero 4 × 2\"", "A — policarbonato translúcido"]],
        ["02", "Bajada", ["Tubo de acero inoxidable 110 mm", "Desagüe 15 × 15 cm"]],
        ["03", "Estructura", ["Perfil de acero 4 × 4\", e 1/2\"", "Pieza de encastre"]],
        ["04", "Panel opaco", ["Placa de CLT 20 mm", "Lana de roca 60 mm", "Placa de CLT 20 mm"]],
        ["05", "Panel de vidrio / puerta", ["Vidrio DVH 6-12-6", "Marco de aluminio anodizado negro"]],
        ["06", "Panel plegable", ["2 hojas de persianas de madera", "Apertura slide-pivot-stack"]],
        ["07", "Aberturas", ["Vidrio DVH 6-12-6", "Antemarco de madera"]],
        ["08", "Cerramiento inferior", ["Placa GLT 30 mm", "Cámara técnica para instalaciones 10 cm", "Chapón fenólico 20 mm", "Placa EPS 50 mm", "Placa GLT 30 mm"]],
        ["09", "Inferior exterior", ["Placa GLT 30 mm", "Cámara técnica 10 cm", "Placa GLT 30 mm"]],
        ["10", "Fundaciones", ["Vigas de acero 4 × 4\"", "Placa de anclaje e 25 mm", "Tornillos Ø16 mm, l 250 mm", "Dado de hormigón 40 × 40 cm"]]
      ]},
      { t: "row", imgs: [
        { src: "casa-fabricada/interior-galeria", alt: "Render interior de la galería con cubierta translúcida y estar en madera.", cap: "Galería" },
        { src: "casa-fabricada/interior-cocina", alt: "Render interior de la cocina revestida en madera con ventanas hacia el parque.", cap: "Cocina" },
        { src: "casa-fabricada/galeria-exterior", alt: "Render de la galería exterior con la estructura metálica y el comedor al aire libre.", cap: "Galería exterior" }
      ]},
      { t: "figure", size: "wide", img: { src: "casa-fabricada/fachada-sur", alt: "Fachada sur, escala 1:100.", cap: "Fachada sur — 1:100", mat: true } },
      { t: "figure", size: "full", img: { src: "casa-fabricada/corte-perspectivado", alt: "Corte perspectivado de la vivienda con los componentes numerados y los espacios habitados.", cap: "Corte perspectivado", mat: true } }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hibridacion-urbana",
    title: "Hibridación Urbana",
    subtitle: "18 de Julio: el límite entre lo público y lo privado",
    place: "Av. 18 de Julio, Montevideo",
    year: "2024",
    frame: "PEB",
    scale: "1:200",
    cover: "hibridacion/fachada-18-de-julio",
    meta: [
      ["Lugar", "Avenida 18 de Julio, Montevideo"],
      ["Curso", "Proyecto Edilicio Básico (PEB), S2 2024"],
      ["Taller", "Taller Martín — docente Martín Gualano"],
      ["Autores", "Mateo Jorge, Federico Irrazabal"],
      ["Programa", "60 viviendas sobre planta baja pública"],
      ["Superficies", "2632 m² de área pública, 4230 m² de área privada"]
    ],
    blocks: [
      { t: "hero", img: { src: "hibridacion/fachada-18-de-julio", alt: "Render de la fachada sobre 18 de Julio: bloque de viviendas entre medianeras, planta baja abierta, escalinata y ciclovía." } },
      { t: "text", label: "Propuesta", body: [
        "Una intervención sobre la avenida 18 de Julio, eje cultural y comercial de Montevideo, que desdibuja el límite tradicional entre lo público y lo privado. El espacio público se lee como una extensión de la avenida: el proyecto se abre física y simbólicamente hacia su contexto e invita al peatón a entrar.",
        "Pasajes peatonales, plazas urbanas y galerías semiabiertas producen una transición continua entre la vereda y el interior de la manzana, y reúnen en un mismo plano actividades cívicas, comerciales y recreativas."
      ]},
      { t: "figure", size: "full", img: { src: "hibridacion/planta-entorno", alt: "Planta baja con entorno, escala 1:200: patio con mesas, núcleos de viviendas, plaza y vereda de 18 de Julio.", cap: "Planta con entorno — 1:200", mat: true } },
      { t: "figures", items: [["60", "viviendas"], ["10", "niveles de vivienda"], ["2632 m²", "área pública"], ["4230 m²", "área privada"]] },
      { t: "row", mat: true, imgs: [
        { src: "hibridacion/diagrama-volumen", alt: "Diagrama del volumen de 28,2 por 15 m y axonometría con la planta baja pública en rojo.", cap: "Volumen de 28,2 × 15 m — público, privado y circulación" },
        { src: "hibridacion/diagrama-estructura-tipologias", alt: "Grilla estructural de pilares de 60 por 20 y diagrama de tipologías de una y dos habitaciones.", cap: "Grilla de pilares de 60 × 20 y tipologías" }
      ]},
      { t: "text", label: "Vivienda", body: [
        "Sobre la planta pública se apilan diez niveles de vivienda: 60 unidades, tres de dos habitaciones (70,5 m²) y tres de una habitación (47 m²) por nivel, ordenadas sobre una grilla de pilares de 60 × 20."
      ]},
      { t: "figure", size: "full", img: { src: "hibridacion/plantas-baja-nivel1", alt: "Planta baja y planta nivel 1, escala 1:300.", cap: "Planta baja y planta nivel 1 — 1:300", mat: true } },
      { t: "row", imgs: [
        { src: "hibridacion/plaza-elevada", alt: "Render de la plaza elevada con juegos infantiles sobre pavimento rojo.", cap: "Plaza elevada" },
        { src: "hibridacion/galeria-planta-baja", alt: "Render de la galería semiabierta de planta baja con personas y exposición.", cap: "Galería de planta baja" }
      ]},
      { t: "figure", size: "full", img: { src: "hibridacion/planta-tipo-tipologias", alt: "Planta tipo con seis unidades y detalle de las tipologías, escala 1:300.", cap: "Planta tipo y tipologías — 1:300", mat: true } },
      { t: "text", label: "Ciudad", body: [
        "El proyecto entiende la ciudad como un sistema en evolución, en el que la arquitectura sirve para fomentar la cohesión social. La intervención busca revalorizar el patrimonio urbano del centro y redefinir sus formas de habitar, devolviendo a la comunidad un espacio más accesible."
      ]},
      { t: "figure", size: "full", img: { src: "hibridacion/corte-longitudinal", alt: "Corte longitudinal perspectivado: diez niveles de vivienda, escalera exterior y planta baja pública con mesas y árboles.", cap: "Corte longitudinal — 1:200", mat: true } }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "escuela-la-pedrera",
    title: "Escuela de Alta Gastronomía",
    subtitle: "Una UTU de madera junto al humedal",
    place: "La Pedrera",
    year: "2025",
    frame: "PEA",
    scale: "1:250",
    cover: "la-pedrera/humedal",
    meta: [
      ["Lugar", "La Pedrera"],
      ["Curso", "Proyecto Edilicio Avanzado (PEA), S2 2025"],
      ["Taller", "Ex-Schelotto — director interino Pedro Barrán"],
      ["Equipo docente", "Adriana Bobadilla, Pablo Martínez, Hernando Villarino, Andrés Santín"],
      ["Autores", "Mateo Jorge, Karla Correa"],
      ["Programa", "Escuela de turismo y gastronomía (UTU)"],
      ["Sistema", "Paneles de CLT"]
    ],
    blocks: [
      { t: "hero", img: { src: "la-pedrera/humedal", alt: "Render exterior: pabellones de madera y vidrio sobre una pasarela, entre vegetación nativa y el humedal." } },
      { t: "text", label: "Propuesta", body: [
        "Una UTU para La Pedrera, desarrollada en el curso de Proyecto Edilicio Avanzado. El proyecto busca equilibrar la funcionalidad de un programa educativo exigente —cocinas de enseñanza, aulas y auditorio— con la responsabilidad de construir en el espacio público costero."
      ]},
      { t: "figure", size: "full", img: { src: "la-pedrera/axonometria", alt: "Axonometría con las cubiertas separadas: galería de circulación lineal y pabellones de aulas en peine.", cap: "Axonometría — cubiertas, galería y pabellones", mat: true } },
      { t: "text", label: "Organización", body: [
        "La organización responde a la regulación climática. Los pasillos de circulación se ubican al norte y actúan como colchón térmico que protege las aulas de la radiación solar directa. El gran hall central, concebido como galería, articula las circulaciones, favorece el encuentro y hace visible la vocación pública del edificio."
      ]},
      { t: "figure", size: "full", img: { src: "la-pedrera/planta-baja", alt: "Planta baja con entorno arbolado, escala 1:250.", cap: "Planta baja — 1:250", mat: true } },
      { t: "figure", size: "full", img: { src: "la-pedrera/corte-aa", alt: "Corte AA longitudinal por la galería, escala 1:250.", cap: "Corte AA — 1:250", mat: true } },
      { t: "row", imgs: [
        { src: "la-pedrera/cocina-taller", alt: "Render de la cocina de enseñanza con estudiantes de gastronomía.", cap: "Cocina de enseñanza" },
        { src: "la-pedrera/aula", alt: "Render del auditorio con ventanal hacia la vegetación.", cap: "Auditorio" }
      ]},
      { t: "text", label: "Construcción", body: [
        "La estructura principal se resuelve con paneles de CLT, una tecnología de baja huella de carbono basada en un material renovable, que permite una construcción limpia y eficiente y reduce los residuos de obra. El proyecto apuesta al confort ambiental pasivo y a la claridad constructiva."
      ]},
      { t: "figure", size: "wide", img: { src: "la-pedrera/detalles", alt: "Detalles: drenaje pluvial en cubierta, control lumínico con cortinas de enrollar, asoleamiento y componentes estructurales viga, panel CLT y pilar.", cap: "Drenaje pluvial, control lumínico, asoleamiento y componentes estructurales", mat: true } },
      { t: "figure", size: "full", img: { src: "la-pedrera/planta-alta", alt: "Planta alta, escala 1:250.", cap: "Planta alta — 1:250", mat: true } },
      { t: "split", label: "Interior y exterior", img: { src: "la-pedrera/acceso", alt: "Render del acceso: pabellón de madera y vidrio con escalinata y deck.", cap: "Acceso" },
        body: ["Los grandes ventanales permiten un ingreso controlado de luz natural y refuerzan la relación visual con la vegetación y el humedal. La misma transparencia favorece la ventilación cruzada y contribuye al confort térmico sin depender de sistemas mecánicos intensivos."] },
      { t: "figure", size: "full", img: { src: "la-pedrera/cortes-cc-dd", alt: "Cortes transversales CC y DD sobre el terreno en pendiente, escala 1:250.", cap: "Cortes CC y DD — 1:250", mat: true } },
      { t: "row", imgs: [
        { src: "la-pedrera/comedor", alt: "Render del comedor semiabierto hacia el paisaje.", cap: "Comedor" },
        { src: "la-pedrera/galeria", alt: "Render de la galería de madera con estudiantes.", cap: "Galería" }
      ]},
      { t: "figure", size: "full", img: { src: "la-pedrera/corte-bb", alt: "Corte BB con el auditorio y los pabellones, escala 1:250.", cap: "Corte BB — 1:250", mat: true } }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "co-macchina",
    title: "Co–Macchina",
    subtitle: "Infraestructura logística en Cobo Calleja",
    place: "Cobo Calleja, Fuenlabrada (Madrid)",
    year: "2025",
    frame: "PEA",
    scale: "Territorio",
    cover: "co-macchina/megaestructura-aerea",
    meta: [
      ["Lugar", "Polígono industrial Cobo Calleja, Fuenlabrada, Comunidad de Madrid"],
      ["Curso", "Proyecto Edilicio Avanzado (PEA), 2025 S1"],
      ["Tema", "Infraestructural. Fricciones metropolitanas — intervenciones oportunas en la Comunidad de Madrid"],
      ["Taller", "Apolo"],
      ["Autores", "Mateo Jorge, Martina Lavie"],
      ["Programa", "Megaestructura logística y estación de tren"]
    ],
    blocks: [
      { t: "hero", img: { src: "co-macchina/megaestructura-aerea", alt: "Render en blanco y negro: megaestructura reticulada de acero sobre las naves del polígono, con grúas suspendidas." } },
      { t: "text", label: "Contexto", body: [
        "Cobo Calleja es uno de los mayores centros de comercio mayorista de productos importados en Europa: unas 162 hectáreas de calles angostas en malla ortogonal y más de mil naves industriales dedicadas al almacenamiento y la distribución de mercancías, principalmente de origen chino.",
        "El polígono funciona como plataforma logística intermedia, articulada con los corredores A-42 y M-50 y a unos 5 km de la Nueva Ruta de la Seda. Su trama, sin embargo, no fue pensada para la escala de la carga: la alta demanda logística choca con la capacidad limitada de maniobra de los vehículos."
      ]},
      { t: "row", imgs: [
        { src: "co-macchina/calle-poligono", alt: "Fotografía en blanco y negro de una calle del polígono con naves, carteles, camionetas y peatones.", cap: "Una calle del polígono" },
        { src: "co-macchina/mapa-territorial", alt: "Mapa del polígono y su conexión con la M-50, la A-42, la M-506, la R-4 y las vías férreas.", cap: "Cobo Calleja y sus conexiones viales y ferroviarias", mat: true }
      ]},
      { t: "text", label: "Postura", body: [
        "El proyecto parte de una posición deliberada: Cobo Calleja no debe transformarse en una ciudad más humana, sino en una máquina más clara. El comercio intensivo y el flujo constante de mercancías se asumen como condiciones fundacionales a potenciar, no como patologías a corregir. La arquitectura no maquilla el funcionamiento del polígono: lo revela."
      ]},
      { t: "figure", size: "full", img: { src: "co-macchina/axonometria-megaestructura", alt: "Axonometría de la megaestructura lineal sobre la trama de naves, con rieles elevados, estación y viñetas de detalle.", cap: "Axonometría general — megaestructura, rieles y estación", mat: true } },
      { t: "text", label: "Megaestructura", body: [
        "Una megaestructura elevada, automatizada y conectada directamente con una nueva estación de tren reorganiza el transporte y la distribución de mercancías, y la separa de la circulación terrestre. La actividad humana se concentra en un centro logístico, mientras el resto del polígono queda como territorio operativo para almacenamiento y circulación técnica.",
        "Un sistema de rieles elevados recorre las calles y conecta las naves con la estructura principal, permitiendo el tránsito constante de contenedores."
      ]},
      { t: "split", flip: true, label: "Estructura", img: { src: "co-macchina/modulo-estructural", alt: "Módulo reticulado de 6 por 3 por 2 m y pórtico de 90 por 35 m con 27 m de altura.", cap: "Módulo de 6 × 3 × 2 m y pórtico de 90 × 35 m, 27 m de altura", mat: true },
        body: ["La megaestructura se construye por agregación de un único módulo reticulado de acero. Su repetición forma pórticos de gran luz bajo los cuales conviven la carga pesada y la vida pública."] },
      { t: "row", imgs: [
        { src: "co-macchina/interior-contenedores", alt: "Render interior bajo la estructura: contenedores suspendidos de grúas y un nivel público con plazas y personas.", cap: "Nivel público bajo la estructura" },
        { src: "co-macchina/playa-de-carga", alt: "Render de la playa de carga con camiones y contenedores bajo la estructura.", cap: "Playa de carga" }
      ]},
      { t: "text", label: "Nodo logístico", body: [
        "La intervención busca consolidar Cobo Calleja como nodo logístico de escala continental: concentrar operaciones, reducir tiempos muertos y conflictos entre actores, y liberar suelo dentro del polígono para nuevos usos. Distintas áreas atienden a distintos compradores: una zona para camiones que compran al por mayor y otras, peatonales y ágiles, para compradores minoristas."
      ]},
      { t: "row", imgs: [
        { src: "co-macchina/vista-aerea-existente", alt: "Render aéreo de las cubiertas curvas de la estructura sobre las naves y las vías.", cap: "Vista aérea" },
        { src: "co-macchina/estacion", alt: "Render aéreo de la estación de tren integrada a la megaestructura.", cap: "Estación de tren" }
      ]},
      { t: "figure", size: "wide", img: { src: "co-macchina/plano-poligono", alt: "Plano del polígono con la megaestructura trazada en diagonal junto a la A-42.", cap: "La megaestructura sobre la trama del polígono", mat: true } }
    ]
  }
];
