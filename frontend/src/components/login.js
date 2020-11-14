import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { useStoreContext } from "../context";
import { ROUTES } from "../router/routes";
import { login } from "../actions/user";

import { color } from '../assets/color';
import { ReactComponent as DownArrow } from '../assets/icons/down-arrow.svg';

export const Login = () => {
    const [email, setEmail] = useState("");
	const [{ user, availableUsers }, dispatch] = useStoreContext();

    if (user) return <Redirect to={ROUTES.HOME} />;

    const submit = async (event) => {
        event.preventDefault();

        if (!email) return toast.error("Please select a valid email");

        const res = await login({ email }, dispatch);

        if (res) {
            const loggedInUser = availableUsers.find(availableUser => availableUser.email === email);
            return toast.success(`Welcome ${loggedInUser.name}`);
        } else {
            toast.error("Login error, please try again later");
        }
    };

	return (
        <>
            <Header>
                <img
                    src="https://s3-alpha-sig.figma.com/img/ce11/7bc6/1f170f971747fb6b0964bbe71afcd00c?Expires=1606089600&Signature=SUbrnKPzKqGPR2nKDFGchM6hpeitZFkec1eQzadkDhrJOndlehiHTZ1OWRcddqJDzWtJnUgXcgU0kaC~1BmtgqeTLRAgOrLsacGHCxOEYfdSdP36BCyiAXhbXao~c2lwqRbVaUrlfFPlffPjgz5S2UMScyEwMfUWb0EamoVF4Cjt2HHIaWqvwkPDjGIyPe6183CyEVWlUE7dLr430NHzDb12te6fEH7Wu7lvWSIb3A0y2DtXp8KsqKlZ4qjBoli0nMOYXqpdF~AtpUSdvzHOUp46oGXkFVVJWXxOwsBBN56deh7QhqnBUu8Ix9obcWidqtCDDNMEmzGtn50sMsji~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
                <h1>Charles</h1>
                <h2>Only the fittest supply</h2>
            </Header>
            <FormContainer>
                <h6>Not part of the network? Join now</h6>
                <hr />
                <h3>Login</h3>
                <Form onSubmit={submit}>
                    <select
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    >
                        {availableUsers.length
                            ? (
                                <>
                                    <option value="" disabled key="empty">Choose a company</option>
                                    {availableUsers.map((availableUser) => (
                                        <option value={availableUser.email} key={availableUser.email}>
                                            {`${availableUser.name} - ${availableUser.accountType}`}
                                        </option>
                                    ))}
                                </>
                            )
                            : (
                            <option value="" disabled key="empty users">Currently no users available</option>
                        )}
                    </select>
                    <Button type="submit" email={email}>
                        login
                        &nbsp;
                        <DownArrow />
                    </Button>
                </Form>
            </FormContainer>
        </>
    );
};

const Header = styled.div`
    position: relative;
	width: calc(536px + ((100% - 536px) / 2));
    height: 320px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    img {
        z-index: 1;
        position: absolute;
        opacity: 0.85;
    }
    
    h1, h2 {
        z-index: 2;
        position: relative;
        margin: 0;
        margin-left: 10%;
    }

    h1 {
        color: ${color.green};
        font-size: 100px;
    }

    h2 {
        color: ${color.lightPurple};
        font-weight: 700;
        font-size: 40px;
    }
`;

const FormContainer = styled.div`
	width: 100%;
	margin: 0 auto;
    max-width: 536px;

    h6 {
        color: ${color.green};
        text-align: right;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin: 18px 0;
    }

    hr {
        border: 1px solid ${color.green};
        width: 192px;
        margin: 0 0 0 auto;
    }

    h3 {
        font-size: 40px;
        margin-bottom: 35px;
        color: ${color.darkPurple};
    }
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    select {
        width: 100%;
        border: 1px solid ${color.green};
        border-radius: 3px;
        padding: 16px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url(../assets/icons/down-arrow.svg) no-repeat right ${color.purple};

        font-weight: 500;
        font-size: 18px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: ${color.green};

        :focus {
            outline: none;
        }
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
    color: ${(props) => props.email ? color.green : color.darkPurple};
    background-color: ${color.purple};
    border: 1px solid ${(props) => props.email ? color.green : color.darkPurple};
    padding: 16px;
    cursor: pointer;

    svg {
        height: 18px;
        transform: rotate(-90deg);

        path {
            stroke: ${(props) => props.email ? color.green : color.darkPurple};
        }
    }

    :focus {
        outline: none;
    }
`;