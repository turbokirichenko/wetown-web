
<div class="wave"></div>
<section class="water-block">
    <slot />
</section>

<style lang="scss">
    @use '$lib/styles/colors' as colors;

    .wave {
        height: 240px;
        background: nth(colors.$colors, 4);
        animation: waves 2s ease-in-out infinite;
    }

    .water-block {
        position: relative;
        top: -160px;
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

