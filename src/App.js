import './App.css';
import {Route, Routes} from "react-router";
import SignInPage from "./layouts/SignInPage";
import {ThemeProvider} from "./Context/ThemeContext";
import Header from "./components/Header/Header";
import SignUpPage from "./layouts/SignUpPage";


function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/login" element={<SignInPage/>}/>
                    <Route path="/register" element={<SignUpPage/>}/>
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
