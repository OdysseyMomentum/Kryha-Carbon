import React from "react";
import styled from "styled-components";
import { useHistory, Redirect } from "react-router-dom";
import { useStore } from '../context';

import { ListItem, ListItemContainer } from "./shared/list-item";
import { color } from '../assets/color';
import { ReactComponent as Plus } from '../assets/icons/plus.svg';
import ROUTES from '../router/routes';

const years = [
    new Date().getFullYear(),
    new Date().getFullYear() - 1,
    new Date().getFullYear() - 2,
]

export const Reports = () => {
    const history = useHistory();
    const { user } = useStore();

	if (user.accountType === "downstream") return <Redirect to={ROUTES.PRODUCTS} />;

	return (
        <Container>
            <h2>Reports</h2>
            <Form onClick={() => history.push(ROUTES.REPORT_FORM)}>
                <p>{new Date().getFullYear() + 1}</p>
                <p>
                    create report
                    &nbsp;
                    <Plus />
                </p>
            </Form>
            {years.map((year, index) => (
                <ListItem
                    leftText={year}
                    rating={index + 1}
                    rightText="audited"
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
    }
`;

const Form = styled(ListItemContainer)`
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