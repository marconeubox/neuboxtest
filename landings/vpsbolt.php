<?php
require_once __DIR__ . '/assets/mix.php';
require_once __DIR__ . '/helpers/CSRF_IMPORT.php';
?>
<!DOCTYPE html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <?= $csrf->printMeta() ?>
    <title>VPS Bolt - Hospedando</title>
    <meta name="description" content="Explora nuestra landing de VPS Bolt con tecnología de punta.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Estilos base del sitio -->
    <link href="layout/css/flexslider.min.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="layout/css/line-icons.min.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="layout/css/elegant-icons.min.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="layout/css/lightbox.min.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="layout/css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all"/>
    <link href="<?= mix('estilo.css') ?>" rel="stylesheet" type="text/css" media="all"/>
    <link href="<?= mix('layout/css/custom.css') ?>" rel="stylesheet" type="text/css" media="all"/>

    <script src="layout/js/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    <style>
      iframe.landing-frame {
        width: 100%;
        min-height: 100vh;
        border: none;
        display: block;
      }
    </style>
  </head>
  <body>
    <!-- Header -->
    <?php include("menu.php"); ?>

    <div class="main-container">
      <!-- Incrustar la landing de Astro -->
      <iframe 
        class="landing-frame"
        src="/astro/magical-main/dist/vps/index.html"
        title="Landing Space Travel"
      ></iframe>
    </div>

    <!-- Footer -->
    <?php include("pie.php"); ?>

    <!-- JS base del sitio -->
    <script src="layout/js/jquery.min.js"></script>
    <script src="layout/js/jquery.plugin.min.js"></script>
    <script src="layout/js/bootstrap.min.js"></script>
    <script src="layout/js/jquery.flexslider-min.js"></script>
    <script src="layout/js/smooth-scroll.min.js"></script>
    <script src="layout/js/skrollr.min.js"></script>
    <script src="<?= mix('layout/js/scripts.js') ?>"></script>
    <script src="layout/js/scrollReveal.min.js"></script>
    <script src="layout/js/isotope.min.js"></script>
    <script src="layout/js/lightbox.min.js"></script>
  </body>
</html>
