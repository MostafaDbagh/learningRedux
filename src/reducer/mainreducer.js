import {combineReducers} from 'redux'
import safi from './counterreducer'
import reem from './userreducer'

const Reducercontainer = combineReducers({
safi,
reem
})
export default Reducercontainer;