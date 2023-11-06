import React from 'react'
import {Route, Routes} from "react-router-dom";

import Header from './components/header/Header'
import Home from './components/pages/home/Home'
import Cart from './components/pages/cart/Cart'
import NotFound from './components/pages/notFound/NotFound'

import './App.scss'

export const SearchContext = React.createContext()

function App() {
	
	const [searchValue, setSearchValue] = React.useState('');
	
 	console.log(searchValue);

	return (
		<div className="wrapper">
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className="content">
					<div className="container">
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/cart' element={<Cart />} />

							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</SearchContext.Provider>
		</div>
	)
}

export default App
