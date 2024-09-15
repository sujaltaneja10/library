const container = document.querySelector('.show')

document.querySelector('button').addEventListener('click', () => {

    const output = document.createElement('div');
    container.appendChild(output)
    output.classList.add('output');

    const bookName = document.querySelector("#book-name").value;
    const bookAuthor = document.querySelector("#book-author").value;
    const pages = document.querySelector("#pages").value;
    const haveRead = document.querySelector("#status").value;

    const book = new addToBook(bookName, bookAuthor, pages, haveRead);
    
    for (let key in book) {
        const span = document.createElement('span');
        output.appendChild(span);
        span.classList.add('os');
        if (key == 'haveRead') {
            const readBtn = document.createElement('button');
            span.appendChild(readBtn);
            readBtn.classList.add('readBtn');
            readBtn.textContent = book[key];
        }
        else {
            span.textContent = book[key];
        }
    }

    const span = document.createElement('span');
    output.appendChild(span);
    span.classList.add('os');
    const deleteBtn = document.createElement('button');
    span.appendChild(deleteBtn);
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'DELETE';

    const hr = document.createElement('hr');
    container.appendChild(hr);
    hr.classList.add('hr');
});

function addToBook(book, author, pages, haveRead) {
    this.book = book;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

document.addEventListener('click', (btn) => {
    if (btn.target.classList.contains('readBtn')) {
        if (btn.target.textContent === 'READ') {
            btn.target.textContent = 'NOT READ';
        }
        else {
            btn.target.textContent = 'READ';
        }
    }
})

// event delegation.
document.addEventListener('click', (btn) => {
    if (btn.target.classList.contains('deleteBtn')) {
        const outputDiv = btn.target.closest('.output');
        outputDiv.nextElementSibling.remove(); // removes hr
        outputDiv.remove();
    }
});