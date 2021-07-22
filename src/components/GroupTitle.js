import { Box, Text } from "@chakra-ui/react"
import moment from "moment"

export function GroupTitle({ startDate, endDate }) {
  if (!startDate || !endDate) {
    return null
  }

  const startMoment = moment(startDate)
  const endMoment = moment(endDate)
  return (
    <Box>
      <Text fontSize="24px" fontWeight={700}>
        {startMoment.fromNow()}{" "}
        <Text
          as="span"
          fontSize="15px"
          fontWeight={500}
          color="gray.500"
          ml="5px"
        >
          {startMoment.format("MMMM D, YYYY")} -{" "}
          {endMoment.format("MMMM D, YYYY")}
        </Text>
      </Text>
    </Box>
  )
}
