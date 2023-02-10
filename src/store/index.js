// 编写第一个mobx store小案例
import React from "react";
import TodoStore from "./todo.Store";

class RootStore {
    constructor() {
        this.todoStore = new TodoStore()  //正常情况应该根据模块划分为不同的store，在此引入，这里由于案例就一个，所以就引入一个store，正常的项目，这里应该会引入很多
    }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }