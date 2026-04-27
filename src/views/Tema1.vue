<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos de turismo
        
    .bloque-texto-g.bloque-texto-g--inverso.bg5.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 En los procesos de formación del guía de turismo en Colombia, resulta fundamental comprender los conceptos básicos del turismo, ya que constituyen la base para el desarrollo adecuado de la actividad y el ejercicio profesional; por tal razón, la normativa colombiana define el turismo como:

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .tarjeta.bg6
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-5.tarjeta.bg3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/3.png', alt='')
            .col-lg-7
              .p-4
                p.mb-0 Conjunto de actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual, por un período inferior a un año, con fines como el descanso, la cultura, la salud, los eventos o los negocios.
        p De igual manera, esta normativa establece otros conceptos esenciales que deben ser apropiados por los aprendices, dado que permiten comprender la estructura del sistema turístico y facilitan el desempeño del guía en el territorio.

    p.mb-4 La comprensión y apropiación de estos conceptos favorecen una planificación turística organizada y coherente con las dinámicas territoriales, al tiempo que fortalecen el desempeño del guía en procesos de interpretación, orientación y acompañamiento de los visitantes. En este sentido, a continuación, se presentan las definiciones de estos términos, con el propósito de facilitar su comprensión y aplicación en el contexto formativo.

    .row.bgcolor-1.align-items-center.p-2.p-md-4.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12
              .tarjeta.bg2.p-4
                PasosB.color-acento-botones
                  .row.justify-content-center(titulo="Turista")                    
                    .col-lg-5.col-10
                      h4 Turista
                      p Persona que se desplaza a un destino diferente a su entorno habitual, permanece al menos una noche y por un período inferior a un año, con fines como ocio, negocios u otros motivos personales, sin ejercer actividades remuneradas en el lugar visitado. Este concepto es clave para la medición y planificación del sector turístico. 
                    .col-lg-5.col-11.col-md-8
                      img(src='@/assets/curso/temas/t1/slider1-2.png', alt='')
                  .row.justify-content-center(titulo="Destino turístico")                    
                    .col-lg-5.col-10
                      h4 Destino turístico
                      p Espacio geográfico donde el visitante realiza su estancia, el cual integra atractivos, recursos, servicios y actividades. Según la Organización Mundial del Turismo, su gestión se articula a partir de límites administrativos y su competitividad depende de la imagen y percepción que proyecta. 
                    .col-lg-5.col-11.col-md-8
                      img(src='@/assets/curso/temas/t1/slider1-1.png', alt='')
                  .row.justify-content-center(titulo="Producto turístico")                    
                    .col-lg-5.col-10
                      h4 Producto turístico
                      p Combinación organizada de elementos tangibles e intangibles (como servicios, recursos, actividades y experiencias), que se estructuran para satisfacer las necesidades del turista. No se limita a un servicio específico, sino que integra toda la experiencia del viaje, desde el transporte hasta la interacción cultural y social. 
                    .col-lg-5.col-11.col-md-8
                      img(src='@/assets/curso/temas/t1/slider1-3.png', alt='')
                  .row.justify-content-center(titulo="Elementos del turismo")                    
                    .col-lg-5.col-10
                      h4 Elementos del turismo
                      p Conjunto de componentes que interactúan para el funcionamiento del sistema turístico, entre ellos la demanda (turistas), la oferta (bienes y servicios), el destino, los atractivos, la infraestructura, la superestructura (normatividad e instituciones) y la comunidad receptora. Su articulación permite una experiencia organizada y sostenible.
                    .col-lg-5.col-11.col-md-8
                      img(src='@/assets/curso/temas/t1/slider1-4.png', alt='')
                  .row.justify-content-center(titulo="Guía de turismo")                    
                    .col-lg-5.col-10
                      h4 Guía de turismo
                      p Profesional encargado de orientar, conducir, informar y asistir al turista durante su experiencia, facilitando la comprensión del entorno. En Colombia, debe estar inscrito en el Registro Nacional de Turismo, lo que garantiza idoneidad y cumplimiento normativo.
                    .col-lg-5.col-11.col-md-8
                      img(src='@/assets/curso/temas/t1/slider1-5.png', alt='')
                  .row.justify-content-center(titulo="Sistema turístico")                    
                    .col-lg-5.col-10
                      h4 Sistema turístico
                      p Entendido como un conjunto de elementos interrelacionados (infraestructura, superestructura, demanda, comunidad local, atractivos y productos) que, según Roberto Boullon, funcionan de manera articulada para satisfacer las necesidades del uso del tiempo libre. Su dinámica se basa en la interacción entre oferta y demanda y en los procesos de comercialización y regulación del sector.
                    .col-lg-5.col-11.col-md-8
                      img(src='@/assets/curso/temas/t1/slider1-6.png', alt='')

    .bg4.tarjeta.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-2.col-md-3.col-4.mb-3.mb-md-0
          img.px-lg-4(src='@/assets/curso/temas/t1/4.svg', alt='')
        .col-lg-9.col-md-9
          p.mb-0 Conocer los aspectos básicos del turismo, le brindan al guía una base conceptual sólida para interpretar el territorio y explicar de manera clara y coherente a los visitantes los aspectos relevantes del destino, sus atractivos y su dinámica turística. De esta manera fortalece la calidad del servicio de guianza y mejora la experiencia del turista. 

    .bg5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/5.png', alt='')
        .col-lg-7
          .p-4.pe-lg-5.text-white
            img.mb-3.w-90x(src='@/assets/curso/temas/t1/6.svg', alt='')
            p Para el guía de turismo, la comprensión de estos conceptos resulta fundamental para una adecuada planificación y organización de las actividades de guianza, pues esto le permite articular de manera coherente los diferentes componentes del producto turístico (servicios, recursos y actividades) y adaptarlos a las necesidades, intereses y características de los turistas.
            p.mb-0 Asimismo, el dominio de estos fundamentos facilita que el guía reconozca su papel dentro del sistema turístico y comprenda su relación con otros actores, tales como prestadores de servicios, comunidades locales e instituciones. De esta manera, se promueve el trabajo colaborativo y el cumplimiento de la normatividad vigente.

    
    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.1 Tipologías de turismo y sus especificidades con la guianza turística
    
    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/7.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.col-md-3.col-4.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t1/8.svg', alt='')
          .col-lg-10.col-md-9
            p.mb-0 Las tipologías de turismo que se desarrollan en un territorio constituyen la base para la creación del producto turístico y se refieren a las diferentes formas en que se realiza la actividad turística, de acuerdo con los intereses del visitante, el entorno y el tipo de experiencia que se busca. Cada tipología implica particularidades en la guianza turística; es decir, define la manera en que el guía interpreta la información, acompaña al turista y gestiona la experiencia.
        .tarjeta.bg4.p-4
          p.mb-0 Una de las principales tipologías es el turismo cultural, entendido como aquella modalidad en la que la motivación del visitante es aprender, descubrir, experimentar y valorar los atractivos culturales (tanto materiales como inmateriales) de un destino. Estos incluyen elementos distintivos de una sociedad, tales como las artes, la arquitectura, el patrimonio histórico y cultural, la gastronomía, la literatura, la música, las industrias creativas y las tradiciones vivas, junto con sus formas de vida, valores y creencias (OMT, 2019).

    p.mb-4 En este tipo de turismo, el guía cumple un papel fundamental, ya que debe interpretar el patrimonio de manera clara, contextualizada y respetuosa, facilitando una experiencia significativa para el visitante.

    .bg7.tarjeta.p-4.mb-4(data-aos='fade')
      .titulo-sexto.color-acento-contenido
        h5 Figura 1.
        span Fundamentos de turismo cultural
      .row.justify-content-center
        .col-lg-7
          figure
            img(src='@/assets/curso/temas/t1/fig1.svg', alt='Se presentan los componentes del turismo cultural organizados en torno a un concepto central. Estos incluyen las culturas vivas, los atractivos materiales e inmateriales, el patrimonio histórico, el patrimonio gastronómico y las industrias creativas, los cuales en conjunto representan las diversas expresiones culturales que conforman la experiencia turística. ')

    p Para esta tipología de turismo, se espera que el guía prepare una narrativa histórica rigurosa, conozca la interpretación del patrimonio, tenga la capacidad de manejo de grupos urbanos, habilidades comunicativas y de creación de #[em storytelling]. El Ministerio de Comercio Industria y Turismo señala otra tipología, como es el turismo de naturaleza, que es todo tipo de turismo basado en la naturaleza, en la que la principal motivación es la observación y apreciación de esta, así como de las culturas tradicionales (OMT, 2002). 
    p Adicionalmente, esta organización sugiere tres clasificaciones: 

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.bg8.p-xl-5.p-4
        .row.justify-content-center.mb-4
          .col-6.col-md-10.col-lg-8
            img(src='@/assets/curso/temas/t1/tarj1-1.svg', alt='')
        h4.text-center Turismo en la naturaleza
        p.mb-0 Es aquel que tiene como motivación principal la realización de actividades recreativas y de esparcimiento en la naturaleza sin degradarla. Estas actividades no están especializadas en el conocimiento ni en actividades deportivas que usen expresamente los recursos naturales (I.E Turismo rural, turismo vacacional).
      .col-md.tarjeta.bg1.p-xl-5.p-4
        .row.justify-content-center.mb-4
          .col-6.col-md-10.col-lg-8
            img(src='@/assets/curso/temas/t1/tarj1-2.svg', alt='')
        h4.text-center Turismo sobre la naturaleza
        p.mb-0 Es aquel que tiene como motivación principal la realización de actividades deportivas de diferente intensidad física y que usen expresamente los recursos naturales sin degradarlos (I.E Turismo activo deportivo, aventurismo).
      .col-md.tarjeta.bg9.p-xl-5.p-4
        .row.justify-content-center.mb-4
          .col-6.col-md-10.col-lg-8
            img(src='@/assets/curso/temas/t1/tarj1-3.svg', alt='')
        h4.text-center Turismo por la naturaleza
        p.mb-0 Es aquel que tiene como motivación principal la contemplación, disfrute y conocimiento del medio natural, con diferente grado de profundidad, para lo que puede realizar actividades físicas de baja intensidad sin degradar los recursos naturales (I.E. Ecoturismo).

    .bg7.tarjeta.p-4.mb-4(data-aos='fade')
      .titulo-sexto.color-acento-contenido
        h5 Figura 2.
        span Tipologías de turismo de naturaleza
      .row.justify-content-center
        .col-lg-7
          figure
            img(src='@/assets/curso/temas/t1/fig2.svg', alt='Se presentan tres formas de turismo de naturaleza: recreativo, deportivo y contemplativo, diferenciadas por la actividad realizada y el nivel de interacción con el entorno natural. ')

    .row.bgcolor-2.align-items-center.p-2.p-md-4.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .bg3.tarjeta.p-4
            .row.justify-content-evenly.align-items-center
              .col-lg-7
                p Para esta tipología de turismo, el guía debe contar con conocimientos en biodiversidad (flora y fauna), así como en interpretación ambiental, que le permitan explicar y valorar el entorno natural. 
                p Además, debe poseer habilidades para el manejo de grupos en áreas protegidas, promover la educación para la conservación y aplicar primeros auxilios básicos, garantizando la seguridad y el cuidado del entorno.
                p En cuanto al turismo de aventura, la FEDEC (Federación Colombiana de Ecoparques, Ecoturismo y Turismo de Aventura) lo define como el conjunto de actividades lúdico - recreativas desarrolladas en torno a los elementos naturales (aire, tierra y agua) que implican un riesgo controlado y un contacto directo con la naturaleza.
              .col-lg-4.col-md-6.col-8
                img(src='@/assets/curso/temas/t1/9.svg', alt='')
    
    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/10.png', alt='')
      .col-lg-5.mb-3.mb-lg-0
        .bg4.tarjeta.p-4.h-100
          p Este tipo de turismo comprende prácticas como:
          .row.justify-content-center
            .col-md-6
              ul.lista-ul.fa-lista.list-ico.mb-0
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Parapente
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 #[em Rappel]
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Escalada
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 #[em Rafting]
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Canotaje
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Barranquismo (#[em canyoning])
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Ciclomontañismo
            .col-md-6
              ul.lista-ul.fa-lista.list-ico.mb-0
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Cabalgatas
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 #[em Puenting]
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Espeleología
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Buceo
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Kayak
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 #[em Hydrospeed]
                li
                  img(src='@/assets/curso/temas/t2/ico-list.svg')
                  span.mb-0 Pesca deportiva
      .col-lg-3
        .bg10.tarjeta.p-4.h-100
          p.mb-0 A continuación, se presenta una síntesis de los principales elementos del turismo de aventura, incluyendo su definición, las actividades más representativas y el rol del guía; esta información permite comprender de manera general las características de esta tipología turística y su importancia en el desarrollo de experiencias seguras y en contacto con la naturaleza.

    .mb-4(data-aos="fade")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 1.
        span Principales elementos del turismo
      .tabla-a.color-primario.table1
        table
          thead
            tr
              th Aspecto
              th Descripción
              th Enfoque formativo
          tbody
            tr
              td Naturaleza de la actividad
              td Actividades desarrolladas en entornos naturales (aire, tierra y agua) que implican interacción directa con el medio.
              td Comprender el entorno como escenario de aprendizaje y experiencia.
            tr
              td Nivel de riesgo
              td Presencia de riesgo controlado que exige planificación, prevención y cumplimiento de normas de seguridad.
              td Fomentar la cultura de la seguridad y la gestión del riesgo.
            tr
              td Tipos de actividades
              td Incluye prácticas como parapente, #[em rappel], escalada, #[em rafting], barranquismo, ciclomontañismo, cabalgatas, #[em puenting], espeleología, buceo, kayak, #[em hydrospeed] y pesca deportiva.
              td Identificar las características y requerimientos de cada actividad.
            tr
              td Rol del guía
              td Lidera, orienta y supervisa las actividades, garantizando la seguridad y la adecuada ejecución de la experiencia.
              td Desarrollar habilidades de liderazgo, toma de decisiones y manejo de grupos.
            tr
              td Requerimientos técnicos
              td Uso de equipos especializados y aplicación de protocolos de seguridad y emergencia.
              td Aplicar normas técnicas y procedimientos seguros en cada actividad.

    .bg6.tarjeta.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-2.col-5.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t1/11.svg', alt='')
        .col-lg-10.col-md-10
          p.mb-0 Para esta tipología de turismo, el guía no solo debe contar con conocimientos teóricos, sino con la capacidad de aplicarlos en situaciones reales. En la práctica, esto implica revisar previamente los equipos, identificar posibles riesgos del entorno, brindar instrucciones claras al grupo antes de cada actividad y actuar de manera oportuna ante cualquier eventualidad. Asimismo, debe liderar el grupo, mantener el control de la actividad y garantizar el cumplimiento de los protocolos de seguridad.

    .row.justify-content-center.cursor-pointer.mb-4
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-3.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/t1/tarj2-1.png", alt="")
          .crd_hover_txt--body
            .title.row.align-items-center.mb-0.p-md-3.py-2.p-2
              .col-lg-2.col-md-2.col-1
                span.icon.me-3
                  i.fas.fa-chevron-up.color-primario
              .col-lg-10.col-md-10.col-11
                h5.ps-2.ps-md-0.mb-0.text-white En el turismo rural
            p.mb-0.p-3.p-md-4 El guía cumple un papel fundamental como facilitador de la experiencia entre el visitante y la comunidad. En la práctica, esto se traduce en acompañar al turista en actividades propias del entorno rural, como procesos agrícolas o pecuarios, explicar su significado cultural y productivo, y promover el respeto por las tradiciones y el medio ambiente. Además, debe fomentar una interacción responsable que beneficie tanto al visitante como a la comunidad local.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-3.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/t1/tarj2-2.png", alt="")
          .crd_hover_txt--body
            .title.row.align-items-center.mb-0.p-md-3.py-2.p-2
              .col-lg-2.col-md-2.col-1
                span.icon.me-3
                  i.fas.fa-chevron-up.color-primario
              .col-lg-10.col-md-10.col-11
                h5.ps-2.ps-md-0.mb-0.text-white En el turismo médico o de salud
            p.mb-0.p-3.p-md-4 El guía asume un rol de acompañamiento integral. Esto implica coordinar traslados entre el lugar de alojamiento y los centros médicos, orientar al turista en su agenda de citas, brindar información clara sobre los procesos y actuar con discreción y ética profesional. También debe estar atento a las necesidades del visitante, ofreciendo apoyo durante su estancia y facilitando una experiencia organizada y tranquila.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-3.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/t1/tarj2-3.png", alt="")
          .crd_hover_txt--body
            .title.row.align-items-center.mb-0.p-md-3.py-2.p-2
              .col-lg-2.col-md-2.col-1
                span.icon
                  i.fas.fa-chevron-up.color-primario
              .col-lg-10.col-md-10.col-11
                h5.ps-2.ps-md-0.mb-0.text-white En el turismo de reuniones, incentivos, congresos y exposiciones (MICE)
            p.mb-0.p-3.p-md-4 El guía participa activamente en la logística y desarrollo de eventos. En la práctica, debe coordinar tiempos, orientar a los participantes, apoyar en la organización de actividades programadas y resolver imprevistos de manera eficiente. Además, debe mantener una comunicación constante con los organizadores y garantizar que la experiencia del grupo se desarrolle de acuerdo con lo planeado.

    .bgi-2.tarjeta.p-4.mb-4(data-aos="fade")
      .row.justify-content-evenly.align-items-center
        .col-lg-3.col-md-6.col-9.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t1/12.svg', alt='')
        .col-lg-6
          p A continuación, se presenta un video que aborda la transformación digital en la guianza turística, destacando el uso de herramientas tecnológicas para mejorar la experiencia del visitante y fortalecer el rol del guía en contextos actuales. Este recurso permite comprender cómo la innovación digital se integra a las prácticas de sostenibilidad y calidad en el turismo:

    ul.lista-ul.fa-lista.list-ico
      li
        img(src='@/assets/curso/temas/t2/ico-list.svg')
        span.mb-0 Transformación digital en la guianza turística

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 


    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.2 Impactos del turismo

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/13.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.col-md-3.col-4.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t1/14.svg', alt='')
          .col-lg-10.col-md-9
            p.mb-0 El crecimiento del turismo a nivel mundial ha sido sostenido en los últimos años. Aunque en 2020 la pandemia de COVID-19 afectó significativamente su desarrollo, en el periodo de postpandemia el sector ha evidenciado una recuperación progresiva y relevante tanto a nivel nacional como internacional. 
        p El turismo genera diversos impactos en los territorios, tanto positivos como negativos: por un lado, impulsa el desarrollo económico y social de las comunidades; por otro, plantea desafíos que exigen análisis y la implementación de acciones orientadas a mitigar sus efectos adversos. En este escenario, el guía de turismo se configura como un actor fundamental, ya que cumple un papel clave en la interacción entre el visitante, el entorno, la cultura y la comunidad, contribuyendo a potenciar los beneficios del turismo y a minimizar sus impactos negativos.

    .mb-4
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 2.
        span Impactos del turismo y el rol del guía
      .tabla-a.color-primario.table2
        table
          thead
            tr
              th.text-start(colspan="3") 1. Impactos económicos
          tbody
            tr
              th Positivos
              th Negativos
              th Rol del guía
            tr 
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Generación de empleo.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Ingresos para comunidades locales.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Dinamización de negocios (hoteles, restaurantes, transporte).
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Dependencia económica del turismo.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Aumento de precios (gentrificación).
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Beneficios concentrados en pocos actores.
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Promueve el consumo local (artesanías, servicios comunitarios).
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Recomienda negocios responsables. 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Distribuye mejor los beneficios del turismo. 
          thead
            tr
              th.text-start(colspan="3") 2. Impactos ambientales
          tbody
            tr
              th Positivos
              th Negativos
              th Rol del guía
            tr 
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Incentivo a la conservación de áreas naturales. 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Creación de parques y reservas
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Contaminación.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Deterioro de ecosistemas.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Sobreuso de recursos naturales. 
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Educa al turista en prácticas sostenibles (no dejar basura, respetar fauna). 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Controla el comportamiento del grupo.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Aplica principios de mínimo impacto. 
          thead
            tr
              th.text-start(colspan="3") 3. Impactos socioculturales 
          tbody
            tr
              th Positivos
              th Negativos
              th Rol del guía
            tr 
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Rescate de tradiciones. 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Intercambio cultural.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Orgullo e identidad local. 
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Pérdida de autenticidad cultural.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Comercialización de tradiciones. 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Conflictos entre turistas y residentes.
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Interpreta la cultura de forma respetuosa. 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Evita estereotipos. 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Media entre turistas y comunidad.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Protege el patrimonio cultural.
          thead
            tr
              th.text-start(colspan="3") 4. Impactos territoriales (infraestructura)
          tbody
            tr
              th Positivos
              th Negativos
              th Rol del guía
            tr 
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Mejora de vías, servicios y espacios públicos. 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Desarrollo urbano. 
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Saturación de destinos. 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Urbanización descontrolada. 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Presión sobre servicios básicos. 
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Organiza flujos turísticos (evita congestión). 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Lleva grupos a horarios y rutas alternas.                    
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Fomenta el turismo responsable. 
          thead
            tr
              th.text-start(colspan="3") 5. Impactos educativos
          tbody
            tr
              th Positivos
              th Negativos
              th Rol del guía
            tr 
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Aprendizaje sobre naturaleza, historia y cultura.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Conciencia ambiental y social.
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Información errónea o superficial. 
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Desinformación cultural.  
              td 
                ul.lista-ul.fa-lista.l-circle.mb-0
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0  Es el principal educador del turista.    
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Debe brindar información veraz y contextualizada.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Enriquece la experiencia del visitante.

    .bg11.p-4
      p.mb-0 #[b Nota:] se concluye que el guía de turismo se consolida como un actor estratégico para la sostenibilidad del sector, cuya labor trasciende el acompañamiento básico. Su rol integra funciones como educador ambiental y cultural, mediador social y promotor del desarrollo económico local. En este sentido, actúa como gestor de buenas prácticas, por lo que la calidad de la experiencia turística y su impacto en el territorio dependen, en gran medida, de su capacidad para orientar, interpretar y gestionar adecuadamente la interacción entre el visitante y el entorno.


    Separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.3 Desarrollo y turismo sostenible

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.mb-3.mb-lg-0(data-aos="fade-right")
        p Para comprender el concepto de desarrollo sostenible, es importante reconocer su origen. Este término se consolida a nivel mundial a partir del informe #[b Nuestro futuro común] (1987), elaborado por la Comisión Brundtland, creada por la Asamblea General de las Naciones Unidas en 1983. En este documento se define el desarrollo sostenible como aquel que permite satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas.
        .bg1.compl.p-4.mb-3
          p.mb-0 Este enfoque propone la integración equilibrada de tres dimensiones fundamentales: la económica, la social y la ambiental. Posteriormente, la Conferencia de las Naciones Unidas sobre Medio Ambiente y Desarrollo fortaleció este concepto mediante los Principios de Río, promoviendo su aplicación a nivel global. Más adelante, en la Cumbre Mundial sobre el Desarrollo Sostenible, se dio mayor relevancia a aspectos como la reducción de la pobreza, el consumo responsable y el financiamiento para el desarrollo.
        p En 2012, durante la conferencia Río+20, se impulsó el concepto de “economía verde”, entendido como una estrategia para proteger el medio ambiente mientras se promueve el crecimiento económico. Uno de los principales resultados de este proceso fue la formulación de los Objetivos de Desarrollo Sostenible (ODS), que orientan las acciones de los países hacia un desarrollo más equilibrado, inclusivo y sostenible.
      .col-lg-4.col-md-6.col-9(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/14.png', alt='')

    .row.bgcolor-1.align-items-center.p-2.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-evenly.align-items-center
            .col-lg-1.col-md-2.col-4.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t1/15.svg', alt='')
            .col-lg-11.col-md-10
              p.mb-0 En el ámbito del turismo, el desarrollo sostenible adquiere especial relevancia, ya que orienta la actividad hacia prácticas responsables que equilibran el aprovechamiento económico con la conservación del entorno y el bienestar social. En este contexto, el guía de turismo desempeña un papel clave al promover el respeto por el medio ambiente, la cultura y las comunidades locales, contribuyendo así al desarrollo sostenible de los destinos.

    .mb-4
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 3.
        span Enfoque del turismo sostenible y su aplicación en Colombia
      .tabla-a.color-primario.table1
        table
          thead
            tr
              th.w-25 Elemento
              th Descripción
          tbody
            tr
              td Definición de turismo sostenible
              td Según la Organización Mundial del Turismo, es aquel que considera las repercusiones económicas, sociales y ambientales, presentes y futuras, para satisfacer las necesidades de los visitantes, la industria, el entorno y las comunidades anfitrionas.
            tr
              td Responsabilidad del sector turístico
              td Los prestadores de servicios turísticos deben contribuir a la construcción de destinos sostenibles mediante prácticas responsables y equilibradas.
            tr
              td Rol del guía de turismo
              td Actúa como un agente clave que promueve el equilibrio entre los beneficios económicos, sociales y ambientales, favoreciendo el bienestar de las comunidades y la conservación del territorio.
            tr
              td Contexto en Colombia
              td La Política de Turismo Sostenible "Unidos por la Naturaleza" (2021) busca armonizar el desarrollo económico y sociocultural con la protección del capital natural del país.
            tr
              td Propósito de la política
              td Consolidar el turismo como una actividad económicamente viable, socialmente incluyente y ambientalmente responsable, promoviendo la conservación de la biodiversidad, los ecosistemas y los modos de vida de las comunidades.

    .bgi-3.p-4.p-xl-5(data-aos="fade")
      SlyderE.t1-3(indicadores="centro")
        .row.justify-content-center.align-items-center
          .col-lg-6.col-11.mb-4.mb-md-0
            p Esta política establece lineamientos que impactan directamente el ejercicio del guía de turismo, al permitirle comprender que la actividad turística no se limita a la generación de beneficios económicos, sino que también implica:
            ul.lista-ul.fa-lista.list-ico.mb-0
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Proteger el medio ambiente. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Respetar la cultura local. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Generar bienestar en las comunidades.
          .col-lg-5.col-11.col-md-9
            img(src='@/assets/curso/temas/t1/slider2-1.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-6.col-11.mb-4.mb-md-0
            p Estos principios orientan su forma de guiar y de transmitir información al turista. Asimismo, fortalecen su rol como educador, al convertirlo en un agente de sensibilización que:
            ul.lista-ul.fa-lista.list-ico.mb-0
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Enseña buenas prácticas ambientales.
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Promueve el respeto por la biodiversidad. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Fomenta el turismo responsable. 
          .col-lg-5.col-11.col-md-9
            img(src='@/assets/curso/temas/t1/slider2-2.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-6.col-11.mb-4.mb-md-0
            p De igual manera, la política impulsa el desarrollo de las comunidades, al resaltar la importancia de:
            ul.lista-ul.fa-lista.list-ico
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Proteger los modos de vida locales. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Generar equidad. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Apoyar las economías locales. 
            p En este sentido, el guía contribuye recomendando productos y servicios de la comunidad.
          .col-lg-5.col-11.col-md-9
            img(src='@/assets/curso/temas/t1/slider2-3.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-6.col-11.mb-4.mb-md-0
            p A través de esta política de sostenibilidad, se busca proteger el entorno natural y cultural, y el guía de turismo se posiciona como un actor fundamental en el cumplimiento de este objetivo, ya que contribuye a:
            ul.lista-ul.fa-lista.list-ico.mb-0
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Orientar y controlar el comportamiento de los turistas. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Prevenir impactos negativos en los ecosistemas. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Promover el cuidado del patrimonio.
          .col-lg-5.col-11.col-md-9
            img(src='@/assets/curso/temas/t1/slider2-4.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-6.col-11.mb-4.mb-md-0
            p Esta política también fortalece la profesionalización de la guianza turística, al exigir un ejercicio más organizado y responsable, lo que implica que el guía:
            ul.lista-ul.fa-lista.list-ico.mb-0
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Se capacite de manera continua. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Actúe con ética profesional. 
              li
                img(src='@/assets/curso/temas/t2/ico-list.svg')
                span.mb-0 Aplique normas de sostenibilidad.
          .col-lg-5.col-11.col-md-9
            img(src='@/assets/curso/temas/t1/slider2-5.png', alt='')


    Separador
    #t_1_4.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.4 Normatividad turística colombiana aplicada a la profesión del guía de turismo

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4.b-redo(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, la Ley 2068 de 2020 establece el marco normativo para el sector turístico. En su artículo 94, define al guía de turismo como la persona natural, nacional o extranjera, que presta servicios de guionaje turístico, cuyas funciones comprenden orientar, conducir, instruir y asistir al turista, viajero o pasajero durante la ejecución del servicio contratado. Esta ley reconoce al guía como un actor fundamental para garantizar la calidad en el desarrollo turístico del país. #[br] #[br]
        p.mb-0 Asimismo, señala que para ejercer esta profesión es requisito estar inscrito en el Registro Nacional de Turismo y contar con la tarjeta profesional de guía de turismo, otorgada por el Ministerio de Comercio, Industria y Turismo.

    .row.justify-content-center.mb-4
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
        .tarjeta.bg6.p-4
          p.mb-0 A continuación, se invita a explorar este pódcast, en el cual se presentan de manera clara y estructurada los aspectos más relevantes de la Ley 2068 de 2020 y su impacto en el desarrollo turístico del país. Este recurso permite comprender cómo esta normativa impulsa un turismo sostenible, incluyente y competitivo, así como el rol de los diferentes actores en la consolidación de experiencias responsables y de calidad en Colombia.
      .col-lg-9(data-aos="fade-left")
        .bg-color-acento-botones.h-100  
          img(src='@/assets/curso/temas/t1/podcast.png', alt='')
          .p-4
            .bg-white.tarjeta.p-4
              TarjetaAudio.color-acento-botones(
                texto="Pódcast: Revisemos la Ley 2068 de 2020: claves del turismo en Colombia"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    p Por su parte, el Decreto 1379 de 2021 reglamenta la actividad de guionaje turístico y establece las condiciones para su ejercicio. Dentro de las obligaciones del guía, se destaca la necesidad de mantener vigente y actualizada su inscripción en el Registro Nacional de Turismo, así como incluir el número de registro en toda su publicidad; de igual manera, el decreto precisa las funciones, responsabilidades y deberes asociados a esta profesión.
    p.mb-4 Adicionalmente, existen otras disposiciones normativas que complementan el ejercicio profesional del guía de turismo, entre las cuales se destacan:

    .mb-5
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 4.
        span Normas Técnicas Sectoriales (NTS-GT) y Norma Técnica Colombiana (NTC) aplicables a la guianza turística en Colombia
      .tabla-a.color-primario.table1
        table
          caption Fuente: adaptado de Ministerio de Comercio, Industria y Turismo (2022)
          thead
            tr
              th.w-25 Código
              th Descripción
          tbody
            tr
              td NTS GT 001
              td Prestación del servicio de guianza turística conforme a los requerimientos del usuario.
            tr
              td NTS GT 002
              td Control y seguimiento del desarrollo de los programas de guianza turística.
            tr
              td NTS GT 003
              td Preparación de las actividades de guianza de acuerdo con lo contratado con el usuario.
            tr
              td NTS GT 004
              td Ejecución de procesos básicos para la prestación del servicio de guianza turística.
            tr
              td NTS GT 005
              td Conducción de grupos en recorridos de ecoturismo.
            tr
              td NTS GT 006
              td Conducción de grupos en actividades de buceo con tanque, conforme al programa establecido.
            tr
              td NTS GT 007
              td Conducción de grupos en actividades de buceo a pulmón (apnea), conforme al programa establecido.
            tr
              td NTS GT 008
              td Desarrollo de recorridos guiados en museos.
            tr
              td NTS GT 009
              td Conducción de grupos en actividades de alta montaña.
            tr
              td NTS GT 010
              td Prestación del servicio de guianza turística para pasajeros de cruceros, de acuerdo con itinerarios de llegada y salida.
            tr
              td NTS GT 011
              td Conducción de grupos en recorridos de cabalgata.
            tr
              td NTS GT 013
              td Conducción de grupos en actividades de #[em canyoning] (barranquismo).
            tr
              td NTC 6507:2021
              td Requisitos para la prestación del servicio de guianza turística.

    .row.justify-content-center
      .col-lg-5.col-md-8.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/17.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p La normatividad turística colombiana constituye un pilar fundamental para el ejercicio profesional del guía de turismo, al establecer los lineamientos legales, técnicos y éticos que garantizan un servicio de calidad. A partir de lo dispuesto en la Ley 2068 de 2020 y el Decreto 1379 de 2021, así como en la NTC 6507:2021, se reconoce al guía como un actor clave en el desarrollo turístico del país, con funciones específicas como orientar, conducir, instruir y asistir al turista. De igual manera, se establece la obligatoriedad de contar con tarjeta profesional y estar inscrito en el Registro Nacional de Turismo.
        p Asimismo, las Normas Técnicas Sectoriales (NTS-GT) y la NTC 6507 orientan la adecuada prestación del servicio en diversos contextos, fortaleciendo las competencias del guía y promoviendo la seguridad, la organización y la satisfacción del usuario. En este marco, el conocimiento y la aplicación de esta normatividad permiten al guía desempeñarse de manera responsable, legal y competitiva, contribuyendo al fortalecimiento de un turismo sostenible y de alta calidad en Colombia.


    Separador
    #t_1_5.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.5 Normatividad ambiental colombiana aplicada a la profesión del guía de turismo

    .tarjeta.bg1.mb-4
      .row.justify-content-center.align-items-center        
        .col-lg-7
          .p-4.px-xl-5
            p.mb-0 En Colombia, el desarrollo de las actividades turísticas está estrechamente relacionado con el cumplimiento de la normatividad ambiental, la cual establece principios y lineamientos para la protección de los recursos naturales y culturales. El guía de turismo debe conocer, interpretar y aplicar estas normas en los territorios donde ejerce su labor, garantizando prácticas responsables y sostenibles.
        .col-lg-5.tarjeta.bg4.d-none.d-lg-block
          img.p-lg-4(src='@/assets/curso/temas/t1/18.svg', alt='')

    .mb-5
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 5.
        span Principales disposiciones de normatividad ambiental aplicable al turismo
      .tabla-a.color-primario.table1
        table
          thead
            tr
              th.w-25 Norma / política
              th Aplicación en el turismo
          tbody
            tr
              td Ley 99 de 1993
              td Establece las bases de la política ambiental en Colombia. Señala que la biodiversidad y el paisaje son patrimonio nacional, por lo que deben ser protegidos y aprovechados de manera sostenible. Además, introduce el concepto de desarrollo sostenible, entendido como el equilibrio entre crecimiento económico, bienestar social y conservación ambiental, sin comprometer los recursos de las futuras generaciones.
            tr
              td Ley Orgánica de Ordenamiento Territorial
              td Define que el uso del territorio debe armonizar el desarrollo económico, la equidad social y la sostenibilidad ambiental. En el ámbito turístico, resalta la importancia de respetar la identidad cultural y las dinámicas propias de las comunidades locales, especialmente en zonas rurales.
            tr
              td Política para el Desarrollo del Ecoturismo (2003)
              td Establece el desarrollo sostenible como eje central del ecoturismo, promoviendo actividades que contribuyan a la conservación de los ecosistemas y a la educación ambiental de los visitantes.
            tr
              td Política de Turismo de Naturaleza (2012)
              td Busca posicionar a Colombia como un destino líder en turismo de naturaleza, mediante la oferta de productos y servicios sostenibles que permitan la conservación de los recursos naturales y el mejoramiento de la calidad de vida de las comunidades locales.
            tr
              td Política de Turismo Sostenible (2020)
              td Tiene como propósito fortalecer la sostenibilidad en toda la cadena de valor del turismo, promoviendo la competitividad del sector, el uso responsable del capital natural y la generación de valor agregado en los destinos turísticos.
            tr
              td ISO 14001 - Sistema de Gestión Ambiental
              td Proporciona un marco de referencia para que las organizaciones implementen buenas prácticas ambientales, mejoren su desempeño y respondan de manera adecuada a los cambios del entorno, manteniendo un equilibrio entre lo ambiental, lo social y lo económico.

    .mb-4
      img(src='@/assets/curso/temas/t1/19.png', alt='')

    p.mb-4 El conocimiento y la aplicación de esta normatividad permiten al guía de turismo desarrollar su labor de manera responsable, promoviendo el cuidado del entorno, el respeto por las comunidades y la sostenibilidad de los destinos. De esta forma, el guía no solo orienta al visitante, sino que también actúa como un educador ambiental y un actor clave en la conservación del patrimonio natural de Colombia.

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/20.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.col-md-3.col-4.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t1/21.svg', alt='')
          .col-lg-10.col-md-9
            p.mb-0 En el ejercicio de la guianza turística, el guía de turismo integra la normatividad ambiental y las políticas de sostenibilidad como base fundamental de su labor profesional; en este sentido, a partir de lineamientos como la Ley 99 de 1993, la Ley Orgánica de Ordenamiento Territorial y las diferentes políticas de turismo y ecoturismo en Colombia, orienta su actividad hacia la protección de la biodiversidad, el respeto por el patrimonio natural y cultural, así como el aprovechamiento responsable de los recursos.
        p De igual manera, estas disposiciones le permiten planificar y ejecutar recorridos de forma organizada, incorporando prácticas de mínimo impacto y promoviendo el respeto por las comunidades locales; además, referentes como la norma ISO 14001 fortalecen su compromiso con la gestión ambiental, favoreciendo la mejora continua de su desempeño profesional.

    p En consecuencia, el guía de turismo trasciende una función operativa, dado que se consolida como un actor clave en la implementación del turismo sostenible, contribuyendo al equilibrio entre el desarrollo económico, la conservación del medio ambiente y el bienestar social en los territorios.

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicadorTarjetaAudio: true,
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
