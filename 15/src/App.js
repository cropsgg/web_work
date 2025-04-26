import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  createContext,
  useContext,
} from "react";
import PropTypes from "prop-types";
import "./styles.css";

// Theme context
const ThemeContext = createContext();

// Joke list for Task 1
const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
];

const App = () => {
  const [section, setSection] = useState(1);
  const [joke, setJoke] = useState("");
  const [lifecycleVisible, setLifecycleVisible] = useState(true);
  const [theme, setTheme] = useState("light");
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const [refSubmitted, setRefSubmitted] = useState({ name: "", email: "" });
  const inputFocusRef = useRef();
  const [apiJoke, setApiJoke] = useState("");
  const [countState, setCountState] = useState(0);
  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return state + 1;
      case "DEC":
        return state - 1;
      default:
        return state;
    }
  };
  const [countReducer, dispatch] = useReducer(reducer, 0);

  // Fetch joke for API task
  useEffect(() => {
    if (section === 9) {
      fetchJoke();
    }
  }, [section]);

  const fetchJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setApiJoke(`${data.setup} - ${data.punchline}`);
  };

  return (
    <div className="container">
      <h1>JSX Part 3 - All Tasks in One App</h1>
      <div className="btn-group">
        {[...Array(12)].map((_, i) => (
          <button key={i} onClick={() => setSection(i + 1)}>
            Task {i + 1}
          </button>
        ))}
      </div>

      <div className="section">
        {section === 1 && (
          <>
            <h2 className="title">Task 1: Header, Content, Footer</h2>
            <h3>My Joke App</h3>
            <button onClick={() => setJoke(jokes[Math.floor(Math.random() * jokes.length)])}>
              Get Random Joke
            </button>
            <p>{joke}</p>
            <footer>©️ 2025 My Joke App</footer>
          </>
        )}

        {section === 2 && (
          <>
            <h2 className="title">Task 2: Inline Styled Button</h2>
            <button style={{ backgroundColor: "blue", padding: "10px", color: "white" }}>
              Inline Button
            </button>
          </>
        )}

        {section === 3 && (
          <>
            <h2 className="title">Task 3: Internal CSS</h2>
            <style>
              {`
                .internal-btn {
                  background-color: green;
                  color: white;
                  padding: 10px;
                  font-size: 16px;
                }
              `}
            </style>
            <button className="internal-btn">Internal CSS Button</button>
          </>
        )}

        {section === 4 && (
          <>
            <h2 className="title">Task 4: External CSS</h2>
            <button className="external-style-btn">External CSS Button</button>
          </>
        )}

        {section === 5 && (
          <>
            <h2 className="title">Task 5: Lifecycle</h2>
            <button onClick={() => setLifecycleVisible(!lifecycleVisible)}>
              {lifecycleVisible ? "Unmount" : "Mount"} Component
            </button>
            {lifecycleVisible && <LifecycleDemo />}
          </>
        )}

        {section === 6 && (
          <>
            <h2 className="title">Task 6: Parent to Child Props</h2>
            <Child message="Message from Parent!" />
          </>
        )}

        {section === 7 && (
          <>
            <h2 className="title">Task 7: Props Validation</h2>
            <Child message="Prop is validated!" />
          </>
        )}

        {section === 8 && (
          <>
            <h2 className="title">Task 8: useState & useReducer</h2>
            <p>useState Count: {countState}</p>
            <button onClick={() => setCountState(countState + 1)}>Increase</button>
            <button onClick={() => setCountState(countState - 1)}>Decrease</button>
            <hr />
            <p>useReducer Count: {countReducer}</p>
            <button onClick={() => dispatch({ type: "INC" })}>Increase</button>
            <button onClick={() => dispatch({ type: "DEC" })}>Decrease</button>
          </>
        )}

        {section === 9 && (
          <>
            <h2 className="title">Task 9: useEffect API</h2>
            <p>{apiJoke}</p>
            <button onClick={fetchJoke}>Get New Joke</button>
          </>
        )}

        {section === 10 && (
          <>
            <h2 className="title">Task 10: useRef Focus</h2>
            <input ref={inputFocusRef} placeholder="Type here" />
            <button onClick={() => inputFocusRef.current.focus()}>Focus Input</button>
          </>
        )}

        {section === 11 && (
          <ThemeContext.Provider value={theme}>
            <h2 className="title">Task 11: useContext Theme</h2>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              Toggle Theme
            </button>
            <ThemeDisplay />
          </ThemeContext.Provider>
        )}

        {section === 12 && (
          <>
            <h2 className="title">Task 12: Forms (useState & useRef)</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                value={nameState}
                onChange={(e) => setNameState(e.target.value)}
                placeholder="Name (useState)"
              />
              <input
                value={emailState}
                onChange={(e) => setEmailState(e.target.value)}
                placeholder="Email (useState)"
              />
              <p>Name: {nameState}, Email: {emailState}</p>
            </form>
            <hr />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setRefSubmitted({
                  name: nameRef.current.value,
                  email: emailRef.current.value,
                });
              }}
            >
              <input ref={nameRef} placeholder="Name (useRef)" />
              <input ref={emailRef} placeholder="Email (useRef)" />
              <button type="submit">Submit</button>
              <p>Name: {refSubmitted.name}, Email: {refSubmitted.email}</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

// --- Child component for props tasks ---
const Child = ({ message }) => <p>{message}</p>;
Child.propTypes = { message: PropTypes.string.isRequired };

// --- LifecycleDemo for Task 5 ---
class LifecycleDemo extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    return (
      <>
        <p>Lifecycle Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </>
    );
  }
}

// --- Themed component for Task 11 ---
const ThemeDisplay = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`theme-box ${theme === "dark" ? "dark" : "light"}`}>
      Current Theme: {theme}
    </div>
  );
};

export default App;