<script lang="ts">
    import NetDesk from "$lib/shared/net-desk.custom.svelte";
    import type { CardEntity } from "$lib/types";
    export let imageSrc: string = "";
    export let cardMap: CardEntity[] = [];
</script>

<section class="paradise-block">
    <div class="paradise-block__background-segment">
        <div class="background-blur-image">
            <img class="background-blur-image__image" src={imageSrc} alt="blur img"/>
            <div class="background-blur-image__opacity" />
        </div>
    </div>
    <div class="paradise-block__front-segment">
        <div class="photo-wall">
            <article class="photo-wall__heading">
                <h1 class="heading-title">ПРИСОЕДИНЯЙСЯ</h1>
            </article>
            <article class="photo-wall__segment">
                <div class="achive-card">
                    <div class="achive-card__elem">
                        <NetDesk 
                            icon={cardMap[0].icon}
                            title={cardMap[0].title}
                            description={cardMap[0].description}
                            list={cardMap[0].list}
                            text={'РЕГИСТРАЦИЯ'}
                            bgColorNumber="1"
                        />
                    </div>
                    <div class="achive-card__elem">
                        <NetDesk 
                            icon={cardMap[1].icon}
                            title={cardMap[1].title}
                            description={cardMap[1].description}
                            list={cardMap[1].list}
                            text={'ПОДКЛЮЧИТЬСЯ'}
                            bgColorNumber="2"
                        />
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>

<style lang="scss">
    .paradise-block {
        width: 100%;
        height: 100%;
        position: relative;

        &__background-segment {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }

        &__front-segment {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
    }

    .background-blur-image {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        z-index: -1;

        &__image {
            position: absolute;
            display: block;
            width: 100%;
            min-width: 1300px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &__opacity {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent linear-gradient(180deg, #FFFFFF 0%, #C0C0C080 49%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
            opacity: 1;
            backdrop-filter: blur(6px);
        }
    }

    .photo-wall {
        width: 100%;
        height: 100%;
        max-width: 860px;
        margin: auto;
        position: relative;

        &__heading {
            width: 100%;
            padding-top: 80px;
            text-align: center;
        }

        &__segment {
            width: 100%;
            padding-top: 30px;
        }
    }
    .achive-card {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 15px;
        gap: 60px;
        &__elem {
            width: 100%;
            min-width: 320px;
            max-width: 380px;
        }
    }

    .heading-title {
        font-size: 36px;
        font-weight: lighter;
        color: white;
    }
</style>