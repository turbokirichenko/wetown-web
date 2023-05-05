<script>
    const headers = [
        "- Создаешь страничку пользователя",
        "- Выбираешь место и время поездки",
        "- Находишь подходящие варианты",
        "- Система знакомит Вас с людьми",
        "- Общаетесь в одном чате",
        "- Совместно вносите предоплату",
        "- И выезжаете на отдых",
    ]
</script>


<section class="miniguide-block">
    <div class="miniguide-block__content">
        <div class="guide-list">
            {#each headers as head, i}
                <article class="guide-list__elem">
                    <div class="list-elem">
                        <div class={`list-elem__content-${(i % 2) ? 'right' : 'left'}`}>
                            <span class="some-text">{head}</span>
                        </div>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    .miniguide-block {
        width: 100%;
        height: 100%;
        padding: 120px 15px;

        &__content {
            width: 100%;
            height: 100%;
            max-width: 640px;
            margin: auto;
        }
    }

    .guide-list {
        display: flex;
        height: 100%;
        padding: 100px 0;
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
                height: 60px;
                max-width: 240px;
            }
            &-left {
                float: left;
                text-align: left;
            }
            &-right {
                float: right;
                text-align: right;
            }
        }
    }

    .some-text {
        display: inline;
        font: normal normal normal 24px/27px Comfortaa;
        letter-spacing: 0px;
        color: #000000;
    }

    @media (max-width: 700px) {
        .some-text {
            font-size: 16px;
        }
    }

</style>