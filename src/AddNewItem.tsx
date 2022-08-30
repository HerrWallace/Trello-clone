import { useState } from 'react';
import { AddItemButton } from './styles';
import { NewItemForm } from './NewItemForm';

type AddNewItemProps = {
  itemAdd(text: string): void
}

export const AddNewItem = ({ itemAdd }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm 
        onItemAdd={text => {
          itemAdd(text)
          setShowForm(false)
        }} 
      />
    )
  }

  return (
    <AddItemButton onClick={() => setShowForm(true)}>+ Add another list</AddItemButton>
  )
}