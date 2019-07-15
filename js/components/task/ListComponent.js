class ListComponent {
    constructor() {
        this.state = {
            listData: {
                tasks: [],
                listId: null,
            },
        };
        this.setData = this.setData.bind(this);
        this.render = this.render.bind(this)
    }

    setData(listData) {
        this.state.listData = listData;
        return this.render(this.state.listData.tasks)
    }

    removeTask(taskId) {
        this.state.lists = this.state.lists.forEach((list) => {
            list.tasks.forEach((task, index) => {
                if (task.taskId === taskId) {
                    list.tasks.splice(index, 1)
                }
            });
        });
        this.render(this.state.lists)
    }

    doneTask(taskId) {
        this.state.lists = this.state.lists.forEach((list) => {
            list.tasks.forEach((task, index) => {
                if (task.taskId === taskId) {
                    list.tasks.splice(index, 1,
                        {
                            name: task.name,
                            taskId: taskId,
                            isReady: !task.isReady
                        });
                }
            })
        });
        this.render(this.state.lists)
    }

    createTask() {
        let inputValue = document.querySelector('#taskInput').value;
        let taskId = '_' + Math.random().toString(36).substr(2, 9);

        if (inputValue !== undefined && inputValue !== "" && inputValue.match(/^\s+$/) === null) {
            this.state.listData.tasks = this.state.listData.tasks.unshift({
                name: inputValue,
                taskId: taskId,
                isDone: false
            })
        }
        this.render(this.state.listData.tasks)
    }

    selectList() {
        return this.state.listData.listId
    }

    render(tasks) {
        let tasksContainer = new NodeContainer();
        tasksContainer.setItems(tasksContainer.getState(), tasks);
        let ul = document.createElement('ul');
        ul.setAttribute('id', `${this.state.listData.listId}`)
        tasksContainer.getState().forEach((row) => {
            ul.appendChild(row)
        });
        return ul;
    }
}
