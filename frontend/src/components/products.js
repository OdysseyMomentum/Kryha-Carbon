import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, Redirect } from "react-router-dom";
import { useStoreContext } from "../context";
import { getProducts } from "../actions/product";

import { ListItem } from "./shared/list-item";
import { color } from '../assets/color';
import { ReactComponent as DownArrow } from '../assets/icons/down-arrow.svg';
import ROUTES from '../router/routes';

const mockProducts = [
    {
        midstream: {verified: false, existence: false, stars: 1},
        name: "Product 1",
        stars: 1,
    },
    {
        midstream: {verified: false, existence: false, stars: 2},
        name: "Product 2",
        stars: 3,
    },
    {
        midstream: {verified: false, existence: false, stars: 3},
        name: "Product 3",
        stars: 2,
    }
]

export const Products = () => {
    const history = useHistory();
	const [{ user, products = [] }, dispatch] = useStoreContext();
    // if (user.accountType === "upstream") return <Redirect to={ROUTES.REPORTS} />;
    
    useEffect(() => {
        const fetchProducts = async () => {
            await getProducts(user.email, dispatch);
        };
        fetchProducts();
    }, []);

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
            {[...products, ...mockProducts].map((product, index) => (
                <ListItem
                    leftText={product.name}
                    rating={product.stars}
                    rightText="verified"
                    key={product.name}
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