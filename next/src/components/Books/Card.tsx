import { ButtonHTMLAttributes, VFC} from 'react'

type CardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string
  img: string
}
const Card: VFC<CardProps> = ({name, img}) => {
  return (
    <div>
      <button>
        <h3>{name}</h3>
        <p>{img}</p>
      </button>
    </div>
  )
}
export default Card