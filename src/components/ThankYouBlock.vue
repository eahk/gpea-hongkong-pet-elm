<template>
  <div class="thankyou">
    <h2>
      <strong>感謝您為香港自然環境發聲！</strong>
    </h2>
    <p>
      多年來，綠色和平致力保護香港綠野、大海，以城市與自然環境和諧共存為目標，在推動環境工作愈見困難的此刻，我們仍堅持不接受政商界支持。
    </p>
    <p>
      <strong
        >請即以每日約$3小額捐助，支持綠色和平持續調查棕地亂象，以事實證明自然與住屋不對立，一起守護珍貴環境！</strong
      >
    </p>
    <p class="actions">
      <a
        class="action-button button--support ty-page-donation-link"
        href="https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=countrypark&ref=elm-thankyou_page"
        target="_blank"
        >支持我們</a
      >
    </p>
    <p class="actions">
      <a
        class="share-button share-button__main action-button button--share"
        href="#"
        target="_blank"
        @click="mainShare"
        >分享出去</a
      >
    </p>
    <p class="actions">
      <a
        class="share-button share-button__whatsapp action-button button--whatsappshare"
        href="#"
        target="_blank"
        @click="whatsAppShare"
      >
        <img
          src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1853/whatsapp.svg?v=1554003003000"
          style="max-width: 30px;"
        />
      </a>
    </p>
  </div>
</template>

<script>
import { mainShare, whatsAppShare } from "@/share.js";

export default {
  name: "ThankYouBlock",
  data: function() {
    return {};
  },
  methods: {
    mainShare,
    whatsAppShare
  }
};
</script>

<style lang="scss">
.thankyou {
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  p {
    line-height: 1.5;
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
  background-color: #25d366;
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
