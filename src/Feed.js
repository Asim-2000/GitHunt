import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react"
import moment from "moment"
import { useEffect, useState } from "react"
import { Filters } from "./components/Filters"
import { GroupTitle } from "./components/GroupTitle"
import { PageHeader } from "./components/PageHeader"
import { Repo } from "./components/Repo"
import useFetch from "use-http"

export function Feed() {
  const { loading, error, get } = useFetch("https://api.github.com")
  const [viewType, setViewType] = useState("grid")
  const [dateJump, setDateJump] = useState("day")
  const [language, setLanguage] = useState()

  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState(moment().subtract(1, "day").format())

  useEffect(() => {
    const endDate = moment().subtract(1, "day").format()
    const startDate = moment(endDate).subtract(1, dateJump).format()
    // console.log(endDate, startDate)
    setStartDate(startDate)
    setEndDate(endDate)
  }, [dateJump])

  useEffect(() => {
    if (!startDate) {
      return
    }
    get("/search/repositories").then((res) => {
      console.log(res)
    })
  }, [startDate])

  return (
    <Box maxWidth="1200px" mx="auto">
      <PageHeader />
      <Flex alignItems="center" justifyContent="space-between" mb="25px">
        <GroupTitle />
        <Filters
          onViewChange={(viewType) => setViewType(viewType)}
          dateJump={dateJump}
          setDateJump={setDateJump}
          language={language}
          setLanguage={setLanguage}
        />
      </Flex>
      <SimpleGrid
        columns={viewType === "list" ? 1 : 3}
        spacing={viewType === "list" ? "0px" : "20px"}
      >
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
