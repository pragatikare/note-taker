// Selecting elements
const noteInput = document.getElementById("note-input");
const saveBtn = document.getElementById("save-btn");
const notesList = document.getElementById("notes-list");

// Load saved notes when the page loads
document.addEventListener("DOMContentLoaded", loadNotes);

// Save note on button click
saveBtn.addEventListener("click", saveNote);

// Function to save note
function saveNote() {
    let noteText = noteInput.value.trim();
    
    if (noteText === "") {
        alert("Please write something before saving!");
        return;
    }

    let notes = getNotesFromStorage();
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";  // Clear input
    loadNotes();  // Reload notes
}

// Function to load notes from localStorage
function loadNotes() {
    notesList.innerHTML = "";  // Clear list before adding

    let notes = getNotesFromStorage();

    notes.forEach((note, index) => {
        let li = document.createElement("li");
        li.innerHTML = ${note} <button class="delete-btn" onclick="deleteNote(${index})">X</button>;
        notesList.appendChild(li);
    });
}

// Function to delete a note
function deleteNote(index) {
    let notes = getNotesFromStorage();
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();  // Reload notes
}

// Function to get notes from localStorage
function getNotesFromStorage() {
    return localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];
}