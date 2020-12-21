import { createStore } from 'redux';
import reducer from './Reducer/Reducer'

export const store = createStore(reducer)