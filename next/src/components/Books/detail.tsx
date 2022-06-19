import Image from 'next/image'
import { VFC } from 'react'
import '../../../static/cofee.jpeg'

type Props = {
  detail: string[]
}  
const Detail:VFC<Props> = ({detail}) => {
  const sampleImage = '../../../static/coffee.jpeg'

  return (
    <div>
      <div>
        <h2>Book name</h2>
        <p>{...detail}</p>
      </div>
      <Image src={sampleImage} />
    </div>
  )
}
export default Detail