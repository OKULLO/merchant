import axios from 'axios'

import config from '../Config';
import {LOGIN_PAGE } from '../constants/history.constants'



axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] ='application/json';

const Client = axios.create({
	
   baseURL: config.MerchantConfig.BASE_API_URL,
   headers:  { 'Content-Type': 'application/json'}
  });

  
   
   Client.interceptors.request.use((config)=> {
    if (localStorage.user) {
      const userStorage = JSON.parse(localStorage.getItem('user'))
    
      config.headers['Authorization'] = `Bearer ${userStorage?.access_token}`
    }
    return config
  })

  Client.interceptors.response.use(
    (response) => response,
    (err) => {
     console.log(err)
      const { status } = err.response.status
      
  
      switch (status) {
        case 403:
          localStorage.removeItem('user')
          window.location.replace(LOGIN_PAGE)
          break
        default:
          break
      }
  
      return Promise.reject(err)
    })

   



const Api = {

  put(url,client, data) {
    return client.put(url, data);
  },

  get(url,client) {
    return client.get(url);
  },

  post(url,client, data) {
    return client.post(url, data);
  },

  delete(url,client, data) {
    return client.delete(url, data);
  }
};

export {Api,Client};
