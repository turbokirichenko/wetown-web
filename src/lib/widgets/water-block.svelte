<script>
    export let headingText = "";
</script>

<section class="water-block">
    <div class="water-block__wave">
        <div class="wave" />
    </div>
    <div class="water-block__background">
        <p class="water-bg" />
    </div>
    <div class="water-block__content">
        <slot />
    </div>
</section>

<style lang="scss">
    @use '$lib/styles/colors' as colors;

    .water-block {
        position: relative;
        width: 100%;
        height: 100%;

        &__wave {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 20%;
        }

        &__background {
            position: absolute;
            top: 19%;
            left: 0;
            width: 100%;
            height: 81%;
        }

        &__content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }

    .wave {
        width: 100%;
        height: 100%;
        background: nth(colors.$colors, 4);
        animation: waves 2s ease-in-out infinite;

        &__heading {
            padding-top: 1.8rem;
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 3rem;
            color: colors.$white;
            font-weight: bold;
        }
    }

    .water-bg {
        width: 100%;
        height: 100%;
        background: linear-gradient(nth(colors.$colors, 4), nth(colors.$colors, 4), colors.$black);
    }

    @keyframes waves {
        0%, 100% {
            clip-path: polygon(0 8%, 7% 6%, 14% 5%, 21% 5%, 28% 6%, 34% 8%, 40% 12%, 46% 17%, 50% 20%, 54% 23%, 60% 25%, 66% 26%, 70% 26%, 77% 25%, 83% 23%, 89% 21%, 95% 19%, 100% 17%, 100% 100%, 0% 100%);
        }

        50% {
            clip-path: polygon(0 15%, 9% 21%, 14% 23%, 18% 25%, 21% 26%, 30% 28%, 32% 28%, 40% 27%, 46% 26%, 52% 23%, 57% 19%, 62% 15%, 68% 11%, 73% 8%, 79% 6%, 86% 5%, 93% 5%, 100% 6%, 100% 100%, 0% 100%);
        }
    }
</style>

