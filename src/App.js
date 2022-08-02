import Phone from './components/phone';
import Links from './admin/links'
function App() {
  return (
      <div className="grid-container">
        <div className="item1">1</div>
        <div className="item2">2</div>
        <div className="item3">3</div>  
        <div className="item4">
            <Links />
        </div>
        <div className="item5">
            <Phone />
        </div>
      </div>
  );
}

export default App;
