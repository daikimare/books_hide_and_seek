import Icon from '@mdi/react'
import { ButtonHTMLAttributes, VFC } from 'react'

type ButtoProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  path: string
  size: number
}

const ImageButton: VFC<ButtoProps> = ({path, size, onClick}) => {
  return (
    <button onClick={onClick}>
      <Icon path={path} size={size} />
    </button>
  )
}

export default ImageButton