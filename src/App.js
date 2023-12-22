import {useState} from 'react'
import "./App.css";
import PasswordPage from "./components/PasswordPage/PasswordPage";
import InvitationPage from './components/InvitationPage/InvitationPage';

function App() {
    const [password, setPassword] = useState("");
    const confirm = '653f8b6cb2f01a4b6cff98d5'

    return (
        <div className="App">
            {password !== confirm && <PasswordPage password={password} setPassword={setPassword} confirm={confirm} />}
            {password === confirm && <InvitationPage />}
        </div>
    );
}

export default App;
