const newNote = document.querySelector('.newNote');
const notesContainer = document.querySelector('.noteSection');

newNote.addEventListener('click', function () {
    const inputNoteDiv = document.createElement('div');
    const inputNoteTitle = document.createElement('input');
    const inputNoteDescription = document.createElement('textarea');
    const inputNoteSubmit = document.createElement('button');

    inputNoteTitle.classList.add('titleText');
    inputNoteDescription.classList.add('descriptionText');
    inputNoteSubmit.classList.add('addNote');
    inputNoteSubmit.textContent = "ADD";

    inputNoteDiv.appendChild(inputNoteTitle);
    inputNoteDiv.appendChild(inputNoteDescription);
    inputNoteDiv.appendChild(inputNoteSubmit);

    // notesContainer.appendChild(inputNoteDiv);
    notesContainer.insertBefore(inputNoteDiv, notesContainer.firstChild);

    const addNote = document.querySelector('.addNote');
    const titleText = inputNoteDiv.querySelector('.titleText');
    const descriptionText = inputNoteDiv.querySelector('.descriptionText');

    addNote.addEventListener('click', function () {
        const newNoteDiv = document.createElement('div');
        const newNoteTitle = document.createElement('h2');
        const newNoteDescription = document.createElement('p');

        const newNoteDivider = document.createElement('hr');

        const deleteNote = document.createElement('button');

        const titleValue = titleText.value;
        const descriptionValue = descriptionText.value;

        newNoteTitle.textContent = titleValue;
        newNoteDescription.textContent = descriptionValue;
        deleteNote.textContent = "DELETE";

        newNoteDiv.appendChild(newNoteTitle);
        newNoteDiv.appendChild(newNoteDescription);
        newNoteDiv.appendChild(deleteNote);
        newNoteDiv.appendChild(newNoteDivider);

        notesContainer.appendChild(newNoteDiv);

        deleteNote.addEventListener('click', function() {
            notesContainer.removeChild(newNoteDiv)
        })

        notesContainer.removeChild(inputNoteDiv);

        titleText.value = '';
        descriptionText.value = '';
    });
});
