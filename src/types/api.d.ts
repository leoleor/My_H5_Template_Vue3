interface apiParamsInter {
  data: testData,
  headers?: testHeaders
}

interface testData {
  cityId: number,
  pageNum: number,
  pageSize: number,
  type: number,
  k: number
}

type testHeaders = (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders

// // 泛型
// type PromiseRes<T = {}> = Promise<ManageResult<T>>

// // 泛型,可以有默认值
// interface ManageResult<T = {}> {
//   code?: number;
//   errno?: number;
//   data: T;
//   message?: string;
//   errmsg?: string
// }
