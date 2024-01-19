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
var NoteBook = /** @class */ (function () {
    function NoteBook(name) {
        this.name = name;
        this._initMain();
    }
    NoteBook.prototype._getTodosFromLS = function () {
        this._todos = JSON.parse(localStorage.getItem(this.name)) || [];
    };
    NoteBook.prototype._setToDosToLS = function () {
        localStorage.setItem(this.name, JSON.stringify(this._todos));
        this._initTodos();
    };
    NoteBook.prototype._initMain = function () {
        this._initForm();
        this._initTodos();
    };
    NoteBook.prototype._initTodos = function () {
        this._getTodosFromLS();
        var todosDiv = document.querySelector('#todos');
        todosDiv.innerHTML = '';
        this._todos.forEach(function (todo) {
            var todoDiv = document.createElement('div');
            todoDiv.innerText = "".concat(todo.id, " ").concat(todo.title);
            todosDiv.appendChild(todoDiv);
        });
    };
    NoteBook.prototype._initForm = function () {
        var _this = this;
        var form = document.forms['form'];
        form.onsubmit = function (e) {
            var _a;
            e.preventDefault();
            var input = e.target['title'];
            var id = ((_a = _this._todos.slice(-1)[0]) === null || _a === void 0 ? void 0 : _a.id) + 1 || 1;
            _this._todos.push({ id: id, title: input.value });
            _this._setToDosToLS();
            form.reset();
        };
    };
    return NoteBook;
}());
new NoteBook('notebook1');
new NoteBook('notebook2');
