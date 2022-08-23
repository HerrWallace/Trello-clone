import { NewItemFormButton, NewItemFormContainer, NewItemFormInput } from './styles';
import { useState } from 'react';

type NewItemFormProps = {
  onItemAdd(text: string): void
}

export const NewItemForm = ({onItemAdd}: NewItemFormProps) => {
  const [text, setText] = useState('')

  return (
    <NewItemFormContainer>
      <NewItemFormInput 
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <NewItemFormButton onClick={() => onItemAdd(text)}>Create</NewItemFormButton>
    </NewItemFormContainer>
  )
}