import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Timeline } from "./Timeline/Timeline";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React timeline component</h1>
      <Timeline />
    </>
  );
}

export default App;
