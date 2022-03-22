import { StyledPosts } from '../styles/Posts.styled'

const Posts = (props) => {
	const { id, title, body } = props.data
	return (
		<StyledPosts className='Posts'>
			<small>{id}</small>
			<h1>{title}</h1>
			<p>{body}</p>
		</StyledPosts>
	)
}

export default Posts
