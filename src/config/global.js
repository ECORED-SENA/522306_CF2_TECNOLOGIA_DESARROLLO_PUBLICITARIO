export default {
  global: {
    componenteFormativo: 'Estructura del brief',
    descripcionCurso:
      'El brief es un documento que suministra información de la empresa, el producto o servicio que se va a promocionar o para el que se realizarán estrategias de comunicación. Este documento es de estricto manejo entre la empresa y la agencia o del profesional de la publicidad, y es altamente confidencial entre ambas partes para garantizar un manejo idóneo de los datos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },

      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El brief',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de brief publicitarios',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Segmentación del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de mercado',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Proceso de segmentación',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Bonta, P. y Farber, M. (2002). 199 preguntas sobre Marketing y Publicidad. Grupo Editorial NORMA.',
    },
    {
      referencia: 'Cervera, Á. F. (2015). Comunicación Total. Midac Digital.',
    },
    {
      referencia:
        'DANE. (s. f.). Proyecciones de Población. Consultado el 21 de mayo de 2019.',
      link: 'https://cutt.ly/UyIgKPo',
    },
    {
      referencia:
        'Fernández, R. (2009). Segmentación de Mercados (3.a ed.). Mc Graw Hill.',
    },
    {
      referencia: 'Kotler, P. & Armstrong, G. (2012). Marketing. Pearson.',
    },
    {
      referencia:
        'Merino, M. J. y Pintado, T. (2015). La investigación de mercados, claves para conocer los insights del consumidor. Esic editorial.',
    },
    {
      referencia:
        'Real Academia Española. (2019). Diccionario de la lengua española (edición del tricentenario).',
      link: 'https://cutt.ly/QyIgjkj',
    },
    {
      referencia:
        'Velásquez, L. F. (2020, 28 de enero). 8 tipos de personalidad, Resúmenes de Derecho. Docsity.',
      link: 'https://cutt.ly/WyIhy9m',
    },
    {
      referencia:
        'Vilajoana, A., Jiménez, M., González, Z. y Vila, J. (2014). ¿Cómo diseñar una campaña de publicidad? Editorial UOC.',
    },
  ],
  glosario: [
    {
      termino: 'Brief',
      significado:
        'Documento diagnóstico y estratégico que realizan las empresas, con el fin de llevar a cabo procesos de comunicación y promoción',
    },
    {
      termino: 'Estrategia de mercadeo:',
      significado:
        'Conjunto de tácticas que se estructuran con base en los elementos de la mezcla del mercadeo, con el propósito de desarrollar el programa correspondiente.',
    },
    {
      termino: 'Marketing:',
      significado:
        'Disciplina que estudia las conductas y necesidades de los miembros de un mercado y su entorno, con el fin de generar productos o servicios que los satisfagan y obtener utilidades con su comercialización.',
    },
    {
      termino: 'Mercado:',
      significado:
        'Conjunto de variables y factores que afectan de forma positiva o negativa el proceso de producción, comercialización y promoción de los productos o servicios de las empresas.',
    },
    {
      termino: 'Mercado meta:',
      significado:
        'Conjunto de miembros del mercado que tienen como característica principal el tener necesidades, gustos y conductas aptas para adquirir un producto o servicio.',
    },
    {
      termino: 'Nicho de mercado:',
      significado:
        'Es un grupo reducido de personas, empresas u organizaciones, con necesidades y/o deseos específicos, también puede estar conformado por una pequeña zona geográfica o un grupo de empresas.',
    },
    {
      termino: 'Posicionamiento:',
      significado:
        'Es el lugar que ocupa un producto en la mente de los consumidores. También es la percepción que tienen los consumidores o usuarios de un producto o servicio.',
    },
    {
      termino: 'Segmentación de mercado:',
      significado:
        'División que se hace del mercado, para formar grupos específicos con características demográficas y psicográficas similares.',
    },
  ],
  complementario: [
    {
      texto: 'Arias, M. (2020). Modelo brief de primer contacto.',
      tipo: 'Documento PDF / Brief fundación',
      link: '/downloads/Anexo1.pdf',
    },
    {
      texto: 'Arias, M. (2020). Modelo brief de campaña táctica.',
      tipo: 'Documento PDF / Brief fundación',
      descarga: '/downloads/Anexo2.pdf',
    },
    {
      texto: 'Arias, M. (2020). Modelo brief de primer contacto.',
      tipo: 'Documento Word / Formato',
      link: '/downloads/Anexo3.doc',
    },
    {
      texto: 'Arias, M. (2020). Modelo brief de campaña táctica.',
      tipo: 'Documento Word / Formato',
      descarga: '/downloads/Anexo4.doc',
    },
    {
      texto: 'Fernández, R. (2009). Segmentación de mercados.',
      tipo: 'Libro digital',
      link: 'https://cutt.ly/wyIsCNm',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Durán López',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
