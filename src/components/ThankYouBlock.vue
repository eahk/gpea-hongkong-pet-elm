<template>
	<div class="thankyou">
			<p><strong>感謝您加入聯署！</strong></p>
			<p>您願意進一步行動，捐助支持守護大嶼項目嗎？</p>
			<p>在守護香港海洋生態的路上，我們需要您即時行動，幫助揭露政府有地不用，執意破壞具生態價值的海洋；您可以協助我們，展開棕地的調查、研究和行動，合力阻截不負責任的政府，強推的「明日大嶼」！懇請您進一步捐助守護！</p>
			<p class="actions"><a class="action-button button--support ty-page-donation-link" href="https://act.greenpeace.org/page/4663/donate/1?campaign=countrypark&amp;ref=2019-elm-thankyou_page" target="_blank">支持我們</a></p>
			<p class="actions"><a class="action-button button--share" href="#" target="_blank" @click="mainShare">分享出去</a></p>
			<p class="actions"><a class="action-button button--whatsappshare" href="#" target="_blank" @click="whatsAppShare"><img src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1853/whatsapp.svg?v=1554003003000" style="max-width: 30px;" /></a></p>
	</div>
</template>

<script>
import { mainShare, whatsAppShare } from "@/share.js";

export default {
	name: "ThankYouBlock",
	data: function () {
		return {

		}
	},
	methods: {
		mainShare,
		whatsAppShare
	}
}
</script>

<style lang="scss">
	.thankyou {
		strong {
			font-size: 22px;
		}
		p {
			line-height: 1.42857;
			margin-bottom: 20px;
		}
	}
	.actions {
		a {
			color: #fff;
			text-decoration: none;
			&:hover {
				color: #0a0a0a;
			}
		}
	}
	.action-button {
		margin: 15px auto;
		color: #fff;
		display: block;
		padding: 10px 30px;
		text-align: center;
		border-radius: 4px;
		font-weight: bold;
		cursor: pointer;
		text-align: center;
		letter-spacing: 2px;
		text-decoration: none;
		outline: none;
		border: none;
		text-decoration: none;
	}
	.button--share {
		background-color: #3b5998;
	}
	.button--support {
		background-color: rgb(253, 162, 47);
	}
	.button--whatsappshare {
		background-color: #25D366;
		img {
			width: 100%;
			height: auto;
			max-width: 30px;
		}
	}
	@media screen and (min-width: 768px) {
		.button--whatsappshare {
			display: none;
		}
	}
</style>