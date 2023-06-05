<script>
    const headers = [
        "Создаешь страничку пользователя",
        "Выбираешь место и время поездки",
        "Находишь подходящие варианты",
        "Система знакомит Вас с людьми",
        "Общаетесь в одном чате",
        "Совместно вносите предоплату",
        "И выезжаете на отдых",
    ]
</script>


<section class="miniguide-block">
    <div class="miniguide-block__heading">
        <h1 class="head">ПРОЦЕСС АРЕНДЫ</h1>
    </div>
    <div class="miniguide-block__content">
        <div class="guide-list">
            {#each headers as head, i}
                <article class="guide-list__elem">
                    <div class="list-elem">
                        <div class={`list-elem__content-${(i % 2) ? 'right' : 'left'}`}>
                            <p class="text-block">
                                <span class={`text-block__content-${(i % 2) ? 'right' : 'left'}`}>{head}</span>
                            </p>
                        </div>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    @use "$lib/styles/colors" as colors;

    .miniguide-block {
        width: 100%;
        height: 100%;
        padding: 100px 15px;

        &__heading {
            width: 100%;
        }

        &__content {
            width: 100%;
            height: 100%;
            max-width: 640px;
            margin: auto;
        }
    }

    .head {
        margin: 0 auto;
        text-align: center;
        font-size: 36px;
        color: colors.$white;
    }

    .guide-list {
        display: flex;
        height: 100%;
        padding: 20px 0;
        flex-direction: column;
        align-items: stretch;
        gap: 5px;
        &__elem {
            width: 100%;
        }
    }

    .list-elem {
        width: 100%;
        height: 60px;

        &__content {
            &-left,
            &-right {
                width: 52%;
                height: 60px;
            }

            &-left {
                float: left;
            }

            &-right {
                float: right;
            }
        }
    }

    .text-block {
        display: block;
        height: 150%;
        padding: 5% 24px;
        font: normal normal normal 18px/21px Comfortaa;
        color: colors.$white;
        border: 2px solid colors.$white;
        border-radius: 20px;
        margin: 0;

        &__content {
        }
    }

    @media (max-width: 700px) {
        .some-text {
            font-size: 18px;
        }
    }

</style>