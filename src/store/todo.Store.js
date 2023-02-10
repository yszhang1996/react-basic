import { makeAutoObservable } from "mobx"

class TodoStore {
    list = [
        {
            id: 1,
            name: '学习react',
            isDone: false,
        },
        {
            id: 2,
            name: '学习vue',
            isDone: true,
        },
    ]
    checkItem = (status, id) => {
        const item = this.list.find(item => item.id === id)
        item.isDone = status
    }
    checkItemAll = (status) => {
        this.list.forEach(item => {
            item.isDone = status
        })
    }
    get isAll() {
        return this.list.every(item => item.isDone)
    }
    constructor() {
        makeAutoObservable(this)
    }
}

export default TodoStore