let myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

// GET BOOKS FROM LOCAL STORAGE
if (localStorage.getItem('books') === null) {
  myLibrary = [];
} else {
  const booksFromStorage = JSON.parse(localStorage.getItem('books'));
  myLibrary = booksFromStorage;
}


//write the logic to show how many books are read, how many books are unread and total books.
function showLibraryInfo() {
  const booksRead = document.querySelector('#books-read');
  const booksUnread = document.querySelector('#books-unread');
  const totalBooks = document.querySelector('#total-books');
  let readCounter = 0;
  let unreadCounter = 0;
  booksRead.textContent = 0;
  booksUnread.textContent = 0;
  
  //add your code here
}


function showBooksInLibrary() {
  // add code for  SAVE TO LOCAL STORAGE
 
  for (let i = 0; i < myLibrary.length; i += 1) {
   
    //add code for BOOK TITLE
    
    // add code for BOOK AUTHOR
  
    // add code for BOOK PAGES
    
    // add code for  BOOK STATUS BUTTON
    
    // add code for BOOK REMOVAL BUTTON
    
  }
}

//add book to library
function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
  showBooksInLibrary();
}

// FORM VALIDATION
function validateForm(event) {
// add your code for form validatin and call addBookToLibrary() also reset the form after a book is added
}

// MODAL/POP-UP FOR BOOKS REMOVAL
function manipulateModal() {
  const modal = document.querySelector('#modal');
  modal.style.display = 'block';
  modal.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('close')) {
      modal.style.display = 'none';
    } else if (target.classList.contains('confirm-removal')) {
      myLibrary = [];
      modal.style.display = 'none';
    }
  });
}

//create click listeners  document.addEventListener('click', {}) for the following id's: // 'add-book' // 'delete-all-btn' // 'fa-trash-alt' // 'fa-check'// 'fa-times'
function listenClicks() {
  document.addEventListener('click', (event) => {
    const { target } = event;
    const tr = target.parentNode.parentNode.rowIndex - 1;
    // add your code here 
    showBooksInLibrary();
  });
}

showBooksInLibrary();
listenClicks();
