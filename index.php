<!doctype html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="/vendor/bower_components/normalize-css/normalize.css">
    <link rel="stylesheet" href="/css/main.css">
    <script src="js/vendor/modernizr-2.8.3.min.js"></script>
</head>
    <body>
        <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div class="meme-container">
        <?php
            $start = mktime(9, 0, 0, 11, 3, 2014);

            if (time() > $start) {
                echo '<img class="meme" src="http://i3.kym-cdn.com/entries/icons/original/000/002/747/KCCO.jpg" alt="Carry on " />';
            } else {
                echo '<img class="meme" src="http://i2.kym-cdn.com/entries/icons/original/000/005/673/soon_(1).jpg" alt="Soon" />';
            }
        ?>
        </div>
    </body>
</html>
