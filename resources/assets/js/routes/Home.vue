<template>

    <div class="route">

        <div class="header">Background</div>
        <div class="content-item">

            <p>For the past 13 years, I have been working as a web developer and content creator.</p>
            <p>In 2005 I joined the Information Technology team at Brentwood College School, one of the world's top boarding schools, and was placed in charge of web development for the marketing and student information systems of the school.</p>
            <p>Throughout my time at Brentwood I have had a wide variety of roles and responsibilities that have allowed me to develop a dynamic, well rounded, creative and technical skill set that continues to evolve.</p>
            <p>In 2014 I founded my own web development company and created BlueHealth, an electronic medical charting and health management website that is actively managing over 1200 patients and their 68,000 records.</p>
            <p>I thrive when working on challenging projects that focus on creative and elegant solutions, something that has been repeated throughout my career. </p>

        </div>

        <div class="header">Core Skills</div>
        <div class="content-item">

            <ul>
                <li><span @click="setCategory('web-development')" class="route-link">Web Development</span> - Laravel, VueJS, PHP, JS, MySQL, CSS Flex + Grid + Transitions</li>
                <li><span @click="setCategory('photography')" class="route-link">Photography</span> - Canon SLR, Events, Travel, Sports, Theatre, Dance, Portraits</li>
                <li><span @click="setCategory('video')" class="route-link">Video</span> - Promotional, Live Streaming, Sports, Theatre, Visual Effects, Timelapse</li>
                <li><span @click="setCategory('design')" class="route-link">Graphic Design</span> - Photoshop, Illustrator, SVG, Print, Posters</li>
            </ul>

        </div>

        <div class="header">Other Experince</div>
        <div class="content-item">

            <ul>
                <li>Ubuntu Server Administration - Digital Ocean, AWS, Apache, Nginx, MySQL, Node, Redis</li>
                <li>Information Technology - Hardware maintenance, Networking, Active Directory + Domain Administration, Software distribution, Virtual Machines</li>
                <li>Volleyball and Soccer Coach</li>
            </ul>

        </div>

    </div>

</template>

<script>

    export default {

        props: [],

        mixins: [],

        data: function() {
            return {
            }
        },

        watch: {
        
        },

        computed: {
            categories() {
                return this.$store.state.categories;
            }
        },

        mounted() {
        },

        methods: {

            setCategory: function(route) {

                let category = this.$lodash.find(this.categories, function(cat) {
                    return cat.route == route;
                });

                this.$store.dispatch('setCategory', category);

            }
        
        }

    }

</script>
