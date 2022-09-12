<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 4
      h1 Acciones correctivas 
    p.mb-5(data-aos="fade-up-left") Las acciones correctivas 
      span.text-bold son propuestas para la mejora de una situación que no tiene los resultados esperados
      span ; en otras palabras, en la solución a una no conformidad encontrada en uno de los procesos productivos. 
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-left")
        img(src="@/assets/curso/tema4/imagen1.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-right")
        p.fondo-6.p-4 Una acción correctiva 
          span.text-bold siempre debe atacar la causa raíz de la aparición de una no conformidad
          span , de esta forma podrás asegurarte que no aparecerá más esa desviación o no conformidad en tu empresa.
        p.text-bold.mb-0 Figura 9
        p Acciones correctivas
        .row.justify-content-center
          .col-12.fondo-2.bordesredondeados.p-3
            p.text-bold.resaltado.text-center.mb-4 ACCIONES CORRECTIVAS
            .row.justify-content-center
              .col-7
                img(src="@/assets/curso/tema4/figura1.svg")
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 4.1 Criterios técnicos de implementación de correctivos
    p.mb-5 Para la implementación de las acciones correctivas se deben tener en cuenta las siguientes recomendaciones: 
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/avatar1.svg')
          .tarjeta.fondo-12
            .p-4
              p.text-bold.text-center La naturaleza de las no conformidades: 
              p.text-center Es importante la identificación de las falencias y el lugar donde se encuentran para la formulación de las acciones correctivas
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/avatar2.svg')
          .tarjeta.fondo-12
            .p-4
              p.text-bold.text-center Las actividades y las tareas: 
              p.text-center Establecer los pasos a realizar para corregir la no conformidad
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/avatar3.svg')
          .tarjeta.fondo-12
            .p-4
              p.text-bold.text-center Resultados
              p.text-center Evaluar los resultados obtenidos para verificar si la falla fue corregida. En caso de que persista se deberá realizar el proceso de nuevo.
    span.text-bold.mb-5 Ante la identificación de las no conformidades se deben establecer las acciones para su eliminación
    span , con el objeto de que esa actividad que genera cierto malestar no se convierta en un peligro latente que pueda poner en riesgo la producción o al personal de la granja.
    .bloque-texto-g.fondo-13.p-3.p-sm-4.p-md-5.my-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/imagen2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La supervisión de cada etapa del proceso se debe realizar continuamente, no solo para identificar las no conformidades existentes sino también las latentes; es decir, las posibles situaciones que se estimen pueden convertirse en un inconveniente a futuro. Para este tipo de situaciones se deben adelantar acciones preventivas, que son definidas como el conjunto de acciones tomadas para eliminar las causas de una no conformidad potencial.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 4.2 Implementación de acciones correctivas
    p Para la implementación de las acciones correctivas se debe diseñar un plan en el que se detallen los pasos necesarios para corregir el fallo sistémico desde su origen y los responsables y tiempos de las mismas. Por ello, es preciso empezar por identificar la causa raíz del problema y centrarse en resolverlo a través de tareas adecuadas que se ajusten a un presupuesto, recursos y tiempos apropiados.
    p.mb-5 A continuación, señalamos los pasos a seguir en la implementación:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo-14")
      .row.justify-content-center.align-items-center(titulo="Comprender la no conformidad y su origen")
        .col-md-1
          figure
            img(src='@/assets/curso/tema4/figura2.svg')
        .col-md-10.mb-4.mb-md-0
          p Cuando se está leyendo los hallazgos de auditoría. Es ahí cuando debes preguntar cualquier duda que tengas acerca de la no conformidad para asegurarte que la entendemos para poder trabajarla luego.

      .row.justify-content-center.align-items-center(titulo="Corrección de la no conformidad con acciones inmediatas")
        .col-md-1
          figure
            img(src='@/assets/curso/tema4/figura3.svg')
        .col-md-10.mb-4.mb-md-0
          p Acción tomada para eliminar una no conformidad detectada.

      .row.justify-content-center.align-items-center(titulo="Análisis de la causa de su aparición")
        .col-md-1
          figure
            img(src='@/assets/curso/tema4/figura4.svg')
        .col-md-10.mb-4.mb-md-0
          p Es el por qué ha aparecido la no conformidad. Cuestionarse  el por qué ha aparecido hasta llegar a la causa origen, la causa raíz que ha llevado a que aparezca ese incumplimiento.
  
      .row.justify-content-center.align-items-center(titulo="Establecimiento de las acciones correctivas")
        .col-md-1
          figure
            img(src='@/assets/curso/tema4/figura5.svg')
        .col-md-10.mb-4.mb-md-0
          p Concretar cómo se va a llevar a cabo esa acción correctiva, qué va a cambiar y quién o quiénes serán los encargados de llevarla a cabo. Debes plantearte si una acción correctiva soluciona todas las causas o se necesitarán una acción correctiva por causa. 

      .row.justify-content-center.align-items-center(titulo="Verificación de la eficacia de las acciones correctivas")
        .col-md-1
          figure
            img(src='@/assets/curso/tema4/figura6.svg')
        .col-md-10.mb-4.mb-md-0
          p.mb-0 Comprobación de que la implementación está funcionando.
          p Se podrá verificar si funcionó la próxima vez que ocurra una situación parecida a la que originó la no conformidad, ahora gracias a la acción correctiva que está implementada, no existe desviación alguna y por tanto no aparece la no conformidad.
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
