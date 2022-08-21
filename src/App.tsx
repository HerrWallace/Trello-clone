import { AppContainer } from './styles'
import { Column } from './Column';

export const App = () => {
  return (
    <AppContainer>
      <Column text='To do'/>
      <Column text='In progress'/>
      <Column text='Done'/>
      <Column text='+ Add new'/>
    </AppContainer>
  )
}
