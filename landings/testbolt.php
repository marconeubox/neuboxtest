<?php
require_once __DIR__ . '/../../assets/mix.php';
require_once __DIR__ . '/../../helpers/CSRF_IMPORT.php';
?>
<!DOCTYPE html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <?= $csrf->printMeta() ?>
    <title>Viajes al Espacio - Hospedando</title>
    <meta name="description" content="Explora nuestra landing de viajes al espacio con tecnología de punta.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Estilos base del sitio (como en tus páginas actuales) -->
    <link href="../../layout/css/flexslider.min.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="../../layout/css/line-icons.min.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="../../layout/css/elegant-icons.min.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="../../layout/css/lightbox.min.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="../../layout/css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="<?= mix('../../layout/css/estilo.css') ?>" rel="stylesheet" type="text/css" media="all"/>
    <link href="<?= mix('../../layout/css/custom.css') ?>" rel="stylesheet" type="text/css" media="all"/>

    <!-- Head prerenderizado de Astro para esta landing (incluye CSS/JS necesarios) -->
    <?php @include __DIR__ . '/../magical-main/dist/_astro'; ?>

    <script src="../../layout/js/modernizr-2.6.2-respond-1.1.0.min.js"></script>
  </head>
  <body>
    <!-- Header -->
    <?php include("../../menu.php"); ?>

    <div class="main-container">
      <!-- Contenido prerenderizado de Astro (SSR) -->
      <?php @include __DIR__ . '/../magical-main/dist/space-travel/index.html'; ?>
    </div>

    <!-- Footer -->
    <?php include("../../pie.php"); ?>

    <!-- JS base del sitio -->
    <script src="../../layout/js/jquery.min.js"></script>
    <script src="../../layout/js/jquery.plugin.min.js"></script>
    <script src="../../layout/js/bootstrap.min.js"></script>
    <script src="../../layout/js/jquery.flexslider-min.js"></script>
    <script src="../../layout/js/smooth-scroll.min.js"></script>
    <script src="../../layout/js/skrollr.min.js"></script>
    <script src="<?= mix('../../layout/js/scripts.js') ?>"></script>
    <script src="../../layout/js/scrollReveal.min.js"></script>
    <script src="../../layout/js/isotope.min.js"></script>
    <script src="../../layout/js/lightbox.min.js"></script>

    <!-- Scripts de Astro necesarios ya vienen referenciados desde el head/body prerenderizados -->
  </body>
</html>