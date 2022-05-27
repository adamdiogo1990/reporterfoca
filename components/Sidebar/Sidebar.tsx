import { TimeIcon } from "@chakra-ui/icons";
import { AiOutlineFire } from 'react-icons/ai';
import { HiOutlineGlobe } from 'react-icons/hi';
import { BiCameraMovie } from 'react-icons/bi';
import { MdOutlineSportsSoccer } from 'react-icons/md';
import { Box, Image,Flex, Icon, Tooltip } from "@chakra-ui/react";

const SideBar: React.FC = () => {
    return (
        <Box
            borderRight="1px"
            borderRightColor={"#24252b"}
            w={{ base: 'full', md: '77px' }}
            pos="fixed"
            h="full">
                <Flex w={"full"} height={"77px"} align="center" justifyContent={"center"}>
                    <Image src="/images/logo.png"  />
                </Flex>
                <Tooltip label='Newest' placement='right'>
                    <Flex w={"full"} height={"40px"} align="center" justifyContent={"center"}>
                        <Icon as={TimeIcon} color={"#eaeaea"}/>
                    </Flex>
                </Tooltip>

                <Tooltip label='In Hype' placement='right'>
                    <Flex w={"full"} height={"40px"} align="center" justifyContent={"center"}>
                        <Icon as={AiOutlineFire} color={"#eaeaea"} w={5} h={5} />
                    </Flex>
                </Tooltip>
                <Flex w={"full"} height={"40px"} align="center" justifyContent={"center"} mt={5}>
                    <Icon as={HiOutlineGlobe} color={"#eaeaea"} w={5} h={5} />
                </Flex>
                <Flex w={"full"} height={"40px"} align="center" justifyContent={"center"}>
                    <Icon as={BiCameraMovie} color={"#eaeaea"} w={5} h={5} />
                </Flex>
                <Flex w={"full"} height={"40px"} align="center" justifyContent={"center"}>
                    <Icon as={MdOutlineSportsSoccer} color={"#eaeaea"} w={5} h={5} />
                </Flex>
        </Box>
    )
}

export default SideBar;