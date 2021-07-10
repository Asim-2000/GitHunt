import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react"
import { Filters } from "./components/Filters"
import { GroupTitle } from "./components/GroupTitle"
import { PageHeader } from "./components/PageHeader"
import { Repo } from "./components/Repo"

export function Feed() {
  return (
    <Box maxWidth="1200px" mx="auto">
      <PageHeader />
      <Flex alignItems="center" justifyContent="space-between" mb="25px">
        <GroupTitle />
        <Filters />
      </Flex>
      <SimpleGrid columns={3} spacing="20px">
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </SimpleGrid>
      <Flex alignItems="center" justifyContent="center" my="20px">
        <Button colorScheme="blue">Load More</Button>
      </Flex>
    </Box>
  )
}
