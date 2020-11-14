import React from 'react';
import styled from 'styled-components';
// import { Redirect } from "react-router-dom";

// import { useStore } from '../context';
// import { ROUTES } from "../router/routes";
import { SidebarBackgroundImage } from '../assets';

export const Layout = (props) => {
	const { children } = props;
	// const { user } = useStore();

	// if (!user) return <Redirect to={ROUTES.LOGIN} />;

	return (
		<Container>
			<SideSection>
				<p>side section</p>
			</SideSection>
			{children}
		</Container>
	)
};

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	max-width: 1000px;
	justify-content: flex-start;
`;

const SideSection = styled.div`
	width: 351px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-image: url(${SidebarBackgroundImage});
`