
import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from "redux-thunk";
import signUpReducer from '../reducers/signUp';
import loginReducer from '../reducers/login';
import userReducer from '../reducers/user';
import postReducer from '../reducers/posts';
const initialState = {};
const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers( {
    SignUp: signUpReducer,
    Login: loginReducer,
    User: userReducer,
    Post: postReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore( persistedReducer, initialState, applyMiddleware( thunkMiddleware ) )
export const persistor = persistStore(store);
