<template>

    <div class="youtube-player" :id="'div_player_' + divId" :class="show ? 'visible' : ''">
        <div :id="'player_' + divId"></div>
    </div>

</template>

<script>
    export default {

        props: ['videoId', 'autoplay', 'options', 'pause'],

        data: function() {
            return {
                player: {},
                show: false,
                parentWidth: 0,
                padding: 10,
            }
        },

        watch: {

            ready() {
                this.loadVideo(); 
            },

            screen() {
                if (this.id) {
                    this.resize();
                }
            },

            id() {
                this.cueVideo();
            },

            pause() {
                if (this.pause) {
                    if (this.$lodash.isFunction(this.player.pauseVideo)) {
                        this.player.pauseVideo();
                    }
                }
            }

        },
        computed: {
            ready() {
                return this.$store.state.youtubeReady;
            },

            screen() {
                return this.$store.state.screen;
            },

            id() {
                return this.options ? this.options.videoId : this.videoId;
            },

            playerWidth() {
                return this.parentWidth > 60 ? this.parentWidth : 60;
            },

            divId() {
                return Math.random().toString(36).slice(2);
            }

        },

        mounted() {

            document.addEventListener("keyup", key => {
                if (key.keyCode == 27) {
                    this.$emit('ended');
                }
                if (key.keyCode == 32) {
                    this.player.playVideo();
                }
            });

            if (this.ready) {
                this.loadVideo();
            }

        },

        beforeDestroy() {
            this.player.destroy();
        },

        methods: {

            loadVideo: function() {
                var vue = this;
                if (this.id) {
                    this.player = new YT.Player('player_' + this.divId, {
                        videoId: this.id,
                        //host: 'https://www.youtube.com',
                        events: {
                            'onReady': vue.onPlayerReady,
                            'onStateChange': vue.onPlayerStateChange
                        },
                        playerVars: {
                            showinfo: 0,
                            controls: 1,
                            rel: 0,
                            modestbranding: 1,
                            iv_load_policy: 3,
                            fs: 1,
                            enablejsapi: 1,
                            disablekb: 1
                        }
                    });
                }
            },

            onPlayerReady: function() {
               
                var div = document.getElementById('div_player_' + this.divId);
                //this.player.setVolume(20);
                this.resize();

                if (!this.autoplay) {
                    setTimeout( () => {
                        this.player.playVideo();
                    }, 500);
                }
            },

            cueVideo: function() {
                if (this.$lodash.isFunction(this.player.loadVideoById)) {
                    //this.hide();
                    this.player.loadVideoById(this.id);
                } else {
                    this.loadVideo();
                }
            },

            resize: function() {

                let width = this.player.getIframe().parentElement.parentElement.clientWidth - (this.padding * 2);
                let height = (width * 9 ) / 16;

                if (height > window.innerHeight) {
                    this.parentWidth = ((window.innerHeight - (this.padding * 2)) * 16) / 9;
                } else {
                    this.parentWidth = width;
                }

                this.player.getIframe().style.width = this.playerWidth + 'px';
                this.player.getIframe().style.height = 'calc((' + this.playerWidth + 'px * 9) / 16)';
            
                this.player.getIframe().parentElement.style.width = this.playerWidth + 'px';
                this.player.getIframe().parentElement.style.height = 'calc((' + this.playerWidth + 'px * 9) / 16)';
            },

            onPlayerStateChange: function(event) {
                if (event.data == YT.PlayerState.ENDED) {
                    //this.hide();
                    this.$emit('ended');
                }
            },
        
        }
    }
</script>
