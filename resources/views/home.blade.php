@extends ('layout')
@section ('content')

<div class="top" id="top">
    <div class="name-title">
        <div class="title">Mike Minckler</div>
        <div class="sub-title">Web Developer + Content Creator</div>
    </div>
    <div class="email-phone">
        <div class="email"><a href="mailto:mikeminckler@gmail.com">mikeminckler@gmail.com</a></div>
        <div class="phone"><a href="tel:+12507017414">+12507017414</a></div>
    </div>
</div>

<div class="middle">

    <categories></categories>

    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>

</div>

<div class="bottom" id="bottom">

</div>


@endsection
