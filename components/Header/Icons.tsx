import { Flex, Icon } from "@chakra-ui/react";
import { IoMdAddCircleOutline } from 'react-icons/io';
import { HiOutlineViewGrid } from 'react-icons/hi';

const Icons: React.FC = () => {
    return (
        <Flex>
            <Flex h={"full"} w={"30px"} align="center" justifyContent={"center"}>
                <Icon as={IoMdAddCircleOutline} color={"#eaeaea"} w={6} h={6} />
            </Flex>
            <Flex h={"full"} w={"30px"} align="center" justifyContent={"center"} >
                <Icon as={HiOutlineViewGrid} color={"#eaeaea"} w={6} h={6} />
            </Flex>
        </Flex>
    )
}

export default Icons;