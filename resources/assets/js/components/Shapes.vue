<template>

    <div class="shapes">
        <div v-for="shape in shapes" class="shape" :class="shape"></div>
    </div>

</template>

<script>

    import shapes from '../state/shapes.js'

    export default {

        props: [],

        mixins: [],

        data: function() {
            return {
                shapes: [
                    'blue',
                    'orange',
                    'yellow',
                ]
            }
        },

        watch: {
        
        },

        computed: {
        
        },

        mounted() {

            let blue = this.$lodash.merge(
                shapes.line(0, 3), 
                shapes.offsetDown(65),
                shapes.offsetRight(30),
            );

            let orange = this.$lodash.merge(
                shapes.line(0, 3), 
                shapes.offsetDown(98),
                shapes.offsetRight(30),
            );

            let yellow = this.$lodash.merge(
                shapes.line(0, 3), 
                shapes.offsetDown(128),
                shapes.offsetRight(30),
            );

            this.$store.dispatch('setBlue', blue);
            this.$store.dispatch('setOrange', orange);
            this.$store.dispatch('setYellow', yellow);
        
        },

        methods: {
        
        }

    }

</script>
