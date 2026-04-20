<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 Criterios de sostenibilidad y calidad en turismo aplicados al servicio de guianza turística

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el ejercicio de la guianza turística, resulta fundamental incorporar criterios de sostenibilidad y calidad, ya que estos orientan la prestación de un servicio responsable, seguro y pertinente; en este sentido, permiten no solo mejorar la experiencia del visitante, sino también proteger el entorno natural y cultural, así como fortalecer el bienestar de las comunidades anfitrionas. Por tanto, el guía de turismo debe integrar estos criterios en la planificación, ejecución y evaluación de sus recorridos, promoviendo prácticas que garanticen el equilibrio entre la actividad turística y la conservación del territorio. #[br] #[br]
        p.mb-0 A continuación, se presenta un cuadro comparativo que sintetiza los principales criterios de sostenibilidad y calidad aplicados al servicio de guianza turística.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-acento-contenido")
          .row(titulo="Sostenibilidad ambiental")
            ul.lista-ul.fa-lista.list-ico
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Promover el respeto por la naturaleza (no dejar residuos, no alterar ecosistemas).
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Fomentar prácticas como el ahorro de agua y energía durante las actividades.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Educar a los turistas sobre la biodiversidad local y su conservación.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Evitar el deterioro de áreas protegidas o sensibles.
          .row(titulo="Sostenibilidad sociocultural")
            ul.lista-ul.fa-lista.list-ico
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Respetar las tradiciones, costumbres y patrimonio de las comunidades locales.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Evitar la apropiación cultural indebida o la descontextualización de prácticas culturales.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Promover el turismo responsable y consciente.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Facilitar interacciones respetuosas entre turistas y población local.
          .row(titulo="Sostenibilidad económica")
            ul.lista-ul.fa-lista.list-ico
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Favorecer el consumo de productos y servicios locales.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Apoyar emprendimientos comunitarios.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Generar beneficios económicos equitativos para la comunidad.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Evitar prácticas de explotación o turismo masivo no controlado.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/2.png', alt='')      
      .col-lg-4.mb-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-acento-contenido")
          .row(titulo="Competencia profesional del guía")
            ul.lista-ul.fa-lista.list-ico.mb-0
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Conocimiento profundo del destino (historia, cultura, geografía).
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Capacitación constante y certificaciones.
              li.mb-0
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Manejo de idiomas cuando sea necesario.
          .row(titulo="Comunicación efectiva")
            ul.lista-ul.fa-lista.list-ico.mb-0
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Claridad, empatía y capacidad de adaptación al grupo.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Uso de lenguaje adecuado según el público.
              li.mb-0
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Habilidad para interpretar y transmitir información de forma interesante.
          .row(titulo="Seguridad del turista")
            ul.lista-ul.fa-lista.list-ico.mb-0
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Identificación y prevención de riesgos.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Conocimiento de primeros auxilios.
              li.mb-0
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Cumplimiento de normas y protocolos de seguridad.
          .row(titulo="Organización y puntualidad")
            ul.lista-ul.fa-lista.list-ico.mb-0
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Cumplimiento de itinerarios.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Buena gestión del tiempo.
              li.mb-0
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Coordinación eficiente con otros servicios turísticos.
          .row(titulo="Atención al cliente")
            ul.lista-ul.fa-lista.list-ico.mb-0
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Trato respetuoso y cordial.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Resolución de problemas.
              li.mb-0
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Personalización de la experiencia según intereses del grupo.
      .col-12
        figcaption Fuente: adaptado de la Organización Mundial del Turismo (2018).       

    p En el servicio de guianza turística resulta esencial aplicar criterios de sostenibilidad y calidad, ya que estos garantizan experiencias responsables, seguras y significativas tanto para los turistas como para las comunidades anfitrionas; en este marco, la sostenibilidad integra dimensiones ambientales, socioculturales y económicas, promoviendo el cuidado del entorno, el respeto por la identidad cultural y la distribución equitativa de los beneficios.
    p Por su parte, la calidad en la guianza se manifiesta en la competencia profesional del guía, la comunicación efectiva, la gestión de la seguridad, la adecuada organización de las actividades y la atención al usuario; de este modo, se configura un servicio integral que no solo fortalece la experiencia turística, sino que también contribuye al desarrollo sostenible del destino.


    Separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.1	Criterios de sostenibilidad económica y empresarial

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/3.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.col-md-3.col-4.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t2/4.svg', alt='')
          .col-lg-10.col-md-9
            p.mb-0 En el turismo sostenible en Colombia, la dimensión económica se reconoce como un componente esencial, ya que permite asegurar la viabilidad a largo plazo de las actividades turísticas y su contribución al desarrollo del territorio. Esta dimensión se relaciona directamente con la capacidad del turismo para generar valor, fortalecer la economía local y beneficiar a los diferentes actores que participan en la cadena de valor. 
        p Asimismo, contempla la importancia de una distribución equitativa de los beneficios socioeconómicos derivados del turismo, promoviendo la generación de empleo digno, el acceso a ingresos estables y el mejoramiento de las condiciones de vida de las comunidades anfitrionas; por ello, la sostenibilidad económica no solo se enfoca en la rentabilidad, sino también en la equidad y el bienestar social.

    p De igual manera, este enfoque impulsa el fortalecimiento del entorno empresarial, fomentando la formalización de los prestadores de servicios turísticos, el desarrollo de productos con altos estándares de calidad y la consolidación de una cadena de valor articulada, competitiva y responsable, que contribuya al crecimiento sostenible del sector turístico.

    .bgi-1.p-4.pt-lg-5.mb-5(data-aos="fade")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-11.col-11
            .subt.mb-4
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
              h3.mb-0.pe-3 Planificación y comercialización del servicio de guianza
          .col-lg-5.col-11
            p En Colombia, la planificación del servicio de guianza turística está regulada por la Norma Técnica Colombiana NTC 6507:2021. En su numeral 5 se establecen los requisitos que deben cumplirse para garantizar una adecuada prestación del servicio, entre los cuales se destacan:
            ul.lista-ul.fa-lista.list-ico
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Conocer los planes de acción y contingencia, en coherencia con los objetivos del programa turístico. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Elaborar una lista de verificación acorde con las necesidades, expectativas y requisitos del usuario o de la organización. 
          .col-lg-5.col-11
            ul.lista-ul.fa-lista.list-ico
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Diseñar el guion del recorrido conforme al programa turístico, a los lineamientos de los atractivos y a los criterios establecidos en la norma. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Disponer de la documentación requerida para la prestación del servicio. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Preparar la indumentaria y los equipos necesarios. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Liderar o coordinar el equipo de trabajo. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Articular acciones con otros prestadores de servicios involucrados en el plan de acción. 
        .row.justify-content-center
          .col-lg-11.col-11
            .subt.mb-4
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
              h3.mb-0.pe-3 Estructura del guion de guianza turística
          .col-lg-5.col-11
            p Al momento de elaborar el guion del recorrido, se deben considerar los siguientes elementos mínimos:
            ul.lista-ul.fa-lista.list-ico
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Objetivos del recorrido. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Recomendaciones generales previas al inicio. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Protocolo de bienvenida. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Enfoque del recorrido (histórico, natural, cultural, entre otros). 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Descripción del recorrido acorde con los objetivos definidos. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Elementos de interpretación.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Técnicas de comunicación.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Equipos requeridos para la prestación del servicio. 
          .col-lg-5.col-11
            p Diseñar el guion del recorrido conforme al programa turístico, a los lineamientos de los atractivos y a los criterios establecidos en la norma. 
            img(src='@/assets/curso/temas/t2/slider1-1.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-5.col-11
            .subt.mb-4
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
              h3.mb-0.pe-3 Enfoque histórico
            ul.lista-ul.fa-lista.list-ico.ps-lg-5
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Historia política, social y económica. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Arqueología. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Historia del arte.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Arquitectura. 
          .col-lg-5.col-10 
            img(src='@/assets/curso/temas/t2/slider1-2.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-5.col-11
            .subt.mb-4
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
              h3.mb-0.pe-3 Enfoque de medio natural
            ul.lista-ul.fa-lista.list-ico.ps-lg-5
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Geografía y geología. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Patrimonio natural. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Flora y fauna. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Ecología. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Impactos ambientales de actividades productivas. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Meteorología y clima. 
          .col-lg-5.col-10
            img(src='@/assets/curso/temas/t2/slider1-3.png', alt='')  
        .row.justify-content-center.align-items-center
          .col-lg-5.col-11
            .subt.mb-4
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
              h3.mb-0.pe-3 Enfoque cultural
            ul.lista-ul.fa-lista.list-ico.ps-lg-5
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Artes escénicas y visuales. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Costumbres, tradiciones, folclore y mitología. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Personajes históricos. 
          .col-lg-5.col-10 
            img(src='@/assets/curso/temas/t2/slider1-4.png', alt='')   
        .row.justify-content-center.align-items-center
          .col-lg-5.col-11
            .subt.mb-4
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
              h3.mb-0.pe-3 Enfoque gastronómico
            ul.lista-ul.fa-lista.list-ico.ps-lg-5
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Producción agrícola. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Servicios asociados a la gastronomía.
          .col-lg-5.col-10
            img(src='@/assets/curso/temas/t2/slider1-5.png', alt='')          

    .row.justify-content-center.mb-4
      .col-lg-7(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-2.col-md-3.col-4.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t2/5.svg', alt='')
          .col-lg-10.col-md-9
            p.mb-0 Al aplicar los lineamientos de planificación establecidos en la Norma Técnica Colombiana NTC 6507:2021, el guía de turismo puede estructurar un servicio organizado, seguro y orientado a la calidad, en coherencia con los objetivos del programa turístico y las necesidades del usuario. 
        p La preparación de planes de acción y contingencia, junto con la elaboración de listas de verificación y la adecuada organización de recursos, documentación, indumentaria y equipos, permite anticipar riesgos, optimizar la experiencia del visitante y asegurar el cumplimiento de estándares técnicos. 
        .tarjeta.bg2.p-4
          p.mb-0 De igual manera, el diseño del guion del recorrido, que integra objetivos claros, protocolo de bienvenida, enfoque temático e interpretación del patrimonio (ya sea histórico, natural, cultural o gastronómico), fortalece las competencias comunicativas, el liderazgo y la capacidad de articulación con otros prestadores de servicios. Esto se traduce en experiencias turísticas más significativas, educativas y sostenibles.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/6.png', alt='')

    p Por tanto, la planificación no solo orienta la correcta ejecución del servicio de guianza, sino que se consolida como una herramienta estratégica para elevar la calidad del servicio y aportar al desarrollo responsable del turismo en Colombia (Instituto Colombiano de Normas Técnicas y Certificación, 2021).


    Separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.2. Leyes y regulaciones asociadas a la oferta, comercialización y venta del servicio de guianza

    p La actividad de guianza turística en Colombia está regulada por un conjunto de normas que buscan garantizar un servicio seguro, formal y de calidad, así como la protección de los derechos del turista. Estas regulaciones orientan el ejercicio profesional del guía y establecen los requisitos necesarios para la oferta, comercialización y prestación del servicio.

    SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos="fade")
      .tarjeta.bg-color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/t2/tarj1-1.svg' alt='')
        h4 A.	Protección al consumidor
        ul.lista-ul.fa-lista.l-circle
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Ley 1480 de 2011.
          li
            i.fas.fa-circle
            span.mb-0 Decreto 254 de 2022.
        h5 Garantiza:
        ul.lista-ul.fa-lista.l-circle.mb-0
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Información clara y veraz. 
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Seguridad del turista.  
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Trato justo. 
      .tarjeta.bg-color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/t2/tarj1-2.svg' alt='')
        h4 B. El guía como prestador de servicios 
        ul.lista-ul.fa-lista.l-circle
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Ley 300 de 1996.
          li
            i.fas.fa-circle
            span.mb-0 Ley 2068 de 2020. 
        h5 El guía:
        ul.lista-ul.fa-lista.l-circle.mb-0
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Ofrece y vende servicios turísticos.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Debe ejercer de forma legal.
      .tarjeta.bg-color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/t2/tarj1-3.svg' alt='')
        h4 C.	Registro Nacional de Turismo (RNT)
        h5 Obligatorio para:
        ul.lista-ul.fa-lista.l-circle.mb-0
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Operar legalmente. 
          li
            i.fas.fa-circle
            span.mb-0 Formalizar la actividad. 
      .tarjeta.bg-color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/t2/tarj1-4.svg' alt='')
        h4 D.	Derechos del turista
        h5  El guía debe garantizar
        ul.lista-ul.fa-lista.l-circle.mb-0
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Seguridad y prevención de riesgos.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Información transparente.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Protección a poblaciones vulnerables.
      .tarjeta.bg-color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/t2/tarj1-5.svg' alt='')
        h4 E.	Según el tipo de turismo
        h5 Debe cumplir normas específicas en: 
        ul.lista-ul.fa-lista.l-circle.mb-0
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Turismo cultural.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Turismo de naturaleza.
          li.mb-0
            i.fas.fa-circle
            span.mb-0 Turismo de aventura.

    .mb-4
      img(src='@/assets/curso/temas/t2/7.png', alt='')

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-acento-contenido")
          .row(titulo="Legislación laboral y garantías sociales")
            .col-11
              p En Colombia, los guías de turismo, en su calidad de trabajadores, se rigen por el marco establecido en el Código Sustantivo del Trabajo, el cual tiene como finalidad garantizar condiciones laborales justas, equitativas y sostenibles. Este marco normativo promueve el equilibrio entre los derechos y deberes de empleadores y trabajadores, fomentando el diálogo social, la igualdad de género, la responsabilidad empresarial y la eliminación de cualquier forma de discriminación o violencia en el entorno laboral. Estos principios son aplicables a todos los trabajadores del país, en concordancia con la Constitución Política de Colombia.
              p Asimismo, los guías de turismo deben estar amparados por el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), establecido en el Decreto 1072 de 2015, el cual integra disposiciones previas en materia de riesgos laborales. Este sistema tiene como propósito mejorar las condiciones de trabajo, fortalecer el ambiente laboral y promover el bienestar físico, mental y social de los trabajadores, garantizando entornos seguros en el desarrollo de sus actividades.
          .row(titulo="Higiene, seguridad y salud ocupacional")
            .col-11
              p En el ejercicio de la guianza turística, es fundamental cumplir con los lineamientos de higiene, seguridad y salud ocupacional establecidos en la normativa vigente, con el fin de proteger tanto al guía como a los turistas. El Decreto 1072 de 2015 exige la implementación del SG-SST, el cual implica la identificación, evaluación y control de los riesgos asociados a la actividad, tales como desplazamientos, condiciones climáticas, manejo de grupos y características de los entornos naturales o urbanos.
              p De igual manera, este sistema promueve la adopción de medidas preventivas, el uso adecuado de elementos de protección personal, la capacitación en primeros auxilios y la generación de ambientes de trabajo seguros y saludables. El cumplimiento de estas disposiciones permite al guía de turismo desempeñar su labor de manera responsable, segura y conforme a los estándares legales, contribuyendo a la calidad del servicio y a la prevención de accidentes y enfermedades laborales.
          .row(titulo="Normativa para protección del patrimonio (natural y cultural)")
            .col-11
              p En Colombia, la protección del patrimonio natural y cultural está sustentada en un marco normativo integral que inicia con la Constitución Política de 1991, la cual establece el deber de proteger las riquezas culturales y naturales de la Nación. Este principio se desarrolla mediante la Ley 397 de 1997 y su modificación, la Ley 1185 de 2008, que regulan la conservación, protección y uso sostenible del patrimonio cultural. Asimismo, la Ley 163 de 1959 protege el patrimonio histórico y arqueológico, mientras que la Ley 45 de 1983 incorpora lineamientos internacionales para su conservación. En cuanto al patrimonio natural, la Ley 99 de 1993 crea el Sistema Nacional Ambiental (SINA) y establece principios para la protección del medio ambiente y el uso sostenible de los recursos naturales; de igual forma, la política pública como la Política de Turismo Sostenible orienta el desarrollo del turismo bajo criterios de sostenibilidad ambiental, sociocultural y económica. Este conjunto normativo es fundamental para el ejercicio de la guianza turística, ya que permite al guía actuar como un agente responsable en la conservación, interpretación y promoción del patrimonio, fomentando prácticas sostenibles y el respeto por la identidad cultural y la biodiversidad del país.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/8.png', alt='')

    .row.justify-content-center(data-aos="fade")
      .col-lg-11
        figure
          img(src='@/assets/curso/temas/t2/infog.svg', alt='')

  
    Separador
    #t_2_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.3. Criterios de sostenibilidad sociocultural (responsabilidad social) 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.b-redo(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El turismo sostenible ha adquirido una creciente relevancia a nivel mundial debido a la necesidad de desarrollar prácticas responsables que beneficien tanto a los turistas como a las comunidades anfitrionas. En este contexto, los criterios de sostenibilidad sociocultural se orientan a garantizar el respeto por las tradiciones, costumbres y patrimonio cultural, así como a promover el bienestar social y la participación activa de las comunidades en la actividad turística. #[br] #[br]
        p.mb-0 Estos criterios también buscan generar beneficios equitativos, fortalecer la identidad cultural y evitar impactos negativos como la pérdida de tradiciones o la apropiación cultural indebida. Para los guías de turismo, su aplicación es fundamental, ya que les permite orientar experiencias responsables, fomentar el respeto intercultural y contribuir al desarrollo sostenible de los destinos.

    .mb-5
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 6.
        span Criterios de sostenibilidad sociocultural en la guianza turística
      .tabla-a.color-primario.table1
        table
          thead
            tr
              th Criterio
              th Descripción
              th Aplicación en la guianza turística
          tbody
            tr
              td Respeto por la cultura local
              td Protección de tradiciones, costumbres y valores de la comunidad.
              td Promover comportamientos respetuosos en los turistas.
            tr
              td Protección del patrimonio cultural
              td Conservación de bienes materiales e inmateriales.
              td Interpretar adecuadamente el patrimonio sin alterarlo.
            tr
              td Interacción responsable
              td Relación respetuosa entre turistas y comunidad.
              td Facilitar encuentros culturales sin afectar dinámicas locales.
            tr
              td Beneficio a la comunidad
              td Generación de oportunidades sociales y económicas.
              td Incluir servicios y productos locales en la experiencia.
            tr
              td Evitar la apropiación cultural
              td Uso adecuado de expresiones culturales.
              td Explicar el contexto cultural sin distorsionar su significado.
            tr
              td Participación comunitaria
              td Inclusión de la comunidad en el turismo.
              td Apoyar iniciativas locales y emprendimientos.
            tr
              td Educación del turista
              td Sensibilización sobre cultura y respeto.
              td Orientar sobre normas y comportamientos adecuados.

    .row.justify-content-center
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/10.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block
            img.pe-lg-2(src='@/assets/curso/temas/t2/11.svg', alt='')
          .col-lg-10
            p.mb-0 En los territorios, los criterios de sostenibilidad sociocultural (asociados a la responsabilidad social) se implementan mediante el respeto por la identidad cultural, las tradiciones y las dinámicas propias de las comunidades locales. Este enfoque promueve su participación activa en la actividad turística y busca garantizar una distribución equitativa de los beneficios generados. Asimismo, implica prevenir prácticas que puedan ocasionar impactos negativos, como la pérdida de autenticidad cultural o la explotación indebida de las costumbres.
        p El guía de turismo cumple un papel fundamental como mediador entre el visitante y la comunidad anfitriona, su labor consiste en fomentar el respeto, la valoración del patrimonio cultural y el comportamiento responsable de los turistas; de igual manera, debe orientar a los visitantes sobre las normas culturales del territorio, incentivar el consumo de productos y servicios locales y contribuir al fortalecimiento del tejido social. De esta forma, su ejercicio profesional se alinea con los principios del turismo sostenible y con los lineamientos internacionales en la materia.
        

    Separador
    #t_2_4.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.4. Sostenibilidad sociocultural y ambiental en el turismo: desarrollo local, protección del patrimonio y conservación del entorno

    .bg-color-secundario.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/12.png', alt='')
        .col-lg-7
          .p-4
            img.mb-3.w-90x(src='@/assets/curso/temas/t2/13.svg', alt='')
            p En Colombia, la política de turismo sostenible constituye una base fundamental para el desarrollo turístico en los territorios, integrando de manera articulada las dimensiones sociocultural y ambiental como ejes esenciales para garantizar un crecimiento responsable del sector.
            p Desde la dimensión sociocultural, se promueve el respeto por la identidad de las comunidades anfitrionas, reconociendo sus valores, tradiciones y expresiones culturales. Asimismo, se impulsa la protección y conservación del patrimonio cultural, tanto material como inmaterial, incluyendo bienes arquitectónicos, arqueológicos y las prácticas ancestrales de los grupos étnicos; este enfoque también destaca la importancia de la inclusión social, la accesibilidad a los destinos turísticos y la participación activa de las comunidades locales en la toma de decisiones, favoreciendo su involucramiento en el desarrollo del turismo y asegurando beneficios equitativos; de esta manera, el turismo se convierte en una herramienta para fortalecer el tejido social y contribuir al desarrollo local.

    .mb-5
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 7.
        span Dimensión ambiental en el turismo sostenible
      .tabla-a.color-primario.table1
        table
          thead
            tr
              th Componente
              th Descripción
              th Aplicación en el turismo
          tbody
            tr
              td Gestión de recursos naturales
              td Uso adecuado y responsable de los recursos naturales.
              td Uso eficiente del agua y la energía durante las actividades turísticas.
            tr
              td Conservación de ecosistemas
              td Protección de los entornos naturales y la biodiversidad.
              td Cuidado de la flora y fauna, respeto por áreas protegidas.
            tr
              td Manejo de residuos
              td Gestión responsable de los desechos generados.
              td Aplicación de las 5R: rechazar, reducir, reutilizar, reparar y reciclar.
            tr
              td Educación ambiental
              td Sensibilización sobre el cuidado del entorno.
              td Formación de turistas y prestadores en prácticas sostenibles.
            tr
              td Prevención de impactos
              td Reducción de efectos negativos del turismo en el ambiente.
              td Implementación de metodologías para minimizar impactos ambientales.

    .mb-4
      img(src='@/assets/curso/temas/t2/14.png', alt='')

    p A nivel nacional, esta dimensión se encuentra respaldada por el Ley 99 de 1993, que establece los principios para la protección del medio ambiente, el Decreto 1076 de 2015, que regula la gestión ambiental en el país, y la Ley 1333 de 2009, que define las sanciones por infracciones ambientales. Estas disposiciones son especialmente relevantes en destinos de naturaleza como parques nacionales, zonas costeras, bosques y páramos, donde los ecosistemas son altamente vulnerables.

    p En este contexto, los actores del sector turístico, incluidos los guías de turismo, desempeñan un papel fundamental al adoptar prácticas responsables que contribuyan tanto a la conservación ambiental como al respeto por las comunidades locales, asegurando así un desarrollo turístico sostenible y equilibrado en los territorios.


    Separador
    #t_2_5.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.5. Sello Ambiental Colombiano (SAC)

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8(data-aos="fade-right")
        p El Sello Ambiental es una certificación voluntaria creada por el Ministerio de Ambiente y Desarrollo Sostenible mediante la Resolución 1555 de 2005, que reconoce a los productos y servicios que cumplen altos estándares de desempeño ambiental. Este sello es otorgado por organismos certificadores acreditados y autorizados por la Autoridad Nacional de Licencias Ambientales (ANLA), y permite diferenciar en el mercado aquellos servicios que contribuyen a la protección del medio ambiente y al uso eficiente de los recursos naturales.
        p En el sector turístico, el SAC se articula con las Normas Técnicas Sectoriales de Turismo Sostenible (NTS-TS), lo que permite a hoteles, agencias de viajes y otros prestadores demostrar su compromiso con la sostenibilidad ambiental, social y económica. 
        .bg3.compl.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-4.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t2/15.svg', alt='')
            .col-lg-8.col-md-8
              h5 El Sello Ambiental Colombiano (SAC)
              p.mb-0 Es una etiqueta de tipo I que certifica el cumplimiento de criterios ambientales en productos y servicios. Tomado de Sello Ambiental Colombiano, por la Autoridad Nacional de Licencias Ambientales, 2020.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/16.png', alt='')

    .subt2.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t2/subt2.svg', alt='')
      h3.mb-2.pe-3.pe-lg-5 ¿Cómo aplican las empresas de turismo en Colombia?

    .tarjeta.bg1.mb-4(data-aos="fade")
      .row.justify-content-center.mb-5
        .col-lg-4.d-none.d-lg-block.z-3
          img.z-3(src='@/assets/curso/temas/t2/17.svg', alt='')
        .col-lg-8
          .bg4.compl.n-mob.br-right.ps-lg-1.p-4.mb-4
            p.mb-0 Las empresas turísticas pueden acceder al Sello Ambiental Colombiano mediante un proceso que incluye:
          .p-4.p-lg-1
            ul.lista-ul.fa-lista.list-ico
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Verificar que su servicio esté dentro de una Norma Técnica Colombiana (NTC) aplicable.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Implementar prácticas ambientales como:
                  ul.lista-ul.fa-lista.l-circle
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Uso eficiente del agua y la energía.
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Manejo adecuado de residuos.
                    li.mb-0
                      i.fas.fa-circle
                      span.mb-0 Reducción de impactos ambientales.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Solicitar la certificación ante un organismo acreditado.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Cumplir con auditorías y evaluaciones periódicas.
            p Este proceso permite mejorar la calidad del servicio, fortalecer la imagen empresarial y atraer turistas responsables, además de contribuir a la sostenibilidad del destino.

    p Por su parte, la gestión ambiental en el turismo es un compromiso fundamental para garantizar el uso responsable de los recursos naturales y la conservación de los ecosistemas. En este sentido, el Sello Ambiental Colombiano (SAC) se convierte en una herramienta clave que orienta a las organizaciones hacia la implementación de buenas prácticas sostenibles. A continuación, se presenta una infografía que resume sus principales componentes y beneficios, destacando su importancia para fortalecer la competitividad, mejorar la imagen empresarial y promover un turismo responsable.

    .row.justify-content-center(data-aos="fade")
      .col-lg-11
        figure
          img(src='@/assets/curso/temas/t2/infog2.svg', alt='')


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
