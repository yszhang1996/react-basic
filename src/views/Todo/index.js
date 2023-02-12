import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import './index.css'
import { Input, Checkbox } from "antd"
const { Search } = Input;

function Todo() {
    const { todoStore } = useStore()
    const [searchData, setSearchData] = useState()

    const onChange = (e, id) => {
        todoStore.checkItem(e.target.checked, id);
    };
    const changeAll = (e) => {
        todoStore.checkItemAll(e.target.checked)
    }
    const onAdd = (value, e) => {
        console.log(value);
        if (!value) return;
        todoStore.addItem({
            id: uuidv4(),
            name: value,
            isDone: false,
        })
        setSearchData('')
    }

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
                        value={searchData}
                        onChange={(e) => { setSearchData(e.target.value) }}
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
                    <div className='item-list-delete' onClick={() => { todoStore.deleteItem(item.id) }}>X</div>
                </div>
            ))}
            <div className='item-list'>
                <div className='item-list-check'>
                </div>
                <div className='item-list-content'>
                    <span>任务总数：{todoStore.list.length}，已完成：{todoStore.isDoneNum}</span>
                </div>
            </div>
        </div>
    )
}

export default observer(Todo)