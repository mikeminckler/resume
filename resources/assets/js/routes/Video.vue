<template>

    <div class="route">

        <div class="header">Experience</div>
        <div class="content-item"></div>

        <div class="header">Projects</div>
        <div class="content-item"> 

            <div class="videos">
                <div class="video"
                    v-for="(video, index) in videos"    
                    :key="video.id"
                    @click="selectVideo(video)"
                >
                    <div class="video-title">{{ video.title }}</div>
                    <div class="video-description">{{ video.description }}</div>
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
                videos: [
                    {
                        'id': 'yVNo5LhSs-M',
                        'title': '30 second Comercial',
                        'description': 'Commercial short for Brentwood College School',
                    },
                    {
                        'id': 'qyJWl59mo6g',
                        'title': 'Weddings at Brentwood',
                        'description': 'A promotional video to generate business for wedding rentals at Brentwood College School',
                    },
                    {
                        'id': 'WVoBRBvgwzw',
                        'title': 'Brentwood Logo',
                        'description': 'Built in After Effects and used for all intro and outro branding of school videos',
                    },
                    {
                        'id': 'Fzhf8HGoE4w',
                        'title': 'Timelapse',
                        'description': 'Created using a SLR intervalometer over the course of a week in the summer. Color correction in Camera Raw, assembled and stablized in After Effects.',
                    },
                    {
                        'id': 'fEtDaY669Ns',
                        'title': 'Rowing morning',
                        'description': 'Montage of rowing in the morning at Brentwood College School.',
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
