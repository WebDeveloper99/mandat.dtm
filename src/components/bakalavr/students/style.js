
import styled from 'styled-components'
import { Container, Card } from 'react-bootstrap'
import { Col, Form, InputNumber, Row, Select, Button, Collapse, Popover } from 'antd'

const { Panel } = Collapse;

export const BooContainer = styled(Container)`
display: flex;
flex-direction: column;

`



export const Wrapper = styled.div`
display: flex;
width: 98%;
margin: 1% auto;


`


export const AntForm = styled(Form)`
width: 98%;
margin: 1% auto;
padding: 2%;


`

export const AntRow = styled(Row)`
display: flex;
justify-content: space-between;

`


export const AntCol = styled(Col)`
`


export const AntInputNumber = styled(InputNumber)`
width: 370px!important;
#validate_other_input-number{
    height: 40px;
    align-items: center;
    font-size: 1.3em;
    font-weight: 500;
}

`

export const AntSelect = styled(Select)`
width: 370px!important;
.ant-select-selector{
    font-size: 1.3em;
    font-weight: 500;
    align-items: center;
    height: 40px!important;
}

`


export const AntButton = styled(Button)`
align-items: center;
width: 370px!important;
height: 40px!important;
border-radius: 8px;
font-size: 1.3em;
font-weight: 500;

`

export const AntCollapse = styled(Collapse)`
border: none;

`

export const AntPanel = styled(Panel)`
border-radius: 10px!important;
border: 1px solid #ccc;
margin: 10px 0;
background: #ccc !important;;

`




export const BooCard = styled(Card)`
width: 1150px;
margin: 0 auto !important;

`


