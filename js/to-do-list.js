const toDoList = ['clean the house', 'do the laundry', "check the quo'tations"];
const completedList = ['wash the dishes', 'check the apo"strophes'];

function deleteToDoItem(elementId) {
    toDoList.splice(toDoList.indexOf(elementId), 1);
    displayToDo();
}

function deleteCompletedItem(elementId) {
    completedList.splice(completedList.indexOf(elementId), 1);
    console.log('deleting item?');
    displayCompleted();
}

function displayToDoItem(elementId) {
    const itemDiv = document.createElement('div');
    const itemDescription = document.createElement('span');
    const itemEdit = document.createElement('span');
    const editButton = document.createElement('button');
    const itemComplete = document.createElement('span');
    const completeButton = document.createElement('button');
    const itemDelete = document.createElement('span');
    const deleteButton = document.createElement('button');

    itemDiv.className = "item";
    itemDiv.id = elementId;

    itemDescription.className = "item-description";
    itemDescription.innerText = elementId;

    editButton.innerText = "Edit";
    itemEdit.appendChild(editButton);
    itemEdit.className = "item-edit";

    completeButton.innerText = "Complete";
    completeButton.onclick = () => completeItem(elementId);
    itemComplete.appendChild(completeButton);
    itemComplete.className = "item-complete";

    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => deleteToDoItem(elementId);
    itemDelete.appendChild(deleteButton);
    itemDelete.className = "item-delete";

    itemDiv.append(itemDescription, itemEdit, itemComplete, itemDelete);

    const toDoList = document.getElementById("to-do-list");
    toDoList.appendChild(itemDiv);
}

function displayCompletedItem(elementId) {
    const itemDiv = document.createElement('div');
    const itemDescription = document.createElement('span');
    const itemEdit = document.createElement('span');
    const editButton = document.createElement('button');
    const itemIncomplete = document.createElement('span');
    const incompleteButton = document.createElement('button');
    const itemDelete = document.createElement('span');
    const deleteButton = document.createElement('button');

    itemDiv.className = "item";
    itemDiv.id = elementId;

    itemDescription.className = "item-description";
    itemDescription.innerText = elementId;

    editButton.innerText = "Edit";
    itemEdit.appendChild(editButton);
    itemEdit.className = "item-edit";

    incompleteButton.innerText = "Incomplete";
    incompleteButton.onclick = () => incompleteItem(elementId);
    itemIncomplete.appendChild(incompleteButton);
    itemIncomplete.className = "item-incomplete";

    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => deleteCompletedItem(elementId);
    itemDelete.appendChild(deleteButton);
    itemDelete.className = "item-delete";

    itemDiv.append(itemDescription, itemEdit, itemIncomplete, itemDelete);

    const toDoList = document.getElementById("completed-list");
    toDoList.appendChild(itemDiv);
}

function completeItem(elementId) {
    addCompletedItem(elementId);
    deleteToDoItem(elementId);
}

function incompleteItem(elementId) {
    addToDoItem(elementId);
    deleteCompletedItem(elementId);
}

function displayLists() {
    displayToDo();
    displayCompleted();
}

function displayToDo() {
    document.getElementById("to-do-list").innerHTML = "";
    for (let item of toDoList) {
        displayToDoItem(item);
    }
}

function displayCompleted() {
    document.getElementById("completed-list").innerHTML = "";
    for (let item of completedList) {
        displayCompletedItem(item);
    }
}

function addToDoItem(elementId) {
    toDoList.push(elementId);
    displayToDo();
}

function addCompletedItem(elementId) {
    completedList.push(elementId);
    displayCompleted();
}