import React from 'react'
import './notFound.scss';

function NotFound() {
	return (
		<>
			<div className='main__nf'>
				<h1>
					<span>😩</span>
					<br />
					Not Found Content :( 
				</h1>
				<p className='description'>
					Unfortunately, this page is currently either unavailable or empty
				</p>
			</div>
		</>
	)
}

export default NotFound
