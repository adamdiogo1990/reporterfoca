import "@fontsource/open-sans";
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

export const theme = extendTheme({
    colors: {
        brand: {
            100: "#f7fafc",
            900: "#1a202c"
        }
    },
    fonts: {
        body: "Open Sans, sans-serif"
    },
    styles: {
        global: () => ({
            body: {
                bg: "#181a20"
            }
        })
    },
    components: {
        Button
    }
})