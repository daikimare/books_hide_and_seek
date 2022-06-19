import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormTextInput } from '../Form/input'

const BooksForm = () => {

  // const { register, handleSubmit } = useForm()
  const methods = useForm()
  const [ data, setData ] = useState("")

  return (
    <FormProvider {...methods}>
      <div className=' mx-auto mt-48 w-1/3 border-2 border-gray-400 shadow-2xl rounded-xl font-sans '>
        <form onSubmit={methods.handleSubmit((data) => setData(JSON.stringify))} className="m-5" >
        {/* <form onSubmit={ handleSubmit((data) => setData(JSON.stringify(data))) } className="m-5"> */}
          <h3 className=' m-3 text-xl font-bold '>書籍追加フォーム</h3>
          <div className='flex my-2 flex-col '>
            <FormTextInput
              title='Title：'
              inputType='text'
              registerName='bookTitle'
              placeholder='Books title'
            />
            <FormTextInput
              title='著書：'
              inputType='text'
              registerName='bookAuthor'
              placeholder='Books Author name'
            />
            <FormTextInput
              title='表紙：'
              inputType='file'
              registerName='bookCover'
              placeholder='Books cover'
            />
            {/* <div className=' flex m-2 justify-between '>
              <p className=' font-semibold '>タイトル:</p>
              <input
                className=' border-2 border-gray-400 shadow-xl rounded-md mx-2 w-auto hover:cursor-text hover:border-gray-700 '
                type="text"
                { ...register("bookTitle")}
                placeholder="Books title"
                required
              />
            </div>
            <div className=' flex m-2 justify-between '>
              <p className=' font-semibold '>著者:</p>
              <input
                className=' border-2 border-gray-400 shadow-xl rounded-md mx-2 hover:cursor-text hover:border-gray-700 '
                type="text"
                {...register("bookAuthor")}
                placeholder="Books Author name"
                required
              />
            </div>
            <div className=' flex m-2 justify-between '>
              <p className=' font-semibold '>表紙:</p>
              <input
                className=' w-32 hover:cursor-pointer '
                type="file"
                { ...register("bookCover")}
                placeholder="Books Cover"
              />
            </div> */}
            <p>{data}</p>
            <input
              className=' w-24 mx-auto mt-10 mb-3 font-bold border-2 border-gray-700 rounded-lg hover:bg-gray-400 hover:cursor-pointer '
              type="submit"
              value="追加"
            />
          </div>
        </form>
      </div>
    </FormProvider>
  )
}
export default BooksForm