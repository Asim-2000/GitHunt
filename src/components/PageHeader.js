import { Button, ButtonGroup, Flex } from "@chakra-ui/react"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { Brand } from "./Brand"

export function PageHeader() {
  return (
    <Flex justifyContent="space-between" alignItems="center" pt="10px">
      <Brand />
      <ButtonGroup>
        <Button variant="outline" leftIcon={<FaGithub />}>
          View Source
        </Button>
        <Button leftIcon={<FaTwitter />} colorScheme="twitter">
          Tweet
        </Button>
      </ButtonGroup>
    </Flex>
  )
}
