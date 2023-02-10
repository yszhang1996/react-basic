import React from 'react'
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import './index.css'
import { Input, Checkbox } from "antd"
const { Search } = Input;

function Todo() {
    const { todoStore } = useStore()

    const onChange = (e, id) => {
        todoStore.checkItem(e.target.checked, id);
    };
    const changeAll = (e) => {
        todoStore.checkItemAll(e.target.checked)
    }
    const onAdd = () => { }

    return (
        <div className='container'>
            <div className='item-list'>
                <div className='item-list-check'>
                    <Checkbox checked={todoStore.isAll} onChange={e => changeAll(e)}></Checkbox>
                </div>
                <div className='item-list-content'>
                    <Search
                        placeholder="请输入您想做的事"
                        allowClear
                        enterButton="添加"
                        size="large"
                        onSearch={onAdd}
                    />
                </div>
            </div>
            {todoStore.list.map(item => (
                <div className='item-list' key={item.id}>
                    <div className='item-list-check'>
                        <Checkbox checked={item.isDone} onChange={(e) => { onChange(e, item.id) }}></Checkbox>
                    </div>
                    <div className='item-list-content'>
                        <span className={item.isDone ? 'completed' : ''}>{item.name}</span>
                    </div>
                </div>
            ))}
            <div className='item-list'>
                <div className='item-list-check'>
                </div>
                <div className='item-list-content'>
                    <span>任务总数：3，已完成：2</span>
                </div>
            </div>
        </div>
    )
}

export default observer(Todo)