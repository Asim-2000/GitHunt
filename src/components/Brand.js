import { Flex, Image, Box, Heading, Text } from "@chakra-ui/react"

export function Brand() {
  return (
    <Flex alignItems="center">
      <Image src="/logo.svg" width="25%" />
      <Box ml="10px">
        <Heading fontSize="24px">GitHunt</Heading>
        <Text color="gray.600">Most Starred Projects on GitHub</Text>
      </Box>
    </Flex>
  )
}
