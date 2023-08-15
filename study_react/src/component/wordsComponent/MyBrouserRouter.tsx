import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import DayList from './DayList';
import Day from './Day';
import EmptyPage from './EmptyPage';
import CreateWord from './CreateWord';
import CreateDay from './CreateDay';

// 단어장 페이지
export default function MyBrowserRouter() {
	// BrowserRouter 를 사용
	// 주소가 바뀔 때마다 해당 주소의 element 로 설정
	// 해당하는 주소가 없다면 EmptyPage 로 들어감
	// 현재 EmptyPage 가 호출되지 않는 현상이 있음
	// path 가 없으면 조건을 타고 들어가지 않는듯

	return (
		<BrowserRouter>
			<div>
				<Header />
				<Routes>
					<Route path='/' element={<DayList />}></Route>
					<Route path='/day/:day' element={<Day />}></Route>
					<Route path='/create_word' element={<CreateWord />}></Route>
					<Route path='/create_day' element={<CreateDay />}></Route>
					<Route element={<EmptyPage />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}
