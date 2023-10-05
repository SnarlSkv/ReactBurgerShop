import React from 'react'
import './categories.scss'

function Categories({ value, onChangeCategory }) {

	const onActiveClick = (index) => {
		setActiveIndex(index)
	}

	const categories = ['All', 'Grill-burgers', "Chickens-burgers", 'Fish-burgers', 'With cheese', 'Without cheese']

	return (
		<div className="categories">
			<ul className='categories__list'>
				{
					categories.map((categoryName, i) => (
						 <li key={i} //Static list
								onClick={() => onChangeCategory(i)} 
								className={value === i ? 'active' : '' }
						>{categoryName}</li>
					))
				}
			</ul>
		</div>
	)
}

export default Categories
