import Article from './Article';
import Create from './Create';
import Update from './Update';
import './componentForm';

// 단어장 페이지
const myComponent = ({
	mode,
	topics,
	id,
	nextId,
	onChangeMode,
	onChangeTopics,
	onChangeId,
	onChangeNextId,
}: MyComponentProps) => {
	// BrowserRouter 를 사용
	// 주소가 바뀔 때마다 해당 주소의 element 로 설정
	// 해당하는 주소가 없다면 EmptyPage 로 들어감
	// 현재 EmptyPage 가 호출되지 않는 현상이 있음
	// path 가 없으면 조건을 타고 들어가지 않는듯

	// Nav 에 들어가는 id, title, body 값 저장
	// const [topics, setTopics] = useState([
	// 	{ id: 1, title: 'html', body: 'html is ...' },
	// 	{ id: 2, title: 'css', body: 'css is ...' },
	// 	{ id: 3, title: 'js', body: 'js is ...' },
	// ]);

	let content = null; // mode 에 따라 다른 내용을 보여주는 component
	let contextControl = null; // mode 가 READ 일 때만 content 하단에 나오는 component
	// create 만 있는 ul
	// mode === "WELCOME" 일 때 contextControl 을 해당 컴포넌트로 설정
	let justCreate = (
		<li>
			<a
				href='/create'
				onClick={(event) => {
					event.preventDefault();
					onChangeMode('CREATE');
				}}>
				Create
			</a>
		</li>
	);
	// create, update, delete 가 있는 ul
	// mode === "READ" 일 때 contextControl 을 해당 컴포넌트로 설정
	let allUl = (
		<ul>
			<li>
				<a
					href='/create'
					onClick={(event) => {
						event.preventDefault();
						onChangeMode('CREATE');
					}}>
					Create
				</a>
			</li>
			{/* Update link */}
			<li>
				<a
					href={'/update/' + id}
					onClick={(event) => {
						event.preventDefault();
						onChangeMode('UPDATE');
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
						onChangeTopics(newTopics);
						onChangeMode('WELCOME');
					}}></input>
			</li>
		</ul>
	);

	// content 의 내용을 기본으로 바꿈
	if (mode === 'WELCOME') {
		content = <Article title='Welcome' body='Hello, WEB'></Article>;
		contextControl = justCreate; // create
	}

	// 포커싱된 Article 을 id 로 찾아 출력
	else if (mode === 'READ') {
		let [title, body] = ['', ''];
		for (let i = 0; i < topics.length; i++) {
			if (topics[i].id === id) {
				title = topics[i].title;
				body = topics[i].body;
			}
		}
		content = <Article title={title} body={body}></Article>;
		contextControl = allUl; // create, update, delete
	}

	// Create
	// topics 에 새로운 내용을 추가하여 갱신
	else if (mode === 'CREATE') {
		// Create component 생성
		// submit 했을 때 onCreate 함수가 실행됨
		content = (
			<Create
				// submit 버튼을 눌렀을 때 실행되는 함수
				// mode 를 "READ" 로 바꾸고, id 를 nextId 로 바꾸면서 제일 밑에 있는 Article 을 포커싱한다
				onCreate={(title, body) => {
					// 1. newValue = {...value} 로 복제
					// 2. newValue 변경
					// 3. setValue(newValue) 로 데이터 변경
					const newTopic = { id: nextId, title: title, body: body }; // 유저로부터 입력받은 새로운 데이터
					const newTopics = [...topics]; // 기존 topics 깊은 복사
					newTopics.push(newTopic); // 복사된 데이터에 새로운 데이터 추가
					onChangeTopics(newTopics); // 새로운 데이터가 추가된 데이터로 setting

					onChangeMode('READ'); // content 를 Nav 의 li 로 바꿈
					onChangeId(nextId); // Nav 의 마지막 li 을 index 로 잡음
					// nextId 가 Nav 의 마지막 li 을 가리키면서
					// "READ" 로 설정된 mode 에 따라 Nav 의 마지막 li 이 Article 이 content 에 표시된다
					onChangeNextId(nextId + 1); // 다음으로 설정할 index +1
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
				// submit 버튼을 눌렀을 때 실행되는 코드
				// topics 를 갱신, id 는 이미 updated 된 Article 을 포커싱하고 있음
				// mode 를 READ 로 바꾸면서 바꾼 Article 로 포커싱
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
					onChangeTopics(newTopics);
					onChangeMode('READ'); // 다시 "READ" 모드로 돌아간다
				}}></Update>
		);
	}

	return (
		<>
			{content}
			{contextControl}
		</>
	);
};

export default myComponent;
