import HomeContent from "./components/HomeContent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar />
        <HomeContent />
      </div>
    </div>
  );
}

export default App;
