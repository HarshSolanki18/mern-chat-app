import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import { ThemeProvider,ThemeState } from "./Context/ThemeProvider";

function App() {
  const {theme,setTheme}=ThemeState();
  return (
    
      
    <div className={theme==='light' ?"App-light":"App-dark"}>
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
    
  );
}

export default App;
