<script>
    export let urlImage = '';
    export let urlIcon = '';
    export let contentBottom = false;
    export let stickerRight = false;
    export let text = '';
    export let bgColorNumber = '';
</script>

<section class="sticker" style={ `background-image: url(${urlImage})` }>
    <div class={
        `sticker__content ` +
        `sticker__content_${stickerRight ? 'right' : 'left'}-${contentBottom ? 'bottom' : 'top'} ` +
        `sticker__content_background-${bgColorNumber}`
    }>
        <div class={
            `content ` +
            `content_position-${contentBottom ? 'bottom' : 'top'}`
        }>
            {#if urlIcon}
                <img class="content__slot-img" src={urlIcon} alt="slot-img"/>
            {/if}
            <div class="content__slot">
                <span class={
                    `span-text ` + 
                    `span-text_color-${bgColorNumber}`
                }>
                    {text}
                </span>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use "$lib/styles/colors" as colors;
    $ellipse-w: 230px;
    $ellipse-h: 230px;
    $ellipse-l: 30%;
    $ellipse-r: 60%;
    $ellipse-t: 10%;
    $ellipse-b: 90%;

    .sticker {
        width: 320px;
        height: 100px;
        min-height: 290px;
        border-radius: 25px;
        overflow: hidden;
        box-shadow: 3px 3px 6px #aaa;
        background-color: burlywood;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        &__content {
            width: 100%;
            height: 100px;
            min-height: 290px;
            transition: clip-path .5s;
            background: colors.$white;

            &_background {
                &-1 { background-color: nth(colors.$colors, 1); }
                &-2 { background-color: nth(colors.$colors, 2); }
                &-3 { background-color: nth(colors.$colors, 3); }
                &-4 { background-color: nth(colors.$colors, 4); }
                &-5 { background-color: nth(colors.$colors, 5); }
                &-6 { background-color: nth(colors.$colors, 6); }
            }

            &_left { 
                &-bottom { clip-path: ellipse($ellipse-w $ellipse-h at $ellipse-l $ellipse-b); }  
                &-top { clip-path: ellipse($ellipse-w $ellipse-h at $ellipse-l $ellipse-t); }
            }
            &_right {   
                &-bottom { clip-path: ellipse($ellipse-w $ellipse-h at $ellipse-r $ellipse-b); }  
                &-top { clip-path: ellipse($ellipse-w $ellipse-h at $ellipse-r $ellipse-t); }
            }
        }

        &:hover {
            .sticker__content {
                &_left { 
                    &-bottom { clip-path: ellipse($ellipse-w $ellipse-h at $ellipse-l ($ellipse-b + 40%)); }  
                    &-top { clip-path: ellipse($ellipse-w $ellipse-h at $ellipse-l ($ellipse-t - 40%)); }
                }
                &_right {   
                    &-bottom { clip-path: ellipse($ellipse-w $ellipse-h at $ellipse-r ($ellipse-b + 40%)); }  
                    &-top { clip-path: ellipse($ellipse-w $ellipse-h at $ellipse-r ($ellipse-t - 40%)); }
                }
            }
        }
    }

    .content {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 290px;
        &_position {
            &-bottom {
                .content__slot { bottom: 5%; }
                .content__slot-img { bottom: 55%; }
            }
            &-top {
                .content__slot { top: 25%; }
                .content__slot-img { top: 10%; }
            }
        }

        &__slot {
            position: absolute;
            left: 0%;
            width: 100%;
            height: 50%;
            background: none;
            padding: 5% 10%;
            padding-right: 30%;
        }

        &__slot-img {
            position: absolute;
            width: 36px;
            height: 36px;
            left: 10%;
        }
    }

    .span-text {
        color: #666;
        font-size: 18px;
        line-height: 21px;

        &_color {
            &-1 { color: colors.$white; }
            &-2 { color: colors.$white; }
            &-3 { color: colors.$white; }
            &-4 { color: colors.$white; }
            &-5 { color: colors.$white; }
            &-6 { color: colors.$white; }
        }
    }
</style>