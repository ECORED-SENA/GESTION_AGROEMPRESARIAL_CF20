<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up-right")
      .titulo-principal__numero
        span 1
      h1 Evaluación de parámetros técnicos
    .row.ampliar.fondo-1.px-5
      .col-xl-12(data-aos="fade-up-right")
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
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
          h2 1.1 Estado sanitario del cultivo
        p.mb-5(data-aos="fade-up-left") El reconocimiento del tipo de cultivo y de las actividades desarrolladas nos brinda un primer acercamiento a las necesidades propias de granja en términos sanitarios, ya que nos da 
          span.text-bold una visión cercana a las posibles afectaciones sanitarias que se pueden presentar de acuerdo a las condiciones físicas, climáticas y las plagas o enfermedades potenciales para el cultivo.
        img(data-aos="fade-up-right")(src='@/assets/curso/tema1/imagen2.jpg')
        p.my-5(data-aos="fade-up-left") Es importante tener en cuenta que las acciones para 
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
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
          h2 1.2 Estado fisiológico
    span.text-bold(data-aos="fade-up-left") El estudio de los estados fisiológicos de un cultivo es una herramienta que facilita la aplicación de tecnologías en aras de mejorar la productividad
    span , en otras palabras, en conocimiento de la interacción de los componentes biológicos y físicos climáticos del cultivo y la zona en que se localiza garantizará la aplicación de acciones encaminadas al éxito en la producción.
    .cajon.color-acento-contenido.p-5.my-4.fondo-6(data-aos="fade-up-right")
      span.text-bold El avance en el sector agrícola en la mejora biológica de los cultivos para el aumento de la producción y por ende las ganancias del sector se direccionan al uso de productos transgénicos (organismo genéticamente modificado) que han sido desarrollados en laboratorio con el objeto de potenciar la producción
      span . Si en nuestro cultivo se encuentran este tipo de organismos hay que identificar su potencialidad y sus debilidades, ya que al ser más resistente a ciertas condiciones también puede ser más susceptible a ciertas afectaciones de acuerdo a la zona y a las condiciones climáticas.
    p.text-bold.mb-0(data-aos="fade-up-right") Figura 2
    span Principales productos transgénicos producidos a nivel mundial
    .row.justify-content-center.my-5
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-4.fondo-5(data-aos="fade-up-right")
        .row.justify-content-center
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img(src="@/assets/curso/tema1/maiz.png")
            p.mt-3.text-center Maíz
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img(src="@/assets/curso/tema1/soja.png")
            p.mt-3.text-center Soja
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img(src="@/assets/curso/tema1/algodon.png")
            p.mt-3.text-center Algodón
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img(src="@/assets/curso/tema1/papaya.png")
            p.mt-3.text-center Papaya
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img(src="@/assets/curso/tema1/arroz.png")
            p.mt-3.text-center Arroz
        .row.justify-content-center
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img(src="@/assets/curso/tema1/aceite.png")
            p.mt-3.text-center Aceite de colza
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img(src="@/assets/curso/tema1/papas.png")
            p.mt-3.text-center Patatas
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img(src="@/assets/curso/tema1/tomates.png")
            p.mt-3.text-center Tomates
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img(src="@/assets/curso/tema1/lacteos.png")
            p.mt-3.text-center Derivados Lácteos
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-6.col-6
            img(src="@/assets/curso/tema1/granos.png")
            p.mt-3.text-center Guisantes
    .cajon.color-acento-contenido.p-4.mb-4.fondo-6
      span.text-bold El avance en el sector agrícola en la mejora biológica de los cultivos para el aumento de la producción y por ende las ganancias del sector se direccionan al uso de productos transgénicos (organismo genéticamente modificado) que han sido desarrollados en laboratorio con el objeto de potenciar la producción. 
      span Si en nuestro cultivo se encuentran este tipo de organismos hay que identificar su potencialidad y sus debilidades, ya que al ser más resistente a ciertas condiciones también puede ser más susceptible a ciertas afectaciones de acuerdo a la zona y a las condiciones climáticas.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 1.3 Ejecución de labores culturales
    span(data-aos="fade-up-right") En el campo colombiano y gracias a su diversidad cultural se aplican diferentes técnicas agrícolas que han ido trascendiendo de generación en generación. 
    span.text-bold   Estas técnicas están relacionadas con el conocimiento ancestral de las comunidades y por ende su preservación es importante.
    .row.justify-content-center.mt-5
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-4(data-aos="fade-up-right")
        img(src="@/assets/curso/tema1/imagen4.png")
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12(data-aos="fade-up-left")
        .cajon.color-acento-contenido.p-4.mb-3.fondo-2
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
    p.text-bold.mb-0.mt-5(data-aos="fade-up-right") Figura 3
    span Ventajas de las labores culturales
    .row.justify-content-center.mt-5
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.mb-4.fondo-blanco(data-aos="fade-up-right")
        img(src="@/assets/curso/tema1/figura1.svg")
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 1.4 Cálculo de rendimientos
    p(data-aos="fade-up-left") El cálculo de los rendimientos 
      span.text-bold es un indicador que muestra si la actividad agrícola es rentable
      span . Los factores para el cálculo de rendimiento de acuerdo al producto son los precios de los insumos agrícolas, la variación de los precios de los productos, el costo de la maquinaria y los factores externos: variación de la moneda, demanda de los productos.
    p(data-aos="fade-up-right") A continuación, se mencionan criterios dependiendo el producto:
    h4.text-center(data-aos="fade-up-left") CÁLCULO DE RENDIMIENTOS DE ACUERDO AL PRODUCTO
    .row.justify-content-center.mt-4
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-2(data-aos="fade-up-right")
        .tarjeta-avatar-b.mb-3.sizeavatar
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/frutales.svg')
          .tarjeta.fondo-2
            .p-4
              h4 1. Frutales
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

      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-2(data-aos="fade-up-left")
        .tarjeta-avatar-b.mb-3.sizeavatar
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/hortalizas.svg')
          .tarjeta.fondo-2
            .p-4
              h4 2. Hortalizas Unitarias
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Estimar el número de plantas por Hectáreas Peso de cada una de ellas

    .row.justify-content-center.mb-4
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-2(data-aos="fade-up-right")
        .tarjeta-avatar-b.mb-3.sizeavatar
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/horticulas.svg')
          .tarjeta.fondo-2
            .p-4
              h4 3. Hortículas que fortifican
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
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-2(data-aos="fade-up-left")
        .tarjeta-avatar-b.mb-3.sizeavatar
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/cebollas.svg')
          .tarjeta.fondo-2
            .p-4
              h4 4. Cultivos de grano
              ul.lista-ul
                li.mb-0 
                  i.fas.fa-angle-right
                  | Número de espigas por planta
                li.mb-0
                  i.fas.fa-angle-right
                  | Número de plantas por Hectárea (espigas por Hectárea)
                li.mb-0 
                  i.fas.fa-angle-right
                  | Peso de mil gramos
    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 1.5 Calidad de la producción
    img(data-aos="fade-up-left").my-5(src='@/assets/curso/tema1/imagen5.jpg')
    p(data-aos="fade-up-right") De acuerdo a la 
      span.text-bold Norma ISO 9001
      span , la calidad tiene que encontrarse presente a lo largo de todo el proceso de producción. 
      span.text-bold Es esencial generar la suficiente confianza respecto al cumplimiento de los requisitos de calidad y asegurar la eficiencia en la producción de la organización.

    p.mb-5(data-aos="fade-up-left") Para garantizar la calidad, es importante aplicar los siguientes principios:
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
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 1.6 Listas de chequeo 
    p(data-aos="fade-up-left") Las listas de chequeo 
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
      .col-10(data-aos="fade-up-right")
        p.text-bold.mb-0.mt-5 Figura 4
        span Pasos para elaborar una lista de chequeo
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.my-4.fondo-7(data-aos="fade-up-right")
        .tarjeta-avatar-b.mb-5.sizeavatar1.mt-5.me-4
          .tarjeta-avatar-b__img
            img.sizeimg(src='@/assets/curso/tema1/icono3.svg')
          .tarjeta.fondo-2
            .py-4.ps-0
              h4.resaltado.mb-2.me-3 Determinar ¿Qué se quiere evaluar?
              p.mb-0 Enfoque del proceso. 
              p Tener claridad de las partes de cada proceso. 

        .tarjeta-avatar-b.mb-5.sizeavatar1.me-4
          .tarjeta-avatar-b__img
            img.sizeimg(src='@/assets/curso/tema1/icono4.svg')
          .tarjeta.fondo-2
            .py-4.ps-0
              h4.resaltado.mb-2 Diseñar formatos de verificación
              p.mb-0.me-3 Asegurar que todas las partes de la lista de chequeo estén claramente descritas.
              p Garantizar que el formato sea claro y fácil de usar.

        .tarjeta-avatar-b.mb-5.sizeavatar1.me-4
          .tarjeta-avatar-b__img
            img.sizeimg(src='@/assets/curso/tema1/icono5.svg')
          .tarjeta.fondo-2
            .py-4.ps-0
              h4.resaltado.mb-2 Toma de información
              p.mb-0 Variación en los tiempos de diligenciamiento. 
              p Los tiempos de información,  deben ser suficientes y la información debe ser acertada para el proceso de evaluación.

        .tarjeta-avatar-b.mb-5.sizeavatar1.me-4
          .tarjeta-avatar-b__img
            img.sizeimg(src='@/assets/curso/tema1/icono6.svg')
          .tarjeta.fondo-2
            .py-4.ps-0
              h4.resaltado.mb-2 Registro con base de datos
              p.mb-0.me-3 El encargado de la recolección de los datos debe tomarlos en tiempo real.
              p Dedicación de tiempo necesario para la actividad.

        .row.justify-content-end.align-items-right
          .col-xxl-9.col-xl-11.col-lg-12
            p.ms-5.ms-lg-0 Tomado de la página de Nuevas normas ISO, Escuela europea de excelencia; https://www.nueva-iso-9001-2015.com/2022/06/checklist-para-controlar-sistema-gestion-de-calidad-sector-industrial/
    .row.justify-content-center.align-items-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12(data-aos="fade-up-right")
        p.my-5 Veamos un modelo de lista de chequeo:
        p.text-bold.mb-0 Tabla 1
        p Ejemplo de modelo de lista de chequeo
        .tabla-c
          table
            thead.fondo-rojo
              tr
                <th class="text-center bordeheadtabla" style="color: white; font-size:18px;" rowspan="2"> Ítem</th>
                <th class="text-center" style="color: white; font-size:18px;" rowspan="2">Descripción</th>
                <th class="text-center bordeheadtabla" style="color: white; font-size:18px;" colspan="2">Criterio</th>
                <th class="text-center" style="color: white; font-size:18px;" rowspan="2"> Observación</th>
              tr
                th.text-white.text-center.fondo-rojo.bordeheadtabla
                  h3 Cumple
                th.text-white.text-center.fondo-rojo.bordeheadtabla
                  h3 No Cumple
            tbody
              tr.altoceldas
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
    p.mt-5 Hay variedad de modelos de formato de lista de chequeo, lo importante es identificar qué se quiere evaluar para poder plasmar la información y realizar un análisis de la información recolectada, entre más sencilla sea más fácil y práctica será más práctica de entender por los operarios 
    separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 1.7 Registros
    p.mb-5(data-aos="fade-up-left") Dentro de las empresas agrícolas los registros 
      span.text-bold se utilizan con la finalidad de llevar un control acerca de cualquier gestión sobre los cultivos
      span , es por ello que los registros son una de las principales herramientas, necesarias en el manejo de información, 
      span.text-bold su utilización sirve de base para el análisis de los resultados técnico-económicos de las unidades de producción
      span , proporcionando un medio de control y mejora la eficiencia administrativa de las empresas agropecuarias.      
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/imagen8.jpg')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-up-right")
        .row.justify-content-center
          .col-12.fondo-2.px-5.py-4
            span.resaltado.text-bold En el desarrollo de las actividades agrícolas de la granja se presentan situaciones que son repetitivas 
            span y que generan un ciclo, esto provoca que las actividades sean rutinarias y en ocasiones puede parecer que se han realizado precisamente por la repetición diaria de la actividad, 
            span.resaltado.text-bold es por ello que registrar en un formato diario o una lista de chequeo de las actividades realizadas garantizará que todas las actividades se ejecuten.
          .col-12.fondo-6.px-5.py-4.mt-4
            span.text-bold Los registros agrícolas son útiles a los productores porque permite conocer los datos que podrían dar el éxito económico de su negocio
            span , facilita la presentación de datos para investigaciones de campo a fin de trazar políticas de desarrollo y ayuda a detectar los puntos débiles del negocio agropecuario.
    .row.justify-content-center.align-items-center
      .col-10(data-aos="fade-up-left")
        p.my-5 Veamos un modelo de lista de chequeo:
        p.text-bold.mb-0 Figura 5 
        p Registros relacionados con la producción
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.my-4.fondo-7(data-aos="fade-up-right")
        .row.justify-content-center.px-5
          .col-md-2.col-sm-4.col-6.mb-3
            img(src='@/assets/curso/tema1/registro1.svg')
          .col-md-10.col-sm-12.col-12
            .row
              .col-xxl-4.col-xl-5.col-lg-6.col-sm-9.col-11
                h4.text-white.text-center.mb-0.fondo-rojo.borde-rojo.puntaredondeada.p-2 Hoja de ruta
              .col-12
                p.mt-4 La hoja de ruta es un documento en el que se especifican las operaciones necesarias para un bien.
          hr
        .row.justify-content-center.px-5
          .col-md-2.col-sm-4.col-6.mb-3
            img(src='@/assets/curso/tema1/registro2.svg')
          .col-md-10.col-sm-12.col-12
            .row
              .col-xxl-4.col-xl-5.col-lg-6.col-sm-9.col-11
                h4.text-white.text-center.mb-0.fondo-rojo.borde-rojo.puntaredondeada.p-2 Hoja de instrucciones
              .col-12
                p.mt-4 En la hoja de ruta se especifica la secuencia de las operaciones del proceso y una breve descripción de estas.
          hr
        .row.justify-content-center.px-5
          .col-md-2.col-sm-4.col-6.mb-3
            img(src='@/assets/curso/tema1/registro3.svg')
          .col-md-10.col-sm-12.col-12
            .row
              .col-xxl-4.col-xl-5.col-lg-6.col-sm-9.col-11
                h4.text-white.text-center.mb-0.fondo-rojo.borde-rojo.puntaredondeada.p-2 Hoja de materiales
              .col-12
                p.mt-4 Es el documento que sirve para designar todos los materiales necesarios para realizar el trabajo referido en la hoja de ruta.
          hr
        .row.justify-content-center.px-5
          .col-md-2.col-sm-4.col-6.mb-3
            img(src='@/assets/curso/tema1/registro4.svg')
          .col-md-10.col-sm-12.col-12
            .row
              .col-xxl-4.col-xl-5.col-lg-6.col-sm-9.col-11
                h4.text-white.text-center.mb-0.fondo-rojo.borde-rojo.puntaredondeada.p-2 Ficha de trabajo
              .col-12
                p.mt-4 Tiene como función el ordenar la ejecución concreta de una operación incluida en una hoja de ruta, es decir, es un parte de trabajo para el operario donde se refleja una operación a realizar de una orden de producción.
          hr
        .row.justify-content-center.px-5
          .col-md-2.col-sm-4.col-6.mb-3
            img(src='@/assets/curso/tema1/registro5.svg')
          .col-md-10.col-sm-12.col-12
            .row
              .col-xxl-4.col-xl-5.col-lg-6.col-sm-9.col-11
                h4.text-white.text-center.mb-0.fondo-rojo.borde-rojo.puntaredondeada.p-2 Planos de trabajo
              .col-12
                p.mt-4 Son documentos fundamentales y básicos, para la preparación y elaboración del trabajo, ya que definen qué hay que hacer.
          hr
    separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 1.8 Diligenciamiento de registros
    p.mb-5(data-aos="fade-up-left") El diligenciamiento de los registros debe ser adelantado por el supervisor de la granja o quien este designe para la actividad. Esta persona deberá tener el conocimiento previo del proceso y de cada ítem de toma de datos para que no existan vacíos en la información. La periodicidad de la toma de datos la definen en los mapas de proceso, los cuales tienen descritas las etapas de producción. Veamos un ejemplo de formato de registro:
    .row.justify-content-center.align-items-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12(data-aos="fade")
        p.text-bold.mb-0 Figura 6
        p Ejemplo de formato de registro 
        img(src='@/assets/curso/tema1/imagen9.svg')
        .row.justify-content-end.align-items-right
          .col-xxl-9.col-xl-11.col-lg-12
            p.ms-5.ms-lg-0 Tomado del sitio web https://pbs.twimg.com/media/Ct5E4RjWAAIHvAO?format=jpg&name=small



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
