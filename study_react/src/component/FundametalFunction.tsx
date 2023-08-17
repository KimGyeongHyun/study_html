import { useState, useRef } from 'react'; // state 사용
import Article from './CRUD_component/Article';
import Header from './CRUD_component/Header';
import Nav from './CRUD_component/Nav';
import Create from './CRUD_component/Create';
import Update from './CRUD_component/Update';
// import { UNSAFE_DataRouterStateContext } from 'react-router-dom';

// 리액트 장점
// 1. component 를 함수화하여 사용할 수 있음
//  -> component 단위로 수정, 추가, 삭제 가능
//  -> html 으로만 구성하면 많은 div 로 인해 코드가 더러워짐. 이를 해결할 수 있음
// 2. 링크를 눌렀을 때 다른 페이지로 이동하는 대신 한 페이지에서 모두 처리할 수 있음
//  (데이터 변경시 효율적인 랜더링 수행 가능)
//  -> component 함수화 덕분. 조건문으로 어떤 component 를 보여줄지 결정할 수 있음

// component 함수화와 동시에 필요한 정보를 파라미터로 전달할 수 있기 때문에
// 선언부에 큰 틀만 잡고 출력할 정보들을 파라미터로 전달하는 방식을 사용할 수 있음
// state 변경 시 재랜더링 되기 때문에 바뀐 상태로 선언부부터 다시 정의하여 component 를 표현할 수 있음
// 즉, component 에서 유동적으로 바뀌는 것들은 js 반복문, {} 로 구성하기

// component 의 return 부는 html 형식으로 작성되지만
// js 안에서 html 문법을 작성하는 것이기 때문에 실제로 html 문법을 사용하는 것이 아니라
// js 에서 html 로 '작성하게끔' 해주는 JSX 문법을 사용한다
//    (원래는 React.~~~ 의 방식으로 component 가 생성됨)
//    (js 에서 작성한 html 문법을 react 문법으로 바꿔주는 역할을 함)
// 때문에 실제 html 문법과 조금 다를 수 있으며
// class 는 js 에서 class 선언부에 사용되기 때문에
// class='' 대신 className='' 으로 사용하는게 좋다

// 각 function 을 component 라고 부름
// 하나의 태그를 component 로 구성하여 리턴하는 방식
// 여러 개의 태그를 한꺼번에 리턴하고 싶으면 <></> 안에 싸서 리턴하면 된다
// component 에 전달되는 것 : props
// props 에 속성값이 한꺼번에 들어간다
// 속성에 변수, 리스트, 함수 모두 들어감

function Fundamental_function() {
	// 객체 배열을 만들어 Nav props에 전달

	// 어떤 요소를 클릭했을 때 js 안의 변수를 바꾸면서
	// 다른 요소의 내용을 갱신해야 할 때
	// 조건문을 걸어놓고 변수를 바꾸더라도 실행되지 않는다
	// 이미 모든 코드를 돌았기 때문이다
	// 이때 state 를 사용

	// state
	// 0 : 상태의 값을 읽을 때 사용하는 데이터
	// 1 : 상태 값 변경할 때 사용하는 함수
	// 함수 실행 중 값이 변경되지 않는다면 통과, 변했다면 처음으로 돌아감

	// mode 에 따라 content 요소를 다르게 표현
	// const _mode = useState("WELCOME");
	// console.log(_mode);
	// const mode = _mode[0];
	// const setMode = _mode[1];
	// mode : content 내용에 어떤 게 들어갈 지 결정하는 변수
	const [mode, setMode] = useState('WELCOME'); // 축약형

	// mode 값 변경할 때는 setMode(~) 사용
	// setMode 는 App 함수를 다시 실행

	// 변하는 데이터가 원시 데이터면 그대로 실행
	// 아니라면(객체, list 등) 다르게 구성해야 함
	// 객체나 list 의 경우 내부 데이터가 변경 되더라 하더라도
	// 참조값이 변하지 않았으므로 데이터가 변경 되지 않았다고 판단,
	// setState 에 따른 재랜더링이 일어나지 않는다
	// 따라서 새로운 객체를 생성하여 데이터 수정 후 setState 하는 것

	// 리스트의 경우
	// 1. newValue = [...value] 로 복제
	// 2. newValue 변경
	// 3. setValue(newValue) 로 데이터 변경

	const [id, setId] = useState(0); // id : 현재 id 저장
	const [nextId, setNextId] = useState(4); // nextId : id 가 다음으로 변할 값 저장
	// Nav 에 들어가는 id, title, body 값 저장
	const [topics, setTopics] = useState([
		{ id: 1, title: 'html', body: 'html is ...' },
		{ id: 2, title: 'css', body: 'css is ...' },
		{ id: 3, title: 'js', body: 'js is ...' },
	]);

	let content = null; // mode 에 따라 다른 내용을 보여주는 component
	let contextControl = null; // mode 가 READ 일 때만 content 맨 밑에 나오는 component

	// Header
	// content 의 내용을 기본으로 바꿈
	if (mode === 'WELCOME') {
		content = <Article title='Welcome' body='Hello, WEB'></Article>;
	}
	// Nav, Create
	// 클릭한 Nav 의 제목과 내용을 가져와 Article 로 출력
	else if (mode === 'READ') {
		let [title, body] = ['', ''];
		for (let i = 0; i < topics.length; i++) {
			if (topics[i].id === id) {
				title = topics[i].title;
				body = topics[i].body;
			}
		}
		content = <Article title={title} body={body}></Article>;
		// 형식을 지키기 위해 '/update/'+id 사용
		// <></> 는 복수의 태그를 그루핑하기 위한 태그
		// Update, Delete 요소 가짐
		contextControl = (
			<>
				{/* Update link */}
				<li>
					<a
						href={'/update/' + id}
						onClick={(event) => {
							event.preventDefault();
							setMode('UPDATE');
						}}>
						Update
					</a>
				</li>
				{/* Delete button */}
				<li>
					<input
						type='button'
						value='Delete'
						onClick={() => {
							const newTopics = [];
							for (let i = 0; i < topics.length; i++)
								if (topics[i].id !== id) newTopics.push(topics[i]);
							setTopics(newTopics);
							setMode('WELCOME');
						}}></input>
				</li>
			</>
		);
	}
	// Create
	// topics 에 새로운 내용을 추가하여 갱신
	// topics 는 state 이기 때문에 코드가 다시 실행되면서 Nav 내용이 topics 에 따라 갱신됨
	else if (mode === 'CREATE') {
		// Create component 생성
		// submit 했을 때 onCreate 함수가 실행됨
		content = (
			<Create
				onCreate={(title, body) => {
					// 1. newValue = {...value} 로 복제
					// 2. newValue 변경
					// 3. setValue(newValue) 로 데이터 변경
					const newTopic = { id: nextId, title: title, body: body }; // 유저로부터 입력받은 새로운 데이터
					const newTopics = [...topics]; // 기존 topics 깊은 복사
					newTopics.push(newTopic); // 복사된 데이터에 새로운 데이터 추가
					setTopics(newTopics); // 새로운 데이터가 추가된 데이터로 setting

					setMode('READ'); // content 를 Nav 의 li 로 바꿈
					setId(nextId); // Nav 의 마지막 li 을 index 로 잡음
					// nextId 가 Nav 의 마지막 li 을 가리키면서
					// "READ" 로 설정된 mode 에 따라 Nav 의 마지막 li 이 Article 태그로 content 에 표시된다
					setNextId(nextId + 1); // 다음으로 설정할 index +1
					// +1 값이 들어가서 처음엔 코드가 한 번 더 돌지만,
					// mode 와 nextId 값은 도는 중에 변하지 않으므로 모두 통과,
					// 해당 코드도 파라미터가 이전과 동일한 nextId+1 이므로 통과한다
				}}></Create>
		);
	}
	// Update
	// Nav 에서 선택된 요소의 title, body 를 다른 값으로 바꿈
	else if (mode === 'UPDATE') {
		// mode 가 "READ" 일 때 title, body 를 추출하는 코드
		// 해당 id (바꿀 id) 의 title, body 를 가져와 Update 의 input 값의 디폴트 값으로 넣는다
		let [title, body] = ['', ''];
		for (let i = 0; i < topics.length; i++) {
			if (topics[i].id === id) {
				title = topics[i].title;
				body = topics[i].body;
			}
		}
		// 바꿀 id 의 title, body 를 props parameter 로 전달
		content = (
			<Update
				title={title}
				body={body}
				onUpdate={(title, body) => {
					// topics 의 해당 id 내용을 갱신된 값으로 바꾼다
					const newTopics = [...topics];
					// READ 한 상태에서 update 가 되기 때문에 해당 id 가 유지된다
					const updatedTopic = { id: id, title: title, body: body };
					for (let i = 0; i < newTopics.length; i++)
						if (newTopics[i].id === id) {
							newTopics[i] = updatedTopic;
							break;
						}
					setTopics(newTopics);
					setMode('READ'); // 다시 "READ" 모드로 돌아간다
				}}></Update>
		);
	}

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

	// 태그
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

			{myHeader()}
			{myNav()}

			{/* 요소를 조건에 따라 마음대로 바꿀 수 있음 */}
			{content}

			<br></br>

			<ul>
				<li>
					<a
						href='/create'
						onClick={(event) => {
							event.preventDefault();
							setMode('CREATE');
						}}>
						Create
					</a>
				</li>
				{contextControl}
			</ul>
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
