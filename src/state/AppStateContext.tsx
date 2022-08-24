// Context

type Task = {
  id: string,
  text: string
}

type List = {
  id: string,
  text: string,
  tasks: Task[]
}

export type AppState = {
  lists: List[]
}

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To do',
      tasks: [{ id: 't0', text: 'Supper' }]
    },
    {
      id: '1',
      text: 'In progress',
      tasks: [{ id: 't1', text: 'Dinner' }, {id: 't2', text: 'Lunch'}]
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 't3', text: 'Breakfast' }]
    }
  ]
}
// List & Task -> BLL;
// Column & Card(item) -> UI;
export {};