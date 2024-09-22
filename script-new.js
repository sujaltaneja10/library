const container = document.querySelector('.show');

let bookName = document.querySelector('#book-name');
let bookAuthor = document.querySelector('#book-author');
let pages = document.querySelector('#pages');
let haveRead = document.querySelector('#status');
let submitButton = document.querySelector('.submit');

class addBook {
    constructor(bookName, bookAuthor, pages, haveRead) {
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.pages = pages;
        this.haveRead = haveRead;
    }
}

submitButton.addEventListener('click', () => {
    const listItem = new addBook(bookName.value, bookAuthor.value, pages.value, haveRead.value);
    const output = document.createElement('div');
    container.appendChild(output);
    output.classList.add('output');
    for (key in listItem) {
        const span = document.createElement('span');
        output.appendChild(span);
        span.classList.add('os');
        if (key === 'haveRead') {
            const readBtn = document.createElement('button');
            span.appendChild(readBtn);
            readBtn.classList.add('readBtn');
            readBtn.textContent = listItem[key];

            readBtn.addEventListener('click', () => {
                if (readBtn.textContent === 'READ') {
                    readBtn.textContent = 'NOT READ';
                }
                else {
                    readBtn.textContent = 'READ';
                }
            })
        }
        else {
            span.textContent = listItem[key];
        }
    }

    const span = document.createElement('span');
    output.appendChild(span);
    span.classList.add('os');
    const deleteBtn = document.createElement('button');
    span.appendChild(deleteBtn);
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = "DELETE";

    deleteBtn.addEventListener('click', () => {
        container.removeChild(hr);
        container.removeChild(output);
    })

    const hr = document.createElement('hr');
    container.appendChild(hr);
    hr.classList.add('hr');
});