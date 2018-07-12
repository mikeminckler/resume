<template>

    <div class="route">

        <div class="header">Skills</div>
        <div class="content-item">
            <grid-list :items="['Photoshop', 'Illustrator', 'SVG', 'Print', 'Posters', '3D modeling']"></grid-list>
        </div>

        <div class="header">Experience</div>
        <div class="content-item">

            <p>In 2013, I transferred into the marketing department at Brentwood where I took over content creation of promotional materials for the school.</p>
            <p>Alongside web design, video and photography work, I am also involved in graphic design projects. These include creating posters, print materials and online advertising.</p>
            <p>My prefered workflow uses <strong>Photoshop</strong> and <strong>Illustrator</strong> in conjunction with a drawing tablet.</p>
            <p>Most recently I have been the <strong>lead designer</strong> for the interior design of the new $40 million dollar Athletics Centre. This process includes creating hand draw wall wraps in Photoshop and using 3D animation software to fully visualize the branding and artistic designs of the building.</p>
        </div>

        <div class="header">Portfolio <span class="info">click to enlarge</span></div>
        <div class="photos">

            <div class="photo" 
                v-for="(image, index) in images"
                :key="image"
                @click="selectImage(image)"
             >
                <img :src="'/images/design/thumbs/' + image">
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
                return this.$store.state.designImages;
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
