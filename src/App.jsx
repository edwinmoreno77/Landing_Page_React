import { Footer } from "./components/Footer";
import { Jumbotron } from "./components/Jumbotron";
import { Navbar } from "./components/Navbar";
import { PageBody } from "./components/PageBody";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <PageBody cardNum={8} />
      <Footer />
    </>
  );
}

export default App;
