import Router from "./Router";
import "./styles/global.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Header open={open} setOpen={setOpen} />

      <Router />
    </div>
  );
}

export default App;
