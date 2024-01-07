function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book() {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}

function Image() {
  return (
    <>
      <img
        src="https://m.media-amazon.com/images/I/71TRUbzcvaL._SY466_.jpg"
        alt="The Psychology of Money"
      />
    </>
  );
}

function Title() {
  return (
    <>
      <h2>The Psychology of Money</h2>
    </>
  );
}

function Author() {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };

  return (
    <>
      <h4 style={inlineHeadingStyles}>Morgan Housel</h4>
    </>
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
