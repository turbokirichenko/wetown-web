<script>
	import CredentialsNav from "$lib/widgets/credentials-nav.svelte";
	import SlimeNav from "$lib/widgets/slime-nav.svelte";
	import GreetingBox from "$lib/widgets/greeting-box.svelte";
	import MessagesBlock from "$lib/widgets/messages-block.svelte";
	import BackgroundGradientBlock from "$lib/widgets/background-gradient-block.svelte";
	import ParadiseBlock from "$lib/widgets/paradise-block.svelte";
	import WaterBlock from "$lib/widgets/water-block.svelte";
	import ScrollBlock from "$lib/widgets/scroll-block.svelte";
	import { 
		NAV_MAP,
		SLIME_MAP, 
		STICKER_MAP,
		CARD_MAP,
		BEACH_IMG, 
		GIRL_IMG, 
		BOY_IMG 
	} from "./contsants";
	import NetDesk from "$lib/shared/net-desk.custom.svelte";
</script>

<main class="page">
	<!--
	<img class="background-motion" src="background-motion.svg" alt="none"/>-->
	<header class="page__header-segment">
		<div class="header-lander">
			<article class="header-lander__left-wing">
				<img src="wetown-logo.svg" alt="logo" />
			</article>
			<article class="header-lander__center">
				<SlimeNav slimesMap={SLIME_MAP} />
			</article>
			<article class="header-lander__right-wing">
				<CredentialsNav navMap={NAV_MAP} />
			</article>
		</div>
	</header>
	<section class="page__perfomance-segment">
		<div class="simple-page" id="_simple-page">
			<div class="simple-page__heading-block">
				<GreetingBox />
			</div>
			<div class="simple-page__scroll-block">
				<ScrollBlock propertyMap={STICKER_MAP} />
			</div>
		</div>
		<div class="messages-page"  id="_messages-page">
			<BackgroundGradientBlock colorType={3}>
				<MessagesBlock
					userAvatarTop={BOY_IMG}
					userAvatarBottom={GIRL_IMG}
				 />
			</BackgroundGradientBlock>
		</div>
		<div class="paradise-page"  id="_paradise-page">
			<ParadiseBlock imageSrc={BEACH_IMG} cardMap={CARD_MAP}>
				<NetDesk />
			</ParadiseBlock>
		</div>
		<div class="contacts-page"  id="_contacts-page">
			<WaterBlock>
				<h1 class="title">ОСТАВЬТЕ ЗАЯВКУ</h1>
				<h3 class="minititle">по вопросам сотрудничества</h3>
				<div>
					<form class="toggle-form">
						<input class="toggle-input" placeholder="Ваше имя"/>
						<input class="toggle-input" type="email" placeholder="Email"/>
						<button type="submit" class="toggle-button">ОТПРАВИТЬ</button>
					</form>
				</div>
				<ul class="contacts">
					<li class="contacts__elem">+7960529****</li>
					<li class="contacts__elem">ИНН:2222132424724</li>
					<li class="contacts__elem">ОГРН:284772918871182</li>
					<li class="contacts__elem">wetown.me © 2023</li>
				</ul>
			</WaterBlock>
		</div>
	</section>
</main>


<style lang="scss">

	$h-lg: 901px;
	$h-md: 841px;
	$h-sm: 420px;

	.page {
		position: relative;
		overflow: hidden;
		&__header-segment {
			width: 100%;
		}

		&__perfomance-segment {
			overflow: hidden;
		}
	}

	// w-sm 320px
	// w-md 640px
	// w-lg 960px
	.header-lander {
		width: 100%;
		height: 80px;

		padding: 0px 42px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: end;

		&__center {
			position: fixed;
			z-index: 2;
			left: calc(50% - 180px);
			width: 360px;
			height: 100%;
		}

		&__left-wing,
		&__right-wing {
			width: 320px;
		}
	}

	.background-motion {
		animation-name: fade;
		animation-duration: 2s;
		z-index: -1;
		position: absolute;
		display: block;
		width: 100%;
		min-width: 1280px;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
	}

	.simple-page {
		width: 100%;
		height: 841px;
		position: relative;
		animation-name: fade;
		opacity: 0;
		animation-delay: 1s;
		animation-duration: 2s;
		animation-fill-mode: forwards;

		&__heading-block {
			margin: auto;
			padding-top: 53px;
			width: 360px;
		}

		&__scroll-block {
			padding-top: 70px;
			display: flex;
			height: 400px;
			width: 100%;
			gap: 38px;
		}
	}

	.messages-page {
		width: 100%;
		height: $h-lg;
		position: relative;
	}

	.paradise-page {
		width: 100%;
		height: $h-lg;
	}

	.contacts-page {
		width: 100%;
		height: $h-lg;
	}


	.contacts {
		width: 100%;
		padding: 160px 0;
		list-style-type: none;
		&__elem {
			padding: 10px 0;
			width: 360px;
			text-align: center;
			margin: auto;
			font-weight: 600;
			color: #f9f9f9;
		}
	}

	.title {
		padding-top: 80px;
		font-size: 48px;
		width: 100%;
		text-align: center;
	}

	.minititle {
		padding-top: 10px;
		font-size: 24px;
		margin: auto;
		width: 80%;
		text-align: center;
		color: #00000080;
	}

	.toggle-form {
		max-width: 480px;
		margin: auto;
		padding: 20px 16px 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.toggle-input {
		padding: 12px 16px;
		border-radius: 20px;
		height: 60px;
		font-size: 20px;
		background: #f9f9f980;
		border: none;
	}

	.toggle-button {
		width: 100%;
		height: 60px;
		border-radius: 20px;
		height: 60px;
		font-size: 20px;
		border: 3px solid #f9f9f9;
		background: none;
		color: #f9f9f9;
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@media (max-width: 700px) {
		.header-lander {
			&__left-wing,
			&__right-wing {
				display: none;
			}
		}
	}
</style>