<template>
    <div class="s-video-play">
        <video-player class="video-player-box"
                      ref="videoPlayer"
                      :options="playerOptions"
                      :playsinline="true"
                      customEventName="customstatechangedeventname"

                      @play="onPlayerPlay($event)"
                      @pause="onPlayerPause($event)"
                      @ended="onPlayerEnded($event)"
                      @waiting="onPlayerWaiting($event)"
                      @playing="onPlayerPlaying($event)"
                      @loadeddata="onPlayerLoadeddata($event)"
                      @timeupdate="onPlayerTimeupdate($event)"
                      @canplay="onPlayerCanplay($event)"
                      @canplaythrough="onPlayerCanplaythrough($event)"

                      @statechanged="playerStateChanged($event)"
                      @ready="playerReadied">
        </video-player>
    </div>
</template>
<script>
    export default {
    	props: ['videoUrl', 'videoPic'],
        data() {
            return {

            }
        },
        watch: {
            videoUrl: function(v) {
                console.log(v, '---------------------------')
            }
        },
        mounted() {
            console.log('this is current player instance object', this.player)
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            },
            playerOptions() {
                return {
                    // videojs options
                    muted: false,
                    autoplay: true,
                    width: '960px',
                    height: '400px',
                    language: 'zh-CN',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: this.videoUrl
                    }],
                    poster: this.videoPic
                }
            }
        },
        methods: {
    		play() {
    		    console.log(this.$refs['videoPlayer'], '=================')
			    // this.$refs['videoPlayer'].player.play()
            },
            pause() {
                // console.log(this.$refs['videoPlayer'])
                this.$refs['videoPlayer'].player.pause()
            },
            onPlayerEnded() {

            },
            onPlayerWaiting() {

            },
            onPlayerPlaying() {

            },
            onPlayerLoadeddata() {

            },
            onPlayerTimeupdate() {

            },
            onPlayerCanplay() {

            },
            onPlayerCanplaythrough() {

            },
            // listen event
            onPlayerPlay(player) {
                // console.log('player play!', player)
            },
            onPlayerPause(player) {
                // console.log('player pause!', player)
            },
            // ...player event

            // or listen state event
            playerStateChanged(playerCurrentState) {
                // console.log('player current update state', playerCurrentState)
            },

            // player is ready
            playerReadied(player) {
                console.log('the player is readied', player)
                // you can use it to do something...
                // player.[methods]
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .s-video-play {
        .video-js .vjs-big-play-button {
            top: 50%;
            left: 50%;
            margin-left: -1.5em;
            margin-top: -0.75em;
        }
    }
</style>