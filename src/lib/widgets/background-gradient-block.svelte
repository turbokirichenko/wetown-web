<script lang="ts">

    export let colorType: number = 1;
    $: if (colorType < 0 || colorType > 6) colorType = 1;
</script>

<section class={
    `background-gradient-block ` +
    `background-gradient-block_color-type-${colorType}`
}>
    <slot />
</section>

<style lang="scss">
    @use "$lib/styles/colors" as colors;

    $bgColor: nth(colors.$colors, 3);
    $opacityColor: #FFFFFF00;

    .background-gradient-block {
        width: 100%;
        height: 100%;

        @for $i from 1 through 6 {
            &_color-type-#{$i} {
                background: transparent linear-gradient(
                    180deg, 
                    $opacityColor 0%, 
                    nth(colors.$colors, $i) 14%, 
                    nth(colors.$colors, $i) 89%, 
                    $opacityColor 100%
                ) 0% 0% no-repeat padding-box;
            }
        }
    }
</style>