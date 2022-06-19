import { NextPage } from 'next'
import Header from '../components/Header'
import Meta from '../components/Meta'
import BooksForm from '../components/Form/additionsBook'

const Home:NextPage = () => {
  return (
    <>
      <Meta />
      <Header />
      <main>
        <BooksForm />
      </main>
    </>
  )
}
export default Home