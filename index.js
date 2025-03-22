function fetchBooks() {
  // Fetch data from the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json()) // Convert response to JSON
    .then(data => renderBooks(data)) // Pass JSON data to renderBooks function
    .catch(error => console.error("Error fetching books:", error)); // Handle errors
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach(book => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// Ensure fetchBooks() is called when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});

