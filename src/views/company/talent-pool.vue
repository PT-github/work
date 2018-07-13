<template>
    <div class="s-myjob">
        <div class="title">企业人才库</div>
        <ul class="tab clearfix">
            <li :class="{on: active === 0}" @click="getData(0)">应聘记录</li>
            <li :class="{on: active === 1}" @click="getData(1)">自有人才库</li>
            <li :class="{on: active === 2}" @click="getData(2)">网站人才库</li>
        </ul>
        <div class="table" v-show="active === 0">
            <div class="theader">
                <div class="tr">
                    <div class="th">应聘时间</div>
                    <div class="th">名称</div>
                    <div class="th">应聘职位</div>
                    <div class="th">状态</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in applyRecordList" :key="'applyRecordList-' + index">
                    <div class="td">{{ item.date }}</div>
                    <div class="td">{{ item.name }}</div>
                    <div class="td">{{ item.job }}</div>
                    <div class="td">{{ item.status }}</div>
                    <div class="td"><span>删除</span></div>
                </div>
            </div>
        </div>
        <div class="table" v-show="active === 1">
            <div class="theader">
                <div class="tr">
                    <div class="th">名称</div>
                    <div class="th">学历</div>
                    <div class="th">经验</div>
                    <div class="th">状态</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in ownTalentList" :key="'ownTalentList-' + index">
                    <div class="td">{{ item.name }}</div>
                    <div class="td">{{ item.education }}</div>
                    <div class="td">{{ item.workExperience }}</div>
                    <div class="td">{{ item.status }}</div>
                    <div class="td"><span>删除</span></div>
                </div>
            </div>
        </div>
        <div class="table" v-show="active === 2">
            <div class="theader">
                <div class="tr">
                    <div class="th">名称</div>
                    <div class="th">学历</div>
                    <div class="th">经验</div>
                    <div class="th">状态</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in netWorkTalentList" :key="'netWorkTalentList-' + index">
                    <div class="td">{{ item.name }}</div>
                    <div class="td">{{ item.education }}</div>
                    <div class="td">{{ item.workExperience }}</div>
                    <div class="td">{{ item.status }}</div>
                    <div class="td"><span>删除</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sMyjob',
        data() {
            return {
                active: 0,
                applyRecordList: [
                    { id: 1, job: '职位名称0', name: '张三', status: '已面试', date: '2010-10-10 13:10:10' },
                    { id: 2, job: '职位名称1', name: '李四', status: '未面试', date: '2010-10-10 13:10:10' },
                    { id: 3, job: '职位名称2', name: '王五', status: '已面试', date: '2010-10-10 13:10:10' },
                    { id: 4, job: '职位名称3', name: '小花', status: '已面试', date: '2010-10-10 13:10:10' },
                    { id: 5, job: '职位名称4', name: '小狗', status: '已面试', date: '2010-10-10 13:10:10' }
                ],
                ownTalentList: [
                    { id: 1, education: '本科', name: '张三', status: '找工作中', workExperience: '10年' },
                    { id: 2, education: '本科', name: '李四', status: '正在工作中', workExperience: '10年' },
                    { id: 3, education: '本科', name: '王五', status: '观望中', workExperience: '10年' },
                    { id: 4, education: '本科', name: '小花', status: '找工作中', workExperience: '10年' },
                    { id: 5, education: '本科', name: '小狗', status: '找工作中', workExperience: '10年' }
                ],
                netWorkTalentList: [
                    { id: 1, education: '博士', name: '张三', status: '找工作中', workExperience: '10年' },
                    { id: 2, education: '博士', name: '李四', status: '正在工作中', workExperience: '10年' },
                    { id: 3, education: '博士', name: '王五', status: '观望中', workExperience: '10年' },
                    { id: 4, education: '博士', name: '小花', status: '找工作中', workExperience: '10年' },
                    { id: 5, education: '博士', name: '小狗', status: '找工作中', workExperience: '10年' }
                ]
            }
        },
        methods: {
            getData(i) {
                this.active = i
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-myjob {
        margin: 20px 0;
        .title {
            height: 35px;
            line-height: 35px;
            text-indent: 20px;
            border: 1px solid #CCC;
            margin: 10px 10px 0;
            font-size: 14px;
            border-radius: 5px;
            position: relative;
            .right-btn {
                position: absolute;
                width: 95px;
                height: 35px;
                line-height: 35px;
                font-size: 13px;
                text-align: center;
                text-decoration: underline;
                color: #666;
                right: 0;
                top: 0;
                text-indent: 0;
                cursor: pointer;
            }
        }
        .tab {
            margin-top: 10px;
            font-size: 14px;
            padding-left: 10px;
            li {
                margin-right: 10px;
                padding: 0 10px;
                float: left;
                text-align: center;
                border: 1px solid #CCC;
                height: 25px;
                line-height: 25px;
                cursor: pointer;
            }
            .on {
                color: #FFF;
                background-color: #CCC;
            }
        }
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
                    border-bottom:1px solid #dedede;
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
                    color:#333;
                }
                .th,.td {
                    font-size: 12px;
                    flex: 1;
                    text-align: center;
                }
            }
        }
    }
</style>