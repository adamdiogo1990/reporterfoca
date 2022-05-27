import { Flex } from "@chakra-ui/react";
import { auth } from '../../firebase/clientApp';
import { useAuthState } from "react-firebase-hooks/auth";
import AuthModal from "../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import SearchInput from "./SearchInput";
import UserMenu from "./UserMenu";

const Header: React.FC = () => {

    const [user, loading, error] = useAuthState(auth);

    return (
        <>
            <Flex
                height={"77px"}
                borderBottom={"1px"}
                borderBottomColor={"#24252b"}
                pos="fixed"
                w={"full"}
                bg={"#181a20"}
                left={0}
                pl={"77px"}
                justifyContent={"space-between"}
            >
                <Flex>
                    <SearchInput />
                </Flex>
                <Flex h={"full"} align="center" pr={"20px"}>
                    {
                        !user ? (
                            <AuthButtons />
                        ) : (
                            <>
                                <Icons />
                                <UserMenu />
                            </>
                        )
                    }



                </Flex>
            </Flex>
            <AuthModal />
        </>
    )
}

export default Header;