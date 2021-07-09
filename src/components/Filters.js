import { Flex, Select } from "@chakra-ui/react"
import languages from "../data/languages.json"
export function Filters() {
  return (
    <Flex>
      <Select>
        {languages.map((language) => (
          <option value={language.value}>{language.label}</option>
        ))}
      </Select>
    </Flex>
  )
}
