const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  if (!title.value || !author.value || !year.value) {
    alert('Please fill in all fields');
    return;
  }

  const bookEntry = document.createElement('section');
  bookEntry.classList.add('book-entry');

  const titleDiv = document.createElement('div');
  titleDiv.textContent = title.value;

  const authorDiv = document.createElement('div');
  authorDiv.textContent = author.value;

  const yearDiv = document.createElement('div');
  yearDiv.textContent = year.value;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'EDIT'
  
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'DELETE'

  bookEntry.appendChild(titleDiv);
  bookEntry.appendChild(authorDiv);
  bookEntry.appendChild(yearDiv);
  bookEntry.appendChild(editBtn);
  bookEntry.appendChild(deleteBtn);

  bookList.appendChild(bookEntry);

  deleteBtn.addEventListener ('click', function(e) {
    e.preventDefault();
    bookList.removeChild(bookEntry);
})

editBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Create a form or modal for editing book details
    const editForm = document.createElement('form');
    editForm.innerHTML = `
      <label for="editTitle">Edit Title:</label>
      <input type="text" id="editTitle" value="${title.value}" />
      
      <label for="editAuthor">Edit Author:</label>
      <input type="text" id="editAuthor" value="${author.value}" />
      
      <label for="editYear">Edit Year:</label>
      <input type="number" id="editYear" value="${year.value}" />
      
      <button type="submit">Update</button>
    `;
    
    // Handle form submission
    editForm.addEventListener('submit', function (e) {
      e.preventDefault();
      titleDiv.textContent = document.getElementById('editTitle').value;
      authorDiv.textContent = document.getElementById('editAuthor').value;
      yearDiv.textContent = document.getElementById('editYear').value;

      // Remove the edit form after updating
      bookEntry.removeChild(editForm);
    });

    // Append the edit form to the book entry
    bookEntry.appendChild(editForm);
  });

  title.value = '';
  author.value = '';
  year.value = '';
});
