//*************************************** Lesson 1 ******************************************************

// console.log('Hiii newbie');
// const func = (name:boolen) => {
//
// }
// func(true);
//
// interface IUser<DATA>{
//     name: string;
//     age: number;
//     house?: number;
//     data: DATA;
// }
//
// const user1: IUser<integer[]> = {
//     name: 'Ivan',
//     age: 38,
//     house: 90,
//     data: [3, 5, 7]
// }
//
// const user2: IUser<string[]> = {
//     name: 'Ivan',
//     age: 38,
//     data: ['3', '5', '7']
// }
//
// console.log(user1);
//
// const user3: Partial<IUser<any>> = {
//     name: 'Ivan',
//     age: 38,
// }
//
// class User{
//     private name: string;
//     private age: number;
//
//     constructor(name:string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//
//     const user = new User
// }

//*************************************** Lesson 2 ******************************************************

interface ITodo {
    id: number,
    title: string
}

class NoteBook{
    private _todos: ITodo[]

    constructor(private name:string){
        this._initMain()
    }

    private _getTodosFromLS(): void{
        this._todos = JSON.parse(localStorage.getItem(this.name)) || []
    }

    private _setToDosToLS(): void{
        localStorage.setItem(this.name, JSON.stringify(this._todos))
        this._initTodos()
    }

    private _initMain(): void{
        this._initForm()
        this._initTodos()
    }

    private _initTodos(): void{
        this._getTodosFromLS()
        const todosDiv = document.querySelector('#todos') as HTMLDivElement;
        todosDiv.innerHTML = ''
        this._todos.forEach(todo => {
            const todoDiv = document.createElement('div');
            todoDiv.innerText = `${todo.id} ${todo.title}`
            todosDiv.appendChild(todoDiv)
        })
    }

    private _initForm(): void{
        const form = document.forms['form'] as HTMLFormElement;
        form.onsubmit = (e) =>{
            e.preventDefault()
            const input = e.target['title'] as HTMLInputElement;
            const id = this._todos.slice(-1)[0]?.id + 1 || 1;
            this._todos.push({id, title:input.value})
            this._setToDosToLS()
            form.reset();
        }
    }
}

new NoteBook('notebook1')
new NoteBook('notebook2')

//*************************************** Lesson 3 ******************************************************

