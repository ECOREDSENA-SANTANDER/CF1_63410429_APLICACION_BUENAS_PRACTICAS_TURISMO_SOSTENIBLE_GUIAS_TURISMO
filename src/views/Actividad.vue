<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sostenibilidad y calidad en guianza turística',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del turismo, las tipologías turísticas, los impactos de la actividad, el desarrollo sostenible y la normatividad aplicable a la guianza turística en Colombia.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Según la normativa turística colombiana, el turismo se define como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actividades comerciales realizadas por empresas hoteleras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actividades exclusivas de recreación en zonas rurales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Servicios prestados por agencias de viajes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Actividades realizadas por personas durante viajes fuera de su entorno habitual por un período inferior a un año.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende la definición de turismo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 2,
          texto: '¿Cuál es la función principal del guía de turismo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vender paquetes turísticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar hoteles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Orientar, conducir, instruir y asistir al turista.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseñar infraestructura turística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende la función principal del guía de turismo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes no corresponde a un elemento directo del sistema turístico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistema financiero internacional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Demanda turística.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Destino turístico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Oferta turística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende y conoce los elementos del sistema turístico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 4,
          texto: 'El producto turístico se caracteriza por:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser únicamente un servicio de alojamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Integrar bienes, servicios y experiencias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incluir solo transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser intangible únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende las características del producto turístico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 5,
          texto: 'El turismo cultural tiene como principal motivación:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividades deportivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Negocios internacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aprender y experimentar la cultura de un destino.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tratamientos médicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende las motivaciones del turismo cultural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto: 'En el turismo de naturaleza, el guía debe principalmente:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manejar contabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar hoteles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar rutas comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Tener conocimientos en biodiversidad e interpretación ambiental.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende los conocimientos de un guía en áreas naturales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cuál es un impacto económico positivo del turismo?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contaminación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pérdida cultural.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generación de empleo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Saturación de destinos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende el componente económico positivo del turismo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto: 'El desarrollo sostenible busca:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Satisfacer necesidades actuales sin afectar a futuras generaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Maximizar ganancias económicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la inversión pública.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar el turismo masivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende el significado de desarrollo sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto: 'El turismo sostenible tiene en cuenta:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el aspecto económico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo el ambiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aspectos económicos, sociales y ambientales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aspectos únicamente operativos del servicio turístico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende los componentes del turismo sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es una obligación del guía según la normatividad colombiana?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estar inscrito en el Registro Nacional de Turismo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tener empresa propia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hablar tres idiomas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Trabajar solo en agencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende las obligaciones del guía de turismo según la normatividad colombiana.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 11,
          texto: 'La Ley 99 de 1993 se relaciona con:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normas laborales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comercio internacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Protección ambiental.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende la normatividad ambiental de Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuál es una práctica de sostenibilidad ambiental?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No dejar residuos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar el consumo de recursos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar el turismo masivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la educación ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende las prácticas positivas de la sostenibilidad ambiental.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 13,
          texto: 'El turismo de aventura se caracteriza por:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividades médicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actividades administrativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Actividades con riesgo controlado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Actividades culturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende el significado del turismo de aventura.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál es un criterio de calidad en la guianza turística?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Explotación de recursos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desorganización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunicación efectiva.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Improvisación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende los criterios de calidad en la guianza turística.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 15,
          texto: 'El Sello Ambiental Colombiano es:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una ley obligatoria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un impuesto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un tipo de turismo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una certificación ambiental voluntaria.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende las características del Sello Ambiental Colombiano.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es uno de los roles del guía frente a los impactos socioculturales del turismo?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el turismo masivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar la interacción con la comunidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Interpretar la cultura de forma respetuosa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Promover estereotipos culturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende los roles del guía frente a los impactos socioculturales del turismo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué busca la política de turismo sostenible en Colombia?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el turismo sin control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo generar ingresos económicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Equilibrar desarrollo económico, social y protección ambiental.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende el objetivo de la política de turismo sostenible en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 18,
          texto:
            'El turismo MICE (reuniones, incentivos, congresos y exhibiciones) se caracteriza por:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividades agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tratamientos médicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organización de eventos empresariales y académicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Actividades de aventura extrema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende las características del turismo MICE.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 19,
          texto:
            'Según la NTC 6507:2021, un elemento clave en la planificación del servicio de guianza es:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Improvisar el recorrido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el uso de guiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ejecutar actividades sin planificación previa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Preparar el guion del recorrido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende la importancia de los elementos claves en la planificación del servicio de guianza.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es una práctica relacionada con la metodología "vivir sin dejar rastro"?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar residuos durante el recorrido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alterar los ecosistemas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Minimizar el impacto ambiental.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar el consumo de recursos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende la importancia de la práctica relacionada con la metodología "vivir sin dejar rastro".',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
