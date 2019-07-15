class TaskComponent {
    constructor() {
        this.state = {
            task: {}
        };
        this.render = this.render.bind(this);
    }

    setData(task) {
        if (task.name === this.state.task.name && task.isDone === this.state.task.isDone) {
            return;
        }
        if (task.name !== this.state.task.name || task.isDone !== this.state.task.isDone) {
            this.state.task.name = task.name;
            this.state.task.isDone = task.isDone;
            return this.render(this.state.task)
        }
    }

    render(task) {
        let li = document.createElement('li');
        li.innerHTML = task.name;
        return li;
    }
}
