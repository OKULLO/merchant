import { Api,Client } from '../client'

export const AddBlog = (data) => {
  return Api.post('/api/v1/blogposts/',Client, data)
}
export const allBlogs = async () => {
  return Api.get('/api/v1/blogposts/',Client)
}

export const getUserBlog = () => {
  return Api.get('/api/v1/blogposts/me/posts',Client)
}



//sermons

export const allSermons = async (page) => {
  return Api.get(`/api/v1/sermons/?page=${page}`,Client)
}

export const latestSermons = async () => {
  return Api.get('/api/v1/sermons/latest',Client)
}

export const addSermon = async (data) => {
  return Api.post('/api/v1/sermons/',Client,data)
}