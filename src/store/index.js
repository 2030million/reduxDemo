//先创建一个store=========》其次创建reducer======》引入reducer
import reducer from './reducer'
import {createStore} from 'redux'
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
export default store

    
