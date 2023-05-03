<script lang="ts">
    import type { SlimeEntity } from "$lib/types";

    export let slimesMap: SlimeEntity[] = [];
    
    let toggleIndex = 1;
    const onToggleIndex = (index: number) => () => {
        if (index >= 0 && index < 6) {
            toggleIndex = index;
        }   
    }
</script>

<section class="slime-nav">
    {#each slimesMap as { href, icon }, index}
        {#if index < 6}
        <article class="slime-nav__stretch-block">
            <a 
                class={
                    `vertical-toggle ` +
                    `vertical-toggle${toggleIndex === index ? '_active' : ''} ` +
                    `vertical-toggle_elem-${index+1 || 1}`
                } 
                href={href} 
                on:click={onToggleIndex(index)}
            >
                <div class="vertical-toggle__content">
                    <img class="slime-icon" src={icon} alt="src img" />
                </div>
            </a>
        </article>
        {/if}
    {/each}
</section>

<style lang="scss">
    @use '$lib/styles/colors' as colors;

    .slime-nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        gap: 0px;

        &__stretch-block {
            width: 100%;
            height: 100%;
            flex: 1 1 0px;
        }
    }

    .vertical-toggle {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        background: black 0% 0% no-repeat padding-box;
        transition: clip-path .3s;
        clip-path: inset(0 0 40px 0 round 0 0 1000px 1000px);

        &_active {
            clip-path: inset(0 0 0 0 round 0 0 1000px 1000px);
        }

        @for $i from 1 through 6 {
            &_elem-#{$i} {
                background: nth(colors.$colors, $i) 0% 0% no-repeat padding-box;
            }
        }

        &__content {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }

    .slime-icon {
        width: 24px;
        height: 24px;
    }

</style>