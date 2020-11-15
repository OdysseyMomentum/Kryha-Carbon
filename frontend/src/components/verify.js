import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, Redirect } from "react-router-dom";
import { useStoreContext } from '../context';

import { ListItem, ListItemContainer } from "./shared/list-item";
import { color } from '../assets/color';
import { ReactComponent as Plus } from '../assets/icons/plus.svg';
import ROUTES from '../router/routes';
import { getReports } from "../actions/report";
import { Products } from "./products";
import { useWebSocket } from "./websocket";



const mockProducts = [
    {
        product: {
            category: "Smart phones",
            email: "watto@downstream.com",
            midstream: {verified: false, existence: false, stars: 0},
            name: "DITTO SMARTWATCH",
            stars: 0,
        },
        receiver: "raven@midstream.com",
        sender: "watto@downstream.com",
    },
    {
        product: {
            category: "Smart phones",
            email: "watto@downstream.com",
            midstream: {verified: false, existence: false, stars: 0},
            name: "DODO PHONE 5",
            stars: 0,
        },
        receiver: "raven@midstream.com",
        sender: "watto@downstream.com",
    },
]

export const Verify = () => {
    const history = useHistory();
    const [{ user, verifications, toVerifies }, dispatch] = useStoreContext();
    const { products } = useWebSocket();

    useEffect(() => {
        if (products.length) {
            console.log(products)
            dispatch({ type: "SET_TO_VERIFIES", payload: [ ...toVerifies, ...products] });
            if (products.every((product) => product.product.midstream.verified)) {
                dispatch({ type: "SET_VERIFICATIONS", payload: [ ...verifications, ...products] });
            }
        }
    }, [products]);

	if (user.accountType === "downstream") return <Redirect to={ROUTES.PRODUCTS} />;

	return (
        <Container>
            <Row>
                <h2 style={{color: color.darkPurple, cursor: "pointer"}} onClick={()=>history.push(ROUTES.REPORTS)}>Reports</h2>
                <h2 style={{cursor: "pointer", paddingLeft: "56px"}} onClick={()=>history.push(ROUTES.VERIFY)}>Verifications {products.length ? `(${products.length})` : null}</h2>
            </Row>
            {products.length
                ? products.map((product) => (
                    <TransparentItem onClick={() => history.push(ROUTES.VERIFY_FORM)}>
                        <p>{product.product.name}</p>
                        <p onClick={() => history.push(ROUTES.VERIFY_FORM)}>
                            VERIFY
                        </p>
                    </TransparentItem>
                ))
                : null}
            {[...verifications, ...mockProducts].map((product, index) => (
                <ListItem
                    content={
                        <>
                            <p style={{width: "500px"}}>{product.product.name}</p>
                            <p style={{width: "270px"}}>{index} partners added</p>
                            <p>✔️</p>
                        </>
                    }
                />
            ))}
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
        margin-bottom: 60px;
        margin-top: 100px;
    }
`;

const TransparentItem = styled(ListItemContainer)`
    display: flex;
    justify-content: space-between;
    background-color: unset;
    border: 1px solid ${color.green};
    cursor: pointer;

    * {
        color: ${color.green};
    }

    p {
        &:nth-child(2) {
            display: flex;
            align-items: center;
		}
    }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
`