import React, { Component } from 'react';
import store from './store/index'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreaters'
import TodoListUI from './TodoListUI'

//新建的reducer把这个data数据放在了reducer里面，通过store.getState/取值
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
      store.subscribe(this.storeChange)
    }  
    
    render() { 
        return ( 
           <TodoListUI
           inputValue={this.state.inputValue}
           changeInputValue={this.changeInputValue}
           clickBtn={this.clickBtn}
           list={this.state.list}
           deleteItem={this.deleteItem}
           />
         );
    };
    changeInputValue(e){
        //把这个替换成从changeInputAction引入的文件
        // const action = {
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        const action = changeInputAction(e.target.value)//--------->这个文件是引过来的
        store.dispatch(action)
    };
    // 定义一个storeChange，改变state状态
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;

