<template>
<view
  class="custom-class {{ classPrefix }} {{ classPrefix }}-{{ name }}"
  style="{{ color ? 'color: ' + color : '' }}; {{ size ? 'font-size: ' + size : '' }}"
  bind:tap="onClick"
>
  <view wx:if="{{ info !== null }}" class="shery-icon__info">{{ info }}</view>
</view>
</template>

<script>
const { shery } = global;
const { SheryComponent } = shery;
SheryComponent({
  props: {
    info: null,
    name: String,
    size: String,
    color: String,
    classPrefix: {
      type: String,
      value: "shery-icon"
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit("click");
    }
  }
});
</script>

<style lang="scss">
@import "../../style/var.scss";
@font-face {
  font-style: normal;
  font-weight: normal;
  font-family: "vant-icon";
  src: url("https://cos.56qq.com/wxchatmp/imgs/shery-icon-76f274.ttf")
    format("truetype");
}

.shery-icon {
  position: relative;
  display: inline-block;
  font: normal normal normal 14px/1 "vant-icon";
  font-size: inherit;
  text-rendering: auto;

  &__info {
    color: #fff;
    left: 100%;
    top: -0.5em;
    font-size: 0.5em;
    padding: 0 0.3em;
    text-align: center;
    min-width: 1.2em;
    line-height: 1.2;
    position: absolute;
    border-radius: 0.6em;
    box-sizing: border-box;
    background-color: $red;
    transform: translateX(-50%);
    font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
  }

  &::before {
    display: inline-block;
  }
}

.shery-icon-add-o::before {
  content: "\F000";
}

.shery-icon-add::before {
  content: "\F001";
}

.shery-icon-add2::before {
  content: "\F002";
}

.shery-icon-after-sale::before {
  content: "\F003";
}

.shery-icon-aim::before {
  content: "\F004";
}

.shery-icon-alipay::before {
  content: "\F005";
}

.shery-icon-arrow-left::before {
  content: "\F006";
}

.shery-icon-arrow::before {
  content: "\F007";
}

.shery-icon-balance-pay::before {
  content: "\F008";
}

.shery-icon-browsing-history::before {
  content: "\F009";
}

.shery-icon-card::before {
  content: "\F00A";
}

.shery-icon-cart::before {
  content: "\F00B";
}

.shery-icon-cash-back-record::before {
  content: "\F00C";
}

.shery-icon-cash-on-deliver::before {
  content: "\F00D";
}

.shery-icon-certificate::before {
  content: "\F00E";
}

.shery-icon-chat::before {
  content: "\F00F";
}

.shery-icon-check::before {
  content: "\F010";
}

.shery-icon-checked::before {
  content: "\F011";
}

.shery-icon-clear::before {
  content: "\F012";
}

.shery-icon-clock::before {
  content: "\F013";
}

.shery-icon-close::before {
  content: "\F014";
}

.shery-icon-completed::before {
  content: "\F015";
}

.shery-icon-contact::before {
  content: "\F016";
}

.shery-icon-coupon::before {
  content: "\F017";
}

.shery-icon-credit-pay::before {
  content: "\F018";
}

.shery-icon-debit-pay::before {
  content: "\F019";
}

.shery-icon-delete::before {
  content: "\F01A";
}

.shery-icon-description::before {
  content: "\F01B";
}

.shery-icon-discount::before {
  content: "\F01C";
}

.shery-icon-ecard-pay::before {
  content: "\F01D";
}

.shery-icon-edit-data::before {
  content: "\F01E";
}

.shery-icon-edit::before {
  content: "\F01F";
}

.shery-icon-exchange-record::before {
  content: "\F020";
}

.shery-icon-exchange::before {
  content: "\F021";
}

.shery-icon-fail::before {
  content: "\F022";
}

.shery-icon-free-postage::before {
  content: "\F023";
}

.shery-icon-gift-card-pay::before {
  content: "\F024";
}

.shery-icon-gift-card::before {
  content: "\F025";
}

.shery-icon-gift::before {
  content: "\F026";
}

.shery-icon-gold-coin::before {
  content: "\F027";
}

.shery-icon-goods-collect::before {
  content: "\F028";
}

.shery-icon-home::before {
  content: "\F029";
}

.shery-icon-hot-sale::before {
  content: "\F02A";
}

.shery-icon-hot::before {
  content: "\F02B";
}

.shery-icon-idcard::before {
  content: "\F02C";
}

.shery-icon-info-o::before {
  content: "\F02D";
}

.shery-icon-like-o::before {
  content: "\F02E";
}

.shery-icon-like::before {
  content: "\F02F";
}

.shery-icon-location::before {
  content: "\F030";
}

.shery-icon-logistics::before {
  content: "\F031";
}

.shery-icon-more-o::before {
  content: "\F032";
}

.shery-icon-more::before {
  content: "\F033";
}

.shery-icon-new-arrival::before {
  content: "\F034";
}

.shery-icon-new::before {
  content: "\F035";
}

.shery-icon-other-pay::before {
  content: "\F036";
}

.shery-icon-passed::before {
  content: "\F037";
}

.shery-icon-password-not-view::before {
  content: "\F038";
}

.shery-icon-password-view::before {
  content: "\F039";
}

.shery-icon-pause::before {
  content: "\F03A";
}

.shery-icon-peer-pay::before {
  content: "\F03B";
}

.shery-icon-pending-deliver::before {
  content: "\F03C";
}

.shery-icon-pending-evaluate::before {
  content: "\F03D";
}

.shery-icon-pending-orders::before {
  content: "\F03E";
}

.shery-icon-pending-payment::before {
  content: "\F03F";
}

.shery-icon-phone::before {
  content: "\F040";
}

.shery-icon-photo::before {
  content: "\F041";
}

.shery-icon-photograph::before {
  content: "\F042";
}

.shery-icon-play::before {
  content: "\F043";
}

.shery-icon-point-gift::before {
  content: "\F044";
}

.shery-icon-points-mall::before {
  content: "\F045";
}

.shery-icon-points::before {
  content: "\F046";
}

.shery-icon-qr-invalid::before {
  content: "\F047";
}

.shery-icon-qr::before {
  content: "\F048";
}

.shery-icon-question::before {
  content: "\F049";
}

.shery-icon-receive-gift::before {
  content: "\F04A";
}

.shery-icon-records::before {
  content: "\F04B";
}

.shery-icon-search::before {
  content: "\F04C";
}

.shery-icon-send-gift::before {
  content: "\F04D";
}

.shery-icon-setting::before {
  content: "\F04E";
}

.shery-icon-share::before {
  content: "\F04F";
}

.shery-icon-shop-collect::before {
  content: "\F050";
}

.shery-icon-shop::before {
  content: "\F051";
}

.shery-icon-shopping-cart::before {
  content: "\F052";
}

.shery-icon-sign::before {
  content: "\F053";
}

.shery-icon-stop::before {
  content: "\F054";
}

.shery-icon-success::before {
  content: "\F055";
}

.shery-icon-tosend::before {
  content: "\F056";
}

.shery-icon-underway::before {
  content: "\F057";
}

.shery-icon-upgrade::before {
  content: "\F058";
}

.shery-icon-value-card::before {
  content: "\F059";
}

.shery-icon-wap-home::before {
  content: "\F05A";
}

.shery-icon-wap-nav::before {
  content: "\F05B";
}

.shery-icon-warn::before {
  content: "\F05C";
}

.shery-icon-wechat::before {
  content: "\F05D";
}
</style>
