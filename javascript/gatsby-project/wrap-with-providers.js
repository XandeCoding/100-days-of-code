import React from 'react'

import CounterStore from './src/states/counterProvider'
import SearchBarStore from './src/states/searchBarProvider'

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return (
    <CounterStore.Provider>
      <SearchBarStore.Provider>
        {element}
      </SearchBarStore.Provider>
    </CounterStore.Provider>
  )
}