import { Box,Image,Button } from "@chakra-ui/react";

export function Feed() {
    return (
        <Box maxWidth="1200px" mx='auto'>
            <Box display="flex">
                <Box>
                   <Image/>
                </Box>
                <Box>
                    <Button colorScheme="teal">View Source</Button>
                </Box>
            </Box>   
        </Box>
    )
}