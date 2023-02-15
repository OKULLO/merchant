import { Api,Client } from '../client'

export const getAllEvents = async () => {
  return Api.get('/api/v1/events/',Client)
}
export const getUpcomingEvents = async () => {
  return Api.get('/api/v1/events/upcoming',Client)
}
export const getMyEvents = (id) => {
  return Api.get(`/api/v1/events/${id}/all`,Client)
}
export const getEventDetail =  async (eventSlug) => {

  return Api.get(`/api/v1/events/${eventSlug}`,Client)
}
export const addEvent = async (data) => {
  
  return Api.post('/api/v1/events/create',Client, data)
}
export const updateEvent = (data) => {
  return Api.post('/api/v1/auth/forgotpassword',Client, data)
}

export const deleteEvent = (id) => {
  return Api.delete('/api/v1/trips/packages/'+id,Client)
}