import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react"
import { GoStar, GoRepoForked, GoIssueOpened } from "react-icons/go"

export function Repo() {
  return (
    <Box borderWidth={1} bg="white" p="15px" rounded="5px">
      <Flex mb="10px">
        <Image
          src="https://avatars.githubusercontent.com/u/46053827?v=4"
          w="35px"
          h="35px"
          rounded="5px"
        />
        <Box ml="10px">
          <Heading fontSize="15px">Asim-2000</Heading>
          <Text fontSize="13px">View Profile</Text>
        </Box>
      </Flex>
      <Box mb="15px">
        <Box>
          <Heading
            fontSize="19px"
            as="a"
            href="https://github.com/Asim-2000/GitHunt"
            color="purple.600"
            target="_blank"
          >
            GitHunt
          </Heading>
          <Text fontSize="14px" color="gray.600">
            Built by &middot;{" "}
            <Link
              fontWeight="bold"
              href="https://github.com/Asim-2000"
              target="_blank"
            >
              Asim-2000
            </Link>{" "}
            &middot; July 10,2021
          </Text>
        </Box>
        <Text fontSize="14px" color="gray.900">
          Hunt the most starred projects on GitHub
        </Text>
      </Box>
      <ButtonGroup>
        <Button
          as="a"
          cursor="pointer"
          leftIcon={<GoStar />}
          variant="link"
          fontSize="14px"
          iconSpacing="4px"
          _hover={{ textDecoration: "none" }}
        >
          1000
        </Button>
        <Button
          as="a"
          cursor="pointer"
          leftIcon={<GoRepoForked />}
          variant="link"
          fontSize="14px"
          iconSpacing="4px"
          _hover={{ textDecoration: "none" }}
        >
          1000
        </Button>
        <Button
          as="a"
          cursor="pointer"
          leftIcon={<GoIssueOpened />}
          variant="link"
          fontSize="14px"
          iconSpacing="4px"
          _hover={{ textDecoration: "none" }}
        >
          1000
        </Button>
      </ButtonGroup>
    </Box>
  )
}
