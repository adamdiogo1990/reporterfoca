import { Button, Flex, Image, Text} from "@chakra-ui/react";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../../firebase/clientApp";

const OAuthButtons: React.FC = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

    const createUserDocument = async (user:User) => {
        const userDocRef = doc(firestore, 'users', user.uid)
        await setDoc(userDocRef,JSON.parse(JSON.stringify(user)))
    }

    useEffect(()=>{
        if(user){
            createUserDocument(user.user);
        }
    },[user])

    return (
        <Flex direction={'column'} width={'100%'} mb={4}>
            <Button variant={'oauth'} mb={'2'} isLoading={loading} onClick={() => signInWithGoogle()}>
                <Image mr={'4'} src="/images/googlelogo.png" height="20px" />
                Continue with Google
            </Button>
            {error && (
                <Text textAlign="center" fontSize="10pt" color="red" mt={2}>
                    {error.message}
                </Text>
            )}
        </Flex>
    )
}

export default OAuthButtons;