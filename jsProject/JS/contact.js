var titleInput = document.querySelector('.titleInput');
var bodyInput = document.querySelector('.bodyInput');
var form = document.querySelector('form');
var notes = document.querySelector('.notes');
var formSubmitBtn = document.querySelector('.formBtn');

var updateBtn = document.querySelectorAll('.upd');
var formUpdateBtn = document.querySelector('.formUpdate');
var indexToBeUpdated;

var formDeleteBtn = document.querySelector('.formDelete');

var notesArray = [];

function getLocalStorageData() {
    var data = JSON.parse(localStorage.getItem('notesLS'));
    notesArray = data || [];
    console.log(notesArray);
    readNotesInHTML();
}

getLocalStorageData();

formSubmitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    createNewNote();
    readNotesInHTML();
});

function createNewNote() {
    notesArray.push({
        title: titleInput.value,
        body: bodyInput.value
    });

    localStorage.setItem('notesLS', JSON.stringify(notesArray));
    
    titleInput.value = '';
    bodyInput.value = '';

    updateBtn = document.querySelectorAll('.upd');
}

function readNotesInHTML() {
    notes.innerHTML = '';

    for (var x = 0; x < notesArray.length; x++) {
        notes.innerHTML += `
            <div class="note">
                <div>
                    <h3>${notesArray[x].title}</h3>
                    <p>${notesArray[x].body}</p>
                </div>
                <div class="actions"> <!-- Actions container for buttons -->
                    <button class="upd">Update</button>
                    <button class="del" data-index="${x}">Delete</button> <!-- Add Delete button -->
                </div>
            </div>
        `;
    }

    updateBtn = document.querySelectorAll('.upd');
    var deleteBtns = document.querySelectorAll('.del')
    NoteUpdateBtn();
    NoteDeleteBtn(deleteBtns)
}

function NoteUpdateBtn() {
    updateBtn.forEach(function(btn, idx) {
        btn.addEventListener('click', function() {
            bodyInput.value = notesArray[idx].body;
            titleInput.value = notesArray[idx].title;

            indexToBeUpdated = idx;

            formSubmitBtn.classList.add('hide');
            formUpdateBtn.classList.remove('hide');
        });
    });
}
NoteUpdateBtn();


function NoteDeleteBtn(deleteBtns) { // Function to handle individual note deletion
    deleteBtns.forEach(function(btn, idx) {
        btn.addEventListener('click', function() {
            notesArray.splice(idx, 1); // Remove the note at the current index
            localStorage.setItem('notesLS', JSON.stringify(notesArray)); // Update local storage
            readNotesInHTML(); // Refresh displayed notes
        });
    });
}


formUpdateBtn.addEventListener('click', function() {
    notesArray[indexToBeUpdated].title = titleInput.value;
    notesArray[indexToBeUpdated].body = bodyInput.value;

    localStorage.setItem('notesLS', JSON.stringify(notesArray));
});

formDeleteBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission
    notesArray = []; // Clear the notesArray
    localStorage.setItem('notesLS', JSON.stringify(notesArray)); // Update local storage
    readNotesInHTML(); // Refresh the displayed notes
});
