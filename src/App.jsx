import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {

  return (
    <>
    <NavBar />
    {/* <ItemListContainer greetings={'Hi dear! Welcome to my website'}/> */}
    <ItemDetailContainer/>
    </>
  );
}

export default App;
