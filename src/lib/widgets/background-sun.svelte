<section class="background-sun">
    <img class="background-sun__sun-img" src="sun.svg" alt="sun"/>
    <div class="background-sun__content">
        <slot></slot>
    </div>
</section>

<style lang="scss">
    .background-sun {
        width: 100%;
        height: 100%;
        position: relative;
        &__sun-img {
            pointer-events: none;
            display: block;
            position: absolute;
            width: 901px;
            height: 901px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        &__content {
            width: 100%;
            height: 100%;
        }
    }
</style>