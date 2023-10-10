import CompletedModals from "./components/CompletedModals";
import Header from "./components/Header";
import Main from "./components/Main";
import Modals from "./components/Modals";
import Vignette from "./components/Vignette";
import { ModalProvider } from "./context/ModalContext";
import { ModalCompletedProvider } from "./context/ModalCompletedContext";

function App() {
  return (
    <ModalProvider>
      <ModalCompletedProvider>
        <div className="App">
          <div className="container">
            <Header />
            <Main />
            <Vignette />
            <Modals />
            <CompletedModals />
          </div>
          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://www.frontendmentor.io/profile/vonjytahina"
              target="_blank"
              rel="noreferrer"
            >
              Vonjy Tahina CHAN
            </a>
            .
          </div>
        </div>
      </ModalCompletedProvider>
    </ModalProvider>
  );
}

export default App;
