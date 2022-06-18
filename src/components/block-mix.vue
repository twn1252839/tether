<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import reportEN from "../assets/report-en.png";
import reportZH from "../assets/report-zh.png";
import otcEN from "../assets/OTC-en.png";
import otcZH from "../assets/OTC-zh.png";
// import "bootstrap/dist/css/bootstrap.min.css";
const { t } = useI18n();
interface imgs {
  otc: string;
  report: string;
}
const setImg = computed((): imgs => {
  const locale = t("flow.img");
  if (locale === "en") {
    return {
      otc: otcEN,
      report: reportEN,
    };
  } else {
    return {
      otc: otcZH,
      report: reportZH,
    };
  }
});
</script>

<template>
  <div class="container-fluid p-1 blockMix">
    <div class="container px-1 py-5 my-3 rounded bg-container">
      <div class="px-3">
        <p class="h1">账户</p>
        <p class="">TQrY8tryqsYVCYS3MFbtffiPp2ccyn4STm</p>
      </div>
      <div class="row mx-3">
        <div class="col-12 px-0">
          <div class="d-flex justify-content-between">
            <div class="alert alert-success py-1 py-md-2 px-3 px-md-3 my-auto">
              信用评级 : 0K
            </div>
            <div class="my-auto">2022-06-08 08-18:33</div>
          </div>
        </div>
      </div>
      <div
        class="
          row
          bg-light
          mx-0 mx-md-3
          mt-1 mt-md-2
          rounded
          border border-secondary
        "
      >
        <div class="col-12">
          <div class="row mx-3 pt-3 border-bottom border-secondary">
            <div class="col-12 col-md-9 my-auto row">
              <div class="col-12 col-md-2">
                <img
                  src="https://coin.top/production/logo/usdtlogo.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col-12 col-md-10">
                <p class="m-0 m-md-1">
                  <span class="h2">套索美元(美元)</span>
                  <span class="badge badge-danger ml-0 m-md-2">TRC20</span>
                </p>
                <p class="text-secondary mx-0 mt-0 mt-md-2">
                  TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t
                </p>
              </div>
            </div>

            <div class="col-12 col-md-3 my-auto text-right">
              3,329,437.544860
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row border-bottom border-secondary mx-3 pb-3">
            <div class="col-12 d-flex pt-3 pb-1">
              <div class="cir bg-blue rounded mr-3 my-auto"></div>
              <span class="my-auto">正常交易:95.6%</span>
              <div class="cir bg-green rounded ml-5 mr-3 my-auto"></div>
              <span class="my-auto">不當交易:4.4%</span>
            </div>
            <div class="col-12">
              <div class="progress bg-green" style="height: 30px">
                <div class="progress-bar bg-blue" style="width: 95%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div
            class="
              row
              mx-3
              py-3
              justify-content-between
              border-bottom border-secondary
            "
          >
            <div class=""><img src="" alt="" /><span>交易数:</span></div>
            <div class="">150</div>
          </div>
        </div>
        <div class="col-12">
          <div
            class="
              row
              mx-3
              py-3
              justify-content-between
              border-bottom border-secondary
            "
          >
            <div class=""><img src="" alt="" /><span>转账数:</span></div>
            <div class="">122(76Txns→46Txns)</div>
          </div>
        </div>
        <div class="col-12">
          <div
            class="
              row
              mx-3
              py-3
              justify-content-between
              border-bottom border-secondary
            "
          >
            <div class=""><img src="" alt="" /><span>转账数(24h):</span></div>
            <div class="">3Txns</div>
          </div>
        </div>
        <div class="col-12">
          <div class="row mx-3 py-3 justify-content-between">
            <div class=""><img src="" alt="" /><span>交易额(24h):</span></div>
            <div class="">1,233美元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../scss/global.scss";
.blockMix {
  overflow: hidden;
  background: #009393;
  display: flex;
  flex-direction: row;
  .contain {
    padding: 50px 10px;
    width: 1440px;
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .right,
    .left {
      display: flex;
      align-items: center;
      margin: 30px;
      max-width: 45%;
      img {
        width: 100%;
      }
    }
    .right {
      .bg {
        max-width: 500px;
        padding: 20px;
        background-image: url("/src/assets/tether.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 6px;
        img {
          max-width: 100%;
        }
      }
    }
    @include pad {
      .contain {
        padding: 0;
        flex-direction: column;
        justify-content: center;
      }
      .right,
      .left {
        margin: 0;
        display: flex;
        align-items: center;
        margin: 30px;
        max-width: 100%;
        img {
          width: 100%;
        }
      }
      .right {
        img {
          max-width: 100%;
        }
      }
    }
    @include phone {
      .contain {
        padding: 0;
        flex-direction: column;
        justify-content: center;
      }
      .right,
      .left {
        margin: 0;
        display: flex;
        align-items: center;
        margin: 10px 5px;
        max-width: 100%;
        img {
          width: 100%;
        }
      }
      .right {
        img {
          max-width: 100%;
        }
      }
    }
  }
}
.cir {
  height: 15px;
  width: 15px;
}
.bg-blue {
  background-color: #507ef8;
}
.bg-green {
  background-color: #96e6e7;
}
.bg-container {
  background-color: #f6f7fb;
}
</style>
