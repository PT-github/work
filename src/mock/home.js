import Mock from 'mockjs'
import { param2Obj } from '@/utils'

export default {
    /**
     * 招揽人才 获取过滤条件
     * @returns {*}
     */
    queryFilterOptions: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "data": {
                sex: [
                    {id: 1,name: '男'},
                    {id: 2,name: '女'}
                ],
                placeBelong: [
                    {id: 1, name: '热门城市', "citys|10": [ {"id|+1": 1, "name|1": ['长沙','长沙2','长沙3','长沙4']} ]},
                    {id: 2, name: 'A B C', "citys|10": [ {"id|+1": 11, "name|1": ['长沙','长沙2','长沙3','长沙4']} ]},
                    {id: 3, name: 'D E F G', "citys|10": [ {"id|+1": 21, "name|1": ['长沙','长沙2','长沙3','长沙4']} ]},
                    {id: 4, name: 'H I', "citys|10": [ {"id|+1": 31, "name|1": ['长沙','长沙2','长沙3','长沙4']} ]},
                    {id: 5, name: 'J K', "citys|10": [ {"id|+1": 41, "name|1": ['长沙','长沙2','长沙3','长沙4']} ]},
                    {id: 6, name: 'L M N', "citys|10": [ {"id|+1": 51, "name|1": ['长沙','长沙2','长沙3','长沙4']} ]},
                    {id: 7, name: 'O P Q R', "citys|10": [ {"id|+1": 61, "name|1": ['长沙','长沙2','长沙3','长沙4']} ]},
                    {id: 8, name: 'S T U', "citys|10": [ {"id|+1": 71, "name|1": ['长沙','长沙2','长沙3','长沙4']} ]},
                    {id: 9, name: 'V W X', "citys|10": [ {"id|+1": 81, "name|1": ['长沙','长沙2','长沙3','长沙4']} ]},
                    {id: 10, name: 'Y Z', "citys|10": [ {"id|+1": 91, "name|1": ['长沙','长沙2','长沙3','长沙4']} ]},
                    {id: 11, name: '所有省份', "citys|10": [ {"id|+1": 101, "name|1": ['长沙','长沙2','长沙3','长沙4']} ]},
                    {id: 12, name: '国外', "citys|10": [ {"id|+1": 111, "name|1": ['长沙','长沙2','长沙3','长沙4']} ]}
                ],
                "releaseDate": [
                    {"id": 100, "name": "24小时内"},
                    {"id": 101, "name": "近三天"},
                    {"id": 102, "name": "近一周"},
                    {"id": 103, "name": "近一月"},
                    {"id": 104, "name": "其他"}
                ],
                "expectedSalary": [
                    {"id": 100, "name": "2千以下"},
                    {"id": 101, "name": "2-3千"},
                    {"id": 102, "name": "3-4.5千"},
                    {"id": 103, "name": "4.5-6千"},
                    {"id": 104, "name": "6-8千"},
                    {"id": 105, "name": "0.8-1万"},
                    {"id": 106, "name": "1-1.5万"},
                    {"id": 107, "name": "1.5-2万"},
                    {"id": 108, "name": "2-3万"},
                    {"id": 109, "name": "3万以上"},
                ],
                "education": [
                    {"id": 100, "name": "初中及以下"},
                    {"id": 101, "name": "高中/中专"},
                    {"id": 102, "name": "大专"},
                    {"id": 103, "name": "本科"},
                    {"id": 104, "name": "硕士"},
                    {"id": 105, "name": "博士"}
                ],
                "wrokLife":[
                    {"id": 100, "name": "无经验"},
                    {"id": 101, "name": "1-3年"},
                    {"id": 102, "name": "3-5年"},
                    {"id": 103, "name": "5-10年"},
                    {"id": 104, "name": "10年以上"}
                ],
                "natureOfCompany": [
                    {id: 1, name: '外资'},
                    {id: 2, name: '合资'},
                    {id: 3, name: '国企'},
                    {id: 4, name: '民营公司'},
                    {id: 5, name: '创业公司'},
                    {id: 6, name: '政府机关'},
                    {id: 7, name: '事业单位'},
                    {id: 8, name: '非营利组织'},
                    {id: 9, name: '上市公司'}
                ],
                "companySize": [
                    {id: 1, name: '少于50人'},
                    {id: 2, name: '50-150人'},
                    {id: 3, name: '150-500人'},
                    {id: 4, name: '500-1000人'},
                    {id: 5, name: '1000-5000人'},
                    {id: 6, name: '5000-10000人'},
                    {id: 7, name: '10000人以上'}
                ]
            }
        })
    },
    /**
     * 通过过滤条件分页获取简历列表
     * @returns {*}
     */
    queryResume: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "totalPage": 10,
            "total": 198,
            "list|10": [
                {
                    "id|+1": 1,
                    "name|1": ["张三","李四", "王五"],
                    "sex|1": ['男','女'],
                    "age|1": ["28","30","18"],
                    "salary|1": ["2万/月","3万/月"],
                    "itention": "咨询师",
                    "experience": "5年",
                    "education|1": ["博士","硕士"],
                    "updateTime|1": ["3天前","2天前","1天前"]
                }
            ]
        })
    },
    /**
     * 通过过滤条件分页获取工作职位列表
     * @returns {*}
     */
    queryJobsByPage: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "totalPage": 10,
            "total": 192,
            "list|10": [
                {
                    "id|+1": 1,
                    "name|1": ["职位名称一","职位名称二", "职位名称三"],
                    "companyName|1": ['公司名称一','公司名称二'],
                    "placeBelong|1": ["长沙","上海","北京"],
                    "salary|1": ["2万/月","3万/月","30-40万/年"],
                    "updateTime|1": ["3天前","2天前","1天前"]
                }
            ]
        })
    },
    queryResumeDetail: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            data: {
                id: 1,
                name: '张三',
                birth: '2018年10月',
                phoneNumber: '15364444444',
                sex: '男',
                nameFamily: '汉族',
                email: 'xxxxxxxxx@163.com',
                householdRegister: '湖南省长沙市',
                height: '170',
                qq: '333333333',
                weight: '50KG',
                politicalOutlook: '党员',
                education: '本科',
                faxedLine: '010-11111111',
                graduationTime: '2008年1月',
                universityGraduatedFrom: '湖南文理学院',
                certificate: '4301211111111111111',
                major: '电气自动化',
                technicalTitle: '高级软件开发工程师',
                secondMajor: '育婴师',
                placeResidence: '湖南省长沙市天心区',
                jobIntention: ['育婴师', '健康管理师'],
                salaryType: '按月',
                expectSalary: '1W/月',
                job: '高级育婴师',
                expectedArea: '湖南长沙',
                postTime: '一个月后',
                handsOnWorkExperience: [
                  {id: 1, entryTime: '2018年1月',departureTime: '2018年2月',company: '湖南XXX公司', job: '高级软件开发工程师', jobDes: '工作的一些描述', reseanForLeaving: '个人原因'},
                  {id: 2, entryTime: '2018年2月',departureTime: '2018年3月',company: '湖南AAA公司', job: '中级软件开发工程师', jobDes: '工作的一些描述22', reseanForLeaving: '个人原因'},
                ],
                educationExperience: [
                  {id: 1, enrolmentTime: '2018年1月',graduationTime: '2018年2月',school: '湖南XXX学校', education: '本科', major: '电气自动化', professionalDes: '专业的简单描述'},
                  {id: 2, enrolmentTime: '2018年2月',graduationTime: '2018年3月',school: '湖南BBB学校', education: '本科', major: '电气自动化', professionalDes: '专业的简单描述'}
                ],
                workingSkills: ['育婴师','催乳师','健康管理师'],
                selfEvalution: '我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX，我是一个XXXXXXXXXXXXXXXXXXXXXXXXXXXX，我是一个XXX'
            }
        })
    },
    queryJobDetail: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            data: {
                id: 1,
                name: '高级育婴师职位',
                salary: '1万/月',
                numberRecruits: '10人',
                education: '本科',
                workingLife: '3年以上',
                workPlace: '北京',
                jobDescription: '工作的描述信息XXXXXX,工作的描述信息XXXXXX,工作的描述信息XXXXXX,工作的描述信息XXXXXX,工作的描述信息XXXXXX,工作的描述信息XXXXXX,',
                companyInfo: '公司信息XXXX公司信息XXXX公司信息XXXX公司信息XXXX公司信息XXXX公司信息XXXX公司信息XXXX公司信息XXXX'
            }
        })
    },
    collectResumesByIds: () => {
        return Mock.mock({
            'success': true,
            "message": '成功'
        })
    },
    invateInterViewByIds: () => {
        return Mock.mock({
            'success': true,
            "message": '成功'
        })
    },
    /**
     * 通过分类获取视频列表
     * @returns {*}
     */
    queryVideoByCategory: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|3": [
                {
                    "id|+1": 1,
                    "name|1": ["学习视频名称一","学习视频名称二", "学习视频名称三"],
                    "click|1": [100,200,300,400],
                    "detail": "介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息",
                    "imgUrl|1": ["http://www.hnjkfwy.com/upload/day_180520/201805201139129214.jpg","http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg"],
                }
            ]
        })
    },
    /**
     * 获取分类列表
     * @returns {*}
     */
    queryCategory: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|3": [
                {
                    "id|+1": 1,
                    "name|1": ["分类一","分类二", "分类三"],
                }
            ]
        })
    },
    /**
     * 分页获取培训老师列表
     * @returns {*}
     */
    queryTeachersByPage: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "totalPage": 4,
            "list|9": [
                {
                    "id|+1": 1,
                    "name|1": ["张三","李四", "王五"],
                    "imgUrl|1": ["http://www.hnjkfwy.com/upload/day_180520/201805201139129214.jpg","http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg"],
                    "subject|1": ["学科一","学科二","学科三","学科四","学科五"],
                    "detail": "介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息"
                }
            ]
        })
    },
    /**
     * 获取培训项目列表
     * @returns {*}
     */
    queryProject: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|8": [
                {
                    "id|+1": 1,
                    "title|1": ["健康咨询师","育婴师", "催乳师"]
                }
            ]
        })
    },
    /**
     * 登录
     * @returns {*}
     */
    login: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "data": {
                "id|+1": 1,
                "nickname|1": ["张三","李四"],
                "type": 1
            }
        })
    },
    /**
     * 分类新闻列表
     * @returns {*}
     */
    queryNewsListByCategory: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "totalPage": 4,
            "list|30": [
                {
                    "id|+1": 1,
                    "title|1": ["新闻的标题","内容标题在哪里"],
                    "category": "新闻的分类",
                    "publishTime|1": ["2018-10-10 10:10:20","2015-09-09 09:09:09",],
                    "publishMan|1": ["系统管理员","国家领导人"],
                    "clickRate|1": ["100", "200"]
                }
            ]
        })
    },
    /**
     * 新闻详情列表
     * @returns {*}
     */
    queryNewsDetail: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "data": {
                "id|+1": 1,
                "title|1": ["新闻的标题","内容标题在哪里"],
                "content": "AAAAAAAAAAAAA<br/>BBBBBBBBBBBBBBB<br/>CCCCCCCCCC"
            }
        })
    },
    /**
     * 培训滚图列表
     * @returns {*}
     */
    queryLatestNews: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|4": [
                {
                    "id|+1": 1,
                    "imgUrl|1": ["http://www.hnjkfwy.com/upload/day_180520/201805201139129214.jpg","http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg"]
                }
            ]
        })
    },
    /**
     * 培训风采列表
     * @returns {*}
     */
    queryTrainingAndDemeanor: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "total": 10,
            "totalPage": 3,
            "list|10": [
                {
                    "id|+1": 1,
                    "name|1": ["培训风采培训风采培训风采培训风采培训风采培训风采培训风采培训风采培训风采培训风采培训风采培训风采培训风采","内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"]
                }
            ]
        })
    },
    /**
     * 政法政规列表
     * @returns {*}
     */
    queryPoliticalAndRegulations: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "total": 10,
            "totalPage": 2,
            "list|10": [
                {
                    "id|+1": 1,
                    "name|1": ["政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表","内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"]
                }
            ]
        })
    },
    /**
     * 行业资讯列表
     * @returns {*}
     */
    queryIndustryInfos: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "total": 10,
            "totalPage": 5,
            "list|10": [
                {
                    "id|+1": 1,
                    "name|1": ["行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表","内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"]
                }
            ]
        })
    },
    /**
     * 通知列表
     * @returns {*}
     */
    queryNoticeList: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|10": [
                {
                    "id|+1": 1,
                    "name|1": ["通知通知通知通知通知通知通知通知通知通知通知通知通知通知通知通知通知通知","内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"]
                }
            ]
        })
    },
    /**
     * 工作动态列表
     * @returns {*}
     */
    queryWorkDynamics: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|10": [
                {
                    "id|+1": 1,
                    "name|1": ["工作动态工作动态工作动态工作动态工作动态工作动态","内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"]
                }
            ]
        })
    },
    /**
     * 视频列表
     * @returns {*}
     */
    queryVideos: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|15": [
                {
                    "id|+1": 1,
                    "name|1": ["健康管理师培训视频","育婴师培训视频","催乳师培训视频"],
                    "imgUrl": "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg",
	                "videoUrl|1": ["http://www.w3school.com.cn/i/movie.ogg", "http://vjs.zencdn.net/v/oceans.mp4"],
	                "videoPic": "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg"
                }
            ]
        })
    },
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
                    "updateTime|1": ["7小时前","8小时前","9小时前","1天前","2天前","3天前","4天前"]
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
                    "imgurl": "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg",
                    "link": "https://www.baidu.com"
                }
            ]
        })
	}
}
