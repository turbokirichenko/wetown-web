<script lang="ts">
    export let imageSrc1: string = "";
    export let imageSrc2: string = "";
</script>

<div class="images-wall">
    <div class="images-wall__elem-1">
        <div class="round-block">
            <img class="round-block__img" src={imageSrc1} alt="just background"/>
        </div>
    </div>
    <div class="images-wall__elem-2">
        <div class="round-block">
            <img class="round-block__img" src={imageSrc2} alt="just background"/>
        </div>
    </div>
</div>

<style lang="scss">
    .images-wall {
		width: 100%;
		height: 100%;
		margin: auto;

		&__elem-1 {
			height: 240px;
			overflow: hidden;
			text-align: right;
		}

		&__elem-2 {
			height: 240px;
			overflow: hidden;
		}
	}

	.round-block {
		display: inline-block;
		width: 240px;
		height: 240px;
		border-radius: 50%;
		overflow: hidden;
		position: relative;

		&__img {
			display: block;
			height: 240px;
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, 0);
		}
	}
</style>