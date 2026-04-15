<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 El componente Sostenibilidad y calidad en la guianza turística aborda integralmente la formación del guía de turismo como un actor clave en el desarrollo sostenible del sector, mediante la comprensión de conceptos básicos del turismo, sus tipologías, impactos y el funcionamiento del sistema turístico, articulados con la normatividad colombiana vigente. Asimismo, enfatiza la aplicación de criterios de sostenibilidad en sus dimensiones económica, sociocultural y ambiental, junto con estándares de calidad que garantizan servicios responsables, seguros y significativos para los turistas y las comunidades anfitrionas. Se destaca el rol del guía como educador, mediador cultural y promotor del desarrollo local, capaz de interpretar el patrimonio, gestionar riesgos, fomentar prácticas responsables como las 5R y contribuir a la conservación del entorno, fortaleciendo así la competitividad, la ética profesional y la sostenibilidad de los destinos turísticos en Colombia.
    
    .row.justify-content-center
      .col-lg-11.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama conceptual sobre sostenibilidad y calidad en la guianza turística. Muestra dos ejes principales: conceptos básicos del turismo y criterios de sostenibilidad y calidad aplicados al servicio de guianza turística. Incluye temas como tipologías de turismo, impactos del turismo, desarrollo y turismo sostenible, normatividad turística y ambiental colombiana aplicada al guía de turismo, criterios de sostenibilidad económica, sociocultural y ambiental, desarrollo local, protección del patrimonio, conservación del entorno y el Sello Ambiental Colombiano.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
