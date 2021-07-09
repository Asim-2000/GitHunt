import { Box, Flex } from "@chakra-ui/react"
import { Filters } from "./components/Filters"
import { GroupTitle } from "./components/GroupTitle"
import { PageHeader } from "./components/PageHeader"

export function Feed() {
  return (
    <Box maxWidth="1200px" mx="auto">
      <PageHeader />
      <Flex alignItems="center" justifyContent="space-between">
        <GroupTitle />
        <Filters />
      </Flex>
    </Box>
  )
}
