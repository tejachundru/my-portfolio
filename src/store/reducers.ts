import { combineReducers } from '@reduxjs/toolkit';

// ---------------------- Slice Imports ----------------------
import detailsSlice, { type DetailsState } from './slice/detailsSlice';
import colorSchemeSlice, { type ThemeState } from './slice/themeSlice';

/**
 * `RootState`
 *  maintains the type's of the reducer
 * state.
 */
export type RootState = {
  details: DetailsState;
  colorScheme: ThemeState;
};

/* Combining the reducers into root reducer. */
const rootReducer = combineReducers({
  details: detailsSlice,
  colorScheme: colorSchemeSlice,
});

export default rootReducer;
