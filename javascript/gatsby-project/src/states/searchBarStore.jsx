import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
    if (action.type === 'UPDATE') {
        return Object.assign({}, state, {
            search: state.search
        })
    }

    return state
}

const initialState = { search: 'teste' }

const searchBarStore = () => reduxCreateStore(reducer, initialState)

export default searchBarStore