import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import DayList from './DayList';
import Day from './Day';
import EmptyPage from './EmptyPage';
import CreateWord from './CreateWord';
import CreateDay from './CreateDay';

// 단어장 페이지
export default function MyBrowserRouter() {
	// body 구성에 BrowserRouter 를 사용
	// 주소가 바뀔 때마다 body 를 해당 주소의 element 로 설정
	// 해당하는 주소가 없다면 EmptyPage 로 들어감

	// Header 제목에 '/', 각 버튼에 '/create_word', '/create_day' 링크
	// DayList 의 각 버튼에 각 day 에 해당하는 링크

	// path 에 (:변수) 형태는 해당 주소를 변수처럼 사용하겠다는 의미
	// 따라서 day 뒤에 들어오는 주소는 하위 컴포넌트에서 숫자로 읽게 된다
	// key: 변수명, value: 주소의 str 값으로 리턴

	return (
		<BrowserRouter>
			<div>
				<Header />
				<Routes>
					<Route path='/' element={<DayList />}></Route>
					<Route path='/day/:day' element={<Day />}></Route>
					<Route path='/create_word' element={<CreateWord />}></Route>
					<Route path='/create_day' element={<CreateDay />}></Route>
					<Route path='*' element={<EmptyPage />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}
