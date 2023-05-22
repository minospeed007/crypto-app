import React, {useState,useEffect} from 'react' 
import {Routes, Route, Router, Link} from 'react-router-dom'
import {Layout,Typography, Space} from 'antd'
import {Navbar,HomePage,Exchanges,News,Cryptocurrencies, CryptoDetails} from './components'
import './App.css'
import { getProperty } from './services/cryptoApi'

const App=()=> {
  const [data, setData]=useState([])
  useEffect(()=>{
    getProperty(data).then((data)=>{
      console.log(data)
      setData(data)
    })
  })

  return (
    <div className='app'>
<div className='navBar'>
<Navbar />

</div>
    
    <div className='main'>
    <Layout>
      <div className='routes' >
       <Routes>
         <Route exact path='/' element={<HomePage/>}/>
         <Route exact path='/exchanges' element={<Exchanges/>}/>
         <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>
}/>
         <Route exact path='/crypto/:coindid'element={<CryptoDetails/>}/>
           
         <Route exact path='/news' element={<News/>}/>
       </Routes>
      </div>
    </Layout>
      
    
    <div className='footer' >
      <Typography.Title level={5} style={{ color: 'white', textAlign:'center'}} >
  Cyrptoverse <br/>
  All right reserved
      </Typography.Title>
      <Space>
      <Link to='/'>Home</Link>
      <Link to='/exchanges'>Exchanges</Link>
      <Link to='/news'>News</Link>
      

     </Space>
     </div>
    </div>
</div>
)
}

export default App;

