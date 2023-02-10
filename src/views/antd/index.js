import React from 'react';
import './index.css'
import { Input, Table, Button, Popconfirm } from 'antd';
const { Search } = Input;

export default function antd() {

    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <Button type='link'>删除</Button>
                    </Popconfirm>
                ) : null,
        },
    ];

    const onSearch = (value) => console.log(value);

    const handleDelete = (key) => console.log(key)

    return (
        <div className='antd-container'>
            <Search
                placeholder="请输入需要搜索的姓名"
                allowClear
                enterButton="搜索"
                size="large"
                onSearch={onSearch}
            />
            <div className='table-wrapper'>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        </div>
    )
}
