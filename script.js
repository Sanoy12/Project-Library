const addBook = document.querySelector(".form");
const formDisplay = document.querySelector(".form-display");
const btnCloseForm = document.querySelector(".close-form");
const addBookBtn = document.querySelector(".add-book");
const submitBtnOnForm = document.querySelector(".sub-btn");
const overlay = document.querySelector(".overlay");
const main_content = document.querySelector(".main-content");
const mainCard = document.createElement("div");
let isRead = "Read";
let statuses = document.getElementById("status").value;
function Books(title, author, page, status) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.status = status;
}

let myLibrary = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    page: 163,
    status: "read",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki and Sharon Lechter",
    page: 243,
    status: "read",
  },
];

let status = document.getElementById("status").value;
function addBookToLibrary(e) {
  e.preventDefault();
  closeForm();

  let title = document.getElementById("book-name").value;
  let author = document.getElementById("author").value;
  let page = document.getElementById("pages").value;
  let status = document.getElementById("status").value;
  const book = new Books(title, author, page, status);
  myLibrary.push(book);
  displayBook();
}

main_content.addEventListener("click", (e) => {
  // console.log(e.target);
  deleteBook(e.target);
});
function deleteBook(el) {
  if (el.classList.contains("btn-remove")) {
    el.parentElement.remove();
    // el.parentElement.classList.add("hidden");
    // displayBook();
    // delete el.parentElement;
  }
}

// const hh = document.querySelectorAll(".btnStatus");
// hh.addEventListener("click", function () {
//   console.log("hello");
// });
function openForm() {
  formDisplay.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
formDisplay.classList.add("hidden");
overlay.classList.add("hidden");
const closeForm = function () {
  formDisplay.classList.add("hidden");
  overlay.classList.add("hidden");
  // formDisplay.textContent = "";
  document.getElementById("book-name").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  // document.getElementById("status").value = "";
};

addBookBtn.addEventListener("click", openForm);
btnCloseForm.addEventListener("click", closeForm);

addBook.addEventListener("submit", (e) => addBookToLibrary(e));
// const submitForm = function (event) {
//   event.preventDefault();
//   closeForm();
//   let title = document.getElementById("book-name").value;
//   let author = document.getElementById("author").value;
//   let page = document.getElementById("pages").value;
//   let status = document.getElementById("status").value;
//   const book = new Books(title, author, page, status);
//   myLibrary.push(book);

//   console.log(myLibrary);
//   displayBook();
// };
// const changeStatus = function () {
//   const btn = document.querySelector(".btn")
//   btn.addEventListener("click",()={
//     isRead="Read"?"Not Read Yet":"Read"
//   })
// };

function displayBook() {
  main_content.textContent = "";

  myLibrary.forEach((book, index) => {
    const mainCard = document.createElement("div");
    mainCard.className = "card";
    mainCard.innerHTML = ` <h2>Tittle: ${book.title}</h2>
      <h3>Author: ${book.author}</h3>
      <h4>Pages: ${book.page}</h4>
      <button class="btnStatus" onclick="toggleText(this)">Change read status</p>
      <button class="btn-remove">remove</button>`;
    // console.log(mainCard.setAttribute("data-index", index));

    main_content.append(mainCard);
    // console.log(myLibrary.splice(index, 1));
  });
}
const hh = document.querySelectorAll(".readStatus");
displayBook();
// const hh = document.querySelector("#btnStatus");
// hh.addEventListener("click", () => {
//   if (mainCard.contains("#btnStatus")) {
//     console.log("ff");
//   }
// });
//onclick?
// displayBook();
// function displayBook() {}
// myLibrary.push(book);
// displayBook();
// 0920426893;
// myLibrary.push(book);

//how to change select option onclick?
// how to remove an object from an array?
function toggleText(event) {
  var text = event.textContent || event.innerText;
  if (text == "Read") {
    event.innerHTML = "Not Read Yet";
  } else {
    event.innerHTML = "Read";
  }
}
