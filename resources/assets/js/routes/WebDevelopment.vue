<template>

    <div class="route">

        <div class="header">Experience</div>
        <div class="content-item">

            <div class="expander" :class="expanded ? 'expanded' : ''">

                <p>I began my web development career in 2005 when I was hired at Brentwood College School in the IT department. As lead web developer I was in responsible for the design and maintenance of the main <span class="route-link" @click="selectSiteById(1)">Brentwood website</span> where I implemented an 18 month refresh cycle that produced five unique versions. Each revision kept the site up to date with the latest frontend design trends and technology. The site was built on the Typo3 content management system making it easy for editors to update content and allowing me to implement a custom frontend design. The 2014 refresh of the main website marked the last version I developed as the marketing department began to focus on other mediums for promotion. </p>

                <p>As well during my time in the IT department at Brentwood I was involved in the programming of the schools student information system responsible for the record keeping and day to day operations. Working on this project from 2006 to 2010, I developed my skills in PHP and object oriented programming while developing features for this custom framework. As well I was able to learn Ubuntu server management including Apache, Nginx, DNS configurations. </p>

                <p>With the shift in focus of the Brentwood marketing department in 2014 I was looking to pursue a new project and advance my programming skills. In September 2014 an opportunity arose where I was offered a contract to create a electronic medical record keeping system for Brentwood. Development soon began and <span class="route-link" @click="selectSiteById(0)">BlueHealth</span> was launched the following spring. This Laravel and VueJS based software has successfully met the needs of seven medical professionals in an office that has an annual patient base in excess of 550 patients. </p>

                <p>Throughout my web development career I have also created several smaller side projects which have been vital to understanding new technologies such as single page applications, css grid and real time updates via websockets.</p>

            </div>
            <div class="expander-toggle" @click="expanded = !expanded">{{ expanded ? 'Hide' : 'Read More...' }}</div>

            <grid-list :items="['Laravel', 'VueJS', 'PHP', 'JS', 'MVC', 'OOP', 'CSS GRID + FLEXBOX' ]"></grid-list>


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
                    <div v-if="selectedSite" class="site-viewer" :key="selectedSite.id">

                        <div class="website-info">

                            <div class="header">{{ selectedSite.name }}</div>

                            <div class="dates">{{ selectedSite.dates }}</div>
                            <div class="url"><a :href="'https://' + selectedSite.url" target="_blank">{{ selectedSite.url }}</a></div>
                            <div class="role">{{ selectedSite.role }}</div>

                            <p>{{ selectedSite.description }}</p>

                            <grid-list width="150px" :items="selectedSite.gridList"></grid-list>

                        </div>

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
                expanded: false,
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
                        description: 'The co-founder and lead programmer of a web-based online medical charting and management application. Built on the Laravel PHP framework, BlueHealth features a clean and responsive user interface focused on providing quick and easy data entry, searching, and reporting. BlueHealth has facilitated the creation of over 25,000 medical records annually.',
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
                        description: 'A key member of the marketing and IT departments at Brentwood for over a decade. A leader in promoting Brentwood as a world renowned boarding school by developing and maintaining the school’s website, YouTube channel, and live stream productions. Produced video content and photography for online and promotional materials. Taught students in grades 9 through 12 the subjects of video production and 3D animation as well as coaching the girls’ volleyball team.',
                    },
                    {
                        id: 2,
                        name: 'Brentwood Information Event Registration',
                        thumbnail: 'rsvp.jpg',
                        dates: 'October 2017 - March 2018',
                        url: 'rsvp.brentwood.ca',
                        role: 'Registration system for admission info sessions',
                        gridList: [
                            'Laravel + VueJS', 
                        ],
                        description: 'Used as a landing page for online advertising. Targeted at prospective students and parents, this site provided an registration component for new families to sign up for information sessions throughout the country. An interactive and easy to use registration form were design specifics.',
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
                        description: 'This statistics tracking tool was used for the volleyball program at Brentwood. Using web sockets to provide realtime feedback without the need for page refreshes was a key design feature. This was accomplished using Laravel\'s broadcasting queue through NodeJS to provide update events in the browser.',
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
