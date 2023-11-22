import React from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId, setCurrentPage } from '../../../redux/slices/filterSlice' 

import Categories from './categories/Categories'
import ItemBlock  from './itemBlock/ItemBlock'
import Sort 			from './sort/Sort'
import Skeleton 	from './itemBlock/Skeleton'
import Pagination from './pagination'
import { SearchContext } from '../../../App'

function Home() {
	const dispatch = useDispatch();
	const { categoryId, sort, currentPage} = useSelector((state) => state.filter)

	// const categoryId = useSelector((state) => state.filter.categoryId);
	// const sortType = useSelector((state) => state.filter.sort.sortProperty);
	// const currentCount = useSelector((state) => state.filter.currentCount);


  const { searchValue } = React.useContext(SearchContext);

	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	// const [categoryId, setCategoryId] = React.useState(0);
	// const [sortType, setSortType] = React.useState({
	// 	name: 'popular',
	// 	sortProperty: 'rating',
	// });

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	}

	const onChangePage = (number) => {
		dispatch(setCurrentPage(number));
	}

	React.useEffect(() => {
		setIsLoading(true);

		const sortBy = sort.sortProperty;
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const search = searchValue ? `&search=${searchValue}` : '';

		// fetch(
		// 	`https://6410a431ff89c2e2d4e4e0d2.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=desc${search}`, // search mockapi incorrect working
		// )
		// 	.then((res) => res.json())
		// 	.then((arr) => {
		// 		setItems(arr);
		// 		setIsLoading(false);
		// 	});

		axios
			.get(
				`https://6410a431ff89c2e2d4e4e0d2.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=desc${search}`
			)
			.then(res => {
				setItems(res.data);
				setIsLoading(false);
			})

		window.scrollTo(0, 0);
	}, [categoryId, sort.sortProperty, searchValue, currentPage]);


	const burgers = items.map((obj) => <ItemBlock key={obj.id} {...obj} />);

	// const burgers = items              Підходить для статичних масивів, з малим об'ємом 
	// 	.filter((obj) => {
	// 		if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
	// 			return true;
	// 		}
	// 		return false;
	// 	})
	// 	.map((obj) => <ItemBlock key={obj.id} {...obj} />);

	const skeletons = [...new Array(8)].map((_, index) => (<Skeleton key={index} />));
	
	return (
		<>
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort />
			</div>
			<h2 className="content__title">All goods</h2>
			<div className="content__items">
				{ isLoading ? skeletons : burgers }
			</div>
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</>
	)
}

export default Home;
