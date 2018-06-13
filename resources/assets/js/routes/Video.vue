<template>

    <div class="route">

        <div class="header">Experience</div>
        <div class="content-item">
            <p>

                Since high school. 25 years.

                Promotional. Live Streaming. Sports. Theatre. Visual Effects. Timelapse. Music Videos. After Effects. Titling. Interviews. 

                With advent of Live Streaming on YouTube, began working multi camera live evnets. 

                Outdoor sports. Regatta Stats. Theatre performances. TedX.

                Feature shorts for the school., intergrated into the website.

                Final Cut Pro X

                After Effects
            </p>

            <grid-list :items="['Promotional', 'Live Streaming', 'Sports', 'Theatre', 'Visual Effects', 'Timelapse', 'Music Videos', 'After Effects', 'Titling', 'Interviews']"></grid-list>

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

    export default {

        data: function() {
            return {
                selectedVideo: '',
            }
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
