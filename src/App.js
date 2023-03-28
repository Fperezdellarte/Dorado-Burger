
import './App.css';
import PageNavbar from './components/PageNavbar';
import FoodCard from './components/FoodCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <PageNavbar/>
      <FoodCard title="mauro"/>
    </div>
  );
}

export default App;
