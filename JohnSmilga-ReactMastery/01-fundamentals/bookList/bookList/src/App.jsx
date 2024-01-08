import img1 from "./images/book-1.jpg";
import img2 from "./images/book-2.jpg";

const books = [
  {
    author: "Morgan Housel",
    title: "The psychology of money",
    img: img1,
    key: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: img2,
    key: 2,
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author, key } = book;
        return <Book {...book} key={key.id} />;
      })}
    </section>
  );
}
function Book(props) {
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
}

function App() {
  return (
    <>
      <BookList />
    </>
  );
}

export default App;
