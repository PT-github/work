</style>
<template>
  <div class="other-company-jobs">
    <div class="table">
      <div class="theader">
        <div class="tr">
          <div class="th">职位名称</div>
          <div class="th">工作地点</div>
          <div class="th">发布日期</div>
          <div class="th">截止日期</div>
          <div class="th">招聘人数</div>
        </div>
      </div>
      <div class="tbody">
        <div class="tr" v-for="(item, index) in list" :key="'jobList-' + index">
            <div class="td"><a :href="'/#/job-detail?id=' + item.id" target="_blank">{{ item.job }}</a></div>
            <div class="td">{{ item.place }}</div>
            <div class="td">{{ item.pubTime }}</div>
            <div class="td">{{ item.endTime }}</div>
            <div class="td">{{ item.nums }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getOtherCompanyJobs } from '@/api/service'
export default {
  name: 'otherCompanyJobs',
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    if (this.$route.query.id) {
      this.getData(this.$route.query.id)
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
      getOtherCompanyJobs(id).then(res => {
        loading.close()
        if (res.success && res.list && res.list.length > 0) {
            this.list.push(...res.list)
        }
      }).catch(e => {
        this.$message({
          message: '网络连接失败',
          type: 'error'
        })
        console.log(e)
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.other-company-jobs {
  margin: 20px 0;
  .table {
    padding: 10px;
    .theader {
      .tr {
        border: 1px solid #dedede;
        background-color: #cccccc61;
      }
    }
    .tbody {
      .tr {
        border-bottom: 1px solid #dedede;
        border-left: 1px solid #dedede;
        border-right: 1px solid #dedede;
        .td:last-child {
          span {
            padding: 0 5px;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .tr {
      height: 36px;
      line-height: 36px;
      display: flex;
      .th {
        color: #666666;
      }
      .td {
        color: #333;
        a {
          text-decoration: underline;
        }
      }
      .th,
      .td {
        font-size: 12px;
        flex: 1;
        text-align: center;
      }
    }
  }
}
</style>
