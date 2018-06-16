<template>

    <div class="route">

        <div class="header">Experience</div>
        <div class="content-item">

            <p>In 2013, my position at Brentwood was tranfered into the marketing departent to allow me to focus on content creation of promotional materials for the school.</p>
            <p>Along side my web design, video and photography work, I was also involved in several graphic design projects. These included creating posters, print materials and online advertisments.</p>
            <p> My prefered workflow includes using Photoshop and Illustror along side a drawing tablet.</p>
            <p>Most recently I have been the <strong>lead designer</strong> for the interior design of the new 40 million dollar Athletics Centre. This process included using 3D animation software to fully visualize the branding and artistic designs of the building.</p>

            <grid-list :items="['Photoshop', 'Illustrator', 'SVG', 'Print', 'Posters', '3D modeeling']"></grid-list>
        </div>

        <div class="header">Projects</div>
        <div class="photos">

            <div class="photo" 
                v-for="(image, index) in images"
                :key="image"
                @click="selectImage(image)"
             >
                <img :src="'/images/design/' + image">
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
                    <img v-if="selectedImage" :src="'/images/design/' + selectedImage" :key="selectedImage">
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
                    'rowing_boys.jpg',
                    'rowing_girls.jpg',
                    'rugby_girls.jpg',
                    'soccer.jpg',
                    'campus_map.jpg',
                    'eod13.jpg',
                    'phantom.jpg',
                    'les_miz.jpg',
                    'plaza.jpg',
                    'cfawe13.jpg',
                    'admissions_pop_up.jpg',
                    'bcs_dance.jpg',
                    'cfawe12.jpg',
                    'home_banner.jpg',
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
