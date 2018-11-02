<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="google" content="notranslate">
        <meta http-equiv="Content-Language" content="en">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Mike Minckler - Resume</title>

        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

    </head>
    <body>

        <div class="app" id="app">

            <div class="cv">

                <shapes></shapes>

                <transition name="cv-fade" mode="out-in" appear>
                    <router-view class="cv"></router-view>
                </transition>

            </div>

            <div class="footer">Built from scratch using <a href="https://laravel.com/" target="_blank">Laravel</a> + <a href="https://vuejs.org/" target="_blank">VueJS</a></div>

        </div>

        <script src="{{ mix('/js/cv.js') }}"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>

        @if (app()->environment() == 'production')
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121913220-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-121913220-1');
            </script>
        @endif

    </body>
</html>
