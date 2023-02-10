import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import './index.css';

export default function Tabbar() {
    const history = useHistory()
    const location = useLocation()

    function showDetail1(e) {
        console.log(e.target.value);
        if (e.target.value === location.pathname) return
        history.push(e.target.value)
    }
    return (
        <div className='header-select'>
            <select onChange={showDetail1} value={location.pathname}>
                <option value='/comment'>案例一，实现评论的增删改查</option>
                <option value='/communication'>案例二，组件通信</option>
                <option value='/antd'>案例三，ant-design组件库</option>
            </select>
        </div>
    )
}
