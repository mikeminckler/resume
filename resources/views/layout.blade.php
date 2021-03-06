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
                            <div class="email"><a @click.stop="" href="mailto:mikeminckler@gmail.com">mikeminckler@gmail.com</a></div>
                            <div class="phone"><a @click.stop="" href="tel:+12507017414">+12507017414</a></div>
                        </div>
                    </div>
                </div>

                <div class="middle">

                    <div class="category-toggle" @click="toggleCategories">
                        <i class="fas fa-bars"></i>
                        <div>Menu</div>
                    </div>

                    <categories></categories>
                    
                    <div class="content-area" :class="[$store.state.showCategories ? 'menu' : '', 'color' + category.base]">

                        <div class="category-title">

                            <transition name="fade" mode="out-in">
                                <div class="header" v-if="category.label" :class="category.label ? 'show' : ''" :key="category.label">@{{ category.label }}</div>
                            </transition>

                            <transition name="category-icon" mode="out-in">
                                <div class="header-icon" v-if="category.label" :key="category.label">
                                    <img :src="'/images/categories/' + category.image" class="category-image" :class="category.name == 'home' ? 'home' : ''"/>
                                </div>
                            </transition>

                        </div>

                        <transition name="fade" mode="out-in" appear>
                            <router-view class="route-area"></router-view>
                        </transition>

                    </div>

                </div>

                <div class="footer">Built from scratch using <a href="https://laravel.com/" target="_blank">Laravel</a> + <a href="https://vuejs.org/" target="_blank">VueJS</a></div>

            </div>
        </div>

        <script src="{{ mix('/js/app.js') }}"></script>
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
