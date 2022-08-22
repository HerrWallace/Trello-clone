import { NewItemFormButton, NewItemFormContainer, NewItemFormInput } from './styles'

export const NewItemForm = () => {
  return (
    <NewItemFormContainer>
      <NewItemFormInput />
      <NewItemFormButton>Create</NewItemFormButton>
    </NewItemFormContainer>
  )
}