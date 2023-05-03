<script>
	import CredentialsNav from "$lib/widgets/credentials-nav.svelte";
	import SlimeNav from "$lib/widgets/slime-nav.svelte";
	import GreetingBox from "$lib/widgets/greeting-box.svelte";
	import MainTextSample from "$lib/widgets/main-text-sample.svelte";
	import TextWallBlock from "$lib/widgets/text-wall-block.svelte";
	import ImagesWall from "$lib/widgets/images-wall.svelte";
	import WaterBlock from "$lib/widgets/water-block.svelte";
	import { NAV_MAP, SLIME_MAP, SOCHI_IMG, TOURISTS_IMG } from "./contsants";
</script>

<main class="page">
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
		<div class="simple-page">
			<div class="simple-page__heading-block">
				<GreetingBox />
			</div>
			<div class="simple-page__text-wall-block">
				<TextWallBlock>
					<MainTextSample />
				</TextWallBlock>
			</div>
			<div class="simple-page__front-images-block">
				<ImagesWall 
					imageSrc1={TOURISTS_IMG} 
					imageSrc2={SOCHI_IMG}
				/>
			</div>
		</div>
		<div class="contacts-page">
			<WaterBlock>
				<div>
					some text
				</div>
			</WaterBlock>
		</div>
	</section>
</main>


<style lang="scss">

	.page {
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

	.simple-page {
		margin: auto;
		max-width: 960px;
		height: 841px;
		&__heading-block {
			margin: auto;
			padding-top: 53px;
			width: 360px;
		}

		&__text-wall-block {
			padding-top: 53px;
			margin: auto;
			width: 360px;
		}

		&__front-images-block {
			position: absolute;
			width: 100%;
			max-width: 640px;
			height: 100vh;
			top: 0;
			left: 50%;
			transform: translate(-50%, 0);
			padding-top: 320px;
		}
	}

	.contacts-page {
		width: 100%;
		height: 421px;
		position: relative;
	}
</style>