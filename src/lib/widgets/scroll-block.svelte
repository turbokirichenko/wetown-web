<script lang="ts">
    import NetSticker from "$lib/shared/net-sticker.custom.svelte";
    import type { StickEntity } from "$lib/types";

    export let propertyMap: StickEntity[] = [];
</script>

<div class="scroll-block">
    <div class="scroll-block__content">
        {#each propertyMap as stick}
            <NetSticker 
                urlImage={stick.bg} 
                urlIcon={stick.icon}
                stickerRight={stick.left}
                contentBottom={stick.bottom}
                bgColorNumber={stick.color ? stick.color : ''}
                text={stick.text}
            >
            </NetSticker>
        {/each}
        {#each propertyMap as stick}
            <NetSticker 
                urlImage={stick.bg} 
                urlIcon={stick.icon}
                stickerRight={stick.left}
                contentBottom={stick.bottom}
                bgColorNumber={stick.color ? stick.color : ''}
                text={stick.text}
            >
            </NetSticker>
        {/each}
        {#each propertyMap as stick}
            <NetSticker 
                urlImage={stick.bg} 
                urlIcon={stick.icon}
                stickerRight={stick.left}
                contentBottom={stick.bottom}
                bgColorNumber={stick.color ? stick.color : ''}
                text={stick.text}
            >
            </NetSticker>
        {/each}
        {#each propertyMap as stick}
            <NetSticker 
                urlImage={stick.bg} 
                urlIcon={stick.icon}
                stickerRight={stick.left}
                contentBottom={stick.bottom}
                bgColorNumber={stick.color ? stick.color : ''}
                text={stick.text}
            >
            </NetSticker>
        {/each}
    </div>
</div>

<style lang="scss">
    $opacityColor: #fff;
    .scroll-block {
        position: relative;
        width: 100%;
        height: 100%;
        &::after {
            content: "";
            display: block;
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            background: transparent linear-gradient(
                90deg, 
                $opacityColor 0%, 
                #ffffff00 14%, 
                #ffffff00 89%, 
                $opacityColor 100%
            ) 0% 0% no-repeat padding-box;
        }

        &__content {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            gap: 0;
            width: auto;
            height: 100%;
            animation: animate-left;
            animation-duration: 40s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            gap: 60px;
            padding-left: 60px;
        }
    }

    @keyframes animate-left {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(-50%, 0);
        }
    }
</style>