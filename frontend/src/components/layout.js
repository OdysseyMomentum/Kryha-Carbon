import React from 'react';
import styled from 'styled-components';
// import { Redirect } from "react-router-dom";

// import { useStore } from '../context';
// import { ROUTES } from "../router/routes";

export const Layout = (props) => {
	const { children } = props;
	// const { user } = useStore();

	// if (!user) return <Redirect to={ROUTES.LOGIN} />;

	return <Container>{children}</Container>;
};

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 1000px;
`;
