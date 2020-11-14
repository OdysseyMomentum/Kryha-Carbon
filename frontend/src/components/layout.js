import React from 'react';
import styled from 'styled-components';
// import { Redirect } from "react-router-dom";

// import { useStore } from '../context';
// import { ROUTES } from "../router/routes";
import { SidebarBackgroundImage } from '../assets';
import color from '../styles/color';
import { Text } from '../styles/components';
import { UserCard } from './user-card';

export const Layout = (props) => {
	const { children } = props;
	// const { user } = useStore();

	// if (!user) return <Redirect to={ROUTES.LOGIN} />;

	return (
		<Container>
			<SideSection>
				<UserCard />
				<div style={{ width: 232, marginLeft: "35px", marginTop: "400px" }}>
					<Text.H4 color={color.neon} style={{textTransform: "none"}}>Report & audit carbon emissions for a more sustainable supply chain</Text.H4>
				</div>
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
	align-items: flex-start;
	justify-content: flex-start;
	background-image: url(${SidebarBackgroundImage});
	background-size: 351px 100%;

`
