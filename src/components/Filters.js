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

import languages from "../data/languages.json"
export function Filters() {
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
          fontWeight={400}
          roundedRight={0}
          leftIcon={<FaTable />}
          bg="white"
        >
          Grid
        </Button>
        <Button
          fontWeight={400}
          roundedLeft={0}
          leftIcon={<FaList />}
          bg="white"
        >
          List
        </Button>
      </ButtonGroup>
    </Stack>
  )
}
