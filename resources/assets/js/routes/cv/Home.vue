<template>

    <div class="route">

        <div class="top" id="top">
            <div class="name-title">
                <div class="cv-title">Mike Minckler</div>
                <div class="cv-sub-title">Web Developer + Content Creator</div>
                <div class="cv-email-phone">
                    <div class="email"><a @click.stop="" href="mailto:mikeminckler@gmail.com">mikeminckler@gmail.com</a></div>
                    <div class="phone"><a @click.stop="" href="tel:+12507017414">+12507017414</a></div>
                </div>
            </div>
        </div>


        <div class="content-item">
            <h3>I specialize in front-end design and content creation</h3>
            <ul>
                <li>Laravel + VueJS</li>
            </ul>
        </div>

    </div>

</template>

<script>

    import shapes from '../../state/shapes.js'

    export default {

        data: function() {
            return {
            }
        },

        mounted() {

            let blue = this.$lodash.merge(
                shapes.line(360), 
                shapes.offsetDown(65),
                shapes.offsetRight(30),
            );

            let orange = this.$lodash.merge(
                shapes.line(325), 
                shapes.offsetDown(98),
                shapes.offsetRight(30),
            );

            let yellow = this.$lodash.merge(
                shapes.line(290), 
                shapes.offsetDown(128),
                shapes.offsetRight(30),
            );

            setTimeout( () => {
                this.$store.dispatch('setBlue', blue);
                this.$store.dispatch('setOrange', orange);
                this.$store.dispatch('setYellow', yellow);
            }, 10);
        
        },

        methods: {

        }

    }

</script>
