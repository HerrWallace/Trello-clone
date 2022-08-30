import { AddNewItem } from './AddNewItem';
import { ColumnContainer, ColumnTitle } from './styles';


type ColumnProps = {
  text: string,
  children?: React.ReactNode
}

export const Column = ({ text, children }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem itemAdd={alert}/>
    </ColumnContainer>
  )
}