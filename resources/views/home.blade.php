@extends ('layout')
@section ('content')

<div class="top" id="top">
        <div class="title">Mike Minckler</div>
        <div class="sub-title">Web Developer + Content Creator</div>
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
