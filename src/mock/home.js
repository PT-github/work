import Mock from 'mockjs'
import { param2Obj } from '@/utils'

export default {
    /**
     * 友情链接列表
     * @returns {*}
     */
    queryFriendShips: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|16": [
                {
                    "id|+1": 1,
                    "name|1": ["腾讯","百度","搜狐"],
                    "imgUrl": "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg",
                }
            ]
        })
    },
    /**
     * 人才列表
     * @returns {*}
     */
    queryTalents: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|1-10": [
                {
                    "id|+1": 1,
                    "name|1": ["张三","李四","王五"],
                    "sex|1": ["男", "女"],
                    "age|18-60": 60,
                    "itention|1": ["健康管理师","咨询师","育婴师"],
                    "salary|1": ["面议","1万/月","2万/月"],
                    "education|1": ["大专","本科","研究生","博士"],
                    "experience|1": ["8年以上","7年以上","6年以上","5年以上","4年以上","3年以上","2年以上"],
                    "updataTime": ["7小时前","8小时前","9小时前","1天前","2天前","3天前","4天前"]
                }
            ]
        })
    },
    /**
     * 热门职位列表
     * @returns {*}
     */
    queryJobs: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|6": [
                {
                    "id|+1": 1,
                    "name|1": ["健康管理咨询师XXX","育婴师XXXXXXXXX","理疗师XXXXXXXXXX"]
                }
            ]
        })
    },
    /**
     * 招聘单位列表
     * @returns {*}
     */
    queryCompany: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|6": [
                {
                    "id|+1": 1,
                    "job|1": ["健康管理咨询师","育婴师","理疗师"],
                    "name|1": ["湖南省健康管理公司", "湖南省健康管理公司2", "湖南省健康管理公司3", "湖南省健康管理公司4"],
                    "salary|1": ["1.5万-2.5万/月","1万/月","2万/月"],
                    "place|1": ["长沙","株洲","常德"],
                }
            ]
        })
    },
    /**
     * 优秀导师列表
     * @returns {*}
     */
    queryTeachers: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|11-18": [
                {
                    "id|+1": 1,
                    "imgUrl": "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg",
                    "name|1": ["张三", "李四", "刘文峰", "约翰"],
                    "category|1": ["健康科学讲师","育婴师讲师","继续教育讲师"]
                }
            ]
        })
    },
    /**
     * 课程培训列表
     * @returns {*}
     */
    queryLessons: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|3-5": [
                {
                    "id|+1": 1,
                    "title|1": ["健康管理师", "育婴师", "心理咨询师", "催乳师", "继续教育"],
                    "data|4": [
                        {
                            "id|+1": 100,
                            "name|1":["课程名称","课程名称1","课程名称2","课程名称3"],
                            "openDate": "03月10日-09月12日",
                            "classHour": "18天",
                            "tranningFee": "1000元",
                            "examinationFee": "100元",
                            "totalFee": "1100元"
                        }
                    ]
                }
            ]
        })
    },
    /**
     * 新闻列表
     * @returns {*}
     */
    queryNews: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|7": [
                {
                    "'id|+1": 1,
                    "imgUrl": "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg",
                    "name": "首届湖南“健康管理师之星”评选结果公示",
                    "desc": "首届湖南“健康管理师之星通过宣传发动、提名推荐、网络投票、微信投票首届湖南“健康管理师之星通过宣传发动、提名推荐、网络投票、微信投票"
                }
            ]
        })
    },
    /**
     * banner左右滑动广告位数据
     * @returns {*}
     */
	queryPoster: () => {
		return Mock.mock({
            'success': true,
            "message": '成功',
            "list|3-4": [
                {
                    "'id|+1": 1,
                    "imgUrl": "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg",
                    "link": "https://www.baidu.com"
                }
            ]
        })
	}
}
