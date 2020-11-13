import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { useStoreContext } from "../context";
import { ROUTES } from "../router/routes";
import { login } from "../actions/user";

export const Login = () => {
    const [email, setEmail] = useState("");
	const [{ user, availableUsers }, dispatch] = useStoreContext();

    if (user) return <Redirect to={ROUTES.HOME} />;

    const submit = (event) => {
        event.preventDefault();

        if (!email) return alert("Please select an email");

        return login({ email }, dispatch);
    };

	return (
        <Container>
            {availableUsers && availableUsers.length
                ? (
                    <form onSubmit={submit}>
                        <select
                            id="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        >
                            <option value=""></option>
                            {availableUsers.map((availableUser) => (
                                <option value={availableUser.email}>{availableUser.email}</option>
                            ))}
                        </select>
                        <button type="submit">login</button>
                    </form>
                )
                : (
                    <p>Currently no users available</p>
                )}
        </Container>
    );
};

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: 1000px;
`;