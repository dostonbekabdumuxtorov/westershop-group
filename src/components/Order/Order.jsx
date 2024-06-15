import React, { useState } from 'react'
import './order.css'
import { Button, TextField } from '@mui/material'
import axios from 'axios'


function Order({ data }) {
	const Token = '7241663742:AAE3_4LTmfhxlGO6SjSHj2zQpP5eRxsqhys'
	const GroupId = -1002217102074
	const [ism, setIsm] = useState('')
	const [manzil, setManzil] = useState('')
	const [tel, setTel] = useState('')



	async function Order_Handle(el) {
		const formData = new FormData();
		formData.append('chat_id', GroupId);


		formData.append('photo', "https://backoffice.samarashop.uz" + el.photo[0].photo);
		formData.append('caption', `📗Name: ${el.name} \n💰Price: ${el.price_per_box * el.count}so'm\n👲Ismi: ${ism}\n📬Manzil: ${manzil}\n☎️Nomer: ${tel}`)
		let res = await axios.post(`https://api.telegram.org/bot${Token}/sendPhoto`, formData)
		if (res) {
			console.log(res)
		}


	}


	function Ordering() {
		data.map(el=>{
			Order_Handle(el)
		})
	}


	return (
		<div className='order-container'>
			<div className="row">
				<TextField onChange={(e)=>setIsm(e.target.value)} className='inp' type="text" label='Ismizi' />
				<TextField onChange={(e)=>setManzil(e.target.value)} className='inp' type="text" label='Mazili' />
				<TextField onChange={(e)=>setTel(e.target.value)} className='inp' type="text" label='Telizi' />
			</div>
			<Button onClick={Ordering} variant='contained'>Burutma qilish</Button>
		</div>
	)
}

export default Order