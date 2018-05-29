<template>

    <div class="route">

        <div class="header">Experience</div>
        <div class="content-item">

            <p>
                In the departments of Information Technology, and subsuquently Marketing, I was responsible 

                Brentwood, IT then marketing. Worked on various in house projects. SIS, main website for new families. 
                began with PHP. CMS. 

                Always been drawn to frontend design and UI. Mix and design and functionality.

                Procedural <i class="fas fa-arrow-right"></i> OOP, MVC. 

                5 website revisions on a 18 month schedule. 

                With the offer to write a new medical charting management app I researched hpp frameworks and settled on Laravel.

                Lead to using VueJS. 

                Some side projects., Yeshi, COVL, 

                IT baground added the server management skills. 

                Using Ubuntu. 

                Apache Nginx

                Redis

                Node

                MySQL


            </p>

            <grid-list :items="['Laravel', 'VueJS', 'PHP', 'HTML', 'CSS' ]"></grid-list>

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
                    <grid-list width="150px" :items="site.gridList"></grid-list>
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
                    <div v-if="selectedSite" class="site-viewer">

                        <div class="header">{{ selectedSite.name }}</div>

                        <div class="website-image">
                            <img :src="'/images/web/' + selectedSite.thumbnail" class="website-image" />
                        </div>



                    </div>
                </transition>
            </div>
        </transition>
    </div>

</template>

<script>

    export default {

        data: function() {
            return {
                selectedSite: '',
                sites: [
                    {
                        id: 0,
                        name: 'BlueHealth',
                        thumbnail: 'bh.jpg',
                        dates: 'October 2014 - Present',
                        url: 'demo.bluehealth.ca',
                        role: 'Medical charting and management application',
                        gridList: [
                            'Laravel + VueJS', 
                            '1100+ patients', 
                            'Encrypted DB', 
                            '2FA', 
                            'Form Building', 
                            'Reporting', 
                            'Invoicing', 
                            'Inventory', 
                            'Medication Dispensing'
                        ],
                    },
                    {
                        id: 1,
                        name: 'Brentwood College School',
                        thumbnail: 'bcs.jpg',
                        dates: 'June 2005 - August 2014',
                        url: 'www.brentwood.bc.ca',
                        role: 'CMS manager and design lead',
                        gridList: [
                            'PHP + JS', 
                            'Typo3 CMS', 
                            'CMS Custom Templates', 
                            'Responsive Design', 
                            'YouTube Integration'
                        ],
                    },
                    {
                        id: 2,
                        name: 'Brentwood Information Event Registration',
                        thumbnail: 'rsvp.jpg',
                        dates: 'October 2017 - March 2018',
                        url: 'rsvp.brentwood.bc.ca',
                        role: 'Registration system for admission info sessions',
                        gridList: [
                            'Laravel + VueJS', 
                        ],
                    },
                    {
                        id: 3,
                        name: 'Volleyball Statistics',
                        thumbnail: 'vball.jpg',
                        dates: 'September 2010 - Present',
                        url: 'gamestats.brentwood.bc.ca',
                        role: 'Stat keeping website for volleyball teams.',
                        gridList: [
                            'Laravel + VueJS', 
                            'Single Page Application',
                            'Real Time Stat Updates',
                            'Websockets', 
                            'Google Charts',
                        ],
                    },
                ]
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
