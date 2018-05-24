<template>

    <div class="route">

        <div class="header">Experience</div>
        <div class="content-item"></div>

        <div class="header">Projects</div>
        <div class="content-item"> </div>

        <div class="header">Side Projects</div>
        <div class="content-item"></div>

        <p>
            Canon SLR. Event Photography. Sports. Theatre. Dance. Portraits. Landscape. Travel.
        </p>

        <div class="photos">

            <div class="photo" 
                v-for="(image, index) in images"
                :key="image"
                @click="selectImage(image)"
             >
                <img :src="'/images/' + image">
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
                    <img v-if="selectedImage" :src="'/images/' + selectedImage" :key="selectedImage">
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
                images: [
                    'IMG_2516.jpg',
                    'IMG_0179.jpg',
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

                let index = this.$lodash.findIndex(this.images, image => {
                    return image == this.selectedImage;
                });
                index ++;
                if (index == this.images.length) {
                    index = 0;
                }
                this.selectedImage = this.images[index]; 

            },

            prevImage: function() {

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

</script>
