<script>
    export let userAvatarTop = "";
    export let userAvatarBottom = "";
</script>

<section class="messages-block">
    <header class="messages-block__heading">
        <div class="heading-segment">
            <article class="heading-segment__line-1">
                <h1 class="box-sm">НАВСТРЕЧУ</h1>
            </article>
            <article class="heading-segment__line-2">
                <h1 class="box-lg">НОВЫМ</h1>
            </article>
            <article class="heading-segment__line-3">
                <h1 class="box-sm">ЗНАКОМСТВАМ</h1>
            </article>
        </div>
    </header>
    <div class="messages-block__messager">
        <div class="messager">
            <article class="messager__message-line">
                <div class="message-box">
                    <div class="message-box__content-left-side">
                        <div class="open-message">
                            <div class="open-message__content open-message__content-left">
                                <span class="message-text">
                                    Привет! Я ищу с кем можно было бы снять эту виллу
                                </span>
                            </div>
                            <div class="open-message__user-avatar open-message__user-avatar-left">
                                <img class="avatar" src={userAvatarTop} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article class="messager__message-line">
                <div class="message-box">
                    <div class="message-box__content-right-side">
                        <div class="open-message">
                            <div class="open-message__content open-message__content-right">
                                <span class="message-text">
                                    Отлично! Мы как раз в поиске еще одного человека к нам, так что давай, подключайся
                                </span>
                            </div>
                            <div class="open-message__user-avatar open-message__user-avatar-right">
                                <img class="avatar" src={userAvatarBottom} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>


<style lang="scss">
    @use "$lib/styles/colors" as colors;

    .messages-block {
        width: 100%;
        height: 100%;
        max-width: 960px;
        margin: auto;

        &__heading {
            width: 100%;
            padding-top: 120px;
            min-height: 120px;
        }

        &__messager {
            width: 100%;
            padding-top: 50px;
        }
    }

    .heading-segment {
        max-width: 640px;
        width: 100%;
        margin: auto;

        &__line {
            &-1,
            &-3 {
                text-align: right;
                position: relative;
                right: 50%;
            }
            &-2 {
                text-align: center;
            }
        }
    }

    .messager {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        padding: 10px;

        &__message-line {
            width: 100%;
            max-width: 640px;
            height: 100%;
        }
    }

    .message-box {
        width: 100%;
        &__content-left-side {
            float: left;
        }
        &__content-right-side {
            float: right;
        }

        &__content-left-side,
        &__content-right-side {
            max-width: 360px;
            width: 60%;
            min-width: 240px;
            height: 160px;
        }
    }

    .open-message {
        width: 100%;
        height: 100%;
        position: relative;

        &__content {
            width: 100%;
            height: 100%;
            padding: 20px;
            background-color: colors.$white;
        }

        &__content-left {
            border-radius: 30px 30px 30px 0px; 
        }

        &__content-right {
            border-radius: 30px 30px 0px 30px; 
        }

        &__user-avatar {
            width: 80px;
            height: 80px;
            border-radius: 60px;
            background-color: colors.$white;
            transform: translate(0, 50%);
            padding: 10px;
        }

        &__user-avatar-left {
            position: absolute;
            bottom: 0;
            right: calc(100% + 12px);
        }

        &__user-avatar-right {
            position: absolute;
            bottom: 0;
            left: calc(100% + 12px);
        }
    }

    .message-text {
        display: inline;
        font-size: 20px;
        line-height: 23px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .box-lg {
        display: inline-block;
        font-size: 53px;
        margin: 0;
        color: colors.$white;
        font-weight: lighter;
    }

    .box-sm {
        margin: 0;
        display: inline-block;
        font-size: 25px;
        color: colors.$white;
        font-weight: lighter;
    }

    .avatar {
        display: block;
        width: 100%;
        border-radius: 300px;
    }

    @media (max-width: 640px) {
        .heading-segment {

        &__line {
            &-1,
            &-3 {
                text-align: center;
                position: inherit;
            }
            &-2 {
                text-align: center;
            }
        }
    }
    }
</style>