export default {
  global: {
    Name: 'Sostenibilidad y calidad en guianza turística',
    Description:
      'El componente formativo “Sostenibilidad y calidad en guianza turística” orienta el desarrollo de prácticas responsables que aseguren la calidad del servicio turístico, mediante la integración de criterios ambientales, socioculturales y económicos en el ejercicio profesional del guía de turismo. A través de este proceso, el aprendiz fortalece su capacidad para aplicar estándares técnicos de calidad y sostenibilidad, así como para identificar y describir buenas prácticas conforme a la normatividad vigente, contribuyendo a la estandarización de los servicios turísticos y al fortalecimiento de una oferta responsable, sostenible y competitiva.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos básicos de turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Tipologías de turismo y sus especificidades con la guianza turística',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Impactos del turismo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Desarrollo y turismo sostenible',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Normatividad turística colombiana aplicada a la profesión del guía de turismo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Normatividad ambiental colombiana aplicada a la profesión del guía de turismo',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Criterios de sostenibilidad y calidad en turismo aplicados al servicio de guianza turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Criterios de sostenibilidad económica y empresarial',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Leyes y regulaciones asociadas a la oferta, comercialización y venta del servicio de guianza',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Criterios de sostenibilidad sociocultural (responsabilidad social)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Sostenibilidad sociocultural y ambiental en el turismo: desarrollo local, protección del patrimonio y conservación del entorno',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Sello Ambiental Colombiano (SAC)',
            hash: 't_2_5',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Turismo',
      significado:
        'Conjunto de actividades realizadas por personas durante viajes fuera de su entorno habitual.',
    },
    {
      termino: 'Turista',
      significado:
        'Persona que viaja y pernocta fuera de su lugar de residencia por menos de un año.',
    },
    {
      termino: 'Destino turístico',
      significado:
        'Lugar donde se desarrollan actividades turísticas y se consumen servicios.',
    },
    {
      termino: 'Producto turístico',
      significado:
        'Conjunto de bienes, servicios y experiencias que satisfacen al visitante.',
    },
    {
      termino: 'Sistema turístico',
      significado:
        'Conjunto de elementos interrelacionados que permiten el desarrollo del turismo.',
    },
    {
      termino: 'Guía de turismo',
      significado: 'Profesional que orienta, acompaña e instruye al turista.',
    },
    {
      termino: 'Sostenibilidad',
      significado: 'Uso responsable de recursos sin comprometer el futuro.',
    },
    {
      termino: 'Turismo sostenible',
      significado: 'Turismo que equilibra lo económico, social y ambiental.',
    },
    {
      termino: 'Impactos del turismo',
      significado:
        'Efectos positivos o negativos generados por la actividad turística.',
    },
    {
      termino: 'Turismo cultural',
      significado:
        'Actividad centrada en el conocimiento y disfrute de la cultura.',
    },
    {
      termino: 'Turismo de naturaleza',
      significado:
        'Actividad basada en la observación y disfrute del entorno natural.',
    },
    {
      termino: 'Servicios turísticos',
      significado:
        'Actividades y productos ofrecidos a las personas visitantes, como alojamiento, alimentación, guianza y experiencias culturales o naturales.',
    },
    {
      termino: 'Turismo de aventura',
      significado:
        'Actividades recreativas con riesgo controlado en la naturaleza.',
    },
    {
      termino: 'Normatividad turística',
      significado: 'Conjunto de leyes que regulan la actividad turística.',
    },
    {
      termino: 'Patrimonio',
      significado: 'Bienes culturales y naturales que deben ser protegidos.',
    },
    {
      termino: 'Biodiversidad',
      significado: 'Variedad de especies vivas en un ecosistema.',
    },
    {
      termino: 'Sello Ambiental Colombiano',
      significado: 'Certificación que reconoce buenas prácticas ambientales.',
    },
    {
      termino: 'Calidad turística',
      significado:
        'Nivel de excelencia en la prestación del servicio turístico.',
    },
    {
      termino: 'Responsabilidad social',
      significado: 'Compromiso con el bienestar de la comunidad.',
    },
    {
      termino: '5R',
      significado:
        'Estrategia ambiental: reducir, reutilizar, reciclar, rechazar y reparar.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asamblea Nacional Constituyente. (1991). Constitucion Politica de Colombia. Gaceta Constitucional No. 116.',
      link:
        'http://www.secretariasenado.gov.co/index.php/constitucion-politica',
    },
    {
      referencia:
        'Autoridad Nacional de Licencias Ambientales (ANLA). (2020). Sello Ambiental Colombiano: La autorizacion que otorga la ANLA a los diferentes organos certificadores para el uso del SAC en productos y/o servicios.',
      link:
        'https://www.anla.gov.co/noticias-anla/sello-ambiental-colombiano-la-autorizacion-que-otorga-la-anla-a-los-diferentes-organos-certificadores-para-el-uso-del-sac-en-productos-y-o-servicios',
    },
    {
      referencia:
        'Decreto 1293 de 2014. Por el cual se modifica el Decreto 503 de 1997 y se dictan otras disposiciones. 10 de julio de 2014. D.O. No. 49208.',
    },
    {
      referencia:
        'Decreto 1074 de 2015. Por medio del cual se expide el Decreto unico Reglamentario del Sector Comercio, Industria y Turismo. 26 de mayo de 2015. D.O. No. 49523.',
    },
    {
      referencia:
        'Decreto 1076 de 2015. Por medio del cual se expide el Decreto unico Reglamentario del Sector Comercio, Industria y Turismo. 26 de mayo de 2015. D.O. No. 49523.',
    },
    {
      referencia:
        'Decreto 254 de 2022. Por el cual se reglamenta el Articulo 24 de la Ley 2068 de 2020, se sustituye la Seccion 9 del Capitulo 4 y se adiciona el Capitulo 13 al Titulo 4 de la Parte 2 del Libro 2 del Decreto Unico Reglamentario del Sector Comercio, Industria y Turismo. 23 de febrero de 2022.',
    },
    {
      referencia:
        'Epler Wood, M., Milstein, M., & Ahamed-Broadhurst, K. (2019). Destinations at risk: The invisible burden of tourism. Travel Foundation.',
    },
    {
      referencia:
        'Federacion Colombiana de Eco-parques, Ecoturismo y Turismo de Aventura (FEDEC). (2026). Turismo de aventura: Actividades en aire, tierra y agua. Napkin.ai.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Tecnicas y Certificacion (ICONTEC). (2021). Requisitos para la prestacion del servicio de guionaje (guianza) turistico (NTC 6507).',
    },
    {
      referencia:
        'Ley 163 de 1959. Por la cual se dictan disposiciones sobre la defensa y conservacion del patrimonio historico, artistico y monumentos publicos de la Nacion. 30 de diciembre de 1959. D.O. No. 30139.',
    },
    {
      referencia:
        'Ley 45 de 1983. Por medio de la cual se aprueba la "Convencion para la Proteccion del Patrimonio Mundial Cultural y Natural", hecha en Paris el 23 de noviembre de 1972 y se autoriza al Gobierno Nacional para adherir al mismo. 15 de diciembre de 1983. D.O. No. 36415.',
    },
    {
      referencia:
        'Ley 99 de 1993. Por la cual se crea el Ministerio del Medio Ambiente, se reordena el sector publico encargado de la gestion y conservacion del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental, SINA, y se dictan otras disposiciones. 22 de diciembre de 1993. D.O. No. 41146.',
    },
    {
      referencia:
        'Ley 300 de 1996. Por la cual se expide la Ley General de Turismo y se dictan otras disposiciones. 26 de julio de 1996. D.O. No. 42.845.',
    },
    {
      referencia:
        'Ley 397 de 1997. Por la cual se desarrollan los Articulos 70, 71 y 72 y demas Articulos concordantes de la Constitucion Politica y se dictan normas sobre patrimonio cultural, fomentos y estimulos a la cultura, se crea el Ministerio de la Cultura y se trasladan algunas dependencias. 7 de agosto de 1997. D.O. No. 43102.',
    },
    {
      referencia:
        'Ley 1101 de 2006. Por la cual se modifica la Ley 300 de 1996 - Ley General de Turismo y se dictan otras disposiciones. 22 de noviembre de 2006. D.O. No. 46461.',
    },
    {
      referencia:
        'Ley 1185 de 2008. Por la cual se modifica y adiciona la Ley 397 de 1997 - Ley General de Cultura, y se dictan otras disposiciones. 12 de marzo de 2008. D. O. No. 46929.',
    },
    {
      referencia:
        'Ley 1333 de 2009. Por la cual se establece el procedimiento sancionatorio ambiental y se dictan otras disposiciones. 21 de julio de 2009. D.O. No. 47.417.',
    },
    {
      referencia:
        'Ley 1480 de 2011. Por medio de la cual se expide el Estatuto del Consumidor y se dictan otras disposiciones.12 de octubre de 2011. D.O. No. 48220.',
    },
    {
      referencia:
        'Ley 1558 de 2012. Por la cual se modifica la Ley 300 de 1996 -- Ley General de Turismo, la Ley 1101 de 2006 y se dictan otras disposiciones. 10 de julio de 2012. D.O. No. 48487.',
    },
    {
      referencia:
        'Ley 2068 de 2020. Por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones. 31 de diciembre de 2020. D.O. No. 51.544.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2012). Politica de turismo sostenible en Colombia.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2022). Normas Tecnicas Sectoriales de Turismo (NTS).',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Medio Ambiente (PNUMA) & Organizacion Mundial del Turismo (OMT). (2007). Making tourism more sustainable: A guide for policy makers.',
    },
    {
      referencia:
        'Sistema Turistico. (s.f.). El sistema turistico segun Roberto Boullon.',
    },
    {
      referencia:
        'United Nations Environment Programme (UNEP) & World Tourism Organization (UNWTO). (2012). Tourism in the green economy.',
    },
    {
      referencia:
        'Universitat Oberta de Catalunya (UOC). (s. f.). Planificacion de la gestion de los riesgos.',
    },
    {
      referencia:
        'World Tourism Organization (UNWTO), International Trade Centre (ITC) & Enhanced Integrated Framework (EIF). (2017). Tourism for sustainable development.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Celmira Pereira Franco',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
