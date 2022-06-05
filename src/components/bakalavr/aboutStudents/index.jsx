import React, { useRef, useState, memo } from 'react'
import { Table, Input, Button, Space } from 'antd'
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Container } from './style'

import {studentsData} from '../../../mock/index'

export const AboutStudents = memo(() => {


  const searchInput = useRef(null);
  
  const [state, setState] = useState({searchText:'', searchedColumn:''})
  
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = clearFilters => {
    clearFilters();
    setState({ searchText: '' });
  };
  
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          // ref={node => {
          //   this.searchInput = node;
          // }}
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  
    const columns = [
      {
        title: 'Talaba ID raqami',
        dataIndex: 'id',
        key: 'id',
        width: '1%',
        ...getColumnSearchProps('id'),
      },
      {
        title: 'F.I.SH',
        dataIndex: 'fish',
        key: 'id',
        width: '20%',
        ...getColumnSearchProps('fish'),
      },
      {
        title: 'Yunalish',
        dataIndex: 'yunalish',
        key: 'id',
        width: '10%',
        ...getColumnSearchProps('yunalish'),
      },
      {
        title: "Oliy ta'lim muassasasi",
        dataIndex: 'otm',
        key: 'id',
        width: '10%',
        ...getColumnSearchProps('otm'),
      },
      {
        title: "To'plangan ball",
        dataIndex: 'ball',
        key: 'id',
        width: '10%',
        ...getColumnSearchProps('ball'),
      },
      {
        title: "Ta'lim tili",
        dataIndex: 'til',
        key: 'id',
        width: '10%',
        ...getColumnSearchProps('til'),
      },
      {
        title: "Ta'lim shakli",
        dataIndex: 'shakli',
        key: 'id',
        width: '10%',
        ...getColumnSearchProps('shakli'),
      },
      {
        title: "Batafsil",
        dataIndex: 'id',
        key: 'id',
        width: '10%',
        render: (id) => <Button><Link to={`/bakalavr/${id}`} >Batafsil</Link></Button>,
      },
    ];
    
    return (
      <Container>
        <Table columns={columns} dataSource={studentsData} bordered loading='Spin' rowKey={record => record.id}  />
      </Container>
    );
  
})

export default AboutStudents