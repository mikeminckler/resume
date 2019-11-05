<template>

    <div class="route">

        <div class="header">Skills</div>
        <div class="content-item">
            <grid-list :items="['Laravel', 'VueJS', 'TDD', 'PHP', 'JS', 'MVC', 'CSS GRID + FLEXBOX', 'Websockets']"></grid-list>
        </div>

        <div class="header">Experience</div>
        <div class="content-item">

            <div class="job-container">
                <div class="sub-header">Resort Management Software</div>
                <div class="roles">Lead Programmer</div>
                <div class="dates">2018 - Present</div>
                <div class="link"><a href="https://www.telegraphcoveresort.ca" target="_blank">www.telegraphcoveresort.ca</a></div>
            </div>

            <p>In the fall of 2018 I began work on resort management software for Telegraph Cove Resort. It features management of accomodation, marina, campground and tour operations, with Stripe integration, calendaring, and accounting.</p>
            <p>This project has been developed using test driven development with Laravel as the backend framework. VueJS and TailwindCSS are used for the frontend. To create a fast and seamless experience websockets and InertiaJS are used to deliver a single page application while maintaining the features and security of the Laravel backend.</p>

            <div class="job-container">
                <div class="sub-header">BlueHealth Inc.</div>
                <div class="roles">Co-Founder, Lead Programmer</div>
                <div class="dates">2014 - Present</div>
                <div class="link"><a href="https://demo.bluehealth.ca" target="_blank">demo.bluehealth.ca</a></div>
            </div>

            <p>In the fall of 2014, after eleven years of PHP programming, I began working with the <strong>Laravel</strong> framework. I spent the next ten months developing <strong>BlueHealth, a medical charting and management application</strong>. BlueHealth is currently used by ten medical professionals to manage over 1200 patients and facilitate appointments, prescriptions, immunizations, concussion tracking, accounting, and guardian questionnaires.</p>
            <p>This project implements test driven development, database encryption, two factor authentication, searching, custom form building, event broadcasting, queuing, and websockets. <strong>VueJS</strong> is integrated as the primary javascript framework and is used extensively to provide a highly interactive frontend experience.</p>
            <p>Nurses, counsellors, athletic therapists, guardians, and accountants are among the user groups using the product.</p>

            <div class="job-container">
                <div class="sub-header">Brentwood College School</div>
                <div class="roles">Lead Web Designer, IT, Marketing</div>
                <div class="dates">2005 - Present</div>
            </div>
            <p>In 2005, I joined the IT department at Brentwood College School where I was trained to be a <strong>full stack developer</strong> for the school's website and internal student information systems.</p>
            <p>As lead developer for the school's promotional website, I implemented a content management system to display a custom frontend design while also providing a user-friendly backend.</p>
            <p>During my time overseeing the website, I implemented an 18 month release cycle that produced five unique frontend designs and three content refreshes.</p>
            <p>I also worked on the student information system that managed day-to-day operations of over 100 staff and 500 students. This software was run on an object oriented custom PHP framework. I created several new features for this system including an eventing and calendaring module, a travel management system, and a responsive design upgrade.</p>
            <p>I have also created several other side projects that have allowed me to learn and practice new design patterns. These projects can be found on my <a href="https://github.com/mikeminckler" target="_blank">GitHub page</a>.</p>

        </div>

        <div class="header">Projects</div>
        <div class="content-item websites">

            <div v-for="(site, index) in sites"
                :key="site.id"
                class="website"
                @click="selectSite(site)"
            >

                <div class="thumbnail">
                    <img :src="'/images/web/' + site.thumbnail" class="thumbnail" />
                </div>
                <div class="website-content">
                    <div class="sub-header">{{ site.name }}</div>
                    <div class="dates">{{ site.dates }}</div>
                    <div class="url"><a :href="'https://' + site.url" target="_blank">{{ site.url }}</a></div>
                    <div class="role">{{ site.role }}</div>
                    <grid-list width="150px" :items="$lodash.take(site.gridList, 5)"></grid-list>
                    <div class="more-info"> 
                        <div class="more-info-link">More info</div>
                        <i class="fas fa-arrow-alt-circle-right"></i>
                    </div>
                </div>

            </div>

        </div>

        <transition name="fade">
            <div class="image-viewer" 
                id="image-viewer" 
                v-if="selectedSite"
            >
                <div class="image-viewer-background" @click="deselectSite()"></div>
                <div class="image-advance-left" @click="prevSite()"><div class="fas fa-chevron-left"></div></div>
                <div class="image-advance-right" @click="nextSite()"><div class="fas fa-chevron-right"></div></div>
                <div class="image-viewer-close" @click="deselectSite()"><div class="fas fa-times-circle"></div></div>
                <transition name="fade" mode="out-in">
                    <div v-if="selectedSite" class="site-viewer" :key="selectedSite.id">

                        <div class="website-image">
                            <img :src="'/images/web/' + selectedSite.thumbnail" class="website-image" />
                        </div>

                        <div class="website-info">

                            <div class="website-name header">{{ selectedSite.name }}</div>

                            <div class="website-subinfo">
                                <div class="dates">{{ selectedSite.dates }}</div>
                                <div class="url"><a :href="'https://' + selectedSite.url" target="_blank">{{ selectedSite.url }}</a></div>
                            </div>

                            <p>{{ selectedSite.description }}</p>

                            <grid-list width="150px" :items="selectedSite.gridList"></grid-list>

                        </div>

                    </div>
                </transition>
            </div>
        </transition>
    </div>

</template>

<script>

    import GridList from '../components/GridList.vue';

    export default {

        data: function() {
            return {
                selectedSite: '',
            }
        },

        components: {
            'grid-list': GridList,
        },

        computed: {
            sites() {
                return this.$store.state.websites;
            }
        },

        mounted() {
            window.addEventListener('keyup', this.imageViewerKeys);
        },

        destroyed() {
            window.removeEventListener('keyup', this.imageViewerKeys);
        },

        methods: {
        
            selectSite: function(site) {
                this.selectedSite = site;  
            },

            selectSiteById: function(id) {
                let site = this.$lodash.find(this.sites, site => {
                    return site.id == id;
                });
                this.selectSite(site);
            },

            deselectSite: function() {
                this.selectedSite = '';
            },

            imageViewerKeys: function(e) {
                let code = e.keyCode;
                if (code == 27) {
                    this.deselectSite();
                }
                if (code == 37) {
                    this.prevSite();
                }
                if (code == 39) {
                    this.nextSite();
                }
            },

            nextSite: function() {

                let index = this.$lodash.findIndex(this.sites, site => {
                    return site == this.selectedSite;
                });
                index ++;
                if (index == this.sites.length) {
                    index = 0;
                }
                this.selectedSite = this.sites[index]; 

            },

            prevSite: function() {

                let index = this.$lodash.findIndex(this.sites, site => {
                    return site == this.selectedSite;
                });
                index --;
                if (index < 0) {
                    index = this.sites.length - 1;
                }
                this.selectedSite = this.sites[index]; 

            }

        }
        

    }

</script>
