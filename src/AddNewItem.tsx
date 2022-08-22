import { useState } from 'react'
import { AddItemButton } from './styles'
import { NewItemForm } from './NewItemForm';

export const AddNewItem = () => {
  const [showForm, setShowForm] = useState(false);


  if (showForm) {
    return (
      <NewItemForm />
    )
  }

  return (
    <AddItemButton onClick={() => setShowForm(true)}>+ Add another list</AddItemButton>
  )
}