import { db } from "./firebase.mjs";
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


var todo = document.getElementById('posts');

const deleteTodo = async (id) => {

    console.log(id);

    await deleteDoc(doc(db, "todoList", id));

}

window.deleteTodo = deleteTodo;



const updateTodo = async (id) => {
    console.log(id);
    const updateList = doc(db, "todoList", id);
    var updatedTitle = prompt('Enter Your Updated Title');
    // Set the "capital" field of the city 'DC'
    await updateDoc(updateList, {
        title: updatedTitle,
    }).then(() => {
        window.location.reload();
    });
}

document.getElementById('add').addEventListener('click', async () => {

    var title = document.getElementById('title').value;

    try {
        const docRef = await addDoc(collection(db, "todoList"), {
            title: title
        });
        console.log("Document written with ID: ", docRef.id);
        window.location.reload();
    } catch (e) {
        console.error("Error adding document: ", e);
    }

})

const querySnapshot = await getDocs(collection(db, "todoList"));
querySnapshot.forEach((doc) => {
    todo.innerHTML += `<h1>${doc.data().title}</h1><button onclick="deleteTodo('${doc.id}')">delete</button><button onclick="updateTodo('${doc.id}')">Update</button>`
});


window.deleteTodo = deleteTodo;
window.updateTodo = updateTodo;