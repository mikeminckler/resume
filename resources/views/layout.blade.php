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

                <div class="top" id="top">
                    <div class="name-title">
                        <div class="title">Mike Minckler</div>
                        <div class="sub-title">Web Developer + Content Creator</div>
                        <div class="email-phone">
                            <div class="email"><a href="mailto:mikeminckler@gmail.com">mikeminckler@gmail.com</a></div>
                            <div class="phone"><a href="tel:+12507017414">+12507017414</a></div>
                        </div>
                    </div>
                </div>

                <div class="middle">

                    <div class="category-toggle" @click="toggleCategories">
                        <i class="fas fa-bars"></i>
                    </div>

                    <div class="overlay" :class="[$store.state.overlay ? 'overlay-active' : '', $store.state.showCategories ? 'menu' : '']"></div>

                    <categories></categories>

                    <transition name="fade" mode="out-in">
                        <router-view class="content-area" :class="$store.state.showCategories ? 'menu' : ''"></router-view>
                    </transition>

                </div>

            </div>
        </div>

        <script src="{{ mix('/js/app.js') }}"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>

    </body>
</html>
