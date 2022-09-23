<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up-right")
      .titulo-principal__numero
        span 5
      h1 Presentación de informes
    p(data-aos="fade-up-left") La presentación de informes de acuerdo a los requerimientos de la empresa deberá realizarse con la información obtenida en campo y de acuerdo al análisis que se realice de los datos recolectados en los formatos de registro. Los informes deben ser técnicos, con la información necesaria para dar un acercamiento de la realidad del cultivo y concretos. Un informe muy extenso y de información ambigua no refleja la realidad de las actividades realizadas.
    p(data-aos="fade-up-right") A continuación, mostramos las características y tipos de informes:
    ImagenInfografica.color-secundario.my-5(data-aos="fade-up-right")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema5/figura1.svg')

      .tarjeta.fondo-9.p-3(x="20%" y="5%" numero="+")
        .h5.mb-2 Interpretativo
        p Especializado en el análisis e interpretación de los hechos. Usualmente se utilizan para evaluar la implementación y resultados acerca de técnicas o procedimientos innovadores implementados, sirven a evaluar la viabilidad de las nuevas implementaciones

      .tarjeta.fondo-9.p-3(x="20%" y="76%" numero="+")
        .h5.mb-2 Demostrativo
        p El cual predomina en el ámbito científico. Se enfoca en presentar tesis realizadas por el autor del informe. Se describe cada uno de los pasos realizados y las conclusiones acerca de los resultados obtenidos. Son realizados a partir de una investigación exhaustiva de los hechos.

      .tarjeta.fondo-9.p-3(x="54%" y="38%" numero="+")
        .h5.mb-2 Características de un informe
        p Es elaborado en base de una solicitud, dirigida a un grupo de personas o a un particular quien realiza una evaluación.
        p Se elabora para mostrar una información relevante para la toma de decisiones.
        p Contienen tablas, cuadros, gráficos estadísticos y otras formas, para la clasificación, organización y presentación de los datos.

      .tarjeta.fondo-9.p-3(x="90%" y="37%" numero="+")
        .h5.mb-2 Expositivo
        p Se enfoca en narrar los hechos o secuencia de acontecimientos, pero sin análisis ni interpretaciones personales, por lo tanto, tampoco contiene conclusiones. Se especializa además por contener antecedentes sobre el hecho, que aportan a entender el porqué de su suceso. Es más bien una presentación objetiva de los hechos.   
      
</template>

<script>
export default {
  name: 'Tema5',
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
