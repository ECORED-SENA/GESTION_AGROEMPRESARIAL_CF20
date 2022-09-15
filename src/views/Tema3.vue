<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 3
      h1 Formulación de planes preventivos y correctivos 
    p(data-aos="fade-up-right") Una vez identificado las no conformidades y los problemas existentes dentro del cultivo se deben establecer las medidas de para la corrección y prevención de las no conformidades identificadas en los recorridos. La formulación de los planes debe contener las actividades a realizar y los mecanismos de medición para evaluar las acciones adelantadas con base a los resultados obtenidos.
    p.mb-5(data-aos="fade-up-left") Por lo anterior, es importante definir lo que representan las acciones:
    .row.justify-content-center.mb-4(data-aos="fade-up-right")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.fondo-2
        .row.align-items-center.justify-content-center
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-3.col-3.py-3(data-aos="fade-up-right")
            img.ms-3(src="@/assets/curso/tema3/figura1.svg")
          .col-xxl-10.col-xl-10.col-lg-10.col-md-10.col-sm-9.col-9.py-4.ps-5(data-aos="fade-up-left")
            span.text-bold.mb-0.resaltado Acción correctiva: 
            span es aquella comprendida para eliminar la causa de una no conformidad detectada u otra situación no deseada, con el propósito de evitar que vuelva a ocurrir.
            br
            br
            span.text-bold Existen dos tipos de acciones correctivas
            span , las 
            span.text-bold acciones correctivas inmediatas 
            span que son reactivas y las 
            span.text-bold acciones correctivas preventivas 
            span que son proactivas.
    .row.justify-content-center(data-aos="fade-up-left")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.fondo-2
        .row.align-items-center.justify-content-center
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-3.col-3.py-3(data-aos="fade-up-right")
            img.ms-3(src="@/assets/curso/tema3/figura2.svg")
          .col-xxl-10.col-xl-10.col-lg-10.col-md-10.col-sm-9.col-9.py-4.ps-5(data-aos="fade-up-left")
            span.text-bold.mb-0.resaltado Acción preventiva: 
            span es aquella tomada para eliminar la causa de una no conformidad potencial u otra situación potencialmente indeseable.
            br
            br
            span.text-bold La característica principal de una acción preventiva es que se realiza antes de que una no conformidad aparezca
            span al contrario de las acciones correctivas, que se realizan para corregir una no conformidad expuesta en una evaluación ya sea de control interno o externo.
    .row.justify-content-center.align-items-center.my-5(data-aos="fade-up-right")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12
        p.text-bold.mb-0 Figura 7
        p Diferencia acción correctiva y acción preventiva
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.fondo-10.p-5
        .row.justify-content-center.align-items-center
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12
            img(src="@/assets/curso/tema3/imagen1.svg")
          .col-xxl-6.col-xl-6.col-lg-6.col-md-12
            .row.justify-content-center.mb-3
              .col-9.fondo-blanco
                p.text-center.resaltado.text-bold.mb-0 CORRECCIÓN
                p.text-center.mb-0 Acciones inmediatas tomadas para actuar sobre el 
                  span.text-bold.resaltado EFECTO 
                  span de una desviación.
                p.text-bold.text-center No actúa sobre las causas, sino sobre los efectos.

            .row.justify-content-center.mb-3
              .col-9.fondo-blanco
                p.text-center.resaltadoamarillo.mb-0.text-bold ACCIÓN CORRECTIVA
                span.text-center.mb-0.text-bold.ms-4 RESOLVER 
                span una desviación y evitar la 
                span.resaltadoverde.text-bold.mb-0.ms-3 RECURRENCIA 
                span Actúa sobre las causas.

            .row.justify-content-center
              .col-9.fondo-blanco
                p.text-center.resaltadoamarillo.text-bold.mb-0 ACCIÓN PREVENTIVA
                p.text-center.mb-0 Evitar la aparición de problemas 
                p.text-bold.text-center.resaltadoamarillo POTENCIALES
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 3.1 Identificación de oportunidades de mejora
    p(data-aos="fade-up-left") El conocimiento de cada etapa del proceso de producción es el punto de partida para identificar posibles oportunidades de mejora, lo cual llevado a la etapa práctica y a las evaluaciones realizadas se identificarán los procesos que necesitan acciones de mejora.
    p.mb-5(data-aos="fade-up-right") A continuación, planteamos oportunidades de mejora en actividades agrícolas:
    .row.justify-content-center.align-items-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12
        img.mb-5(data-aos="fade-up-left").nomostrar(src="@/assets/curso/tema3/figura3.svg")
        .row.justify-content-center.nomostrar1(data-aos="fade-up-right")
          .col-md-8.col-10
            h4.text-white.text-center.fondo-rojo.bordesredondeados.p-3 IDENTIFICACIÓN DE OPORTUNIDADES DE MEJORA
        .row.nomostrar1(data-aos="fade-up-left")
          .col-7.fondo-amarillo.p-2
            p.mb-0.text-center.text-bold Métodos Preventivos
        .row.align-items-center.my-3.nomostrar1(data-aos="fade-up-right")
          .col-12.fondo-11.p-4
            span.text-bold Rotación de cultivos: 
            span La diferenciación en el tiempo de los cultivos sembrados en un mismo predio es un medio fundamental y bien conocido para el control preventivo de las malezas, enfermedades y/o plagas.

        .row.align-items-center.nomostrar1(data-aos="fade-up-left")
          .col-12.fondo-11.p-4
            span.text-bold Cultivos de cobertura: 
            span La inclusión de cultivos de cobertura en la rotación entre dos cultivos comerciales es un buen método preventivo que puede ser usado en una estrategia de manejo de malezas.
        .row.nomostrar1.mt-3(data-aos="fade-up-right")
          .col-7.fondo-amarillo.p-2
            p.mb-0.text-center.text-bold Solarización de suelo
        .row.align-items-center.my-3.nomostrar1(data-aos="fade-up-left")
          .col-12.fondo-11.p-4
            span La solarización del suelo es un método preventivo que explota el calentamiento solar para eliminar las malezas y patógenos y reducir así su emergencia. Este método es citado brevemente ya que es motivo de otro capítulo de esta publicación.
        .row.nomostrar1(data-aos="fade-up-right")
          .col-7.fondo-amarillo.p-2
            p.mb-0.text-center.text-bold Sistemas de Labranza
        .row.align-items-center.my-3.nomostrar1(data-aos="fade-up-left")
          .col-12.fondo-11.p-4
            span El principal efecto de la labranza sobre las malezas está relacionado principalmente con el tipo de implemento usado y con la profundidad de la labranza. Estos factores tienen considerable influencia sobre la distribución de las semillas y propágulos de las malezas en todo el perfil del suelo y, por lo tanto, afectan directamente al número de malezas que pueden emerger en un campo.
        .row.nomostrar1(data-aos="fade-up-right")
          .col-7.fondo-amarillo.p-2
            p.mb-0.text-center.text-bold Manejo del residuos de los cultivos
        .row.align-items-center.my-3.nomostrar1(data-aos="fade-up-left")
          .col-12.fondo-11.p-4
            span La labranza de los residuos de los cultivos estimula la germinación de las semillas de las malezas y su emergencia, por lo tanto, es un hecho favorable ya que agota el banco de semillas. Sin embargo, se debe evitar que las malezas que surgen lleguen a formar semillas volviendo de esa manera a restablecer las reservas de semillas en el suelo
        .row.nomostrar1(data-aos="fade-up-right")
          .col-7.fondo-amarillo.p-2
            p.mb-0.text-center.text-bold Métodos culturales
        .row.align-items-center.my-3.nomostrar1(data-aos="fade-up-left")
          .col-12.fondo-11.p-4
            ul.lista-ul
              li.mb-0
                i.fas.fa-check
                | Época de siembra y ordenamiento espacial.
              li.mb-0
                i.fas.fa-check
                |Elección del genotipo del cultivo
              li.mb-0
                i.fas.fa-check
                |Cultivos de cobertura usados como cobertura viva.
              li.mb-0
                i.fas.fa-check
                |Cultivos intercalados 
              li.mb-0
                i.fas.fa-check
                |Fertilización  
        .row.nomostrar1(data-aos="fade-up-right")
          .col-7.fondo-amarillo.p-2
            p.mb-0.text-center.text-bold Manejo del residuos de los cultivos
        .row.align-items-center.my-3.nomostrar1(data-aos="fade-up-left")
          .col-12.fondo-11.p-4
            span La labranza para la preparación de la cama de semillas tiene dos efectos contrastantes: (a) elimina la vegetación emergida después de la primera labranza y, (b) estimula la germinación de las semillas de malezas y la consecuente emergencia de las plántulas gracias a la mezcla del suelo y la reubicación de las semillas en capas menos profundas, además de la presencia de patógenos de enfermedades.
    .row.justify-content-center
      .col-xxl-5.col-xl-6.col-lg-7.col-md-9.col-12
        a.anexo.mb-4(:href="obtenerLink('/downloads/oportunidades_de_mejora.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Identificación de oportunidades de mejora
    p.my-5 El siguiente es un ejemplo de un tipo de este plan de mejoramiento:
    .row.justify-content-center.align-items-center(data-aos="fade-up-right")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12
        p.text-bold.mb-0 Tabla 2
        p Ejemplo formato Plan de Mejoramiento
    .row.justify-content-center.my-5(data-aos="fade-up-left")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-4.fondo-9.p-5.bordesredondeados(data-aos="fade-up-right")
        .tabla-c
          table
            thead.fondo-rojo
              tr
                <th class="text-center bordeheadtabla" style="color: white; font-size:18px;" colspan="5"> Plan de mejoramiento</th>
              tr
                <th class="text-center fondo-rojo" style="color: white; font-size:18px;" rowspan="2"> Actividades para realizar</th>
                <th class="text-center bordeheadtabla fondo-rojo" style="color: white; font-size:18px;" rowspan="2">Indicador</th>
                <th class="text-center fondo-rojo" style="color: white; font-size:18px;" rowspan="2">Responsables de la imprementación</th>
                <th class="text-center bordeheadtabla fondo-rojo" style="color: white; font-size:18px;" colspan="2">Fecha de implementación</th>
              tr
                th.text-white.text-center.fondo-rojo.bordeheadtabla
                  h3 Inicio
                th.text-white.text-center.fondo-rojo.bordeheadtabla
                  h3 Final
            tbody
              tr.altoceldas.fondo-blanco
                td.bordearribayabajo
                td.bordebodytabla
                td.bordebodytabla
                td.bordebodytabla
                td.bordearribayabajo
              tr.altoceldas
                td.bordearribayabajo
                td.bordebodytabla
                td.bordebodytabla
                td.bordebodytabla
                td.bordearribayabajo
        .tabla-c(data-aos="fade-up-right")
          table
            thead.fondo-rojo
              <td class="text-center bordeheadtabla" style="color: white; font-size:18px;" colspan="3">Aprobación del Plan de Mejoramiento</td>
            tbody
              tr.altoceldas.fondo-15
                td.bordebodytabla.anchocol Nombre
                td.bordebodytabla.anchocol Cargo
                td.bordebodytabla.anchocol Fecha
        .row.justify-content-end
          .col-xxl-6.col-xl-8.col-lg-9.col-md-11.col-sm-12.col-12
            p.me-0.pe-0.mt-3 Nota: Diseño realizado con base a un modelo tomado de internet
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 3.2 Socialización de planes correctivos
    p(data-aos="fade-up-left") La socialización de los planes formulados con base a los hallazgos encontrados en los procesos de producción con el personal a cargo es primordial, ya que de esta manera el recurso humano estará contextualizado de las actividades a realizar y con la identificación de la problemática.
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-up-right")
        img.mb-5.nomostrar(src="@/assets/curso/tema3/imagen2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-left")
        p.fondo-2.p-5 La socialización como primera medida deberá realizar un recuento de cada proceso y de las actividades que actualmente se realizan, de esta manera se familiariza al personal sobre las etapas de la producción del producto de la empresa. Posterior a ello, se aborda las acciones que están generando inconformidades explicando sus causas y las consecuencias que estas están ocasionando a la productividad para que finalmente se explique los procedimientos que se van adelantar para la corrección de esas situaciones.

    p.mb-5.fondo-verde.px-5.py-4(data-aos="fade-up-right") Los procesos por los cuales se les comparte o brinda información a los colaboradores de la industria, deben ser guiados por personal capacitado que conozca la información técnica y que tenga la capacidad de compartir sus conocimientos de una manera clara y sencilla, con el objeto de que el emisor comprenda que las actividades socializadas van encaminadas al mejoramiento de las actividades que presentan una anomalía que debe ser corregida.
    p(data-aos="fade-up-left") Para facilitar el entendimiento de las actividades es recomendable que el ambiente donde se realice la socialización sea ameno, preferiblemente donde el personal esté cómodo, con buena iluminación, apoyado por el uso de herramientas ofimáticas y de cuadros e imágenes para mayor comprensión.
    .row.justify-content-center.align-items-center.my-5
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12(data-aos="fade")
        p.text-bold.mb-0 Figura 8
        p Socialización de actividades
      .col-lg-8.col-12(data-aos="fade")
        img.mb-5(src="@/assets/curso/tema3/imagen3.jpg")
</template>

<script>
export default {
  name: 'Tema3',
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
