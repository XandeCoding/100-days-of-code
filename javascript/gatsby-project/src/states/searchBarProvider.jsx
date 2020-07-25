import { useState } from 'react'
import { createContainer } from 'unstated-next'

function useSearchBar() {
  const [ value, setValue ] = useState()
  const onChange = event => setValue(event.currentTarget.value)
  return { value, onChange }
}

let SearchBarStore = createContainer(useSearchBar)

export default SearchBarStore