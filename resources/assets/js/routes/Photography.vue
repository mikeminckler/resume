<template>

    <div class="route">

        <div class="header">Experience</div>
        <div class="content-item">
            <p>
                Began with travel photography in 2004 and have persued the skill ever since. 
                Whenever possible I will take my photos for website and design work.
            </p>

            <grid-list :items="['Canon SLR', 'Camera Raw', 'Events', 'Sports', 'Theatre', 'Dance', 'Portraits', 'Travel']"></grid-list>
        </div>

        <div class="header">Projects</div>
        <div class="photos">

            <div class="photo" 
                v-for="(image, index) in images"
                :key="image"
                @click="selectImage(image)"
             >
                <img :src="'/images/photography/' + image">
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
                images: [
                    'IMG_2516.jpg',
                    'IMG_0179.jpg',
                    'IMG_8403.jpg',
                    'IMG_3610.jpg',
                    'IMG_2888.jpg',
                    'IMG_3043.jpg',
                    'IMG_2724.jpg',
                    'IMG_2656.jpg',
                    'P1020703.jpg',
                    'P1020487.jpg',
                    'P1010795.jpg',
                    'P1010096.jpg',
                    'P1000465.jpg',
                    'IMG_1419.jpg',
                    'IMG_9891.jpg',
                    'IMG_1872.jpg',
                    'IMG_4567.jpg',
                    'IMG_3877.jpg',
                    'IMG_4550.jpg',
                    'IMG_1079.jpg',
                    'IMG_6131.jpg',
                    'IMG_5619.jpg',
                    'IMG_4001.jpg',
                    'IMG_2147.jpg',
                    'IMG_4256.jpg',
                    'IMG_4082.jpg',
                    'IMG_4000.jpg',
                    'IMG_4820.jpg',
                    'IMG_4655.jpg',
                    'IMG_4444.jpg',
                    'IMG_9332.jpg',
                    'IMG_1827.jpg',
                    'IMG_3627.jpg',
                    'west_coast01cc.jpg',
                    'IMG_9416.jpg',
                    'IMG_8193.jpg',
                    'IMG_1274_1.jpg',
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
