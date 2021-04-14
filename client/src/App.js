import React from "react"
import NavBar from "./components/NavBar"
import HomePage from "./pages/Homepage"
import LeaderBoard from "./pages/LeaderBoardPage"
import GamePage from "./pages/GamePage"
import Signup from "./pages/SignupPage"
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/leaderboard" component={LeaderBoard} />
                    <Route export path="/gamepage" component={GamePage} />
            </div>
        </Router>
    )
}

export default App