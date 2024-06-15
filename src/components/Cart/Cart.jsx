import React from 'react'
import './cart.css'
import { Divider, List } from 'antd'
import { Paper } from '@mui/material'
import Order from '../Order/Order'



function Cart() {

  let data = localStorage.getItem("savat") ? JSON.parse(localStorage.getItem('savat')) : []


  
  function jami_narxi(params) {
    if(data.length > 0){
      let jami = data.map((item)=>{
        return item.price_per_box*item.count
      })

      let reduced = jami.reduce((a,b)=>{
        return a+b
      })
  
      return reduced
    }else{
      return '0'
    }
  }

  function jami_vazni(params) {
    if(data.length>0){
      let jami = data.map((item)=>{ 
        return item.weight*item.count
      })

      let reduced = jami.reduce((a,b)=>{
        return a+b
      })
  
      return reduced
    }else{
      return '0'
    }
  }

  return (
    <div className='cart-container'>
      <div className="cart-wrapper">
        <Divider orientation="left">Savatdagi mahsulotlar</Divider>
        <div className="carts-wrapper">
          <List
            size="large"
            bordered
            style={{width:'70%'}}
            dataSource={data}
            renderItem={(item) =>
              <List.Item>
                <div>
                  <img style={{ width: 50 }} src={"https://backoffice.samarashop.uz" + item?.photo[0]?.photo} alt="" />
                  <p>{item.name}</p>
                </div>
                <div>
                  <h3>{item.count} ta</h3>
                  <h3>{item.price_per_box * item.count} so'm</h3>
                </div>
              </List.Item>}
          />
          <Paper elevation={2} style={{width:'30%',padding:15}}>
            <h3>Jami narxi: {jami_narxi()}so'm</h3>
            <h3>Jami og'irligi: {jami_vazni()}kg</h3>
          </Paper>


        </div>
          <Order data={data} />
      </div>
    </div>
  )
}

export default Cart