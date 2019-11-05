<template>

    <div class="route">

        <div class="content-item">

            <p>For the past 14 years I have worked as a <strong>web developer and content creator</strong>. During the past five years I have been creating projects using the <strong>Laravel</strong> and <strong>VueJS</strong> frameworks.</p>
            <p>In the fall of 2018 I began development of <strong>resort management software</strong> for a local destination resort. This product will provide a complete solution to unify their accomodation, marina, campground and tour operation management.</p>
            <p>In 2014 I co-founded a web development company and launched BlueHealth, an <strong>electronic medical charting and health management application</strong> that is actively managing over 1200 patients and the creation of over 20,000 records annually.</p>
            <p>Since 2005, I have been in charge of <strong>web development</strong> at Brentwood College School, a globally ranked private boarding school. I started in the Information Technology department as a web developer and since 2011 I have overseen all digital content creation for promotional and internal use. </p>

        </div>

        <div class="header">Core Skills</div>
        <div class="content-item">

            <div class="core-skills">
                <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                <div class="bg-row"><span @click="setCategory('web-development')" class="route-link">Web Development</span></div>
                <div class="skills bg-row">
                    Laravel,
                    VueJS,
                    PHP,
                    JS,
                    MySQL,
                    CSS Flex + Grid + Transitions
                </div>

                <div class="skill-icon"><div class="fas fa-check-circle"></div></div>
                <div><span @click="setCategory('photography')" class="route-link">Photography</span></div>
                <div class="skills">
                    Canon SLR,
                    Events,
                    Travel,
                    Sports,
                    Theatre,
                    Dance,
                    Portraits
                </div>

                <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                <div class="bg-row"><span @click="setCategory('video')" class="route-link">Video</span></div>
                <div class="skills bg-row">
                    Promotional,
                    Live Streaming,
                    Sports,
                    Theatre,
                    Visual Effects,
                    Timelapse
                </div>

                <div class="skill-icon"><div class="fas fa-check-circle"></div></div>
                <div><span @click="setCategory('design')" class="route-link">Graphic Design</span></div>
                <div class="skills">
                    Photoshop,
                    Illustrator,
                    SVG,
                    Print,
                    Posters
                </div>
            </div>

        </div>

        <div class="header">Other Experience</div>
        <div class="content-item">

            <div class="other-skills">

                <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                <div class="bg-row">Ubuntu Server Administration</div>
                <div class="skills bg-row">Digital Ocean, AWS, Apache, Nginx, MySQL, Node, Redis</div>

                <div class="skill-icon"><div class="fas fa-check-circle"></div></div>
                <div>Information Technology</div>
                <div>Hardware maintenance, Networking, Active Directory + Domain Administration, Software distribution, Virtual Machines</div>
                
                <div class="skill-icon bg-row"><div class="fas fa-check-circle"></div></div>
                <div class="bg-row">Coaching</div>
                <div class="bg-row skills">Volleyball, Soccer</div>

            </div>

        </div>

        <div class="header">References</div>
        <div class="content-item">

            <div class="flex">

                <div class="reference">
                    <div class="sub-header">Brent Lee</div><br/>
                    Director of Innovation<br/>
                    Brentwood College School<br/>
                    brent.lee@brentwood.ca<br/>
                    +1 250 216 8164 
                </div>
                <div class="reference">
                    <div class="sub-header">Dewi Griffiths</div><br/>
                    Faculty<br/>
                    Brentwood College School<br/>
                    dewi@brentwood.ca<br/>
                    +1 250 715 6487
                </div>

            </div>

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
