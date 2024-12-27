import { Header } from './components/Header/Header'
import { QuickLinkWrapper } from './components/QuickLinkWrapper/QuickLinkWrapper'
import { DataProvider } from './context/DataContext'
import { ModalProvider } from './context/ModalContext'

function App() {

  return (
    <DataProvider>
      <ModalProvider>
        <Header />
        <QuickLinkWrapper />
      </ModalProvider>
    </DataProvider>
  )
}

export default App
