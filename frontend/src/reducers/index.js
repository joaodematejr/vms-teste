import { clickReducer } from './CameraReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    clickState: clickReducer
});