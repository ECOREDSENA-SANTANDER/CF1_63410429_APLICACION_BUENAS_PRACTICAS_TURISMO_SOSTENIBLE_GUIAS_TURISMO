<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.mb-3.mb-lg-0(data-aos="fade-right")
        p El componente formativo se orienta al fortalecimiento de las competencias del guía de turismo como actor clave en el desarrollo responsable del sector. En el marco del programa “Aplicación de buenas prácticas en turismo sostenible para guías de turismo”, se promueve la integración de criterios de sostenibilidad y calidad en la prestación del servicio, contribuyendo a la conservación del patrimonio natural y cultural, al bienestar de las comunidades locales y a la satisfacción del turista.
        .bg1.compl.p-4
          p.mb-0 A partir de la comprensión de los fundamentos del turismo, sus tipologías, impactos y el funcionamiento del sistema turístico, se fomenta en el aprendiz la apropiación de prácticas responsables alineadas con la normatividad turística y ambiental colombiana vigente; este enfoque permite reconocer el papel del guía de turismo dentro del sistema turístico y su incidencia en la gestión sostenible de los destinos. Asimismo, el componente enfatiza la aplicación de criterios de sostenibilidad económica, sociocultural y ambiental, abordando aspectos como la planificación y comercialización del servicio de guianza, el respeto por las comunidades locales, la protección del patrimonio y el uso racional de los recursos naturales. De igual forma, incorpora estrategias como las #[b 5R] y la metodología #[b “vivir sin dejar rastro”], que favorecen la prestación de servicios turísticos responsables, éticos y competitivos.
      .col-lg-4.col-md-6.col-9(data-aos="fade-left")
        img(src='@/assets/curso/temas/intro/1.png', alt='')
    
    p.mb-4 El abordaje pedagógico integra el estudio de normas técnicas sectoriales, normas de competencia laboral para guías de turismo y herramientas como el sello ambiental colombiano, fortaleciendo una cultura de calidad en el sector; en consecuencia, se contribuye al logro de los resultados de aprendizaje orientados a aplicar y describir buenas prácticas de sostenibilidad en la guianza turística, promoviendo un ejercicio profesional comprometido con el desarrollo sostenible.

    //.row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 


</template>

<script>
export default {
  name: 'Introduccion',
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
