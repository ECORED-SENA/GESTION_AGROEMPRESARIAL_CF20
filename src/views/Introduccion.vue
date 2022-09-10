<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La tecnificación de los procesos en las actividades de producción agrícola, incorpora diversas soluciones avanzadas que le permiten ser más eficientes y mejoran la calidad de los cultivos. 
      span.text-bold.resaltado La importancia de un seguimiento puntual de todas las actividades, permite que se logre maximizar la producción y detectar una no conformidad potencial. 
      span Partiendo De lo anterior, veamos un video introductorio de este componente formativo:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
