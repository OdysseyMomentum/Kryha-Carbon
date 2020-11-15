import React from "react";
import styled from "styled-components";
import { useHistory, Redirect } from "react-router-dom";
import { useStore } from '../context';

import { ListItem } from "./shared/list-item";
import { color } from '../assets/color';
import { ReactComponent as DownArrow } from '../assets/icons/down-arrow.svg';
import ROUTES from '../router/routes';

export const Products = () => {
    const history = useHistory();
    const { user, products = [] } = useStore();

	if (user.accountType === "upstream") return <Redirect to={ROUTES.REPORTS} />;

	return (
        <Container>
            <h2>Products</h2>
            <FlexContainer>
                <Button onClick={() => history.push(ROUTES.PRODUCT_FORM)}>
                    add product
                    &nbsp;
                    <DownArrow />
                </Button>
            </FlexContainer>
            <Scrollable>
            {[...products,1,2,3,4,5].map((product, index) => (
                <ListItem
                    leftText={`Product ${product}`}
                    rating={index + 1}
                    rightText="verified"
                    key={product}
                />
            ))}
            </Scrollable>
        </Container>
    );
};

const Container = styled.div`
    padding: 0 100px;
    width: 100%;
    margin: 0 auto;

    h2 {
        font-weight: 700;
        font-size: 40px;
        color: ${color.green};
        margin-bottom: 25px;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Scrollable = styled.div`
    max-height: 60vh;
    overflow-y: auto;
`;

const Button = styled.button`
    border-radius: 3px;
    margin: 35px 0;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${color.green};
    background-color: ${color.purple};
    border: 1px solid ${color.green};
    padding: 16px;
    cursor: pointer;

    svg {
        height: 18px;
        transform: rotate(-90deg);

        path {
            stroke: ${color.green};
        }
    }

    :focus {
        outline: none;
    }
`;