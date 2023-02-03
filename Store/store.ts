import { nanoid } from "nanoid";
import { create } from "zustand";

type TodoList = {
    id: number, 
    name: string
}

interface TodoTada {
    todo: TodoList[],
    newData:[],
    title?: string,
    id?: number,
    addTodo: (title: string) => void,
    fetchData: () => void
    deleteData:(el:TodoList) => void,
    loading:boolean,
    error:null
}


export const useStore = create<TodoTada>()(
    (set) => ({
        todo: [{ id: 1, name: 'js' }, { id: 2, name: 'html' }],
        newData:[],
        loading:false,
        error:null,
        addTodo: (title) => set((state: any) => {
            const newTodo = { id: nanoid(), name:title }
            return { todo: [...state.todo, newTodo] }
        }),
        deleteData:(el) => set((state:any) => {
            return{todo:[...state.todo.filter((todoItem:TodoList) => todoItem !== el)]}
        }),
        fetchData:async() =>  {
            set({loading:true})
            try {

                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const responseData = await response.json()

                set({newData:responseData})

            }catch(error){

            }finally{
                set({loading:false})
            }

        }

    })
)
