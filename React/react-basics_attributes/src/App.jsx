import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article_title">This is a Header</h2>
      <p>This is not a long text.</p>
      <label htmlFor="buttonElement"></label>
      <input
        type="button"
        id="buttonElement"
        value="Submit"
        onClick={() => console.log("Hello React World")}
      ></input>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
        className="article_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        This is a Link
      </a>
    </article>
  );
}
