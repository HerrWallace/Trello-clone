import { AppContainer } from './styles'
import { Column } from './Column';
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';

export const App = () => {
  return (
    <AppContainer>
      <Column text='To do'>
        <Card text='Breakfast' />
      </Column>
      <Column text='In progress'/>
      <Column text='Done'/>
      <AddNewItem itemAdd={alert} />
    </AppContainer>
  )
}
