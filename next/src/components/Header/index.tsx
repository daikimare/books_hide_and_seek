import React, { Fragment } from 'react'
import { mdiMagnify, mdiAccountCircleOutline } from '@mdi/js'
import Button from '../Button/IconButton'
import TextButton from '../Button/TextIconButton'

const Header = () => {
  const hoge = () => {
    console.log("hogehoge")
  }
  return(
    <header className=' m-2 flex justify-between '>
      <h1 className=' text-4xl text-bold '>Books hide and seeker</h1>
      <TextButton path='' size={2} onclick={hoge}>
        書籍追加
      </TextButton>
      <div className='flex'>
        <Fragment>
          <Button
            path ={ mdiMagnify }
            size = {1}
            onClick = {() =>{}}
          />
          <input className='' type="text" placeholder='serch' />
        </Fragment>
        <Fragment>
          <Button
            path={ mdiAccountCircleOutline }
            size={1}
            onClick={()=>{}}
          />
          <input className=' text-bold ' type="button" value="Login" />
        </Fragment>
      </div>
    </header>
  )
}
export default Header