<template>

    <div class="route">

        <div class="header">Skills</div>
        <div class="content-item">
            <grid-list :items="['Promotional', 'Live Streaming', 'Sports', 'Theatre', 'Visual Effects', 'Timelapse', 'Music Videos', 'After Effects', 'Titling', 'Interviews']"></grid-list>
        </div>

        <div class="header">Experience</div>
        <div class="content-item">

            <div class="job-container">
                <div class="sub-header">Brentwood College School</div>
                <div class="roles">Video Production, Marketing</div>
                <div class="dates">2013 - Present</div>
            </div>

            <p>I have over 20 years' experince in video production. My post-secondary education was focused on visual effects for video production.</p>
            <p>I have extensive experience producing live streaming events online using multiple cameras, graphical overlays, and sound mixing. Some of the larger events I have worked on include four Brentwood TedX conferences and the annual Brentwood regatta which attracts more than 2,000 viewers over three days.</p>
            <p>I am proficient in Final Cut ProX, Adobe Premiere Pro, and Adobe After Effects.</p>
            <p>My latest work at Brentwood includes an online commercial, a feature on boarding life, a promotional video for wedding rentals, and a profile of one of our famous alumni.</p>
        </div>

        <div class="header">Portfolio</div>
        <div class="content-item"> 

            <div class="videos">
                <div class="video"
                    v-for="(video, index) in videos"    
                    :key="video.id"
                    @click="selectVideo(video)"
                >
                    <div class="thumbnail">
                        <img :src="'/images/video/' + video.thumbnail" class="thumbnail" />
                        <div class="play-icon">
                            <i class="fas fa-play-circle"></i>
                        </div>
                    </div>
                    <div class="video-title">{{ video.title }}</div>
                    <div class="video-description">{{ video.description }}</div>
                </div>
            </div>
        
        </div>

        <transition name="fade">
            <div class="image-viewer" 
                id="image-viewer" 
                v-if="selectedVideo"
            >
                <div class="image-viewer-background" @click="deselectVideo()"></div>
                <div class="image-advance-left" @click="prevVideo()"><div class="fas fa-chevron-left"></div></div>
                <div class="image-advance-right" @click="nextVideo()"><div class="fas fa-chevron-right"></div></div>
                <div class="image-viewer-close" @click="deselectVideo()"><div class="fas fa-times-circle"></div></div>
                <transition name="fade" mode="out-in">
                    <youtube-video v-if="selectedVideo" :video-id="selectedVideo.id" :key="selectedVideo.id" @ended="deselectVideo"></youtube-video>
                </transition>
            </div>
        </transition>

    </div>

</template>

<script>

    import GridList from '../components/GridList.vue';
    import YoutubeVideo from '../components/YoutubeVideo.vue';

    export default {

        data: function() {
            return {
                selectedVideo: '',
            }
        },

        components: {
            'grid-list': GridList,
            'youtube-video': YoutubeVideo,
        },

        computed: {
            videos() {
                return this.$store.state.videos;
            }
        },

        mounted() {
            window.addEventListener('keyup', this.imageViewerKeys);
        },

        destroyed() {
            window.removeEventListener('keyup', this.imageViewerKeys);
        },

        methods: {

            selectVideo: function(video) {
                this.selectedVideo = video;  
            },

            deselectVideo: function() {
                this.selectedVideo = '';
            },

            imageViewerKeys: function(e) {
                let code = e.keyCode;
                if (code == 27) {
                    this.deselectVideo();
                }
                if (code == 37) {
                    this.prevVideo();
                }
                if (code == 39) {
                    this.nextVideo();
                }
            },

            nextVideo: function() {

                if (this.selectedVideo) {
                    let index = this.$lodash.findIndex(this.videos, image => {
                        return image == this.selectedVideo;
                    });
                    index ++;
                    if (index == this.videos.length) {
                        index = 0;
                    }
                    this.selectedVideo = this.videos[index]; 
                }

            },

            prevVideo: function() {

                if (this.selectedVideo) {
                    let index = this.$lodash.findIndex(this.videos, image => {
                        return image == this.selectedVideo;
                    });
                    index --;
                    if (index < 0) {
                        index = this.videos.length - 1;
                    }
                    this.selectedVideo = this.videos[index]; 
                }

            }
        
        }

    }

</script>
