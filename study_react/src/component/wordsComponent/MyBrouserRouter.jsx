import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header'
import DayList from './DayList'
import Day from './Day'
import EmptyPage from './EmptyPage'

export default function MyBrowserRouter() {
    return <BrowserRouter>
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<DayList/>}></Route>
                <Route path='/day/:day' element={<Day/>}></Route>
                <Route element={<EmptyPage/>}></Route>
            </Routes>
        </div>
    </BrowserRouter>
}