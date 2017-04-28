//import rootReducer from '../reducers/root.reducer.js';
import sampleReducer from '../reducers/sample.reducer.js';
import thunkMiddleware from '../middleware/thunk.middleware.js';
import { createStore, applyMiddleware } from 'redux'

export default class SampleStore {

    static sampleStore;

    static createSampleStore(initialState) {
        this.sampleStore = createStore(sampleReducer, initialState, applyMiddleware(thunkMiddleware));
    }

    static getSampleStore() {
        return this.sampleStore;
    }
}