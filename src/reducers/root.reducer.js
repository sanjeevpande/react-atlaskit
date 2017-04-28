import { combineReducers } from 'redux';
import { sampleReducer } from './sample.reducer.js'

const rootReducer = combineReducers({
	sample: sampleReducer
});

export default rootReducer;