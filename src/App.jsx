import React from 'react'
import {Route, Routes} from "react-router-dom";

import Header from './components/header/Header'
import Home from './components/pages/home/Home'
import Cart from './components/pages/cart/Cart'
import NotFound from './components/pages/notFound/NotFound'

import './App.scss'

function App() {
	return (
		<div className="wrapper">
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
		</div>
	)
}

export default App
