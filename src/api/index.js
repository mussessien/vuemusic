import axios from 'axios'
let baseUrl = 'http://localhost:3000'

//获取轮播图，type默认位0，即pc端
export function getBanner(type = 0) {
    return axios.get(`${baseUrl}/banner?type=${type}`)
}

export function getHomepageBall() {
    return axios.get(`${baseUrl}/homepage/dragon/ball`)
}

//获取推荐歌单，limit为数组长度，默认为10
// 借口默认不传 limit 为30
export function getPersonalized(limit = 10) {
    return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}