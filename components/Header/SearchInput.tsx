import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import React, { ReactNode } from 'react';



const SearchInput: React.FC = () => {
    return (
        <Flex flexGrow={1} maxWidth={'600px'} ml={3}
            alignItems="center">
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    color="gray.400"
                    _hover={{
                        color: "#FFF"
                    }}
                >
                    <SearchIcon mb={2} />
                </InputLeftElement>
                <Input
                    placeholder="Search RF"
                    fontSize="10pt"
                    border={"none"}
                    color="gray.400"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                        bg: "#181a20",
                        border: "none"
                    }}
                    _focus={{
                        outline: "none",
                        border: "none"
                    }}
                    height="34px"
                    bg="#181a20"
                />
            </InputGroup>
        </Flex>
    )
}

export default SearchInput;