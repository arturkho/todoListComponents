class Lists {
    constructor() {
        this.state = {
            lists: [],
            selectedListId: null,
            prevComponents: [],
            listContainer: new ListsContainer()
        }
        ;
        this.getAllItems = this.getAllItems.bind(this);
        this.render = this.render.bind(this)
    }

    getAllItems() {
        let lists = [
            {
                listName: "sadasd",
                listId: "213123",
                tasks: [{name: "1", taskId: "asdasd2", isDone: true}, {name: "2", taskId: "23423", isDone: true}, {
                    name: "3",
                    taskId: "2222222422",
                    isDone: true
                }]
            },
            {
                listName: "sadasd",
                listId: "324",
                tasks: [{name: "4", taskId: "1", isDone: true}, {name: "5", taskId: "5", isDone: true}, {
                    name: "6",
                    taskId: "a5555sdx",
                    isDone: true
                }]
            },
            {
                listName: "sadasd",
                listId: "341111",
                tasks: [{name: "7", taskId: "4", isDone: true}, {name: "8", taskId: "6", isDone: true}, {
                    name: "9",
                    taskId: "124",
                    isDone: true
                }]
            }
        ];
        this.state.lists = lists;
        this.render(this.state)
    }
    // setListName(tasksTables, tableName, tableId) {
    //     let tableNameLi = document.createElement('li');
    //     tableNameLi.setAttribute('id', `li${tasksTables.length}`);
    //
    //     tableNameLi.innerHTML = tableName === "" ? "No name" : `Table: ${tableName}`;
    //     tableNameLi.style.display = "flex";
    //
    //     let tableWrap = document.getElementById('taskTablesWrap');
    //     let table = tableWrap.appendChild(document.createElement('ul'));
    //
    //     table.setAttribute('id', tableId);
    //     table.setAttribute('class', `table`);
    //     table.appendChild(tableNameLi);
    // }
    // createList() {
    //     let inputsWrap = document.querySelector('#inputsWrap');
    //     let changeInput = inputsWrap.appendChild(document.createElement('input'));
    //     let listId = '_' + Math.random().toString(36).substr(2, 9);
    //     changeInput.setAttribute('id', `taskNameInput`);
    //
    //     let addList = document.querySelector('#addList');
    //     addList.disabled = true;
    //     let acceptChanges = inputsWrap.appendChild(document.createElement('input'));
    //     acceptChanges.type = 'button';
    //     acceptChanges.value = 'ok';
    //     acceptChanges.setAttribute('id', `setTaskName`);
    //
    //     document.querySelector(`#setTaskName`).addEventListener('click', () => {
    //         addList.disabled = false;
    //         let listName = document.querySelector(`#taskNameInput`).value;
    //         acceptChanges.remove();
    //         changeInput.remove();
    //         if (listName !== undefined && listName !== "" && listName.match(/^\s+$/) === null) {
    //             this.setListName(listName)
    //         }
    //     })
    // }


    removeList() {
        this.state.lists.forEach((list, index) => {
            if (list.listId === this.state.selectedListId) {
                this.state.lists.splice(index, 1);
            }
        });
        this.render(this.state)
    }


    render(state) {
        let listWrap = document.querySelector('#taskTablesWrap');

        state.listContainer.setItems(state.prevComponents, state.lists);
        state.prevComponents = state.listContainer.state.components;

        state.listContainer.state.componentsData.forEach((list) => {
            listWrap.appendChild(list);
            list.addEventListener('click', () => {
                state.selectedListId = list.id
            });
        })
    }
}
