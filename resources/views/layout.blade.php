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
            <div class="content">
                @yield ('content')
            </div>
        </div>

        <script src="{{ mix('/js/app.js') }}"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>

    </body>
</html>
