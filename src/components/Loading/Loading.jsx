import { Skeleton, Stack } from '@mui/material'
import React from 'react'

function Loading() {
	return (
		<div className='home-container'>
			<div className="home-wrapper">
				{[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
					<div className="card">
						<Stack spacing={1}>
							<Skeleton variant="rounded" width={290} height={210} />
							<Skeleton variant="text" sx={{ fontSize: '1rem' }} />
							<Skeleton variant="text" sx={{ fontSize: '1rem' }} />
							<Skeleton variant="text" width={100} sx={{ fontSize: '1rem' }} />
							<Skeleton variant="rectangular" width={290} height={50} />
						</Stack>
					</div>
				))}
			</div>
		</div>
	)
}

export default Loading