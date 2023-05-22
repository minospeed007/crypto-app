
import React from 'react'
import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoNewsHeaders = {
    method: 'GET',
    params: {safeSearch: 'Off', textFormat: 'Raw'},
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
      'X-RapidAPI-Key': '3af04152dcmshec7a7ff506c8b2cp16926fjsne061f207f280'
    }
  };

  const baseUrl='https://bing-news-search1.p.rapidapi.com/news'
  const createRequest=(url)=>({url, headers:cryptoNewsHeaders})

  export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })

})

export const{useGetCryptoNewsQuery}= cryptoNewsApi