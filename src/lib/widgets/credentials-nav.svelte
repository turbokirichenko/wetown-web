<script lang="ts">
    import type { NavEntity } from "$lib/types.ts";
    export let navMap: NavEntity[] = [];
</script>

<nav class="slime-nav">
    <div class="slime-nav__button">
        <button class="toggle-button">
            <span class="visual-content">вход</span>
        </button>
    </div>
    <div class="slime-nav__links">
        <ul class="links-list">
            {#each navMap as {href, icon}}
                <li class="links-list__elem">
                    <a class="toggle-link" href={href}>
                        <img class="square-icon" src={icon} alt="some icon" />
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</nav>

<style lang="scss">
    .slime-nav {
        width: 100%;
        height: 40px;

        &__button,
        &__links {
            display: block;
            float: right;
            height: 100%;
            margin-left: 10px;
        }

        &__button {
            width: 95px;
        }
    }

    .links-list {
        display: block;
        list-style-type: none;
        &__elem {
            display: inline-block;
            width: 40px;
            height: 40px;
            padding: 8px;
        }
    }

    .toggle-link {
        display: block;
        width: 100%;
        height: 100%;
    }

    .square-icon {
        display: block;
        width: 24px;
        height: 24px;
    }

    .toggle-button {
        display: inline;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border: 2px solid #F28705;
        border-radius: 15px;
        background: none;
        border-radius: 15px;
        vertical-align: bottom;
        cursor: pointer;
    }

    .visual-content {
        font: normal normal normal 20px/23px Comfortaa;
        font-weight: 600;
        letter-spacing: 0px;
        color: #F28705;
    }
</style>