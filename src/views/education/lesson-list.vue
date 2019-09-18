<template>
    <div class="lesson-query">
        <el-form size="mini" :inline="true" :model="formInline" class="demo-form-inline">
            <el-select v-model="formInline.lesson" placeholder="请选择项目">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-form-item>
                <el-input v-model="formInline.keywords" placeholder="请输入课程关键字"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getLessons">查询</el-button>
            </el-form-item>
        </el-form>
        <template v-if="hasData">
            <div class="table">
                <div class="theader">
                    <div class="tr">
                        <div class="th" style="width: 200px;">课程名称</div>
                        <div class="th flex-auto">开班时间</div>
                        <div class="th" style="width: 100px;">课时</div>
                        <div class="th" style="width: 100px;">培训费</div>
                        <div class="th" style="width: 150px;">考试及资料费</div>
                        <div class="th" style="width: 150px;">合计</div>
                    </div>
                </div>
                <div class="tbody">
                  <div class="tr" v-for="(v, idx) in list" :key="'lesson_content-data' + idx">
                      <div class="td blue" style="width: 200px;"><router-link tag="a" :to="{ path: '/lesson-detail', query: { id: v.id } }">{{ v.name }}</router-link></div>
                      <div class="td flex-auto">{{ v.openDate }}</div>
                      <div class="td sky-blue" style="width: 100px;">{{v.classHour}}</div>
                      <div class="td" style="width: 100px;">{{v.tranningFee}}</div>
                      <div class="td" style="width: 150px;">{{v.examinationFee}}</div>
                      <div class="td orange" style="width: 150px;">{{v.totalFee}}</div>
                  </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div style="text-align: center;margin: 50px 0;">未查询到课程数据，请查证后再试</div>
        </template>
    </div>
</template>
<script>
    import { Form, FormItem, Select, Option, Input } from 'element-ui'
    import { queryLessonCate, filterLessons } from '@/api/service'
    export default {
      name: 'lessonList',
      data() {
          return  {
              hasData: false,
              formInline: {
                  lesson: '',
                  keywords: ''
              },
              options: [],
              list: []
          }
      },
      mounted() {
          this.getLessonCategory()
          this.getLessons()
      },
      methods: {
        getLessonCategory() {
          queryLessonCate().then(res =>{
            if (res && res.list && res.list.length > 0) {
              res.list.forEach(item => {
                this.options.push({
                  value: item.id,
                  label: item.title
                })
              })
            }
          })
        },
        // 通过名称name
        getLessons() {
          const loading = this.$loading({
              lock: true,
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.1)',
              fullscreen: true
          })
          filterLessons(this.formInline).then(res => {
            console.log(res)
            loading.close()
            if (res.success && res.list && res.list.length > 0) {
              this.list.splice(0, this.list.length)
              this.hasData = true
              this.list.push(...res.list)
            } else {
              this.hasData = false
            }
          }).catch(() => {
              loading.close()
              this.hasData = false
          })
        }
      },
      components: {
          [Input.name] : Input,
          [Select.name] : Select,
          [Option.name] : Option,
          [FormItem.name] : FormItem,
          [Form.name]: Form
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.lesson-query {
  width: 1000px;
  margin: 10px auto;
  border: 1px solid #dadada;
  border-radius: 5px;
  background-color: #fff;
  font-size: 13px;
  padding: 10px;
  .flex-auto {
    flex: 1;
  }
  .table {
    .theader {
        .tr {
            display: flex;
            height: 26px;
            width: 100%;
            border: 1px solid #dedede;
            background-image: url(../../assets/lesson/table-bg.png);
            background-repeat: repeat-x;
            background-position: center center;
            .th {
                text-align: center;
                font-size: 12px;
                color: #666666;
                line-height: 26px;
            }
        }
    }
    .tbody {
        .tr {
            display: flex;
            height: 44px;
            line-height: 44px;
            border-bottom: 1px dashed #dedede;
            cursor: pointer;
            &:hover {
                background-color: #ededed;
                .td {
                    color: #ce160e;
                }
            }
            &:last-child {
                border-bottom: none;
            }
            .td {
                text-align: center;
                font-size: 12px;
                color: #666666;
            }
            .orange {
                color: #e18000;
            }
            .blue {
                color: #1257a3;
            }
            .sky-blue {
                color: #3492c2;
            }
        }
    }
}
}
</style>
<style rel="stylesheet/scss" lang="scss">
.lesson-query {
  .el-select {
    .el-input {
      .el-input__inner {
        height: 28px;
        line-height: 28px;
      }
      .el-select__caret {
        line-height: 28px;
      }
    }
  }
}
</style>
