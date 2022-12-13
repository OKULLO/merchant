import { useQuery,useInfiniteQuery } from 'react-query'

import { getUserBlog, allSermons } from '../../services/Blog'
import { getProfile } from '../../services/account'

import {

  ACCOUNT_KEY,
  USER_ARTICLE_KEY,
  SERMON_KEY

} from '../../constants/querykeys'



export function Me(user) {
  return useQuery(ACCOUNT_KEY, async () => {
    if (user) {
      return getProfile().then((res) => res.data)
    }
    return null
  })
}


// export function GetArticleDetail(Id) {
//   return useQuery(ARTICLE_DETAIL, async () => {
//     return getProductDetail(Id).then((res) => res.data)
//   })
// }

// export function GetAllArticles(page) {

//   return useQuery([ALL_Articles,page], async () => {
//     return allBlogs(page).then((res) => res.data)
//   },{keepPreviousData:true})
// }

// export function GetAllOrders(page) {

//   return useQuery([ALL_ORDERS,page], async () => {
//     return listOrders(page).then((res) => res.data)
//   },{keepPreviousData:true})
// }


export function GetUserArticle() {
  return useQuery(USER_ARTICLE_KEY, async () => {

      return getUserBlog().then((res) => res.data)
  },{ keepPreviousData: false },)
}



export function GetAllSermons(page) {
  return useQuery([SERMON_KEY,page], async () => {

      return allSermons(page).then((res) => res.data)
  },{ keepPreviousData: false },)
}


