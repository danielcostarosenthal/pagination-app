import React, { useState, useEffect } from 'react'
import Pagination from './components/Pagination'
import Posts from './components/Posts'
const url = 'https://jsonplaceholder.typicode.com/posts'

const App = () => {
	const [posts, postsSet] = useState([])
	const [error, errorSet] = useState('')

	useEffect(() => {
		fetchPosts()
	}, [])

	const fetchPosts = async () => {
		const response = await fetch(url)
		if (response.ok) {
			const posts = await response.json()
			postsSet(posts)
			console.log(posts)
		} else {
			console.log(response)
		}
	}

	if (error) return <h1>{error}</h1>

	return (
		<div className='App'>
			{posts.length > 0 ? (
				<Pagination
					data={posts}
					RenderComponent={Posts}
					title='Posts'
					pageLimit={5}
					dataLimit={10}
					className='pagination'></Pagination>
			) : (
				<h1>No Posts to display</h1>
			)}
		</div>
	)
}

export default App
