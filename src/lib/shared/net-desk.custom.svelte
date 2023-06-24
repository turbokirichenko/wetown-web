<script lang="ts">
    export let icon: string = '';
    export let title: string = '';
    export let description: string = '';
    export let list: {title: string, description: string }[] = [];
    export let href: string = '';
    export let text: string = '';
    export let bgColorNumber: string = '';
</script>

<section class={
    'desk ' +
    `desk_color-${bgColorNumber}`
}>
    <div class="desk__content">
        <div class="card-content">
            {#if icon}
                <img class="card-content__img" src={icon} alt="icon" />
            {/if}
            <h1 class="card-content__title">{title}</h1>
            <h3 class="card-content__description">{description}</h3>
            <div class="card-content__achivement">
                <ul class="achivement">
                    {#each list as achive}
                        <li class={ 
                            `achivement__elem ` + 
                            `achivement__elem_color-${bgColorNumber}`
                        }>
                            <div class="achive-element">
                                <p class="achive-element__title">{achive.title}</p>
                                <p class="achive-element__description">{achive.description}</p>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
    <div class="desk__footer">
        <a class="toggle-link" href={href}>{text}</a>
    </div> 
</section>

<style lang="scss">
    @use "$lib/styles/colors" as colors;

    .desk {
        width: 100%;
        height: 100%;
        background-color: blueviolet;
        border-radius: 25px;
        overflow: hidden;
        position: relative;

        &__content {
            width: 100%;
            height: 100%;
            min-height: 525px;
            clip-path: ellipse(360px 400px at 36% 14%);
            background-color: white;
        }

        &__footer {
            position: absolute;
            bottom: 20px;
            right: 25px;
        }

        &_color {
            &-1 { background-color: nth(colors.$colors, 5); }
            &-2 { background-color: nth(colors.$colors, 1); }
        }
    }

    .card-content {
        width: 100%;
        height: 100%;
        padding: 50px 15px;

        &__img {
            display: block;
            margin: auto;
        }

        &__title {
            padding-top: 12px;
            text-align: center;
            font-size: 24px;
            color: #666;
        }

        &__description {
            padding: 12px 12% 0;
            text-align: center;
            font-size: 16px;
            line-height: 23px;
            color: #bbb;
        }
    }

    .achivement {
        list-style: none;
        position: relative;
        padding: 20px 8% 0 12%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        &__elem {
            position: relative;
            &::before {
                content: "";
                display: block;
                position: absolute;
                top: 3px;
                left: -28px;
                width: 24px;
                height: 24px;
                background: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z' /></svg>") no-repeat;
            }
        }

        &__elem {
            &_color {
                &-1 { 
                    &::before {
                        background: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg fill='lightgreen' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z' /></svg>") no-repeat; 
                    }
                }
                &-2 { 
                    &::before {
                        background: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg fill='orange' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z' /></svg>") no-repeat; 
                    }
                }
            }
        }
    }

    .achive-element {
        &__title {
            color: #777;
            font-weight: bold;
            font-size: 21px;
            line-height: 24px;
        }
        &__description {
            color: #bbb;
            font-size: 16px;
            line-height: 19px;
        }
    }

    .toggle-link {
        color: white;
        font-size: 18px;
        line-height: 21px;
    }
</style>