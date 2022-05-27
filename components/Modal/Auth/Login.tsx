import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";

const Login: React.FC = () => {

    const setAuthModalState = useSetRecoilState(authModalState);

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const [formError, setFormError] = useState("");

    const [signInWithEmailAndPassword, _, loading, authError] = useSignInWithEmailAndPassword(auth);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formError) setFormError("");
        if (!loginForm.email.includes("@")) {
            return setFormError("Please enter a valid email");
        }

        // Valid form inputs
        signInWithEmailAndPassword(loginForm.email, loginForm.password);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <form onSubmit={onSubmit}>
            <Input
                name="email"
                placeholder="email"
                mb={2}
                onChange={onChange}
                required
                fontSize={'10pt'}
                _placeholder={{ color: 'gray.500' }}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                _focus={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500',
                    outline: 'none'
                }}
                bg={'gray.50'}
                type={'email'} />
            <Input
                name="password"
                placeholder="password"
                mb={2}
                onChange={onChange}
                required
                fontSize={'10pt'}
                _placeholder={{ color: 'gray.500' }}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                _focus={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500',
                    outline: 'none'
                }}
                bg={'gray.50'}
                type={'password'} />

            <Button width={'100%'} height={'36px'} type="submit" isLoading={loading}>Login</Button>
            <Text textAlign="center" mt={2} fontSize="10pt" color="red">
                {formError ||
                    FIREBASE_ERRORS[authError?.message as keyof typeof FIREBASE_ERRORS]}
            </Text>
            <Flex justifyContent="center" mb={2}>
                <Text fontSize="9pt" mr={1}>
                    Forgot your password?
                </Text>
                <Text
                    fontSize="9pt"
                    color="blue.500"
                    cursor="pointer"
                    onClick={() => {
                        setAuthModalState(prev => ({
                            ...prev,
                            view: 'resetPassword'
                        }))
                    }}
                >
                    Reset
                </Text>
            </Flex>
            <Flex fontSize="9pt" justifyContent="center" mt={'5'}>
                <Text mr={1}>New here?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={() => {
                        setAuthModalState(prev => ({
                            ...prev,
                            view: 'signup'
                        }))
                    }}
                >
                    SIGN UP
                </Text>
            </Flex>
        </form>
    )
}

export default Login;