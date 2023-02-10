// import { useEffect } from 'react'
import IndexRouter from "./router/indexRouter";
import Tabbar from './views/tabbar'
// import 'antd/dist/reset.css';

function App() {
  return (
    <div className="App">
      <IndexRouter>
        <Tabbar></Tabbar>
      </IndexRouter>
    </div>
  );
}

export default App;
