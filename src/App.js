import './App.css';
import Card from './components/Card';
import ListaTareas from './components/ListaTareas';
import { TodoManage } from "./context/TodoContext";

function App() {
  return (
    <TodoManage>
      <div className="flex justify-center m-0 h-screen bg-bckg ">
        <Card>
          <ListaTareas/>
        </Card>
      </div>
    </TodoManage>
  );
}

export default App;
