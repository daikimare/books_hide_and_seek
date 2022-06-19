import Icon from '@mdi/react'
import { ButtonHTMLAttributes, VFC } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  path: string
  size: number
  onclick: string
}

const TextButton:VFC<ButtonProps> = ({path, size, children, onclick}) => {
  return(
    <button
      onClick={onclick}
      className=' text-bold '
    >
      <div className=' flex'>
        <Icon
          path={path}
          size={size}
        />
        <p>{children}</p>
      </div>
    </button>
  )
}
export default TextButton