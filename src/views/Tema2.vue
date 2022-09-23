<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 2
      h1 Puntos críticos
    span.text-bold(data-aos="fade-up-right") El sistema APPCC es un sistema preventivo de control de los alimentos que pretende garantizar la seguridad de los mismos
    span(data-aos="fade-up-right") , identificando los peligros específicos que pueden generarse en cada una de las fases desde la producción al consumo de dicho alimento y definiendo las medidas preventivas para su control.
    .row.justify-content-center.px-5.ampliar.fondo-8
      .col-12
        p.size19px(data-aos="fade-up-right") Este sistema se basa en los siguientes principios:
        figure(data-aos="fade-up-left")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/VMA833Tb1X8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.1 Estrategias de monitoreo
    span.text-bold(data-aos="fade-up-right") De acuerdo con LIPTAK, el monitoreo de cultivos es la inspección regular y cuidadosa de las plantas cultivadas a lo largo del período de crecimiento: 
    span(data-aos="fade-up-right") al hacer el monitoreo, el productor camina a través de su cultivo buscando problemas en las plantas como insectos y ácaros, enfermedades, malezas, daño causado por tormentas y estreses ambientales como sequía o deficiencias de nutrientes.     
    ImagenInfografica.color-secundario.my-5(data-aos="fade-up-right")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/figura1.svg')

      .tarjeta.fondo-9.p-3(x="12%" y="50%" numero="+")
        .h5.mb-2 Recorrer con regularidad todo el cultivo
        p El recorrido periódico en el cultivo permite el monitoreo para la búsqueda de señales que indiquen la presencia de plagas dependiendo de la etapa del cultivo. El recorrido debe realizarse en diferentes direcciones para garantizar la observación completa.

      .tarjeta.fondo-9.p-3(x="33%" y="52%" numero="+")
        .h5.mb-2 Distinguir entre problemas Bióticos y Abióticos
        p No es necesario revisar cada planta, pero se debe revisar detenidamente plantas al azar en las áreas problema, buscando en la superficie superior e inferior de las plantas, quizá haya mas de una plaga, y las más obvio puede no ser la causa del daño.

      .tarjeta.fondo-9.p-3(x="51%" y="24%" numero="+")
        .h5.mb-2 Revisar detenidamente unas cuantas platas
        p Las impresiones personales son la base para las decisiones sobre manejo de cultivos. Dos o más personas pueden tener distintas opiniones sobre cuántos insectos constituyen una infestación pequeña versus una moderada. Por esta razón, es preferible que la misma persona monitoree el cultivo a lo largo de su desarrollo.

      .tarjeta.fondo-9.p-3(x="66%" y="60%" numero="+")
        .h5.mb-2 Procurar la consistencia
        p Se debe tener atención especial a pistas que le permitan distinguir problemas de plagas de problemas no relacionados con plagas o condiciones ambientales. Los insectos, las enfermedades, los ácaros, los roedores, etc., son todos bióticos. Las condiciones ambientales como la sequía o inundaciones son abióticas.

      .tarjeta.fondo-9.p-3(x="90%" y="22%" numero="+")
        .h5.mb-2 Anotar las observaciones
        p En lo posible dibujar un mapa del campo con los cultivos, esto puede utilizarse para marcar donde se presenta la problemática.  Realizar el registro por cada entrada de inspección donde quede constancia de la fecha, condiciones climáticas, la etapa de desarrollo del cultivo y cualquier información que podría ser útil mas adelante para tomar decisiones sobre el manejo de las plagas.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-up-left")
      h2 2.2 Localización de puntos críticos
    p.mb-5(data-aos="fade-up-right") Como se mencionó en el aparte anterior en el recorrido de los monitoreos 
      span.text-bold es importante la realización de un mapa del cultivo, en el cual se pueden identificar las zonas en las que se presentan problemáticas de plagas y enfermedades.
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade")
        img(src='@/assets/curso/tema2/imagen1.jpg')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade")
        span.text-bold La importancia de esta localización está relacionada con las acciones a implementar para contener el avance de las enfermedades y plagas 
        span mediante el uso de plaguicidas u otros derivados que ayuden a contener la amenaza.
        p.fondo-6.px-5.py-4.mt-3 Un sistema comúnmente utilizado para la localización de los puntos críticos es el árbol de decisiones, este sistema consiste en una sucesión de preguntas que se realizan para determinar si un punto de control es un punto crítico, 
          span.resaltado.text-bold este sistema debe implementarse en cada etapa de producción, así no se haya definido con anterioridad que dicha área contiene puntos de control
          span ; en otras palabras, el árbol de decisiones también aporta a la identificación de no conformidades y puntos de control que no se habían estimado anteriormente.
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
