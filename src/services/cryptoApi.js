import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl='https://coinranking1.p.rapidapi.com/coins'

const cryptoApiHeaders={

    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        'X-RapidAPI-Key': 'KJwZZIJSFImshuivMSVGaiYzKRomp15f2vkjsnk4bKzuUzVLzA'
      }
    };
      


const createRequest=(url)=>({url, headers:cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCrptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`)
        })
    })

})

export const{
    useGetCryptosQuery, useGetCrptoDetailsQuery
}= cryptoApi

export const getProperty= async ()=>{
    try{
        const {data:data}= await axios.get('https://realty-in-us.p.rapidapi.com/properties/list-for-sale',
        {
          
          params: {
            state_code: 'NY',
            city: 'New York City',
            offset: '0',
            limit: '200',
            sort: 'relevance'
          },
          headers: {
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
            'X-RapidAPI-Key': '3af04152dcmshec7a7ff506c8b2cp16926fjsne061f207f280'
          }
        })
        return data 
    }catch(errror){
        console.log(error)
    }
}https://coinranking1.p.rapidapi.com/coins%20