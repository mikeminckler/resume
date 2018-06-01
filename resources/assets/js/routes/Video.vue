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

        <div class="header">Projects</div>
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
                videos: [
                    {
                        'id': 'yVNo5LhSs-M',
                        'title': '30 second Comercial',
                        'thumbnail': '30sec.jpg',
                        'description': 'Commercial short for Brentwood College School.',
                    },
                    {
                        'id': 'qyJWl59mo6g',
                        'title': 'Weddings at Brentwood',
                        'thumbnail': 'weddings.jpg',
                        'description': 'A promotional video to generate business for wedding rentals at Brentwood College School.',
                    },
                    {
                        'id': 'WVoBRBvgwzw',
                        'title': 'Brentwood Logo',
                        'thumbnail': 'bcs_logo.jpg',
                        'description': 'Built in After Effects and used for all intro and outro branding of school videos.',
                    },
                    {
                        'id': 'Fzhf8HGoE4w',
                        'title': 'Timelapse',
                        'thumbnail': 'timelapse.jpg',
                        'description': 'Created using a SLR intervalometer over the course of a week in the summer. Color correction in Camera Raw, assembled and stablized in After Effects.',
                    },
                    {
                        'id': 'fEtDaY669Ns',
                        'title': 'Rowing morning',
                        'thumbnail': 'rowing.jpg',
                        'description': 'Montage of rowing in the morning at Brentwood College School.',
                    },
                    {
                        'id': 'DPi5oCORwzU',
                        'title': 'Brentwood By Air',
                        'thumbnail': 'drone.jpg',
                        'description': 'Aerial drone footage from Brentwood College School.',
                    },
                    {
                        'id': '7SCHBIJJcYU',
                        'title': 'Boarding Feature',
                        'thumbnail': 'boarding.jpg',
                        'description': 'An informative look at boarding school for prospective families.',
                    },
                    {
                        'id': 'GLV6HI2h1oQ',
                        'title': 'Cliffton Muuray Alumni',
                        'thumbnail': 'cliffton.jpg',
                        'description': 'A profile of Brentwood alumni Cliffon Murray',
                    },
                    {
                        'id': '6iQ789xmKGI',
                        'title': 'Forest Creatures',
                        'thumbnail': 'c100.jpg',
                        'description': 'An afternoon of clips from out in the back yard.',
                    },
                    {
                        'id': 'bJjMVIhnqLY',
                        'title': 'Regatta 40th Anniversary',
                        'thumbnail': 'regatta.jpg',
                        'description': 'Chronicalling the history of the Brentwood Regatta after 40 years.',
                    },
                    {
                        'id': 'L365mRNWR1c',
                        'title': 'TedX Brentwood Logo',
                        'thumbnail': 'tedxlogo.jpg',
                        'description': 'Leader video for the annual TedX Brentwood event.',
                    },
                    {
                        'id': 'RAxe4c3s3A0',
                        'title': '2013 Brentwood College School Intro',
                        'thumbnail': 'bcs_logo_2013.jpg',
                        'description': 'Brentwood College School 2013 leader for official videos.',
                    },
                    {
                        'id': 'GEJi1PMSx5E',
                        'title': 'TedX Brentwood 2015 Logo',
                        'thumbnail': 'fusion.jpg',
                        'description': 'Intro Logo for TedX Brentwood 2015 creating in Adobe After Effects.',
                    },
                    {
                        'id': 'h94Z-C-WoI4',
                        'title': 'The Brentwood Musical Program',
                        'thumbnail': 'musical.jpg',
                        'description': 'A feature look at the Brentwood College School musical program.',
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
