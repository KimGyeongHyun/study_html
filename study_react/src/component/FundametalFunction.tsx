import { useState } from 'react'; // state 사용
import Header from './CRUD_component/Header';
import Nav from './CRUD_component/Nav';
import Component from './CRUD_component/InnerComponent';
import './CRUD_component/componentForm';

function Fundamental_function() {
	// mode 에 따라 content 요소를 다르게 표현
	const [mode, setMode] = useState('WELCOME');
	// Article 목록
	const [topics, setTopics] = useState([
		{ id: 1, title: 'html', body: 'html is ...' },
		{ id: 2, title: 'css', body: 'css is ...' },
		{ id: 3, title: 'js', body: 'js is ...' },
	]);
	const [id, setId] = useState(0); // myComponent 가 어떤 Article 에 포커싱할지 선택
	const [nextId, setNextId] = useState(4); // nextId : id 가 다음으로 변할 값 저장

	// Header
	// 컴포넌트 변화 X, setMode event
	const myHeader = () => {
		return (
			<Header
				title='WEB'
				onChangeMode={() => {
					setMode('WELCOME');
				}}
			/>
		);
	};

	// Nav
	// 재랜더링시 topics 에 따라 내용 갱신
	// setMode, setId event
	// setId 로 myComponent 이 포커싱할 Article 지정
	const myNav = () => {
		return (
			<Nav
				topics={topics}
				onChangeMode={(id) => {
					setMode('READ');
					setId(id);
				}}></Nav>
		);
	};

	// mode 에 따라 달라지는 컴포넌트
	// 재랜더링시 mode, topics, id 에 따라 내용 갱신
	// mode === "WELCOME" : welcomd 문구 출력 / 하단에 create link
	// mode === "READ" : topics[id] Article 출력 / 하단에 create, update, delete link
	// mode === "CREATE" : fomr 태그 출력
	// mode === "UPDATE" : form 태그 출력
	// setState 함수로 topics, id, nextID 업데이트
	const myComponent = () => {
		return (
			<Component
				mode={mode}
				topics={topics}
				id={id}
				nextId={nextId}
				onChangeMode={(mode: string) => {
					setMode(mode);
				}}
				onChangeTopics={(topics: Array<TopicProps>) => {
					setTopics(topics);
				}}
				onChangeId={(id: number) => {
					setId(id);
				}}
				onChangeNextId={(id: number) => {
					setNextId(id);
				}}
			/>
		);
	};

	return (
		<div style={{ padding: '20px' }}>
			<h2>WEB 하단에 ol 형식으로 Article들이 들어있습니다</h2>
			<h2>ol 하단 컴포넌트는 state 에 따라 유동적으로 바뀝니다</h2>
			<ul>
				<li>WEB 을 클릭할 경우 Welcome 으로 바뀝니다</li>
				<li>ol li 를 클릭할 경우 해당 Article 내용으로 바뀝니다</li>
				<li>create 를 누를 경우 폼태그가 나오며, 제출하면 ol 에 추가됩니다</li>
				<li>
					update 를 누를 경우 폼태그가 나오며, 제출하면 현재 Article 내용이
					갱신됩니다
				</li>
				<li>delete 를 누를 경우 해당 Article 이 ol 에서 삭제됩니다</li>
			</ul>

			<p>현재 섹션은 db를 사용하지 않아 데이터가 갱신되지 않습니다</p>
			<p>페이지가 전환되면 내용이 저장되어 있지 않습니다</p>

			{/*Header, Nav*/}
			{myHeader()}
			{myNav()}

			{/* 요소를 조건에 따라 마음대로 바꿀 수 있음 */}
			{myComponent()}
		</div>
	);
}

export default Fundamental_function;

// 정리

// props 에 필요한 데이터를 담아 전달해서 이벤트를 수행한다
// state 변수를 바꾸는 행위는 props 함수 안에서만 한다
// props 안의 함수는 선언문이므로 함수의 파라미터 변수를 같이 전달하는 게 아니다

// create, update 는 a 태그이기 때문에 클릭했을 때 함수가 바로 실행, state 변수를 갱신한다
// Header, Nav 는 component 선언부에 a 태그가 존재하여 onClick 이벤트를 따로 주고,
// onClick 안에서 props 함수를 불러 state 변수를 갱신한다
// 모든 a 태그의 기본 기능은 제거

// Nav 선언부는 js 문법으로 li 를 topics 만큼 생성
// state 변화로 코드가 처음부터 시작되고 선언부가 다시 한번 불릴 때
// Nav 의 내용이 topics 를 따라가게 된다
// 또한 Nav 의 li a 태그에서 onClick 이벤트가 수행될 때
// 해당 li a 태그의 id 값이 props 함수 파라미터로 전달되면서
// state 인 id 값을 갱신하게 된다
// mode 가 "READ" 일 때 해당 id 값을 참고하여 Nav 의 어떤 li 를 띄울지 결정한다

// Create
// mode 가 "CREATE" 일 때 content 는 Create component 가 나온다
// Create component 안에는 form 태그가 있으며 그 안에는 input (text, submit) 태그 가 들어있다
// App 함수에서 Create component 를 구성할 때 onCreate 라는 props 함수를 전달하며
// title, body 값을 input 을 통해 받아 state 변수인 topics 를 갱신하는 역할을 한다
// 이 함수는 Create componenet 의 submit 에 의해 불린다
// 즉, Create 를 누르면 form 태그가 나오고
// submit 을 하면 onCreate 함수라 불리며 topics 가 갱신된다
// 이후 mode, id, nextId 값도 갱신된다 (방식은 위의 실행 코드 주석 참고)

// a 태그 (그리고 a 태그 내부 props 함수) 에 의해 mode 가 갱신되며
// 조건문에 따라 content 에 보여줄 내용을 결정한다
// 형식상 state 변수 갱신 함수는 App 함수에서만 하게끔 되어 있다
// (실제로는 이벤트 상황에서 state 가 갱신됨)

// state 변경 시 무한루프에 빠질까 걱정되는 부분
// setState 는 click, submit 등 한 번만 호출되는 이벤트 상황에서만 실행된다
// 따라서 재랜더링 되는 경우에도 이벤트가 발생되지 않았으므로 setState 를 돌지 않는다
// setState 가 여러개인 onCreate 의 경우도
// submit 을 할 때만 setState 가 불리는데
// submit 은 한 번만 제출되므로 state 값이 호출되면 해당 state 는 setState 이후 다음 setState 로 지나간다
// 결국 모든 setState 를 돌고 바뀐 state 값에 따라 결과가 출력된다

// 최종 정리
// App 함수에서 이벤트 상황에 setState 를 실행할 코드를 선언하여 component 의 props 로 전달,
// component 가 호출되면서 App 에서 선언한 함수를 이벤트에 사용한다
// content 내용 변화는 mode, 나머지 세부적인 변화들은 다른 state 변수들을 사용
// 최종 내용은 App return 부에 있으며,
// 그 전의 내용은 mode 에 따른 content 내용 변경, state 선언, props 함수 선언
