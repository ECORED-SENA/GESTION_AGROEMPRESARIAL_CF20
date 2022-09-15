export default {
  global: {
    componenteFormativo:
      'Evaluación y acciones correctivas en el sistema productivo agrícola',
    descripcionCurso:
      'El éxito de las actividades de producción agrícola está relacionado en la mejora continua de las actividades realizadas; para ello, es importante realizar inspecciones periódicas a los cultivos para identificar posibles no conformidades y a su vez formular las acciones correctivas. Es así como en este contenido se abordarán las actividades relacionadas con el seguimiento técnico de los procesos de producción.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Evaluación de parámetros técnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estado sanitario del cultivo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estado fisiológico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ejecución de labores culturales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Cálculo de rendimientos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Calidad de la producción',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Listas de chequeo',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Registros',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Diligenciamiento de registros',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Puntos críticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estrategias de monitoreo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Localización de puntos críticos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Formulación de planes preventivos y correctivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Identificación de oportunidades de mejora',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Socialización de planes correctivos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Acciones correctivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Criterios técnicos de implementación de correctivos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Implementación de acciones correctivas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Presentación de informes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1 Estado sanitario del cultivo ',
      referencia:
        'Ángel, J.  [TvAgro]. (2020, 31 de julio). Cómo Desarrollar la Agricultura Eficiente. TV Agro. [Video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=d6JqN-mj-t8',
    },
    {
      tema: '4.2 Implementación de acciones correctivas ',
      referencia:
        'Burgos, A.  [ASAJA BURGOS]. (2019, 14 de enero). Ayudas Primera Instalación y Planes de Mejora. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QcHSPPmTQOc',
    },
  ],
  glosario: [
    {
      termino: 'Acción correctiva',
      significado: 'Se toma para prevenir que algo vuelva a ocurrir.',
    },
    {
      termino: 'Acción preventiva',
      significado: 'Se toma para prevenir que algo ocurra.',
    },
    {
      termino: 'Estado sanitario',
      significado:
        'Es el estado en el que se encuentran las plantas de ataques por plagas u otras enfermedades.',
    },
    {
      termino: 'Fisiología vegetal',
      significado:
        'Estudia cómo funcionan las plantas y explica los fundamentos físicos y químicos de dicho funcionamiento sobre bases estructurales a diferentes niveles: molecular, celular, del tejido, de los órganos, de la planta entera y del ecosistema.',
    },
    {
      termino: 'ISO 9001',
      significado:
        'Se define como la norma reconocida a nivel mundial para sistemas de gestión de calidad.',
    },
    {
      termino: 'Puntos críticos',
      significado:
        'Son situaciones que presentan una anomalía en los procesos, los cuales deben ser corregidos mediante acciones de mejora.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barberi, P. (s.f.). Métodos preventivos y culturales para el manejo de malezas. Organización de las Naciones Unidas para la Alimentación y la Agricultura FAO.',
      link: 'https://www.fao.org/3/y5031s/y5031s0e.htm',
    },
    {
      referencia:
        'Calvo, A. (2019). Rendimiento de Cultivos por Hectárea: cómo Calcularlo. Agroptima. ',
      link:
        'https://www.agroptima.com/es/blog/rendimiento-cultivos-hectarea-calcular/',
    },
    {
      referencia:
        'Escalante, J. (2019). Registros de Producción Agrícola para el Mejoramiento de la Toma de Decisión. Universidad de Pamplona. España. ',
      link:
        'https://www.researchgate.net/publication/330635315_REGISTROS_DE_PRODUCCION_AGRICOLA_PARA_EL_MEJORAMIENTO_DE_LA_TOMA_DE_DECISION#:~:text=tomar%20 acertadas%20 decisiones.-,Los%20 registros%20 agr%C3%ADculas%20 son%20%C3%BAtiles%20a%20los%20 productores%20 porque%20 permite,puntos%20d%C3%A9biles%20del%20 negocio%20 agropecuario',
    },
    {
      referencia:
        'Gómez, C. (s.f.). Identificación de Oportunidades de Mejora en Procesos de Neurorrehabilitación. Instituto Universitario de Neurorrehabilitación Guttmann - UAB. España.',
      link: 'https://oa.upm.es/19986/1/INVE_MEM_2012_135123.pdf',
    },
    {
      referencia: 'Instituto Colombiano Agropecuario. (s.f.). Normatividad. ',
      link: 'https://www.ica.gov.co/normatividad/normas-nacionales/leyes',
    },
    {
      referencia: 'ISO 9001, 2015. Sistemas de Gestión de la Calidad',
      link: 'http://www.iso.org/',
    },
    {
      referencia: 'Ministerio de Agricultura. (s.f.). Normatividad.',
      link: 'https://www.minagricultura.gov.co/Normatividad/Paginas/Leyes.aspx',
    },
    {
      referencia:
        'Rosabal, L. (2014). Aspectos fisiológicos, bioquímicos y expresión de genes en condiciones de déficit hídrico. Influencia en el proceso de germinación. Reserva científica del Departamento de Fisiología Bioquímica Vegetal, Instituto Nacional Ciencias Agrícolas (INCA), gaveta postal 1, San José de las Lajas, Mayabeque, Cuba. ',
      link: '',
    },
    {
      referencia:
        'Universidad Austral de Chile. (2015). La Fisiología de Cultivos como una Herramienta para la Aplicación en la Mejora Genética y Agronómica. Diario Chile. Publicado en Revista Agrícola. ',
      link:
        'https://diario.uach.cl/la-fisiologa-de-cultivos-como-una-herramienta-para-la-aplicacin-en-la-mejora-gentica-y-agronmica/',
    },
    {
      referencia:
        'USAID. Manual de Buenas Prácticas Ambientales. Del Pueblo De Los Estados Unidos de América ',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Karly Cediel',
        cargo: 'Experta Temática',
        centro: 'Regional Tolima - Centro Agropecuario La Granja',
      },
      {
        nombre: 'Diego E. Acevedo Guevara',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
