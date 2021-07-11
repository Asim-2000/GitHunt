import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react"
import { useState } from "react"
import { Filters } from "./components/Filters"
import { GroupTitle } from "./components/GroupTitle"
import { PageHeader } from "./components/PageHeader"
import { Repo } from "./components/Repo"

export function Feed() {
  const [viewType, setViewType] = useState("grid")
  return (
    <Box maxWidth="1200px" mx="auto">
      <PageHeader />
      <Flex alignItems="center" justifyContent="space-between" mb="25px">
        <GroupTitle />
        <Filters onViewChange={(viewType) => setViewType(viewType)} />
      </Flex>
      <SimpleGrid columns={viewType === "list" ? 1 : 3} spacing="20px">
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
      </SimpleGrid>
      <Flex alignItems="center" justifyContent="center" my="20px">
        <Button colorScheme="blue">Load More</Button>
      </Flex>
    </Box>
  )
}
