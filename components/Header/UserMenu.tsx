import { ChevronDownIcon } from "@chakra-ui/icons";
import { Text, Flex, Icon, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { signOut, User } from "firebase/auth";
import { auth } from "../../firebase/clientApp";


const UserMenu: React.FC = () => {


    return (
        <Menu>
            <MenuButton
                cursor="pointer"
                marginLeft={"20px"}
                padding="0px 6px"
                borderRadius="4px">
                <Flex alignItems="center">
                    <Flex alignItems="center">
                        <Icon fontSize={24} as={VscAccount} color={"gray.300"} />
                    </Flex>
                    <ChevronDownIcon color={"gray.300"}/>
                </Flex>
            </MenuButton>
            <MenuList>
                <MenuItem
                    fontSize="10pt"
                    fontWeight={700}
                    _hover={{ bg: "blue.500", color: "white" }}
                >
                    <Flex alignItems="center">
                        <Icon fontSize={20} mr={2} as={CgProfile} />
                        Profile
                    </Flex>
                </MenuItem>
                <MenuDivider />
                <MenuItem
                    fontSize="10pt"
                    fontWeight={700}
                    _hover={{ bg: "blue.500", color: "white" }}
                >
                    <Flex alignItems="center" onClick={() => signOut(auth)}>
                        <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                        Log Out
                    </Flex>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default UserMenu;