class NodeContainer {
    constructor() {
        this.state = {
            components: []
        }
    }

    setItems(components, tasks) {
        if (components.length === tasks.length) {
            console.log("state in node container components.length === tasks.length", this.state);
            components.forEach((component) => {
                tasks.forEach((task) => {
                    if (component.id === task.taskId) {
                        if (component.setData(task)) {
                            this.state.components.unshift(component.setData(task))
                        }
                    }
                })
            });
        }

        if (components.length > tasks.length) {
            console.log("state in node container components.length > tasks.length", this.state);
            components.forEach((component, index) => {
                tasks.forEach((task) => {
                    if (component.id === task.taskId) {
                        if (component.setData(task)) {
                            this.state.components.unshift(component.setData(task))
                        }
                    } else {
                        this.state.components.splice(index, 1);
                    }
                })
            });
        }

        if (components.length < tasks.length) {
            tasks.forEach((task, index) => {
                components.forEach((component) => {
                    if (component && component.id === task.taskId) {
                        if (component.setData(task)) {
                            this.state.components.unshift(component.setData(task))
                        }
                    }
                });
                if (components[index] === undefined) {
                    let newTaskComponent = new TaskComponent();
                    let newTask = newTaskComponent.setData(task);
                    this.state.components.unshift(newTask)
                }
            })
        }
    }

    getState() {
        return this.state.components;
    }
}
