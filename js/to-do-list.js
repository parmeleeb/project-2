
// Array Lists that contain strings of the lists items
const toDoList = ['clean the house', 'do the laundry', "check the quo'tations"];
const completedList = ['wash the dishes', 'check the apo"strophes'];

// This function is called when the body of the HTML page loads
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

function displayToDoItem(elementId) {

    // creating all of the elements of the To Do list item
    const itemDiv = document.createElement('div');
    const itemDescription = document.createElement('span');
    const itemEdit = document.createElement('span');
    const editButton = document.createElement('button');
    const itemComplete = document.createElement('span');
    const completeButton = document.createElement('button');
    const itemDelete = document.createElement('span');
    const deleteButton = document.createElement('button');

    // assigning values to the different elements
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

    // append each individial part to the div as a whole
    itemDiv.append(itemDescription, itemEdit, itemComplete, itemDelete);

    //append the item div to the To Do List div
    const toDoList = document.getElementById("to-do-list");
    toDoList.appendChild(itemDiv);
}

function displayCompletedItem(elementId) {

    // creating all of the elements of the Completed list item
    const itemDiv = document.createElement('div');
    const itemDescription = document.createElement('span');
    const itemEdit = document.createElement('span');
    const editButton = document.createElement('button');
    const itemIncomplete = document.createElement('span');
    const incompleteButton = document.createElement('button');
    const itemDelete = document.createElement('span');
    const deleteButton = document.createElement('button');

    // assigning values to the different elements
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

    // append each individial part to the div as a whole
    itemDiv.append(itemDescription, itemEdit, itemIncomplete, itemDelete);

    //append the item div to the Completed List div
    const toDoList = document.getElementById("completed-list");
    toDoList.appendChild(itemDiv);
}

// these functions add item to the lists then re-call the respective display functions
function addToDoItem(elementId) {
    toDoList.push(elementId);
    displayToDo();
}

function addCompletedItem(elementId) {
    completedList.push(elementId);
    displayCompleted();
}


// insert edit function here


// these functions transfer the item to the other list by calling the add and delete functions
function completeItem(elementId) {
    addCompletedItem(elementId);
    deleteToDoItem(elementId);
}

function incompleteItem(elementId) {
    addToDoItem(elementId);
    deleteCompletedItem(elementId);
}

// remove the passed item from the respective 
function deleteToDoItem(elementId) {
    toDoList.splice(toDoList.indexOf(elementId), 1);
    displayToDo();
}

function deleteCompletedItem(elementId) {
    completedList.splice(completedList.indexOf(elementId), 1);
    displayCompleted();
}