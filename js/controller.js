google.books.load();

function search() {  
    var isbn =  document.getElementById("search-box").value;
    var book;
    console.log("isbn")
    var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
    if (isbn != "") {
        console.log(isbn);
        book = 'ISBN:' + isbn;
        viewer.load(book, alertNotFound);
    }
}

// google.books.setOnLoadCallback(search);

function clearSearch() {
    document.getElementById("search-box").value = "";
}

function alertNotFound() {
  alert("could not find the book!");
}