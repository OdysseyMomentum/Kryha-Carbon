import React from 'react';
import styled from 'styled-components';

import { ReactComponent as OutlinedStar } from '../../assets/icons/outlined-star.svg';
import { color } from '../../assets/color';

export const StarRating = (props) => {
	const { rating } = props;

	return (
        <Container width={props.width}>
            {[1,2,3].map((star) => (star <= rating
                ? <OutlinedStar style={{ fill: color.darkPurple }} />
                : <OutlinedStar />
            ))}
        </Container>
	);
};


const Container = styled.div`
	width: ${props=>props.width};
	svg {
		&:nth-child(2) {
			margin: 0 8px;
		}
	}
`;