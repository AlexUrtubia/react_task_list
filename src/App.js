import './App.css';
import Card from './components/Card';
import ListaTareas from './components/ListaTareas';
import { TodoManage } from "./context/TodoContext";

function App() {
  return (
    <TodoManage>
      <div className="flex justify-center h-full m-0 p-4 bg-bckg ">
        <Card>
          <ListaTareas/>
        </Card>
      </div>
    </TodoManage>
  );
}

export default App;
