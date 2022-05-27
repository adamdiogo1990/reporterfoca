import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import SideBar from '../Sidebar/Sidebar';

interface BaseLayoutProps {
    children?: ReactNode;
}

const Layout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <>
            <Box minH="100vh">
                <Header />
                <SideBar />
                <Box ml={{ base: 0, md: '77px' }}>
                    <Box pt={"100px"}>
                        {children}
                    </Box>        
                </Box>
            </Box>
        </>
    )
}

export default Layout;