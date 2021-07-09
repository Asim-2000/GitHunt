import { Box, Text } from "@chakra-ui/react"

export function GroupTitle() {
  return (
    <Box>
      <Text fontSize="24px" fontWeight={700}>
        This week{" "}
        <Text
          as="span"
          fontSize="15px"
          fontWeight={500}
          color="gray.500"
          ml="5px"
        >
          May 16,2020 - May 23,2020
        </Text>
      </Text>
    </Box>
  )
}
