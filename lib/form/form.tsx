import React from 'react'

interface Props {
  value: { [K: string]: any }
  fields: Array<{ name: string; label: string; input: { type: string } }>
  buttons: any
  onSubmit: React.FormEventHandler
}

export const Form: React.FC<Props> = (props) => {
  return (
    <form>
      {props.fields.map(f => (
        <div key={f.name}>
          {f.label}
          <input type={f.input.type} />
        </div>
      ))}
      <div>{props.buttons}</div>
    </form>
  )
}
