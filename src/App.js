import './App.css';
import Card from './components/Card';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className="flex justify-center m-0 bg-bckg ">
      <Card>
        <ListaTareas/>
      </Card>
    </div>
  );
}

export default App;
