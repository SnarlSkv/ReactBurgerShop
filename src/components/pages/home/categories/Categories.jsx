import React from 'react'
import { useState } from 'react'
import './categories.scss'

function Categories() {
	const [activeIndex, setActiveIndex] = useState(0);

	const onActiveClick = (index) => {
		setActiveIndex(index)
	}

	const categories = ['All', 'Grill-burgers', "Chickens-burgers", 'Fish-burgers', 'With cheese', 'Without cheese']

	return (
		<div className="categories">
			<ul className='categories__list'>
				{
					categories.map((value, index) => (
						 <li key={index} //Static list
								onClick={() => onActiveClick(index)} 
								className={activeIndex === index ? 'active' : '' }
						>{value}</li>
					))
				}
			</ul>
		</div>
	)
}

export default Categories
