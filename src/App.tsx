import { Header } from './components/Header/Header'
import { SearchBar } from './components/SearchBar/SearchBar'
import { DataProvider } from './context/DataContext'

function App() {

  return (
    <DataProvider>
      <Header/>
      <SearchBar />
    </DataProvider>
  )
}

export default App
