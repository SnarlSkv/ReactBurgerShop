import React from 'react'
import qs, { parse } from 'qs'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setCategoryId, setCurrentPage, setFilters } from '../../../redux/slices/filterSlice' 
import { fetchBurgers } from '../../../redux/slices/itemsSlice'

import Categories from './categories/Categories'
import ItemBlock  from './itemBlock/ItemBlock'
import Sort, { popupList } from './sort/Sort'
import Skeleton 	from './itemBlock/Skeleton'
import Pagination from './pagination'

function Home() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isSearch = React.useRef(false);
	const isMounted = React.useRef(false);

	const { categoryId, sort, currentPage, searchValue} = useSelector((state) => state.filter);
	const { burgers, status } = useSelector((state) => state.items);

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	}

	const onChangePage = (number) => {
		dispatch(setCurrentPage(number));
	}

	const getBurgers = async () => {

		const sortBy = sort.sortProperty;
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const search = searchValue ? `&search=${searchValue}` : '';

		dispatch(fetchBurgers({
			sortBy,
			category,
			search,
			currentPage,
		}));

			window.scrollTo(0, 0);
	}

	React.useEffect(() => {
		if (window.location.search) {
			const params = parse(window.location.search.substring(1));
			const sort = popupList.find((obj) => obj.sortProperty === params.sortProperty)

			dispatch(
				setFilters({
					...params,
					sort,
				}),
			);
			isSearch.current = true;
		}
	}, []);

	React.useEffect(() => {
		window.scrollTo(0, 0);

		if (!isSearch.current) {
			getBurgers();
		}

		isSearch.current = false;
	}, [categoryId, sort.sortProperty, searchValue, currentPage]);

	React.useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
				currentPage,
			})
	
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, sort.sortProperty, currentPage]);

	const items = burgers.map((obj) => (
			<ItemBlock key={obj.id} {...obj} />
	));

	const skeletons = [...new Array(8)].map((_, index) => (<Skeleton key={index} />));

	return (
		<>
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort />
			</div>
			<h2 className="content__title">All goods</h2>
			{status === 'error' ? (
					<div className='content__error'>
						<h2>We have some problems 😕</h2>
						<p>Most likely, there was an error loading the product</p>
					</div>
				) : (
					<div className="content__items">
						{ status === 'loading' ? skeletons : items }
					</div>
				)}
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</>
	)
}

export default Home;
