import React from 'react'

import Categories from './categories/Categories'
import ItemBlock  from './itemBlock/ItemBlock'
import Sort 			from './sort/Sort'
import Skeleton 	from './itemBlock/Skeleton'

function Home() {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		fetch('https://6410a431ff89c2e2d4e4e0d2.mockapi.io/items')
			.then((res) => res.json())
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
		// window.scrollTo(0, 0);
	}, []);

	return (
		<>
		<div className="content__top">
			<Categories />
			<Sort />
		</div>
		<h2 className="content__title">All goods</h2>
		<div className="content__items">
			{
				isLoading 
				? [...new Array(8)].map((_, index) => (<Skeleton key={index} />))
				: items.map((obj) => (
					<ItemBlock key={obj.id} {...obj} />
				))
			}
		</div>
		</>
	)
}

export default Home
