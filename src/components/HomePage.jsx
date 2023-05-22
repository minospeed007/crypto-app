import React from 'react'
import millify from 'millify'
import {Typography, Statistic, Row, Col} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import {Link} from 'react-router-dom'
import {News,Cryptocurrencies} from '../components'

const {Title} = Typography
const HomePage=()=>{
    const {data, isFetching} = useGetCryptosQuery(10)
const globaStats= data?.data?.stats
if(isFetching) return 'Loading...'
    return(<>
<Title level={2} className='heading'>
    Global crypto stats
</Title>
<Row>
    <Col span={12}>
    <Statistic title='Total Cryptocurrencies' value={globaStats?.total} />
    <Statistic title='Total Exchanges' value={millify(globaStats?.totalExchanges)} />
    <Statistic title='Total Market Cap' value={millify(globaStats?.totalMarketCap)} />
    <Statistic title='Total 24h vol' value={millify(globaStats?.total24hVolume)}/>
    <Statistic title='Total Markets' value={millify(globaStats?.totalMarkets)} />


    </Col>
</Row>
<div className="home-deading-container">
    <Title level={2} className='home-title'> Top 10 Cryptocurrencies</Title>
    <Title level={3} className='show-more'> <Link to='/cryptocurrencies'>show more</Link></Title>

</div>
<Cryptocurrencies simplified/>
<div className="home-deading-container">
    <Title level={2} className='home-title'> Latest crypto news</Title>
    <Title level={3} className='show-more'> <Link to='/news'>show more</Link></Title>

</div>
<News  simplified/>
    </>)
}
export default HomePage