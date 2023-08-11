import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Header'
import DayList from './DayList'
import Day from './Day'

export default function MyBrowserRouter() {
    return <BrowserRouter>
        <div>
            <Header/>
            <Routes>
                <Route path='/'><DayList/></Route>
                <Route path='/day'><Day/></Route>
            </Routes>
        </div>
    </BrowserRouter>
}