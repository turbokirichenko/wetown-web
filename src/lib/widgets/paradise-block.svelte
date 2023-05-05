<script lang="ts">
    export let imageSrc: string = "";
    export let momentSrcTop: string = "";
    export let momentSrcBottom: string = "";
</script>

<section class="paradise-block">
    <div class="paradise-block__background-segment">
        <div class="background-blur-image">
            <img class="background-blur-image__image" src={imageSrc} />
            <div class="background-blur-image__opacity" />
        </div>
    </div>
    <div class="paradise-block__front-segment">
        <div class="photo-wall">
            <article class="photo-wall__heading">
                <h1 class="heading-title">МОМЕНТЫ ОТДЫХА</h1>
            </article>
            <article class="photo-wall__top-elem">
                <div class="photo-box">
                    <div class="photo-box__content">
                        <img class="moment-photo" src={momentSrcTop} alt="top src" />
                    </div>
                </div>
            </article>
            <article class="photo-wall__bottom-elem">
                <div class="photo-box">
                    <div class="photo-box__content">
                        <img class="moment-photo" src={momentSrcBottom} alt="bottom src" />
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>

<style lang="scss">
    .paradise-block {
        width: 100%;
        height: 100%;
        position: relative;

        &__background-segment {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }

        &__front-segment {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
    }

    .background-blur-image {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        z-index: -1;

        &__image {
            position: absolute;
            display: block;
            width: 100%;
            min-width: 1300px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &__opacity {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent linear-gradient(180deg, #FFFFFF 0%, #C0C0C080 49%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
            opacity: 1;
            backdrop-filter: blur(6px);
        }
    }

    .photo-wall {
        width: 100%;
        height: 100%;
        max-width: 640px;
        margin: auto;
        position: relative;

        &__heading {
            width: 100%;
            padding-top: 80px;
            text-align: center;
        }

        &__top-elem,
        &__bottom-elem {
            width: 360px;
            height: 240px;
            position: absolute;
            background-color: white;
        }

        &__top-elem {
            top: 200px;
            right: -30px;
        }

        &__bottom-elem {
            bottom: 140px;
            left: -30px;
        }
    }

    .photo-box {
        width: 100%;
        height: 100%;
        padding: 20px;

        box-shadow: 0px 0px 10px #00000080;

        &__content {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
    }

    .heading-title {
        font-size: 48px;
        font-weight: lighter;
        color: white;
    }

    .moment-photo {
        display: block;
        background-color: darkgray;
        width: 100%;
    }
</style>