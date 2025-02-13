import { Header } from './components/Header/Header'
import { Loader } from './components/Loader/Loader'
import { QuickLinkWrapper } from './components/QuickLinkWrapper/QuickLinkWrapper'
import { DefaultConteiner } from './components/styles/DefaultConteiner.styled'
import { TodoListWrapper } from './components/TaskWrapper/TaskWrapper'
import { DataProvider } from './context/DataContext'
import { ModalProvider } from './context/ModalContext'

function App() {

  return (
    <DataProvider>
      <ModalProvider>
        <Header />
        <QuickLinkWrapper />
        <TodoListWrapper/>
        <DefaultConteiner>
          <Loader/>
        </DefaultConteiner>
      </ModalProvider>
    </DataProvider>
  )
}

export default App
