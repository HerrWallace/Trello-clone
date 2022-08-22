import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  background-color: #3179ba;
  height: 100%;
  width: 100%;
  color: #bbb;
  align-items: flex-start;
  padding: 20px;
`

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  border-radius: 5px;
  padding: 10px;
  margin-right: 20px;
`

export const ColumnTitle = styled.div`
  font-weight: bold;
  padding: 5px 15px 10px;
`

export const CardContainer = styled.div`
  background-color: #fff;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 280px;
  border-radius: 5px;
  cursor: pointer;
`

export const AddItemButton = styled.button`
  background-color: #ffffff3d;
  border: none;
  color: #000;
  cursor: pointer;
  max-width: 300px;
  width: 100%;
  padding: 10px;
  text-align: left;
`
export const NewItemFormContainer = styled.div`
  max-width: 300px;
  width: 100%;
`

export const NewItemFormInput = styled.input`
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
`

export const NewItemFormButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #5aac44;
  color: #fff;
  cursor: pointer;
`