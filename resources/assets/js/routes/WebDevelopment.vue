<template>

    <div class="route">

        <div class="header">Experience</div>
        <div class="content-item">

            <p>In the departments of Information Technology, and subsuquently Marketing, I was responsible </p>

            <grid-list :items="['Laravel', 'VueJS', 'PHP', 'HTML', 'CSS' ]"></grid-list>

        </div>

        <div class="header">Projects</div>

        <div class="content-item websites">

            <div class="website">

                <div class="thumbnail">
                    <img src="/images/web/bcs.jpg" class="thumbnail" />
                </div>

                <div class="website-content">
                    <div class="sub-header">BlueHealth Inc</div>
                    <div class="dates">September 2014 - Present</div>
                    <div class="description">Medical charting and management application</div>
                    <div class="role">Co-Founder, Full Stack Programmer</div> 
                    <grid-list width="150px" :items="['Laravel + VueJS', '1100+ patients', 'Encrypted DB', '2FA', 'Form Building', 'Reporting', 'Invoicing', 'Inventory', 'Medication Dispensing']"></grid-list>

                </div>

            </div>


            <div v-for="(site, index) in sites"
                class="website"
            >

                <div class="thumbnail">
                    <img src="/images/web/bcs.jpg" class="thumbnail" />
                </div>
                <div class="website-content">
                    <div class="sub-header">Brentwood College School</div>
                    <div class="dates">September 2005 - Present</div>
                    <div class="url"><a href="https://www.brentwood.bc.ca" target="_blank">www.brentwood.bc.ca</a></div>
                    <div class="role">Lead developer for Brentwood College School promotional website.</div>
                    <grid-list width="150px" :items="['PHP + JS', 'Typo3 CMS', 'CMS Custom Templates', 'Responsive Design', 'YouTube Integration']"></grid-list>
                    <div class="more-info" @click="showMore(website)">
                        <div class="more-info-link">More info</div>
                        <i class="fas fa-arrow-alt-circle-right"></i>
                    </div>
                </div>

            </div>

        </div>

        <div class="header">Side Projects</div>
        <div class="content-item">
        
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
                    <img v-if="selectedSite" :src="'/images/' + selectedSite" :key="selectedSite">
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
                    
                    },
                ]
            }
        },

        mounted() {

        }

    }

</script>
