import {
  Select,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react"
import { FaCalendar, FaList, FaTable } from "react-icons/fa"
import { BsFunnelFill } from "react-icons/bs"
import { useEffect, useState } from "react"

import languages from "../data/languages.json"
export function Filters({ onViewChange }) {
  const [ViewType, setViewType] = useState("grid")

  useEffect(() => {
    onViewChange(ViewType)
  }, [ViewType])

  return (
    <Stack isInline>
      <Select bg="white" icon={<BsFunnelFill />}>
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
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
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
