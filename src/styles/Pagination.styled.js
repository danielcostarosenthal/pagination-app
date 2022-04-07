import styled from 'styled-components'

export const StyledPagination = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 25px;

	color: #23415a;
	font-family: sans-serif;

	.paginationItem {
		width: 25px;
		height: 25px;
		margin-bottom: 20px;
		padding-top: 12.5px;

		background: #fff;
		border: 2px solid #23415a;
		border-radius: 50%;
		cursor: pointer;
		user-select: none;

		position: relative;
	}

	.paginationItem + .paginationItem {
		margin-left: 10px;
	}

	.paginationItem span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.prev,
	.next {
		margin: 0 20px;
		padding: 5px 10px;

		background: #fff;
		border: none;
		border-radius: 5px;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
		color: #23415a;
		cursor: pointer;
		user-select: none;
	}

	.paginationItem.active {
		border: 1px solid #23415a;
		color: #23415a;
		pointer-events: none;
	}

	.prev.disabled,
	.next.disabled {
		box-shadow: none;
		color: #23415a;
		pointer-events: none;
	}

	small {
		user-select: none;
	}

	@media (max-width: 425px) {
		.paginationItem + .paginationItem {
			margin-left: 5px;
		}
		.prev,
		.next {
			margin: 0 15px;
		}
	}
`
