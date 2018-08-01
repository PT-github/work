import Mock from 'mockjs'
import {param2Obj} from '@/utils'

export default {
    /**
     * 应聘记录
     * @returns {*}
     */
    queryApplyRecordList: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list": [
                { id: 1, job: '职位名称0', name: '张三', status: '已面试', date: '2010-10-10 13:10:10' },
                { id: 2, job: '职位名称1', name: '李四', status: '未面试', date: '2010-10-10 13:10:10' },
                { id: 3, job: '职位名称2', name: '王五', status: '已面试', date: '2010-10-10 13:10:10' },
                { id: 4, job: '职位名称3', name: '小花', status: '已面试', date: '2010-10-10 13:10:10' },
                { id: 5, job: '职位名称4', name: '小狗', status: '已面试', date: '2010-10-10 13:10:10' }
            ]
        })
    },
    /**
     * 自有人才库
     * @returns {*}
     */
    queryOwnTalentList: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list": [
                { id: 1, education: '本科', name: '张三', status: '找工作中', workExperience: '10年' },
                { id: 2, education: '本科', name: '李四', status: '正在工作中', workExperience: '10年' },
                { id: 3, education: '本科', name: '王五', status: '观望中', workExperience: '10年' },
                { id: 4, education: '本科', name: '小花', status: '找工作中', workExperience: '10年' },
                { id: 5, education: '本科', name: '小狗', status: '找工作中', workExperience: '10年' }
            ]
        })
    },
    /**
     * 网站人才库
     * @returns {*}
     */
    queryNetWorkTalentList: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list": [
                { id: 1, education: '博士', name: '张三', status: '找工作中', workExperience: '10年' },
                { id: 2, education: '博士', name: '李四', status: '正在工作中', workExperience: '10年' },
                { id: 3, education: '博士', name: '王五', status: '观望中', workExperience: '10年' },
                { id: 4, education: '博士', name: '小花', status: '找工作中', workExperience: '10年' },
                { id: 5, education: '博士', name: '小狗', status: '找工作中', workExperience: '10年' }
            ]
        })
    },
    /**
     * 企业面试记录
     * @returns {*}
     */
    queryInterviewList: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list": [
                { id: 1, name: 'XXXXXXX', job: '育婴师', status: '已经面试', interviewTime: '2010-10-10 13:10:10' },
                { id: 2, name: 'XXXXXXX', job: '健康管理师', status: '面试成功', interviewTime: '2010-10-10 13:10:10' },
                { id: 3, name: 'XXXXXXX', job: '催乳师', status: '面试失败', interviewTime: '2010-10-10 13:10:10' },
                { id: 4, name: 'XXXXXXX', job: '继续教育', status: '已删除', interviewTime: '2010-10-10 13:10:10' },
                { id: 5, name: 'XXXXXXX', job: '育婴师', status: '已经面试', interviewTime: '2010-10-10 13:10:10' }
            ]
        })
    },
    /**
     * 企业收藏记录
     * @returns {*}
     */
    queryCollectList: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list": [
                { id: 1, name: '张三', resumeName: '简历名称'},
                { id: 2, name: '李四', resumeName: '简历名称'},
                { id: 3, name: '张三', resumeName: '简历名称'},
                { id: 4, name: '李四', resumeName: '简历名称'},
                { id: 5, name: '张三', resumeName: '简历名称'},
            ]
        })
    },
    /**
     * 企业职位查询
     * @returns {*}
     */
    queryPubJobs: () => {
        // 状态 0 未发布 1 已发布 2 已撤回 3 已删除
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|2": [
                { id: 1, job: '职位名称0', lookNums: '1000', applyNums: '300', status: '未发布',statusCode: 0, pubTime: '2010-10-10 13:10:10' },
                { id: 2, job: '职位名称1', lookNums: '1000', applyNums: '500', status: '已发布',statusCode: 1, pubTime: '2010-10-10 13:10:10' },
                { id: 3, job: '职位名称2', lookNums: '1000', applyNums: '10', status: '已撤回',statusCode: 2, pubTime: '2010-10-10 13:10:10' },
                { id: 4, job: '职位名称3', lookNums: '1000', applyNums: '20', status: '已删除',statusCode: 3, pubTime: '2010-10-10 13:10:10' }
            ]
        })
    },
    /**
     * 企业基本信息查询
     * @returns {*}
     */
    queryCompanyMessage: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "data": {
                "id": 1,
                "companyName": "XXXX公司",
                "companySize": "1000人",
                "natureOfCompany": "上市公司",
                "legalPerson": "XXXXX",
                "regSite": "湖南长沙",
                "contact": "180XXXXXXXX",
                "contacts": "XXXXXX",
                "imgUrls": ["https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=287515486,199635557&fm=173&app=25&f=JPEG?w=510&h=346&s=EC32109D0E9452D24723D0DD0300E0B8","http://www.hnjkfwy.com/upload/day_180520/201805201139129214.jpg", "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg"],
                "businessLicense": ["http://www.hnjkfwy.com/upload/day_180520/201805201139129214.jpg", "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=287515486,199635557&fm=173&app=25&f=JPEG?w=510&h=346&s=EC32109D0E9452D24723D0DD0300E0B8","http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg"],
                "account": "xxxx@163.com",
                "accountState": "有效",
                "accountLevel": "高级认证"
            }
        })
    },
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
                    {id: 1, name: '男'},
                    {id: 2, name: '女'}
                ],
                placeBelong: [
                    {id: 1, name: '热门城市', "citys|10": [{"id|+1": 1, "name|1": ['长沙', '长沙2', '长沙3', '长沙4']}]},
                    {id: 2, name: 'A B C', "citys|10": [{"id|+1": 11, "name|1": ['长沙', '长沙2', '长沙3', '长沙4']}]},
                    {id: 3, name: 'D E F G', "citys|10": [{"id|+1": 21, "name|1": ['长沙', '长沙2', '长沙3', '长沙4']}]},
                    {id: 4, name: 'H I', "citys|10": [{"id|+1": 31, "name|1": ['长沙', '长沙2', '长沙3', '长沙4']}]},
                    {id: 5, name: 'J K', "citys|10": [{"id|+1": 41, "name|1": ['长沙', '长沙2', '长沙3', '长沙4']}]},
                    {id: 6, name: 'L M N', "citys|10": [{"id|+1": 51, "name|1": ['长沙', '长沙2', '长沙3', '长沙4']}]},
                    {id: 7, name: 'O P Q R', "citys|10": [{"id|+1": 61, "name|1": ['长沙', '长沙2', '长沙3', '长沙4']}]},
                    {id: 8, name: 'S T U', "citys|10": [{"id|+1": 71, "name|1": ['长沙', '长沙2', '长沙3', '长沙4']}]},
                    {id: 9, name: 'V W X', "citys|10": [{"id|+1": 81, "name|1": ['长沙', '长沙2', '长沙3', '长沙4']}]},
                    {id: 10, name: 'Y Z', "citys|10": [{"id|+1": 91, "name|1": ['长沙', '长沙2', '长沙3', '长沙4']}]},
                    {id: 11, name: '所有省份', "citys|10": [{"id|+1": 101, "name|1": ['长沙', '长沙2', '长沙3', '长沙4']}]},
                    {id: 12, name: '国外', "citys|10": [{"id|+1": 111, "name|1": ['长沙', '长沙2', '长沙3', '长沙4']}]}
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
                "wrokLife": [
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
                    "name|1": ["张三", "李四", "王五"],
                    "sex|1": ['男', '女'],
                    "age|1": ["28", "30", "18"],
                    "salary|1": ["2万/月", "3万/月"],
                    "itention": "咨询师",
                    "experience": "5年",
                    "education|1": ["博士", "硕士"],
                    "updateTime|1": ["3天前", "2天前", "1天前"]
                }
            ]
        })
    },
    /**
     * 证书查询结果
     * @returns {*}
     */
    queryCertificate: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "data": {
                "id|+1": 1,
                "username|1": ["张三", "李四", "王五"],
                "sex|1": ['男', '女'],
                "certId|1": ["430XXXXXXXXXXXXX", "520XXXXXXXXXXXXXXX"],
                "birth|1": ["2011-03-19", "2012-10-08"],
                "imgUrl|1" : ["http://www.hnjkfwy.com/upload/day_180520/201805201139129214.jpg", "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg"],
                "certifications|2": [{
                    "id|+1": 10,
                    "cerType": "岗位能力培训证书",
                    "cerName": "中医康复理疗",
                    "cerNo": "xxxxxxxxxxxxxx",
                    "cerLevel": "高级",
                    "cerReport": "合格",
                    "education": "大专",
                    "getCerTime": "2016-10-09",
                    "issuingAgency": "国家卫生计生委能力剑圣和继续教育中心，中国健康促进基金会",
                    "remark": "《健康服务业岗位能力培新合格证书》XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                }]
            }
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
                    "name|1": ["职位名称一", "职位名称二", "职位名称三"],
                    "companyName|1": ['公司名称一', '公司名称二'],
                    "placeBelong|1": ["长沙", "上海", "北京"],
                    "salary|1": ["2万/月", "3万/月", "30-40万/年"],
                    "updateTime|1": ["3天前", "2天前", "1天前"]
                }
            ]
        })
    },
    /**
     * 我的订单
     * @returns {*}
     */
    queryMyOrder: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|10": [
                {
                    "id|+1": 1,
                    "content|1": ["课程名称一", "课程名称2", "课程名称3"],
                    "updateTime|1": ["2017-10-10 12:30:10", "2013-10-10 12:30:10", "2011-10-10 12:30:10"]
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
                jobIntention: '育婴师 健康管理师',
                salaryType: '按月',
                expectSalary: '1W/月',
                job: '高级育婴师',
                expectedArea: '湖南长沙',
                postTime: '一个月后',
                handsOnWorkExperience: [
                    {
                        id: 1,
                        entryTime: '2018年1月',
                        departureTime: '2018年2月',
                        company: '湖南XXX公司',
                        job: '高级软件开发工程师',
                        jobDes: '工作的一些描述',
                        reseanForLeaving: '个人原因'
                    },
                    {
                        id: 2,
                        entryTime: '2018年2月',
                        departureTime: '2018年3月',
                        company: '湖南AAA公司',
                        job: '中级软件开发工程师',
                        jobDes: '工作的一些描述22',
                        reseanForLeaving: '个人原因'
                    },
                ],
                educationExperience: [
                    {
                        id: 1,
                        enrolmentTime: '2018年1月',
                        graduationTime: '2018年2月',
                        school: '湖南XXX学校',
                        education: '本科',
                        major: '电气自动化',
                        professionalDes: '专业的简单描述'
                    },
                    {
                        id: 2,
                        enrolmentTime: '2018年2月',
                        graduationTime: '2018年3月',
                        school: '湖南BBB学校',
                        education: '本科',
                        major: '电气自动化',
                        professionalDes: '专业的简单描述'
                    }
                ],
                workingSkills: ['育婴师', '催乳师', '健康管理师'],
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
                    "name|1": ["健康管理师培训视频", "育婴师培训视频", "催乳师培训视频"],
                    "click|1": [100, 200, 300, 400],
                    "detail": "介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息介绍信息",
                    "imgUrl": "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg",
                    "videoUrl|1": ["http://www.w3school.com.cn/i/movie.ogg", "http://vjs.zencdn.net/v/oceans.mp4"],
                    "videoPic": "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg"
                }
            ]
        })
    },
    /**
     * 通过关键字获取搜索列表
     * @returns {*}
     */
    searchByKeywords: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|20": [
                {
                    "id|+1": 1,
                    "name|1": ["名称名称名称名称名称名称", "名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称", "名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称"],
                    "type|1": [0, 1, 2, 3, 4, 5]
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
                    "name|1": ["分类一", "分类二", "分类三"],
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
                    "name|1": ["张三", "李四", "王五"],
                    "imgUrl|1": ["http://www.hnjkfwy.com/upload/day_180520/201805201139129214.jpg", "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg"],
                    "subject|1": ["学科一", "学科二", "学科三", "学科四", "学科五"],
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
                    "name|1": ["健康咨询师", "育婴师", "催乳师"]
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
                "nickname|1": ["张三", "李四"],
                "account": "account",
                "tel": "18522222222",
                "type": 1
            }
        })
    },
    /**
     * 登录
     * @returns {*}
     */
    queryCounts: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "data": {
                "count": 2
            }
        })
    },
    /**
     * 基本信息
     * @returns {*}
     */
    queryMyBaseInfo: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "data": {
                "imgUrl": "http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png",
                "nickname|1": ["张三", "李四"],
                "account": "account",
                "truename": "彭涛",
                "birth": "2017-10-11",
                "tel": "180********",
                "telIsValidate": 1,
                "mail": "pengtao_it@163.com",
                "mailIsValidate": "1",
                "bindMxChat": "1",
                "invitedCode": "XXXX-XXXX-XXXX-XXXX"
            }
        })
    },
    /**
     * 我的收益
     * @returns {*}
     */
    queryIncome: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "data": {
                totalIncome: '10000元',
                currentIncome: '0元',
                level: '兼职/主管'
            }
        })
    },
    /**
     * 我的积分
     * @returns {*}
     */
    queryScore: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "data": {
                totalIncome: '10000',
                scoreList: [
                    { id: 1, score: '100', des: '因为什么获取积分的描述', time: '2017-1-1 10:10:10' },
                    { id: 2, score: '20', des: '因为什么获取积分的描述', time: '2017-1-1 10:10:10' },
                    { id: 3, score: '30', des: '因为什么获取积分的描述', time: '2017-1-1 10:10:10' },
                    { id: 4, score: '40', des: '因为什么获取积分的描述', time: '2017-1-1 10:10:10' },
                    { id: 5, score: '500', des: '因为什么获取积分的描述', time: '2017-1-1 10:10:10' }
                ]
            }
        })
    },
    /**
     * 我的所有收益列表
     * @returns {*}
     */
    queryAllIncomeList: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list": [
                { id: 1, money: '100元', des: '收益的描述', time: '2017-1-1 10:10:10' },
                { id: 2, money: '100元', des: '收益的描述', time: '2017-1-1 10:10:10' },
                { id: 3, money: '100元', des: '收益的描述', time: '2017-1-1 10:10:10' },
                { id: 4, money: '100元', des: '收益的描述', time: '2017-1-1 10:10:10' },
                { id: 5, money: '100元', des: '收益的描述', time: '2017-1-1 10:10:10' }
            ]
        })
    },
    /**
     * 我的消息列表
     * @returns {*}
     */
    searchMail: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|20": [
                { "id|+1": 1, "des|1": ['消息内容消息内','消息内容消息内2消息内容消息内2消息内容消息内2消息内容消息内2消息内容消息内2消息内容消息内2','消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3消息内容消息内3']}
            ]
        })
    },
    /**
     * 职位收藏夹
     * @returns {*}
     */
    queryCollectJobs: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list": [
                { id: 1, job: '职位名称0', num: '10', company: '公司名称', place: '长沙-雨花区', salary: '100元/小时' },
                { id: 2, job: '职位名称1', num: '10', company: '公司名称', place: '长沙-雨花区', salary: '100元/小时' },
                { id: 3, job: '职位名称2', num: '10', company: '公司名称', place: '长沙-雨花区', salary: '100元/小时' },
                { id: 4, job: '职位名称3', num: '10', company: '公司名称', place: '长沙-雨花区', salary: '100元/小时' },
                { id: 5, job: '职位名称4', num: '10', company: '公司名称', place: '长沙-雨花区', salary: '100元/小时' }
            ]
        })
    },
    /**
     * 我的本季度收益列表
     * @returns {*}
     */
    queryQuarterIncome: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list": [
                { id: 1, money: '200元', des: '收益的描述', time: '2017-1-1 10:10:10' },
                { id: 2, money: '200元', des: '收益的描述', time: '2017-1-1 10:10:10' },
                { id: 3, money: '200元', des: '收益的描述', time: '2017-1-1 10:10:10' },
                { id: 4, money: '200元', des: '收益的描述', time: '2017-1-1 10:10:10' },
                { id: 5, money: '200元', des: '收益的描述', time: '2017-1-1 10:10:10' }
            ]
        })
    },
    /**
     * 注册
     * @returns {*}
     */
    regAction$: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "data": {
                "id|+1": 1,
                "nickname|1": ["张三", "李四"],
                "tel": "18522222222",
                "account": "account",
                "type": 2
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
                    "title|1": ["新闻的标题", "内容标题在哪里"],
                    "category": "新闻的分类",
                    "publishTime|1": ["2018-10-10 10:10:20", "2015-09-09 09:09:09",],
                    "publishMan|1": ["系统管理员", "国家领导人"],
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
                "title|1": ["新闻的标题", "内容标题在哪里"],
                "content": "AAAAAAAAAAAAA<br/>BBBBBBBBBBBBBBB<br/>CCCCCCCCCC"
            }
        })
    },
    /**
     * 课程详情列表
     * @returns {*}
     */
    queryLessonDetail: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "data": {
                "id|+1": 1,
                "title|1": ["课程的标题", "课程的标题2"],
                "content": "<p>AAAAAAAAAAAAA<br/>BBBBBBBBBBBBBBB<br/>CCCCCCCCCC</p>"
            }
        })
    },
    /**
     * 培训项目详情
     * @returns {*}
     */
    queryProjectDetail: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "data": {
                "id|+1": 1,
                "title|1": ["培训项目的标题", "培训项目的标题2"],
                "content": "<p>AAAAAAAAAAAAA<br/>BBBBBBBBBBBBBBB<br/>CCCCCCCCCC</p>"
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
                    "imgUrl|1": ["http://www.hnjkfwy.com/upload/day_180520/201805201139129214.jpg", "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg"]
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
                    "name|1": ["培训风采培训风采培训风采培训风采培训风采培训风采培训风采培训风采培训风采培训风采培训风采培训风采培训风采", "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"]
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
                    "name|1": ["政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表政法政规列表", "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"]
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
                    "name|1": ["行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表行业资讯列表", "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"]
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
                    "name|1": ["通知通知通知通知通知通知通知通知通知通知通知通知通知通知通知通知通知通知", "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"]
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
                    "name|1": ["工作动态工作动态工作动态工作动态工作动态工作动态", "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"]
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
                    "name|1": ["健康管理师培训视频", "育婴师培训视频", "催乳师培训视频"],
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
                    "name|1": ["腾讯", "百度", "搜狐"],
                    "imgUrl": "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg",
                    "link": "http://www.baidu.com"
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
                    "name|1": ["张三", "李四", "王五"],
                    "sex|1": ["男", "女"],
                    "age|18-60": 60,
                    "itention|1": ["健康管理师", "咨询师", "育婴师"],
                    "salary|1": ["面议", "1万/月", "2万/月"],
                    "education|1": ["大专", "本科", "研究生", "博士"],
                    "experience|1": ["8年以上", "7年以上", "6年以上", "5年以上", "4年以上", "3年以上", "2年以上"],
                    "updateTime|1": ["7小时前", "8小时前", "9小时前", "1天前", "2天前", "3天前", "4天前"]
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
                    "name|1": ["健康管理咨询师XXX", "育婴师XXXXXXXXX", "理疗师XXXXXXXXXX"]
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
                    "job|1": ["健康管理咨询师", "育婴师", "理疗师"],
                    "name|1": ["湖南省健康管理公司", "湖南省健康管理公司2", "湖南省健康管理公司3", "湖南省健康管理公司4"],
                    "salary|1": ["1.5万-2.5万/月", "1万/月", "2万/月"],
                    "place|1": ["长沙", "株洲", "常德"],
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
                    "category|1": ["健康科学讲师", "育婴师讲师", "继续教育讲师"],
                    "des": '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述'
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
                            "name|1": ["课程名称", "课程名称1", "课程名称2", "课程名称3"],
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
     * 积分兑换课程列表
     * @returns {*}
     */
    queryScoreLessons: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|3-5": [
                {
                    "id|+1": 100,
                    "name|1": ["课程名称", "课程名称1", "课程名称2", "课程名称3"],
                    "openDate": "03月10日-09月12日",
                    "classHour": "18天",
                    "score": "1000",
                    "examinationFee": "100元",
                    "totalFee": "1100元"
                }
            ]
        })
    },
    /**
     * 我的简历列表
     * @returns {*}
     */
    queryMyResume: () => {
        return Mock.mock({
            'success': true,
            "message": '成功',
            "list|3-5": [
                {
                    "id|+1": 100,
                    "name|1": ["简历名称", "简历名称1", "简历名称2", "简历名称3"],
                    "openness|1": ["完全公开", "保密"]
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
                    "id|+1": 1,
                    "imgUrl": "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1527600577&di=a49676be1b756f35b8e3ab3cb4585143&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpublic%2Fwuqiuhuang.jpg",
                    "name": "首届湖南“健康管理师之星”评选结果公示",
                    "simpleDesc": "首届湖南“健康管理师之星通过宣传发动、提名推荐、网络投票、微信投票首届湖南“健康管理师之星通过宣传发动、提名推荐、网络投票、微信投票"
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
