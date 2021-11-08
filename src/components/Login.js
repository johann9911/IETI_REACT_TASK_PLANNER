import React, { useState, useContext } from 'react';
import { useHistory } from "react-router";
import { FormControl, FormLabel, Input, Box, Center, Button, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from "@chakra-ui/react"

import UserContext from "../services/context/UserContext";

export const Login = () => {
    const history = useHistory();
    const { GetToken, SetToken, ServiceRest } = useContext(UserContext)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [displayError, setDisplayError] = useState("hidden")

    const onChangePassword = (event) => {
        setPassword(event.target.value)
        setDisplayError("hidden")
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
        setDisplayError("hidden")
    }

    const onConnect = () => {
        ServiceRest("POST", "auth", {
            "email": email,
            "password": password
        }, (data) => {
            SetToken(data)
            history.push("/tasks");
        }, () => { setDisplayError("visible")})
    }
    return (
        <Center>
            <Box boxSize="450px" borderWidth="2px" p="10" borderRadius="lg" mt="20" >
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input onChange={onChangeEmail} placeholder="Email" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input onChange={onChangePassword} placeholder="Password" />
                </FormControl>
                <Center>
                    <Button mt="20" onClick={onConnect}>
                        Entrar
                    </Button>

                </Center>
                <Alert
                    borderRadius="30"
                    visibility={displayError}
                    mt="5"
                    status="error"
                    variant="subtle"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    height="100px"
                >
                    <AlertIcon boxSize="40px" mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                        Usuario Incorrecto
                    </AlertTitle>
                </Alert>
            </Box>
        </Center>


    );
}