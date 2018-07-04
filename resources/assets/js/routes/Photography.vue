<template>

    <div class="route">

        <div class="header">Experience</div>
        <div class="content-item">
            <p>Since 2004, digital photography has been a creative passion of mine. I am proficient in full frame profession Canon DSLR cameras and L series lenses which I use in combination with capturing photos in camera raw to bring out the best in every picture.</p>
            <p>In 2010 I was promoted to <strong> lead event photographer</strong> at Brentwood where I photographed many challenging events such as sports, theatre and dance.</p>
            <p>As well I was also responsible for providing photos for promotional materials such as the website, admissions brochures and print advertising.</p>
        </div>

        <div class="header">Skills</div>
        <div class="content-item">
            <grid-list :items="['Canon DSLR', 'Camera Raw', 'Events', 'Sports', 'Theatre', 'Dance', 'Portraits', 'Travel', 'Architectural']"></grid-list>
        </div>

        <div class="header">Portfolio</div>
        <div class="photos">

            <div class="photo" 
                v-for="(image, index) in images"
                :key="image"
                @click="selectImage(image)"
             >
                <img :src="'/images/photography/thumbs/' + image">
            </div>

        </div>

        <transition name="fade">
            <div class="image-viewer" 
                id="image-viewer" 
                v-if="selectedImage"
            >
                <div class="image-viewer-background" @click="deselectImage()"></div>
                <div class="image-advance-left" @click="prevImage()"><div class="fas fa-chevron-left"></div></div>
                <div class="image-advance-right" @click="nextImage()"><div class="fas fa-chevron-right"></div></div>
                <div class="image-viewer-close" @click="deselectImage()"><div class="fas fa-times-circle"></div></div>
                <transition name="fade" mode="out-in">
                    <img v-if="selectedImage" :src="'/images/photography/' + selectedImage" :key="selectedImage">
                </transition>
            </div>
        </transition>

    </div>

</template>

<script>

    export default {

        data: function() {
            return {
                selectedImage: '',
            }
        },

        mounted() {
            window.addEventListener('keyup', this.imageViewerKeys);
        },

        destroyed() {
            window.removeEventListener('keyup', this.imageViewerKeys);
        },

        computed: {

            images() {
                return this.$store.state.photographyImages;
            }
        
        },

        methods: {

            selectImage: function(image) {
                this.selectedImage = image;  
            },

            deselectImage: function() {
                this.selectedImage = '';
            },

            imageViewerKeys: function(e) {
                let code = e.keyCode;
                if (code == 27) {
                    this.deselectImage();
                }
                if (code == 37) {
                    this.prevImage();
                }
                if (code == 39) {
                    this.nextImage();
                }
            },

            nextImage: function() {

                if (this.selectedImage) {
                    let index = this.$lodash.findIndex(this.images, image => {
                        return image == this.selectedImage;
                    });
                    index ++;
                    if (index == this.images.length) {
                        index = 0;
                    }
                    this.selectedImage = this.images[index]; 
                }

            },

            prevImage: function() {

                if (this.selectedImage) {
                    let index = this.$lodash.findIndex(this.images, image => {
                        return image == this.selectedImage;
                    });
                    index --;
                    if (index < 0) {
                        index = this.images.length - 1;
                    }
                    this.selectedImage = this.images[index]; 
                }

            }

        }

    }

</script>
