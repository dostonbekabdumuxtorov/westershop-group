import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Filter9PlusOutlinedIcon from '@mui/icons-material/Filter9PlusOutlined';
import './card.css'
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ item }) {

	const navigate = useNavigate()

	function Details() {
		navigate('/detail', { state: item })
	}
	return (
		<Card className='card'>
			<CardMedia
				component="img"
				alt="Img place holder"
				style={{ objectFit: 'contain' }}
				height="210"
				image={"https://backoffice.samarashop.uz" + item?.photo[0]?.photo}
			/>
			<CardContent>
				<Typography gutterBottom variant="h6" component="div">
					{item.name.slice(0, 25)}...
				</Typography>
				<div className='flexwrap'>
					<Filter9PlusOutlinedIcon style={{ color: 'orange' }} />
					<p>Qutidagi soni: {item.quantity_in_box}ta</p>
				</div>
				<button className='category-btn'>{item.category.name}</button>
				<button className='category-btn1'>{item.measurement}</button>
				<Typography variant='h5' component='div' style={{ marginTop: 7 }}>
					{item.price_per_peace} so'm
				</Typography>
			</CardContent>

			<CardActions>
				<Button fullWidth size="small" variant='contained' color='warning' onClick={Details}>Batafsil</Button>
			</CardActions>
		</Card>
	);
}
