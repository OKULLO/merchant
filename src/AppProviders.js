import React from 'react'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import store from './Store'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // staleTime: Infinity,
    },
  },
})

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools />
        {children}
      </QueryClientProvider>
      </Provider>
   
  )
}

export default AppProviders