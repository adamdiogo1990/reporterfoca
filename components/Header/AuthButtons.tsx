import { Button } from "@chakra-ui/react";
import React from 'react';
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";

const AuthButtons: React.FC = () => {

    const setAuthModalState = useSetRecoilState(authModalState);

    return (
        <>
            <Button
                variant="outline"
                height="28px"
                display={{ base: "none", sm: "flex" }}
                width={{ base: "70px", md: "110px" }}
                _hover={{
                    bg:"none",
                    borderColor: "#FFF",
                    color: "#FFF"
                }}
                mr={2}
                onClick={()=> setAuthModalState({open: true, view: 'login'})}
            >Login</Button>
            <Button
                variant="solid"
                bgGradient='linear(to-r, #25bfff, pink.500)'
                height="28px"
                display={{ base: "none", sm: "flex" }}
                width={{ base: "70px", md: "110px" }}
                mr={2}
                onClick={()=> setAuthModalState({open: true, view: 'signup'})}
            >Sign up</Button>
        </>
    )
}

export default AuthButtons;