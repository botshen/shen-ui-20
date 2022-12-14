import type { ReactElement } from 'react'
import React, { Fragment } from 'react'
import './dialog.scss'
import ReactDOM from 'react-dom'
import { Icon } from '../index'
import { scopedClassMaker } from '../classes'

interface Props extends React.HTMLAttributes<HTMLElement> {
  visible: boolean
  buttons?: Array<ReactElement>
  onClose: React.MouseEventHandler
  closeOnClickMask?: boolean
}

const scopedClass = scopedClassMaker('fui-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask)
      props.onClose(e)
  }
  const x = props.visible
    ? <Fragment>
            <div className={sc('mask')} onClick={onClickMask}>
            </div>
            <div className={sc()}>
                <div className={sc('close')} onClick={onClickClose}>
                    <Icon name="close"/>
                </div>
                <header className={sc('header')}>
                    提示
                </header>
                <main className={sc('main')}>
                    {props.children}
                </main>
                <footer className={sc('footer')}>
                    {props.buttons && props.buttons.map((button, index) =>
                      React.cloneElement(button, { key: index }),
                    )}
                </footer>
            </div>
        </Fragment>
    : null
  return (
    ReactDOM.createPortal(x, document.body)
  )
}

Dialog.defaultProps = {
  closeOnClickMask: false,
}
const alert = (content: string) => {
  const component = <Dialog visible={true} onClose={() => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }}>{content}</Dialog>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)
}
// @ts-expect-error
const confirm = () => {
}
// @ts-expect-error

const modal = () => {
}

export { alert }

export default Dialog
