import { createStore } from 'redux'
import { reducers } from './reducers'

const storeState = createStore(reducers);

export default storeState;