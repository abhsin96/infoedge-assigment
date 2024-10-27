import { combineReducers } from "@reduxjs/toolkit";
import { reducer as blog } from "./modules/blogs";

export const rootReducer = combineReducers({ blog });
