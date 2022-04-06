import { PostFeed } from './views/PostFeed';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider> 
        <PostFeed />
      </GlobalProvider> 
    </div>
  );
}

export default App;
