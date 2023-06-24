<script>

</script>

<section class="greeting-box" >
    <article class="greeting-box__line-1">
        <h1 class="title-one">БУДЕМ</h1>
    </article>
    <article class="greeting-box__line-2">
        <h3 class="title-two">ПУТЕШЕСТВОВАТЬ</h3>
    </article>
    <article class="greeting-box__line-3">
        <h2 class="title-three">ВМЕСТЕ</h2>
    </article>
    <article class="greeting-box__line-4">
        <div class="button-wrapper">
            <a href="#_contacts-page">
                <button type="submit" class="toggle-button">
                    поехали!
                </button>
            </a>
        </div>
    </article>
</section>

<style lang="scss">
    @use "$lib/styles/colors";

    .greeting-box {
        width: 100%;
        min-height: 100px;

        &__line-1,
        &__line-2,
        &__line-3,
        &__line-4 {
            margin: 5px 0;
            width: 100%;
            color: nth(colors.$colors, 3);
        }
    }

    .title-one {
        font-size: 76px;
        line-height: 76px;
        text-align: left;
    }

    .title-two {
        width: 100%;
        font-size: 36px;
        line-height: 36px;
        text-align: left;
        position: relative;
        right: 50%;
    }

    .title-three {
        font-size: 56px;
        line-height: 56px;
        text-align: right;
    }

    .button-wrapper {
        margin-top: 10px;
        width: 180px;
        height: 50px;
    }

    .toggle-button {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        border: none;
        background: nth(colors.$colors, 3);
        color: colors.$white;
        font-size: 20px;
        cursor: pointer;
    }

    @media (max-width: 640px) {
        .title-one {
            font-size: 48px;
            line-height: 55px;
        }
        .title-two {
            position: inherit;
            font-size: 28px;
        }
        .title-three {
            font-size: 48px;
            line-height: 55px;
        }
    }
</style>

