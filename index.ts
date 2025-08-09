interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
}

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  listBook(): void {
    this.books.forEach((b) => {
      console.log(b);
    });
  }

  searchBookByTitle(title: string): Book | undefined {
    for (let b of this.books) {
      if (b.title === title) {
        return b;
      }
    }
    return undefined;
  }
}

// manual test using object
const library = new Library();
library.addBook({
  id: 1,
  title: "Typescript",
  author: "Antonio",
  available: true,
});
library.addBook({
  id: 2,
  title: "Typescript 2",
  author: "Another",
  available: false,
});

library.listBook();
console.log(library.searchBookByTitle("Typescript"));
