<template>
  <div class="job-hunting">
      <div class="tab">
          <div class="tabItem active">招人才</div>
          <div class="tabItem">找工作</div>
          <div class="tabItem">中高级人才</div>
      </div>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
    .job-hunting {
        width: 1000px;
        margin: 10px auto;
        border: 1px solid #cac9cb;
        padding: 15px;
        background-color: #FFF;
        .tab {
            height: 30px;
            line-height: 30px;
            width: 700px;
            background: rgba(204, 204, 204, .5);
            display: flex;
            margin: 0 auto;
            font-size: 14px;
            color: #666;
            .tabItem {
                flex: 1;
                text-align: center;
                cursor: pointer;
            }
            .tabItem:hover,.active {
                background-image: url("../../assets/header/nav-bg2.png");
                color: #FFF;
                background-repeat: repeat-x;
                background-position: left center;
            }
        }
    }
</style>
