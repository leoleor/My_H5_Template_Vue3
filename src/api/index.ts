import request from '@/utils/request'

export function testApi(obj: apiParamsInter) {
  const { data, headers } = obj
  return request({
    url: '/gateway',
    method: 'get',
    params: data,
    headers: headers
  })
}