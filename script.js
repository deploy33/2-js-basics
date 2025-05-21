// 1. Заполните объект и выведите ниже указанные поля:
//     - Создайте объект, где есть свойства: `name` (имя), `age` (возраст), `subject` (предмет), `grade` (оценка). Вы должны заполнить эти данные через `prompt`.
const user = {
    name: '',
    age: '',
    subject: '',
    grade: ''
};
console.log(user);


user.name = ''+prompt("Enter your name: ");
console.log(user.name);

user.age = +prompt("Enter your age: ");
console.log(user.age);

user.subject = ''+prompt("Enter your subject: ");
console.log(user.subject);

user.grade = +prompt("Enter your grade: " );
console.log(user.grade);

//     - Увеличьте возраст пользователя на 5.

const userAgeNew = +user.age + 5;
console.log(userAgeNew);


alert(`Your new age is: ${userAgeNew}`);


//     - Выведите результаты каждого шага в консоль.


// 2. Скопируйте приведенный ниже array movies в свой код и выполните следующие шаги:

const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];

// - Выведите в консоль режиссёра второго фильма.
console.log(movies[1].director); //Роберт Земекис

// - Выведите в консоль жанр четвёртого фильма. 
console.log(movies[3].genre); //триллер


// 3. Создайте массив строк, представляющий список покупок: `["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"]`. И выполните последующие задачи:
const arr = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
//     - Добавьте новый товар в начало массива.
arr.unshift('апельсин');
console.log(arr);
//     - Удалите последний товар из массива.
arr.shift();
console.log(arr);
//     - Замените третий элемент массива (индекс 2) на два новых товара с помощью `splice`.
arr.splice(2, 1, "кокос", "арбуз");
console.log(arr);


// 4. Переписать этот код, используя цикл while.
//                👇
// const numbers = [52, 31, 9, 85, 31, 45];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(`Сумма чисел: ${sum}`); // 253

const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;
while(i < numbers.length) {
  sum += numbers[i]; //numbers[i] (c̶o̶e̶r̶c̶e̶d̶ i̶n̶t̶o̶ a̶ n̶u̶m̶b̶e̶r̶ b̶y̶ j̶s̶ e̶n̶g̶i̶n̶e̶?̶) передаёт находящееся в нем значение, каждый раз прибавляя его к переменной sum 
  i++; //инкремент для проверки выполнения условия i < numbers.length
}
console.log(`Сумма чисел: ${sum}`);



// 5. Скопируйте приведенный ниже массив books в свой код и напишите код (желательно, используя цикл for), 
// который выводит информацию о книгах, включая их награды, каждая награда на отдельной строке:

// const books = [
//   { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
//   { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
//   { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
//   { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
// ];

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
  { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
  { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
  { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
];

for (let i = 0; i < books.length; i++) {
    console.log(`Название: ${books[i].title}`,
                `Автор: ${books[i].author}`, 
    `Количество страниц: ${books[i].numberOfPages}`,
                `Жанр: ${books[i].genre} \n `,
                `Награды: `)

                for (const award of books[i].awards) {
                console.log(` - ${award}`);
  }
                console.log('------------');
    }