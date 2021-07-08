import { Button, Flex, Stack } from "@chakra-ui/react"
import { FaGithub, FaTwitter, FaChrome } from "react-icons/fa"
import { Brand } from "./Brand"

export function PageHeader() {
  return (
    <Flex justifyContent="space-between" alignItems="center" pt="10px">
      <Brand />
      <Stack isInline spacing="10px">
        <Button leftIcon={<FaGithub />}>View Source</Button>
        <Button leftIcon={<FaChrome />} colorScheme="red">
          Use Extension
        </Button>
        <Button leftIcon={<FaTwitter />} colorScheme="purple">
          Tweet
        </Button>
      </Stack>
    </Flex>
  )
}
