<template>
    <div class="area-comp">
        <div class="flex">
            <ul class="selOptions">
                <li class="active">热门城市</li>
                <li>A B C</li>
                <li>D E F G</li>
                <li>H I</li>
                <li>J K</li>
                <li>L M N</li>
                <li>O P Q R</li>
                <li>S T U</li>
                <li>V W X</li>
                <li>Y Z</li>
                <li>所有省份(含港澳台)</li>
                <li>国外</li>
            </ul>
            <ul class="flex-auto">
                <li class="active"><span>城市名称</span></li>
                <li><span>城市名称</span></li>
                <li><span>城市名称</span></li>
                <li><span>城市名称</span></li>
                <li><span>城市名称</span></li>
                <li><span>城市名称</span></li>
                <li><span>城市名称</span></li>
                <li><span>城市名称</span></li>
                <li><span>城市名称</span></li>
                <li><span>城市名称</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'areaComp'
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