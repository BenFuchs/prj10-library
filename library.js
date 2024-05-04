// JS for all the pages

let books = [
    {"title": "Echoes of Eternity"},
    {"title": "Whispers in the Mist"},
    {"title": "Serpents and Stars"},
    {"title": "The Forgotten Symphony"},
    {"title": "Chronicles of the Celestial Gate"},
    {"title": "Shadows of the Lost Kingdom"},
    {"title": "The Alchemy of Dreams"},
    {"title": "Beyond the Veil of Time"},
    {"title": "In the Realm of Emeralds"},
    {"title": "The Oracle's Labyrinth"}
]
let borrowers = []
let borrowedBooks = []

function addBorrowedBook(customerName, bookTitle) {
    let borrowedBook = { "Customer Name": customerName, "Book": bookTitle };
    borrowedBooks.push(borrowedBook);
    localStorage.setItem("Borrowed Books", JSON.stringify(borrowedBooks));
}
localStorage.setItem("Books",JSON.stringify(books));


