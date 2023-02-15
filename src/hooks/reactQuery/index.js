import { useQuery,useInfiniteQuery } from 'react-query'

import { getMerchantProfile } from '../../services/merchant'

import {

  ACCOUNT_KEY,
  USER_ARTICLE_KEY,
  SERMON_KEY,
  MERCHANT_ACCOUNT_KEY

} from '../../constants/querykeys'



// export function Me(user) {
//   return useQuery(ACCOUNT_KEY, async () => {
//     if (user) {
//       return getProfile().then((res) => res.data)
//     }
//     return null
//   })
// }


export function GetMerchantProfile(merchantId) {
  return useQuery(MERCHANT_ACCOUNT_KEY, async () => {
    return getMerchantProfile(merchantId).then((res) => res.data)
  })
}

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


// export function GetUserArticle() {
//   return useQuery(USER_ARTICLE_KEY, async () => {

//       return getUserBlog().then((res) => res.data)
//   },{ keepPreviousData: false },)
// }



// export function GetAllSermons(page) {
//   return useQuery([SERMON_KEY,page], async () => {

//       return allSermons(page).then((res) => res.data)
//   },{ keepPreviousData: false },)
// }


