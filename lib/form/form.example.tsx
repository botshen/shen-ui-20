import * as React from 'react'
import { useState } from 'react'
import Button from '../button/button'
import type { FormValue } from './form'
import Form from './form'
import Validator, { noError } from './validator'

const usernames = ['frank', 'jack', 'frankfrank', 'alice', 'bob']
const checkUserName = (username: string, succeed: any, fail: () => void) => {
  setTimeout(() => {
    if (usernames.includes(username))
      fail()

    else
      succeed()
  }, 2000)
}

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: 'frank',
    password: '',
  })
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'image', label: '头像', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ])
  const [errors, setErrors] = useState({})
  const validator = (username: string) => {
    return new Promise<string>((resolve, reject) => {
      // eslint-disable-next-line prefer-promise-reject-errors
      checkUserName(username, resolve, () => reject('unique'))
    })
  }
  const onSubmit = () => {
    const rules = [
      { key: 'username', required: true },
      { key: 'username', minLength: 8, maxLength: 16 },
      { key: 'username', validator },
      { key: 'username', validator },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', required: true },
      { key: 'password', validator },
      { key: 'password', validator },
    ]
    Validator(formData, rules, (errors) => {
      console.error(errors)
      setErrors(errors)
      if (noError(errors)) {
        // 没错
      }
    })
  }
  const transformError = (message: string) => {
    const map: any = {
      unique: 'username is taken',
      required: 'required',
      minLength: 'too short',
      maxLength: 'too long',
    }
    return map[message]
  }
  return (
    <div>
      <Form value={formData}
            fields={fields}
            buttons={
                [
                <Button type="submit" level="important">提交</Button>,
                <Button>返回</Button>,
                ]
            }
            errors={errors}
            transformError={transformError}
            onChange={newValue => setFormData(newValue)}
            onSubmit={onSubmit}
      />
    </div>
  )
}

export default FormExample
