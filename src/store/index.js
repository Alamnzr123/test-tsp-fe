import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { departmentReducer } from "./reducers/departmentReducer";
import { jabatanReducer } from "./reducers/jabatanReducer";
import { karyawanReducer } from "./reducers/karyawanReducer";
import { operatorReducer } from "./reducers/operatorReducer";

const rootReducer = combineReducers({
    departmentReducer,
    jabatanReducer,
    karyawanReducer,
    operatorReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;