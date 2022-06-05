import React from 'react'
import {
  BooContainer,
  Wrapper,
  AntForm,
  AntInputNumber,
  AntRow,
  AntCol,
  AntSelect,
  AntButton,
  AntCollapse,
  AntPanel,
  BooCard,
} from './style'

// -----------

import { Popover, Button } from 'antd'

const buttonWidth = 1170

const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  `

// -----------Selected--------------------------

const { Option } = AntSelect
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

// -----------Collapse--------------------------

const onFinishPopover = (values) => {
  console.log('Received values of form: ', values)
}

const content2 = (
  <Wrapper style={{ border: '2px solid #ccc' }}>
    <AntForm
      style={{ width: '200%' }}
      name="validate_other"
      {...formItemLayout}
      initialValues={{
        'input-number': '',
      }}
    >
      <AntRow>
        <AntCol>
          <AntForm.Item
            name="hudud2"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Hududni tanlang !',
              },
            ]}
          >
            <AntSelect placeholder="Hududni tanlang">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </AntSelect>
          </AntForm.Item>
        </AntCol>
        <AntCol>
          <AntForm.Item
            name="otm2"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'OTM ni tanlang !',
              },
            ]}
          >
            <AntSelect placeholder="OTM ni tanlang">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </AntSelect>
          </AntForm.Item>
        </AntCol>
      </AntRow>
      {/* <<<---------------------------------------------------------------->>> */}
      <AntRow>
        <AntCol>
          <AntForm.Item
            name="yunalish2"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Yunalishni tanlang !',
              },
            ]}
          >
            <AntSelect placeholder="Yunalishni tanlang">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </AntSelect>
          </AntForm.Item>
        </AntCol>
        <AntCol>
          <AntForm.Item
            name="til2"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Ta'lim tilini tanlang !",
              },
            ]}
          >
            <AntSelect placeholder="Ta'lim tilini tanlang">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </AntSelect>
          </AntForm.Item>
        </AntCol>
      </AntRow>

      {/* <<<---------------------------------------------------------------->>> */}

      <AntRow>
        <AntCol>
          <AntForm.Item
            name="talimShakli2"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Ta'lim shaklini tanlang !",
              },
            ]}
          >
            <AntSelect placeholder="Ta'lim shaklini tanlang">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </AntSelect>
          </AntForm.Item>
        </AntCol>
        <AntCol>
          <AntForm.Item
            wrapperCol={{
              span: 12,
            }}
          >
            <AntButton
              onClick={onFinishPopover}
              type="primary"
              htmlType="submit"
            >
              Submit
            </AntButton>
          </AntForm.Item>
        </AntCol>
      </AntRow>
    </AntForm>
  </Wrapper>
)

// -----------Content--------------------------

const content1 = (
  <Wrapper>
    <AntRow>
    <div className="demo">
      <div
        style={{
          marginLeft: 0,
          whiteSpace: 'nowrap',
        }}
      >
        <Popover
          placement="topRight"
          title={'IIV farxandlari'}
          content={content2}
          trigger="click"
        >
          <AntButton>IIV farxandlari</AntButton>
        </Popover>
      </div>
    </div>
    <div className="demo">
      <div
        style={{
          marginLeft: 0,
          whiteSpace: 'nowrap',
        }}
      >
        <Popover
          placement="topRight"
          title={"IIB farxandlari"}
          content={content2}
          trigger="click"
        >
          <AntButton>Xotin-qizlar</AntButton>
        </Popover>
      </div>
    </div>
    </AntRow>
    <AntRow>
    <div className="demo">
      <div
        style={{
          marginLeft: 0,
          whiteSpace: 'nowrap',
        }}
      >
        <Popover
          placement="topRight"
          title={'Nogironligi borlar'}
          content={content2}
          trigger="click"
        >
          <AntButton>Nogironligi borlar</AntButton>
        </Popover>
      </div>
    </div>
    <div className="demo">
      <div
        style={{
          marginLeft: 0,
          whiteSpace: 'nowrap',
        }}
      >
        <Popover
          placement="topRight"
          title={"Olis cho'l hududda yashovchilar"}
          content={content2}
          trigger="click"
        >
          <AntButton>Olis cho'l hududda yashovchilar</AntButton>
        </Popover>
      </div>
    </div>
    </AntRow>
  </Wrapper>
)

// -----------Selected--------------------------

const Students = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const onChange = (key) => {
    console.log(key)
  }

  return (
    <BooContainer>
      <Wrapper>
        <AntForm
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          initialValues={{
            'input-number': '',
          }}
        >
          <AntRow>
            <AntCol>
              <AntForm.Item>
                <AntForm.Item name="input-number" noStyle>
                  <AntInputNumber min={1} placeholder="ID raqamini kiriting" />
                </AntForm.Item>
              </AntForm.Item>
            </AntCol>
            <AntCol>
              <AntForm.Item
                name="hudud"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Hududni tanlang !',
                  },
                ]}
              >
                <AntSelect placeholder="Hududni tanlang">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </AntSelect>
              </AntForm.Item>
            </AntCol>
            <AntCol>
              <AntForm.Item
                name="otm"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'OTM ni tanlang !',
                  },
                ]}
              >
                <AntSelect placeholder="OTM ni tanlang">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </AntSelect>
              </AntForm.Item>
            </AntCol>
          </AntRow>
          {/* <<<---------------------------------------------------------------->>> */}
          <AntRow>
            <AntCol>
              <AntForm.Item
                name="yunalish"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Yunalishni tanlang !',
                  },
                ]}
              >
                <AntSelect placeholder="Yunalishni tanlang">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </AntSelect>
              </AntForm.Item>
            </AntCol>
            <AntCol>
              <AntForm.Item
                name="til"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Ta'lim tilini tanlang !",
                  },
                ]}
              >
                <AntSelect placeholder="Ta'lim tilini tanlang">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </AntSelect>
              </AntForm.Item>
            </AntCol>
            <AntCol>
              <AntForm.Item
                name="talimShakli"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Ta'lim shaklini tanlang !",
                  },
                ]}
              >
                <AntSelect placeholder="Ta'lim shaklini tanlang">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                </AntSelect>
              </AntForm.Item>
            </AntCol>
          </AntRow>

          {/* <<<---------------------------------------------------------------->>> */}

          <AntRow>
            <AntCol>
              <AntForm.Item
                wrapperCol={{
                  span: 12,
                }}
              >
                <AntButton
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: '820px' }}
                >
                  Submit
                </AntButton>
              </AntForm.Item>
            </AntCol>
          </AntRow>
          <AntRow>
            <Wrapper>
              <div className="demo">
                <div
                  style={{
                    marginLeft: 150,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Popover
                    placement="topRight"
                    title={'Imtiyozlar jadvali'}
                    content={content1}
                    trigger="click"
                  >
                    <AntButton style={{background:"#bee5", borderColor: "#999"}} >Imtiyozli</AntButton>
                  </Popover>
                </div>
              </div>
              <div className="demo">
                <div
                  style={{
                    marginLeft: 100,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Popover
                    placement="topRight"
                    title={"Qo'shimchalar jadvali"}
                    content={content1}
                    trigger="click"
                  >
                    <AntButton  style={{background:"#bee5", borderColor: "#999"}}  >Qo'shimcha</AntButton>
                  </Popover>
                </div>
              </div>
            </Wrapper>
          </AntRow>
          {/* <<<---------------------------------------------------------------->>> */}

          {/* <AntCollapse onChange={onChange} expandIconPosition={'right'} >
            <AntPanel header="This is Antpanel header 2" key="1">
              <p>{text}</p>
            </AntPanel>
            <AntPanel header="This is Antpanel header 3" key="2">
              <p>{text}</p>
            </AntPanel>
          </AntCollapse> */}
        </AntForm>
      </Wrapper>
    </BooContainer>
  )
}
export default Students
