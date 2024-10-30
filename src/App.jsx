import './App.css'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/BannerPage'
import { Catalog } from './components/Catalog/Catalog'
import { Category } from './components/Category/Category'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Category />
      <Catalog />
    </>
  )
}

export default App
