import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { useStoreContext } from "../context";
import { ROUTES } from "../router/routes";
import { login } from "../actions/user";

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
        <Container>
            <form onSubmit={submit}>
                <select
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                >
                    {availableUsers.length
                        ? (
                            <>
                                <option value="" disabled key="empty"></option>
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
                <button type="submit">login</button>
            </form>
        </Container>
    );
};

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 1000px;
`;