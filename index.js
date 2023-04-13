const entrepreneurs = [
    { firstName: 'Steve', lastName: 'Jobs', year: 1955 },
    { firstName: 'Oprah', lastName: 'Winfrey', year: 1954 },
    { firstName: 'Bill', lastName: 'Gates', year: 1955 },
    { firstName: 'Sheryl', lastName: 'Sandberg', year: 1969 },
    { firstName: 'Mark', lastName: 'Zuckerberg', year: 1984 },
    { firstName: 'Beyonce', lastName: 'Knowles', year: 1981 },
    { firstName: 'Jeff', lastName: 'Bezos', year: 1964 },
    { firstName: 'Diane', lastName: 'Hendricks', year: 1947 },
    { firstName: 'Elon', lastName: 'Musk', year: 1971 },
    { firstName: 'Marissa', lastName: 'Mayer', year: 1975 },
    { firstName: 'Walt', lastName: 'Disney', year: 1901 },
    { firstName: 'Larry', lastName: 'Page', year: 1973 },
    { firstName: 'Jack', lastName: 'Dorsey', year: 1976 },
    { firstName: 'Evan', lastName: 'Spiegel', year: 1990 },
    { firstName: 'Brian', lastName: 'Chesky', year: 1981 },
    { firstName: 'Travis', lastName: 'Kalanick', year: 1976 },
    { firstName: 'Marc', lastName: 'Andreessen', year: 1971 },
    { firstName: 'Peter', lastName: 'Thiel', year: 1967 }
  ];

  for (let i = 0; i < entrepreneurs.length; i++) {
    console.log(entrepreneurs[i]["firstName"], entrepreneurs[i]["lastName"]);
  }
//////////////////////////////// i++ increment in a loop

const currentYear = new Date().getFullYear();

for (let i = 0; i < entrepreneurs.length; i++) {
  const age = currentYear - entrepreneurs[i].year;
  entrepreneurs[i].age = age;
  delete entrepreneurs[i].year;
}

console.log(entrepreneurs);
