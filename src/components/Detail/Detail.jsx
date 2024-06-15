import React, { useState } from 'react'
import './detail.css'
import Slider from './Slider'
import { useLocation } from 'react-router-dom'
import { Alert, Button, ButtonGroup, Snackbar } from '@mui/material'

function Detail({ setsavatlar, savatlar }) {
	const [count, setCount] = useState(1)
	const location = useLocation()


	let item = location.state

	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	function plus() {
		setCount(count + 1)
	}

	function minus() {
		if (count == 0) {

		} else {
			setCount(count - 1)
		}
	}


	function Savatchaga() {
		item.count = count
		setsavatlar([...savatlar, item])
		localStorage.setItem('savat', JSON.stringify(savatlar))
		handleClick()
	}

	return (
		<div className='detail-container'>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert
					onClose={handleClose}
					severity="success"
					variant="filled"
					sx={{ width: '100%' }}
				>
					{item.name} savatchaga qo'shildi
				</Alert>
			</Snackbar>
			<div className="detail-wrapper">
				<div className="left-detail">
					<Slider pics={item.photo} />
				</div>
				<div className="right-detail">
					<h3>{item.name}</h3>
					<p>O'lchovi: {item.measurement}</p>
					<p>O'girligi: {item.weight}kg</p>
					<p>Quti narxi: {item.price_per_box}so'm</p>
					<p>Dona narxi: {item.price_per_peace}so'm</p>
					<p>Qutidagi soni: {item.quantity_in_box}</p>

					<ButtonGroup style={{ marginTop: 20 }} variant="outlined" aria-label="Basic button group">
						<Button onClick={minus}>-</Button>
						<Button>{count}</Button>
						<Button onClick={plus}>+</Button>
					</ButtonGroup>

					<h1>{count * item.price_per_box}so'm</h1>

					<div className='xarid-buttons'>
						<Button variant='contained' onClick={Savatchaga}>Savatcha solish</Button>
						<Button variant='contained'>Xardlarga o'tish</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Detail