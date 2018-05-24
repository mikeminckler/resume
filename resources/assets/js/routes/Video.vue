<template>

    <div class="route">

        <div class="header">Experience</div>
        <div class="content-item"></div>

        <div class="header">Projects</div>
        <div class="content-item"> 

            <div class="videos">
                <div class="video"
                    v-for="(video, index) in videos"    
                    :key="video"
                    @click="selectVideo(video)"
                >
                    {{ video }}
                </div>
            </div>
        
        </div>

        <div class="header">Side Projects</div>
        <div class="content-item"></div>

        <transition name="fade">
            <div class="image-viewer" 
                id="image-viewer" 
                v-if="selectedVideo"
            >
                <div class="image-viewer-background" @click="deselectVideo()"></div>
                <div class="image-viewer-close" @click="deselectVideo()"><div class="fas fa-times-circle"></div></div>
                <transition name="fade" mode="out-in">
                    <youtube-video v-if="selectedVideo" :video-id="selectedVideo" :key="selectedVideo" @ended="deselectVideo"></youtube-video>
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
                videos: [
                    'qyJWl59mo6g',
                    'WVoBRBvgwzw',
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
            },
        
        }

    }

</script>
