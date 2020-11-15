import React from 'react';
import styled from 'styled-components';
import { ReactComponent as OutlinedStar } from '../../assets/outlined-star.svg';
import { color } from '../../assets/color';

export const StarRating = (props) => {
	const { rating } = props;
	return (
        <Container>
            {[1,2,3].map((star) => (star <= rating
                ? <OutlinedStar style={{ fill: color.darkPurple }} />
                : <OutlinedStar />
            ))}
        </Container>
	);
};

const Container = styled.div`
	svg {
		&:nth-child(2) {
			margin: 0 8px;
		}
	}
`;
