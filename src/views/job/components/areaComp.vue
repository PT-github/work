<template>
    <div class="area-comp">
        <div class="flex">
            <ul class="selOptions">
                <li :class="{active: activeCategory === index}" v-for="(item, index) in list" :key="'category-' + item.id" @click="exchangeCategory(index)">{{ item.name }}</li>
            </ul>
            <ul class="flex-auto" v-if="list.length > 0">
                <li :class="{active: choosedCities.indexOf(item.id) !== -1}" v-for="(item, index) in list[activeCategory].citys" :key="'activeCategory_' + index">
                    <span @click="chooseCities(item.id)">{{ item.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'areaComp',
        props: {
            list: {
                type: Array,
                default: () => []
            },
            choosed: {
                type: Array,
                default: () => []
            },
            cities: {
                type: Object,
                default: () => {}
            },
        },
        computed: {
            choosedCities() {
                return this.choosed
            }
        },
        data() {
            return {
                activeCategory: 0
            }
        },
        methods: {
            exchangeCategory(index) {
                this.activeCategory = index
            },
            chooseCities(id) {
                let idx = this.choosedCities.indexOf(id)
                if (idx !== -1) {
                    this.choosedCities.splice(idx, 1)
                } else {
                    if (this.choosedCities.length === 5) {
                        this.$message({
                            message: '最多选取5个城市',
                            type: 'warning'
                        })
                        return
                    }
                    this.choosedCities.push(id)
                }
                this.$emit('cityChanged', this.choosedCities)
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .area-comp {
        .flex {
            display: flex;
            .flex-auto {
                flex: 1;
                padding: 5px;
                li {
                    width: 100px;
                    height: 20px;
                    margin-bottom: 12px;
                    float: left;
                    font-size: 12px;
                    span {
                        padding: 2px 7px;
                        cursor: pointer;
                    }
                }
                .active,li:hover {
                    span {
                        color: #fff;
                        background-color: #ffa63c;
                    }
                }
            }
            .selOptions {
                width: 130px;
                height: 408px;
                overflow-y: auto;
                overflow-x: hidden;
                li {
                    width: 100%;
                    height: 34px;
                    line-height: 34px;
                    background-color: #e5e5e5;
                    padding-left: 8px;
                    cursor: pointer;
                    font-size: 12px;
                }
                .active {
                    background-color: #FFF;
                    font-weight: bold;
                    color: #ff6000;
                    border-left: 5px solid #ff6000;
                }
            }
        }
    }
</style>