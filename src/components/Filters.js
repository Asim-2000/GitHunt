import {
  Select,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
  Stack,
  ButtonGroup,
  Box,
} from "@chakra-ui/react"
import { FaCalendar, FaList, FaTable } from "react-icons/fa"
import { BsFunnelFill } from "react-icons/bs"
import { useEffect, useState } from "react"

import languages from "../data/languages.json"
export function Filters({
  onViewChange,
  language,
  setLanguage,
  dateJump,
  setDateJump,
}) {
  const [ViewType, setViewType] = useState("grid")

  useEffect(() => {
    onViewChange(ViewType)
  }, [ViewType])

  return (
    <Stack isInline>
      <Select
        bg="white"
        icon={<BsFunnelFill />}
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languages.map((language) => (
          <option value={language.value}>{language.label}</option>
        ))}
      </Select>
      <Menu>
        <MenuButton
          as={Button}
          role={Button}
          pr="60px"
          leftIcon={<FaCalendar />}
          bg="white"
        >
          <Box as="span" textTransform="capitalize">
            {dateJump}
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setDateJump("day")}>Daily</MenuItem>
          <MenuItem onClick={() => setDateJump("week")}>Weekly</MenuItem>
          <MenuItem onClick={() => setDateJump("month")}>Monthly</MenuItem>
          <MenuItem onClick={() => setDateJump("year")}>Yearly</MenuItem>
        </MenuList>
      </Menu>

      <ButtonGroup spacing={0}>
        <Button
          onClick={() => setViewType("grid")}
          fontWeight={400}
          roundedRight={0}
          leftIcon={<FaTable />}
          bg={ViewType === "grid" ? "gray.200" : "white"}
        >
          Grid
        </Button>
        <Button
          onClick={() => setViewType("list")}
          fontWeight={400}
          roundedLeft={0}
          leftIcon={<FaList />}
          bg={ViewType === "list" ? "gray.200" : "white"}
        >
          List
        </Button>
      </ButtonGroup>
    </Stack>
  )
}
