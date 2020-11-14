import React from 'react';
import styled from 'styled-components';

import { StarRating } from "./star-rating";
import { color } from '../../assets/color';

export const ListItem = (props) => {
	const { leftText, rating, rightText } = props;

	return (
		<ListItemContainer>
			<div style={{ width: '50%' }}>
				<p>{leftText}</p>
			</div>
			<FlexContainer>
				<StarRating rating={rating} />
				<p>{rightText}</p>
			</FlexContainer>
		</ListItemContainer>
	);
};

export const ListItemContainer = styled.div`
	width: 100%;
	margin: 18px auto;
	padding: 40px;
	display: flex;
	background-color: ${color.lightPurple};
	border-radius: 3px;

	* {
		font-weight: 500;
		font-size: 18px;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: ${color.darkPurple};
	}
`;

const FlexContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;