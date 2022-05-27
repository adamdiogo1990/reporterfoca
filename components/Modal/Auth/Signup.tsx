import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { authModalState } from "../../../atoms/authModalAtom";
import { auth, firestore } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";
import { User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const Signup: React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState);

    const [error, setError] = useState('');

    const [signupForm, setSignupForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        userError
    ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (error) setError ('');
        if (signupForm.password !== signupForm.confirmPassword) {
            setError('Password do not match');
            return
        }
        createUserWithEmailAndPassword(signupForm.email, signupForm.password)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignupForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const createUserDocument = async (user:User) => {
        await addDoc(collection(firestore, 'users'), JSON.parse(JSON.stringify(user)))
    }

    useEffect(()=>{
        if(user){
            createUserDocument(user.user)
        }
    },[user])

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


            <Input
                name="confirmPassword"
                placeholder="confirmPassword"
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
            <Button isLoading={loading} width={'100%'} height={'36px'} type="submit">Sign Up</Button>
            
            {error || userError && (
                <Text textAlign={'center'} color={'red'}>{error || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}</Text>
            )}
            

            <Flex fontSize="9pt" justifyContent="center" mt={'5'}>
                <Text mr={1}>Already register?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={() => {
                        setAuthModalState(prev => ({
                            ...prev,
                            view: 'login'
                        }))
                    }}
                >
                    LOGIN
                </Text>
            </Flex>
        </form>
    )
}

export default Signup