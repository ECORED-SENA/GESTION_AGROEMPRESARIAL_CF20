<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Evaluación de parámetros técnicos
    .row.ampliar.fondo-1.px-5
      .col-xl-12
        p En los sistemas agrícolas la implementación de tecnologías para la mejora en la producción es cada vez mayor, teniendo en cuenta las oportunidades de crecimiento que estas brindan al cultivo, además 
          span.text-bold permiten el seguimiento a cada proceso a través de evaluaciones técnicas que arrojan resultados reales 
          span de la operación en cada uno de los niveles de producción. 
        .row.justify-content-center
          .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-4(data-aos="fade-up-right")
            .cajon.color-acento-contenido.p-5.mb-4.fondo-2
              p En toda evaluación es necesario el análisis de los indicadores y que estos sean relevantes, para así poder emitir un concepto real del estado del cultivo.
              span.text-bold.resaltado El objetivo principal de la realización de una evaluación técnica a las actividades de producción, es medir la calidad de los productos finales y realizar un balance de los resultados obtenidos
              span , con los teóricos plasmados desde la planificación de la actividad agrícola.
          .col-xxl-5.col-xl-5.col-lg-5.col-md-12(data-aos="fade-up-left")
            img(src='@/assets/curso/tema1/imagen1.jpg')
        separador
        #t_1_1.titulo-segundo.color-acento-contenido
          h2 1.1 Estado sanitario del cultivo
        p.mb-5 El reconocimiento del tipo de cultivo y de las actividades desarrolladas nos brinda un primer acercamiento a las necesidades propias de granja en términos sanitarios, ya que nos da 
          span.text-bold una visión cercana a las posibles afectaciones sanitarias que se pueden presentar de acuerdo a las condiciones físicas, climáticas y las plagas o enfermedades potenciales para el cultivo.
        img(src='@/assets/curso/tema1/imagen2.jpg')
        p.my-5 Es importante tener en cuenta que las acciones para 
          span.text-bold el control de las enfermedades y las plagas deben estar regidas por la normatividad vigente y por tanto, el uso de los plaguicidas y demás productos químicos deben estar autorizados por las autoridades sanitarias del país
          span , ya que los usos de productos no autorizados pueden acarrear consecuencias graves para el cultivo y penales para la empresa.
        .row.justify-content-center
          .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-4(data-aos="fade-up-right")
            .tarjeta.fondo-3.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/tema1/icono1.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p Recomendaciones del 
                        span.text-bold uso de productos químicos por el Ministerio de Ambiente 
                        span e indagar las causas y efectos de los plaguicidas en los cultivos objeto de estudio 
                    .col-sm-auto
                      a.boton.fondo-4(href="https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/sustancias-quimicas" target="_blank")
                        span.pe-5 Ver
                        i.fas.fa-link
            p.text-bold.mb-0 Figura 1
            span Afectación de plagas en cítricos
            img(src="@/assets/curso/tema1/imagen3.png")
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Estado fisiológico
    span.text-bold El estudio de los estados fisiológicos de un cultivo es una herramienta que facilita la aplicación de tecnologías en aras de mejorar la productividad
    span , en otras palabras, en conocimiento de la interacción de los componentes biológicos y físicos climáticos del cultivo y la zona en que se localiza garantizará la aplicación de acciones encaminadas al éxito en la producción.
    p.text-bold.mb-0.mt-5 Figura 2
    span Principales productos transgénicos producidos a nivel mundia
    .row.justify-content-center.my-5
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-4.fondo-5(data-aos="fade-up-right")
        .row.justify-content-center
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img.sombra(src="@/assets/curso/tema1/maiz.png")
            p.mt-3.text-center Maíz
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img.sombra(src="@/assets/curso/tema1/soja.png")
            p.mt-3.text-center Soja
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img.sombra(src="@/assets/curso/tema1/algodon.png")
            p.mt-3.text-center Algodón
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img.sombra(src="@/assets/curso/tema1/papaya.png")
            p.mt-3.text-center Papaya
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img.sombra(src="@/assets/curso/tema1/arroz.png")
            p.mt-3.text-center Arroz
        .row.justify-content-center
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img.sombra(src="@/assets/curso/tema1/aceite.png")
            p.mt-3.text-center Aceite de colza
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img.sombra(src="@/assets/curso/tema1/papas.png")
            p.mt-3.text-center Patatas
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img.sombra(src="@/assets/curso/tema1/tomates.png")
            p.mt-3.text-center Tomates
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img.sombra(src="@/assets/curso/tema1/lacteos.png")
            p.mt-3.text-center Derivados Lácteos
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img.sombra(src="@/assets/curso/tema1/granos.png")
            p.mt-3.text-center Guisantes
    .cajon.color-acento-contenido.p-5.mb-4.fondo-6
      span.text-bold El avance en el sector agrícola en la mejora biológica de los cultivos para el aumento de la producción y por ende las ganancias del sector se direccionan al uso de productos transgénicos (organismo genéticamente modificado) que han sido desarrollados en laboratorio con el objeto de potenciar la producción
      span . Si en nuestro cultivo se encuentran este tipo de organismos hay que identificar su potencialidad y sus debilidades, ya que al ser más resistente a ciertas condiciones también puede ser más susceptible a ciertas afectaciones de acuerdo a la zona y a las condiciones climáticas.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Ejecución de labores culturales
    span En el campo colombiano y gracias a su diversidad cultural se aplican diferentes técnicas agrícolas que han ido trascendiendo de generación en generación. 
    span.text-bold   Estas técnicas están relacionadas con el conocimiento ancestral de las comunidades y por ende su preservación es importante.
    .row.justify-content-center.mt-5
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-4(data-aos="fade-up-right")
        img(src="@/assets/curso/tema1/imagen4.png")
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12(data-aos="fade-up-left")
        .cajon.color-acento-contenido.p-5.mb-4.fondo-2
          p Aunque en ocasiones estas técnicas ancestrales no son tan efectivas a comparación de las tecnologías de vanguardia, 
            span.text-bold.resaltado es importante conocerlas, ya que una situación es la que se enmarca en la teoría y otra es la que se encuentra en la práctica.
        p El avance tecnológico y los conocimientos ancestrales deben ser aprovechados por la parte técnica de la granja para que 
          span.text-bold su implementación asegure la producción; además, se debe aplicar la normatividad vigente y proteger los ecosistemas aledaños. 
    .row.justify-content-center.fondo-6.p-4.align-items-center
      .col-xxl-1.col-xl-1.col-lg-1.col-md-2.col-sm-2.col-3.mb-4(data-aos="fade-up-right")
        img(src="@/assets/curso/tema1/icono2.svg")
      .col-xxl-11.col-xl-11.col-lg-11.col-md-10.col-sm-10.col-9(data-aos="fade-up-left")
        span.text-bold.mb-0 Un ejemplo de las labores culturales en cultivos en Colombia es la producción de plátano
        span.mb-0 , en las huertas caseras en pequeños espacios en el hogar. Es común ver a campesinos realizando, descapotando, deshojando, desmonte, embolsado de racimo, entre otras para mantener la sanidad y la calidad del plátano. Estas actividades son puntuales y repetitivas, sin embargo, si se dejan de realizar se corre el riesgo de perder la producción.
    p.text-bold.mb-0.mt-5 Figura 3
    span Ventajas de las labores culturales
    .row.justify-content-center.mt-5
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-4.fondo-blanco(data-aos="fade-up-right")
        img(src="@/assets/curso/tema1/figura1.svg")
    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Cálculo de rendimientos
    p El cálculo de los rendimientos 
      span.text-bold es un indicador que muestra si la actividad agrícola es rentable
      span . Los factores para el cálculo de rendimiento de acuerdo al producto son los precios de los insumos agrícolas, la variación de los precios de los productos, el costo de la maquinaria y los factores externos: variación de la moneda, demanda de los productos.
    p A continuación, se mencionan criterios dependiendo el producto:
    h4.text-center CÁLCULO DE RENDIMIENTOS DE ACUERDO AL PRODUCTO
    .row.justify-content-center.my-4
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-4(data-aos="fade-up-right")
        .tarjeta-avatar-b.mb-5.sizeavatar
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/frutales.svg')
          .tarjeta.fondo-2
            .p-4
              h2 1. Frutales
              ul.lista-ul
                li.mb-0 
                  i.fas.fa-angle-right
                  | Número de frutos variables por cada árbol
                li.mb-0
                  i.fas.fa-angle-right
                  | Peso de cada fruto
                li
                  i.fas.fa-angle-right
                  | Número de árboles por Hectárea

      .col-xxl-5.col-xl-5.col-lg-5.col-md-12(data-aos="fade-up-left")
        .tarjeta-avatar-b.mb-5.sizeavatar
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/hortalizas.svg')
          .tarjeta.fondo-2
            .p-4
              h2 2. Hortalizas Unitarias
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Estimar el número de plantas por Hectáreas Peso de cada una de ellas

    .row.justify-content-center.mb-4
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-4(data-aos="fade-up-right")
        .tarjeta-avatar-b.mb-5.sizeavatar
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/horticulas.svg')
          .tarjeta.fondo-2
            .p-4
              h2 3. Hortículas que fortifican
              h2
              ul.lista-ul
                li.mb-0 
                  i.fas.fa-angle-right
                  | Número de frutos comestibles por planta
                li.mb-0
                  i.fas.fa-angle-right
                  | Número de plantas por Hectárea
                li.mb-0
                  i.fas.fa-angle-right
                  | Peso de cada fruto comestible
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12(data-aos="fade-up-left")
        .tarjeta-avatar-b.mb-5.sizeavatar
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/cebollas.svg')
          .tarjeta.fondo-2
            .p-4
              h2 4. Cultivos de grano
              ul.lista-ul
                li.mb-0 
                  i.fas.fa-angle-right
                  | Número de espigas por planta
                li.mb-0
                  i.fas.fa-angle-right
                  | Número de plantas por Hectárea (é espigas por Hectárea)
                li.mb-0 
                  i.fas.fa-angle-right
                  | Peso de mil gramos
    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Calidad de la producción
    img.my-5(src='@/assets/curso/tema1/imagen5.jpg')
    p De acuerdo a la 
      span.text-bold Norma ISO 9001
      span , la calidad tiene que encontrarse presente a lo largo de todo el proceso de producción. 
      span.text-bold Es esencial generar la suficiente confianza respecto al cumplimiento de los requisitos de calidad y asegurar la eficiencia en la producción de la organización.

    p.mb-5 Para garantizar la calidad, es importante aplicar los siguientes principios:
    .row.justify-content-center
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-4(data-aos="fade-up-right")
        LineaTiempoD.color-primario
          p(numero="1" titulo="Liderazgo") Los líderes establecen la unidad, propósito y la orientación del proceso de producción.
          
          p(numero="2" titulo="Compromiso de las personas") Competencia, facultades e implicación del personal.
          
          p(numero="3" titulo="Enfoque a procesos") Cuando las actividades a realizar y los recursos necesarios se gestionan como un proceso.
          
          p(numero="4" titulo="Mejora continua") Se basa en la idea de que un flujo permanente de pequeñas mejoras, ejecutadas de forma ininterrumpida, tendrá resultados transformadores.

          p(numero="5" titulo="Toma de decisiones basada en evidencias") Para alcanzar la excelencia, se deben tomar decisiones basadas en información confiable y real.

          p(numero="6" titulo="Gestión de las relaciones") Que permita la mejora continua sostenible tanto de la empresa como del cliente.

          p(numero="7" titulo="Enfoque al cliente") El éxito de una organización se alcanza cuando atrae y retiene la confianza de los clientes.

      .col-xxl-5.col-xl-5.col-lg-5.col-md-12(data-aos="fade-up-left")
        img(src='@/assets/curso/tema1/imagen6.jpg')
    separador
    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6 Listas de chequeo 
    p Las listas de chequeo 
      span.text-bold son formatos que se utilizan para controlar las actividades que se realizan de manera repetitiva durante una jornada o ciclo productivo, su función básicamente es brindar un panorama acertado o real sobre el desempeño tanto de los operarios como del funcionamiento de las instalaciones, maquinaria y equipos que se emplean para el desarrollo de la producción
      span , se considera como un formato de diagnóstico o evaluación según se requiera.
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4.fondo-6.px-5.py-4(data-aos="fade-up-right")
        p Para el diseño de las listas de chequeo 
          span.resaltado.text-bold es importante identificar qué se va a evaluar, analizar o medir para así determinar el número de ítems que se requieren para una acertada recolección de datos o información
          span ; ejemplos del contenido de una lista de chequeo son:
        ul.lista-ul
          li.mb-0 
            i.fas.fa-check
            | Número de ítems, 
          li.mb-0 
            i.fas.fa-check
            | Descripción de cada ítem, 
          li.mb-0 
            i.fas.fa-check
            | Criterio de evaluación cumple o no cumple 
          li.mb-0 
            i.fas.fa-check
            | Observaciones.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-left")
        img(src='@/assets/curso/tema1/imagen7.jpg')
    .row.justify-content-center.align-items-center
      .col-10
        p.text-bold.mb-0.mt-5 Figura 4
        span Pasos para elaborar una lista de chequeo
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.my-4.fondo-7(data-aos="fade-up-right")
        .tarjeta-avatar-b.mb-5.sizeavatar1.mt-5.me-4
          .tarjeta-avatar-b__img
            img.sizeimg(src='@/assets/curso/tema1/icono3.svg')
          .tarjeta.fondo-2
            .py-4.ps-0
              h2.resaltado.mb-2 Determinar ¿Qué se quiere evaluar?
              p.mb-0 Enfoque del proceso. 
              p Tener claridad de las partes de cada proceso. 

        .tarjeta-avatar-b.mb-5.sizeavatar1.me-4
          .tarjeta-avatar-b__img
            img.sizeimg(src='@/assets/curso/tema1/icono4.svg')
          .tarjeta.fondo-2
            .py-4.ps-0
              h2.resaltado.mb-2 Diseñar formatos de verificación
              p.mb-0 Asegurar que todas las partes de la lista de chequeo estén claramente descritas.

        .tarjeta-avatar-b.mb-5.sizeavatar1.me-4
          .tarjeta-avatar-b__img
            img.sizeimg(src='@/assets/curso/tema1/icono5.svg')
          .tarjeta.fondo-2
            .py-4.ps-0
              h2.resaltado.mb-2 Toma de información
              p.mb-0 Variación en los tiempos de diligenciamiento. 
              p Los tiempos de información,  deben ser suficientes y la información debe ser acertada para el proceso de evaluación.

        .tarjeta-avatar-b.mb-5.sizeavatar1.me-4
          .tarjeta-avatar-b__img
            img.sizeimg(src='@/assets/curso/tema1/icono6.svg')
          .tarjeta.fondo-2
            .py-4.ps-0
              h2.resaltado.mb-2 Registro con base de datos
              p El encargado de la recolección de los datos debe tomarlos en tiempo real.
        .row.justify-content-end
          .col-xxl-3.col-xl-4.col-lg-5.col-md-6.col-sm-7.col-8
            p Nota. https://bit.ly/3aJOmHK
</template>

<script>
export default {
  name: 'Tema1',
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
