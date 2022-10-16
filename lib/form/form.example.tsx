import React, { Fragment, useState } from 'react'
import { Form } from './form'

export const FormExample: React.FC = () => {
  const [formData] = useState({
    username: '',
    password: '',
  })
  const [field] = useState([
    {
      name: 'username',
      label: '用户名',
      input: {
        type: 'text',
      },
    },
    {
      name: 'password',
      label: '密码',
      input: {
        type: 'password',
      },
    },
  ])
  const onSubmit = () => {
    console.log('1', 1)
  }
  return (
    <Form
      value={formData}
      fields={field}
      buttons={
        <Fragment>
          <button type="submit">提交</button>
          <button>返回</button>
        </Fragment>
      }
      onSubmit={onSubmit}
    ></Form>
  )
}
