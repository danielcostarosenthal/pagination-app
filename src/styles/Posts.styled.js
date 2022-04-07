import styled from 'styled-components'

export const StyledPosts = styled.div`
	max-width: 600px;
	margin: 20px auto;
	padding: 40px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background: #fff;
	border-radius: 5px;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	color: #23415a;
	font-family: sans-serif;

	small {
		padding: 5px 12px;

		border: 2px solid #23415a;
		border-radius: 7px;
		color: #23415a;
	}

	h1 {
		margin-top: 30px;
		max-width: 35ch;

		font-size: 1.5rem;
		line-height: 1.25;
		text-align: center;
		text-transform: capitalize;
	}

	p {
		text-align: justify;
	}
`
