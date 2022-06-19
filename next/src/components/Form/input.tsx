import { Fragment, InputHTMLAttributes, VFC } from "react"
import { useFormContext } from "react-hook-form"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputType: string
  registerName: string
  placeholder: string
}

type SimpleProps = InputHTMLAttributes<HTMLInputElement> & {
  inputName: string
}

export const FormTextInput:VFC<InputProps> = ({title, inputType, registerName, placeholder}) => {

  const {register, formState:{errors}} = useFormContext()
  return (
    <Fragment>
      <div className=" flex m-5 justify-between md:flex-col ">
        <h3 className=" text-lg font-semibold ">{title}</h3>
        <input
          className=" border-2 shadow-xl rounded-md mx-2 w-auto hover:cursor-text hover:border-gray-700 "
          type={inputType}
          {...register(registerName, {required: inputType === 'file' ? false: true})}
          placeholder={placeholder}
        />
      </div>
    </Fragment>
  )
}

type FileProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string
  
}
export const formFileInput = ({title}) => {
  return (
    <Fragment>
      <div>
        <h3>{title}</h3>
      </div>
    </Fragment>
  )
}

export const SimpleTextInput:VFC<SimpleProps> = ({inputName}) => {
  const { register, formState:{errors} } = useFormContext()
  return (
    <Fragment>
      <input
        className=" border-none shadow-inner "
        type="text"
        {...register(inputName)}
      />
    </Fragment>
  )
}