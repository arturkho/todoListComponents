class ListsContainer {
    constructor() {
        this.state = {
            componentsData: [],
            components: []
        }
    }

    setItems(components, lists) {
        if (components.length === lists.length) {
            this.update(components, lists)
        }

        if (components.length > lists.length) {
            this.remove(components, lists)
        }

        if (components.length < lists.length) {
            this.add(components, lists)
        }
    }

    update(components, lists) {
        components.forEach((component) => {
            lists.forEach((list) => {
                if (component.id === list.listId) {
                    if (component.setData(list)) {
                        this.state.componentsData.unshift(component.setData(list))
                    }
                }
            })
        });
    }

    doItRight() {
        // key: item
        // value: node

        /*

        создаем новую карту
        для каждого нового масива элементов
            ищем старый узел по элементу
            если узел не найден
                создаем узел
                добавляем его в новую карту
                добавлем в контейнер
            иначе (узел найден)
                добавляем его в новую карту
                добавлем в контейнер
                удаляем из старой карты
            дял оставших узлов в старой карте
                идалить из контейнера




        */
    }


    remove(components, lists) {
        components.forEach((component, index) => {
            lists.forEach((list) => {
                if (component.state.listData.listId === list.listId) {
                    if (component.setData(list)) {
                        this.state.componentsData.unshift(component.setData(list))
                    }
                }
            });
            if (lists[index] === undefined) {
                this.state.components.splice(index, 1);
                console.log(this.state.components);
            }
        });
    }

    add(components, lists) {
        lists.forEach((list, index) => {
            components.forEach((component) => {
                if (component && component.id === list.listId) {
                    if (component.setData(list)) {
                        this.state.componentsData.unshift(component.setData(list))
                    }
                }
            });
            if (components[index] === undefined) {
                let listComponent = new ListComponent();
                let newList = listComponent.setData(list);
                this.state.components.unshift(listComponent);
                this.state.componentsData.unshift(newList)
            }
        })
    }
}


