const books = [
    { id: 133712, title: 'Gatsby le magnifique', rentedCount: 39 },
    { id: 237634, title: 'A la recherche du temps,perdu', rentedCount: 28 },
    { id: 873495, title: 'Orgueil & Préjugés', rentedCount: 67 },
    { id: 450915, title: 'Les frères Karamazov', rentedCount: 55 },
    { id: 837636, title: 'Dans les forêts de Sibérie', rentedCount: 15 },
    { id: 450911, title: 'Pourquoi j\'ai mangé mon père', rentedCount: 45 },
    { id: 675651, title: 'Et on tuera tous les affreux', rentedCount: 36 },
    { id: 888475, title: 'Le meilleur des mondes', rentedCount: 58 },
    { id: 364442, title: 'La disparition', rentedCount: 33 },
    { id: 635411, title: 'La lune seule le sait', rentedCount: 43 },
    { id: 465638, title: 'Voyage au centre de la Terre', rentedCount: 38 },
    { id: 748147, title: 'Guerre et Paix', rentedCount: 19 },
  ];
///title
  const titles = books.map(books=>books.title)
  console.log(titles)

///
const HaveBeenRented = books.every(books => books.rentedCount > 0);
console.log(HaveBeenRented);

////
const mostRentedBook = books.reduce((previousBook, currentBook) => {
    return (previousBook.rentedCount > currentBook.rentedCount) ? previousBook : currentBook;
  });
  
  console.log(mostRentedBook);
///

const leastRentedBook = books.reduce((previousBook, currentBook) => {
return (previousBook.rentedCount < currentBook.rentedCount) ? previousBook : currentBook;
});

console.log(leastRentedBook);

///
const booksWithoutDeletedBook = books.filter(book => book.id !== 133712);
console.log(booksWithoutDeletedBook);

