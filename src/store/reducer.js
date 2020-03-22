import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'
const defaultState = {
    inputValue: 'reduxDemo',
    list:[
        'redux流程数据管理',
        'action分离',
        'ui和js功能分离',
        'redux的添加删除'
    ]
}
export default (state=defaultState, action)=>{
    //reducer只能接受state不能改变state
    //在这里reducer做了处理业务逻辑，处理完业务逻辑吧newState返回给store
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        //action是传过来的值
        newState.inputValue = action.value
        //返回一个新的state
        return newState
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}

