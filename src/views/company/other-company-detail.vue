<template>
  <div class="other-other-detail">
    <div class="ul">
      <div class="li">
        <div class="label">公司名称：</div>
        <div class="value title">{{message.name}}</div>
      </div>
      <div class="li">
        <div class="label">公司行业：</div>
        <div class="value">{{message.industry}}</div>
      </div>
      <div class="li">
        <div class="label">公司性质：</div>
        <div class="value">{{message.nature}}</div>
      </div>
      <div class="li">
        <div class="label">公司规模：</div>
        <div class="value">{{message.scale}}</div>
      </div>
      <div class="li">
        <div class="label">所在地区：</div>
        <div class="value">{{message.region}}</div>
      </div>
    </div>
    <div class="options">
      <div class="options-des">{{message.name}}-公司介绍：</div>
      <div class="options-value">{{message.desction}}</div>
    </div>
    <div class="options">
      <div class="options-des">{{message.name}}-员工福利：</div>
      <div class="options-value">
        {{message.welfare}}
      </div>
    </div>
    <div class="options">
      <div class="options-des">{{message.name}}-联系方式：</div>
      <div class="options-value" v-if="isLogin">
        {{message.tel}}
      </div>
      <div class="options-value" v-else>
        注册并登录后才能查看联系方式，点击[回到首页]进行登录或注册
      </div>
    </div>
    <div class="options">
      <div class="options-des">{{message.name}}-企业图片：</div>
      <div class="options-value" v-if="message.imgs && message.imgs.length > 0">
        <template v-for="(item, index) in message.imgs">
          <img :src="item" alt="" :key="'otherImgs_' + index" >
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { getOtherCompanyDetail } from '@/api/service'
export default {
  name: 'otherCompanyDetail',
  data () {
    return {
      message: {
        id: 1,
        name: '',
        industry: '',
        nature: '',
        scale: '',
        region: '',
        welfare: '',
        tel: '',
        desction: '',
        imgs:[]
      }
    }
  },
  mounted() {
    if (this.$route.query.id) {
      this.getData(this.$route.query.id)
    }
  },
  computed: {
      isLogin () {
          return !!localStorage.getItem('userInfo')
      }
  },
  methods: {
    getData(id) {
      const loading = this.$loading({
        lock: true,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.1)',
        fullscreen: true
      })
      console.log(id)
      getOtherCompanyDetail(id).then(res => {
        console.log(res.data)
        loading.close()
        if (res.success && res.data) {
            for (let prop in res.data) {
              this.$set(this.message, prop, res.data[prop])
            }
        }
      }).catch(e => {
        this.$message({
          message: '网络连接失败',
          type: 'error'
        })
        console.log(e)
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.other-other-detail {
  .options {
    font-size: 12px;
    margin-bottom: 10px;
    .options-des {
      font-weight: bold;
      height: 20px;
      line-height: 20px;
    }
    .options-value {
      line-height: 20px;
    }
  }
  .ul {
    margin: 10px 0;
    .li {
      display:flex;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      .label {
        width: 60px;
      }
      .value {
        flex: 1;
        &.title {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
