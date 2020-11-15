import React, { useState } from "react";
import styled from "styled-components";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useStoreContext } from "../context";

import { createProduct, getProducts } from "../actions/product";

import { Inputs } from "../styles/components";
import { P } from "../styles/components/text";
import { StarRating } from "../components/shared/star-rating";

import fontSize from "../styles/typography";
import { color } from "../assets/color";
import ROUTES from "../router/routes";
import { ReactComponent as DownArrow } from "../assets/icons/down-arrow.svg";
import { ReactComponent as Plus } from "../assets/icons/plus.svg";

// TODO - add websocket 

const productCategories = [
	"Choose a category",
	"Smart phones",
	"Laptops",
	"Smart fridge",
	"Smart tv's",
	"Speakers",
];

export const ProductForm = () => {
	const history = useHistory();
	const [{ user, availableUsers }, dispatch] = useStoreContext();
	const { SelectInput, Input } = Inputs;
	const [state, setState] = useState({
		name: "",
		category: "",
		partners: [],
	});

	const viewOptions = [
		"Product Info",
		"Supplier Info",
	];

	const [currentView, setCurrentView] = useState(viewOptions[0]);

	if (user.accountType === "upstream") return <Redirect to={ROUTES.REPORTS} />;

	const handleInput = (event) => setState({
		...state,
		[event.target.name]: event.target.value,
	});

	const handlePartnerInput = (index, name, value) => {
		const newPartnersArray = [
			...state.partners,
		];
		newPartnersArray[index][name] = value;

		setState({
			...state,
			partners: [
				...newPartnersArray,
			],
		});
	};

	const otherUsers = availableUsers.filter((availableUser) => availableUser.email !== user.email);

	const addPartner = () => setState({
		...state,
		partners: [
			...state.partners,
			{
				email: "",
				component: "",
			}
		],
	});

	const submit = async () => {
        const res = await createProduct({ partner: state.partners[0].email, category: state.category, name: state.name }, user.email);

        if (res) {
			await getProducts(user.email, dispatch);
			toast.success("Product successfully created");
			return history.push(ROUTES.PRODUCTS);
        } else {
            return toast.error("Product creation error, please try again later");
        }
	};
	
	const backArrowHandler = () => {
		if (currentView === viewOptions[1]) {
			return setCurrentView(viewOptions[0]);
		}
		return history.push(ROUTES.PRODUCTS);
	};

	return (
		<Container>
			<DownArrow style={{ transform: "rotate(90deg)", marginTop: 42, cursor: "pointer" }} onClick={backArrowHandler} />
			<h2>{currentView === viewOptions[0] ? "Create product passport" : "Select supply chain partners"}</h2>
			<hr />
			<div style={{ marginTop: 35 }}>
				{state.partners.length && state.partners[0].email ? (
					<FlexContainer style={{ marginBottom: 35 }}>
						{currentView === viewOptions[1] && state.name && (
							<P fontSize={fontSize[2]} color={color.green}>{state.name}</P>
						)}
						<P fontSize={fontSize[2]}>verification</P>
					</FlexContainer>
				) : null}
				{currentView === viewOptions[0] && (
					<>
						<Input
							name="name"
							placeholder="Name"
							value={state.name}
							onChange={handleInput}
							transparent
						/>
						<SelectInput
							label="CATEGORY"
							options={productCategories}
							selected={state.category}
							name="category"
							handleDropdown={handleInput}
							style={{ marginTop: 18 }}
						/>
						<Button
							onClick={state.name && state.category && state.category !== "Choose a category"
								? () => setCurrentView(viewOptions[1])
								: () => null}
							allValuesEntered={state.name && state.category && state.category !== "Choose a category"}
						>
							select supply chain partners
							&nbsp;
							<DownArrow />
						</Button>
					</>
				)}
				{currentView === viewOptions[1] && (
					<>
						{state.partners.map((partner, index) => (
							<div style={index > 0 ? { marginTop: 18 }: null}>
								<SelectFlexContainer>
									<SelectInput
										label="partner"
										options={[
											"Choose a partner",
											...otherUsers.map((otherUser) => otherUser.email),
										]}
										selected={partner.email}
										name="partner"
										handleDropdown={(event) => handlePartnerInput(index, "email", event.target.value)}
										width="50%"
									/>
									{partner.email && (
										<>
											<StarRating rating={partner.rating || index + 1} />
											<P>{availableUsers.filter((availableUser) => availableUser.email === partner.email)[0].accountType}</P>
											<CheckboxesContainer>
												<div>
													{index === 0 && <span>partner</span>}
													{partner.partnerVerified && (
														<p>:)</p>
														)}
												</div>
												<div>
													{index === 0 && <span>bc</span>}
													{partner.bcVerified && (
														<p>:(</p>
													)}
												</div>
											</CheckboxesContainer>
										</>
									)}
								</SelectFlexContainer>
								{partner.email && (
									<Input
										name="component"
										placeholder="Component"
										value={partner.component}
										onChange={(event) => handlePartnerInput(index, "component", event.target.value)}
										transparent
										style={{ marginTop: 18 }}
									/>
								)}
							</div>
						))}
						<GreenButton onClick={addPartner}>
							add partner
							&nbsp;
							<Plus />
						</GreenButton>
						<FlexContainer>
							<Button
								onClick={state.partners.length && state.partners.some((partner) => Object.values(partner).every((field) => field))
								? () => submit()
								: () => null}
								allValuesEntered={state.partners.length && state.partners.some((partner) => Object.values(partner).every((field) => field))}
							>
								request verification
								&nbsp;
								<DownArrow />
							</Button>
						</FlexContainer>
					</>
				)}
			</div>
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

	h3 {
		font-weight: 700;
		font-size: 18px;
		color: ${color.green};
		text-transform: uppercase;
	}

	hr {
		width: 100%;
		border: 1px solid ${color.darkPurple};
	}
`;

const CheckboxesContainer = styled.div`
	display: flex;

	div {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${color.purple};
		width: 50px;
		height: 50px;
		border-radius: 3px;
		border: 1px solid ${color.darkPurple};
		margin-left: 18px;

		span {
			position: absolute;
			font-size: 10px;
			font-weight: 700;
			text-transform: uppercase;
			color: ${color.darkPurple};
			top: -20px;
		}
	}
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SelectFlexContainer = styled.div`
    display: flex;
	justify-content: space-between;
	align-items: center;
`;

const GreenButton = styled.button`
    border-radius: 3px;
    margin-top: 35px;
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
    }

    :focus {
        outline: none;
    }
`;

const Button = styled.button`
    border-radius: 3px;
    margin-top: 35px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${(props) => props.allValuesEntered ? color.green : color.darkPurple};
    background-color: ${color.purple};
    border: 1px solid ${(props) => props.allValuesEntered ? color.green : color.darkPurple};
    padding: 16px;
    cursor: pointer;

    svg {
        height: 18px;
        transform: rotate(-90deg);

        path {
            stroke: ${(props) => props.allValuesEntered ? color.green : color.darkPurple};
        }
    }

    :focus {
        outline: none;
    }
`;