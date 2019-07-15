// function createButtonsInTable(appendTask, id, tasksList) {
//     let deleteButton = appendTask.appendChild(document.createElement('input'));
//     deleteButton.type = 'button';
//     deleteButton.value = 'delete';
//     deleteButton.setAttribute('id', `deleteButton${id}`);
//     document.querySelector(`#deleteButton${id}`).addEventListener('click', () => {
//         removeTask(id, tasksList);
//     });
//
//     let changeButton = appendTask.appendChild(document.createElement('input'));
//     changeButton.type = 'button';
//     changeButton.value = 'change';
//     changeButton.setAttribute('id', `changeButton${id}`);
//     document.querySelector(`#changeButton${id}`).addEventListener('click', () => {
//         changeTask(id, tasksList)
//     });
//
//     let isFinishedTask = appendTask.appendChild(document.createElement('input'));
//     isFinishedTask.type = 'button';
//     isFinishedTask.value = 'ready';
//     isFinishedTask.setAttribute('id', `ready${id}`);
//     isFinishedTask.setAttribute('class', `isDone`);
//     document.querySelector(`#ready${id}`).addEventListener('click', () => {
//         doneTask(id, tasksList)
//     });
// }
