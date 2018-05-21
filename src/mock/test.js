import { param2Obj } from '@/utils'

export default {
	queryPoster: config => {
		return {
			success: true,
			message: '',
			list: [
				{ id: 1, name: '广告1', imgUrl: '../../../assets/slider/slider.png', link: 'https://www.baidu.com' },
				{ id: 2, name: '广告2', imgUrl: '../../../assets/slider/slider.png', link: 'https://www.baidu.com' },
				{ id: 3, name: '广告3', imgUrl: '../../../assets/slider/slider.png', link: 'https://www.baidu.com' },
				{ id: 4, name: '广告4', imgUrl: '../../../assets/slider/slider.png', link: 'https://www.baidu.com' }
			]
		}
	}
}
