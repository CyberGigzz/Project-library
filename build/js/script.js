"use strict";

const newBookBtn = document.querySelector("#newBookBtn");
const overlay = document.querySelector("#overlay");
const form = document.querySelector("#form");
const formCloseBtn = document.getElementById("formCloseBtn");
const newBookForm = document.getElementById("newForm");

// form labels
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function closeTheForm() {
  overlay.classList.add("hidden");
  form.classList.add("hidden");
  resetForm();
}

function render() {
  const container = document.querySelector("#libraryContainer");

  // Clear the existing content of the grid
  container.innerHTML = "";

  // Iterate over each book in myLibrary array
  myLibrary.forEach((book) => {
    // Background color
    const backgroundColorClass = book.read ? "bg-green-200" : "bg-red-200";

    // Create an HTML template for the book element
    const bookElement = `
    <div class="flex flex-col justify-between gap-5 p-5 rounded-lg bg-white shadow-md z-30 text-xl ">
      <h3 class="flex justify-center text-2xl font-bold">${book.title}</h3>
      <p class="flex justify-center text-base font-semibold">${book.author}</p>
      <p class="flex justify-center text-base font-semibold">${
        book.pages
      } pages</p>
      <div>
        <p class="flex justify-center text-base font-semibold rounded ${backgroundColorClass}">${
        book.read ? "read" : "Not read"
        }</p>

      </div>
    </div>
  `;

    // Append the book element to the grid
    container.insertAdjacentHTML("beforeend", bookElement);
  });
}

function addBookToLibrary() {
  let title_ = title.value;
  let author_ = author.value;
  let pages_ = pages.value;
  let read_ = read.checked;
  let newBook = new Book(title_, author_, pages_, read_);
  myLibrary.push(newBook);
  // console.log(myLibrary);

  render();

  // resetForm();
  closeTheForm();
}

function resetForm() {
  newBookForm.reset();
}

// EventListeners to manipulate Add Book
newBookBtn.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  form.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  closeTheForm();
});

formCloseBtn.addEventListener("click", function () {
  closeTheForm();
});

// EventListener for Esc key press
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeTheForm();
  }
});

// EventListener for adding new object
newBookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
});
