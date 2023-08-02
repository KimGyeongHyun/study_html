import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; // state 사용

// 각 function 을 component 라고 부름
// component 에 전달되는 것 : props
// props 에 속성값이 한꺼번에 들어간다
// 속성에 변수, 리스트, 함수 모두 들어감
function Header(props) {
  console.log('props', props,  props.title);
  return <header>
      {/* function(event) 을 event=> 로 줄여 씀 */}
      <h1><a href="/" onClick={event=>{
        event.preventDefault(); // 기본 동작 방지 (링크 연결되지 않음)
        props.onChangeMode();   // 전달받은 함수 실행
      }}>{props.title}</a></h1>
    </header>
}

// topics 의 제목을 Artical 태그로 순서대로 출력
function Nav(props) {
  // 배열 lis에 li 구성
  const lis = []

  // 반복문으로 props 배열의 객체 하나씩 불러옴
  for (let i = 0; i<props.topics.length; i++) {
    let t = props.topics[i];
    // react 에서 자동으로 생성하는 태그는 key 속성을 반드시 구별하여 줘야 함
    lis.push(<li key={t.id}>
      {
      /* 태그 속성을 부여하면 숫자도 문자열로 들어감 */
      // 따라서 태그에서 숫자를 뽑아 쓰고 싶으면 Number()로 형변환해서 쓰기
      }
      <a id={t.id} href={'/read/' + t.id} onClick={event=>{
        event.preventDefault();
        // event.targer : 이벤트를 유발시킨 태그 (a 태그)
        // 문자열이었던 id 를 숫자로 형변환
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
      </li>)
  }

  return <nav>
        <ol>
          {lis}
        </ol>
      </nav>
}

// topics 의 내용을 하나 가져와 출력
function Artical(props) {
  return <artical>
        <h2>{props.title}</h2>
        {props.body}
      </artical>
}

// title, body 를 받을 form 태그 리턴
// 
function Create(props) {
  return <article>
    <h2>Create</h2>
    {
    /* form 태그 : input 정보를 한꺼번에 처리하는 태그 */
    }
    
    <form onSubmit={event=>{
      // submit 을 하면 페이지가 리로드 되어 버린다
      // 이를 방지함
      event.preventDefault();
      // 여기서의 event.target 은 form 태그
      // 아래와 같이 값을 쉽게 가져올 수 있음
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title"></input></p>
      <p><textarea name="body" placeholder='body'></textarea></p>
      <p><input type='submit' value="Create"></input></p>
    </form>    
  </article>
}

function App() {
  // 객체 배열을 만들어 Nav props에 전달
  console.clear();

  // 어떤 요소를 클릭했을 때 js 안의 변수를 바꾸면서
  // 다른 요소의 내용을 갱신해야 할 때
  // 조건문을 걸어놓고 변수를 바꾸더라도 실행되지 않는다
  // 이미 모든 코드를 돌았기 때문이다
  // 이때 state 를 사용

  // state
  // 0 : 상태의 값을 읽을 때 사용하는 데이터
  // 1 : 상태 값 변경할 때 사용하는 함수

  // mode 에 따라 content 요소를 다르게 표현
  // const _mode = useState("WELCOME");
  // console.log(_mode);
  // const mode = _mode[0];
  // const setMode = _mode[1];
  // mode : content 내용에 어떤 게 들어갈 지 결정하는 변수
  const [mode, setMode] = useState("WELCOME");  // 축약형

  // mode 값 변경할 때는 setMode(~) 사용
  // setMode 는 App 함수를 다시 실행

  // 변하는 데이터가 원시 데이터면 그대로 실행
  // 아니라면(객체, list 등) 다르게 구성해야 함
  // 1. newValue = [...value] 로 복제
  // 2. newValue 변경
  // 3. setValue(newValue) 로 데이터 변경 
  const [id, setId] = useState(null);   // id : 현재 id 저장
  const [nextId, setNextId] = useState(4);  // nextId : id 가 다음으로 변할 값 저장
  // Nav 에 들어가는 id, title, body 값 저장
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'},
  ]);

  let content = null;

  // Header 클릭
  // content 의 내용을 Artical 로 바꿈
  if (mode === "WELCOME") {
    content = <Artical title="Welcome" body="Hello, WEB"></Artical>
  }
  // Nav 클릭, Create 클릭 이후
  // 클릭한 Nav 의 제목과 내용을 가져와 Artical 로 출력
  else if (mode === "READ") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Artical title={title} body={body}></Artical>;
  }
  // Create 클릭
  // Nav 내용에 새로운 내용을 추가하여 갱신
  // state 이기 때문에 코드가 다시 실행되면서 Nav 내용이 갱신됨
  else if (mode === "CREATE") {
    content = <Create onCreate={(title, body)=> {
      // 1. newValue = {...value} 로 복제
      // 2. newValue 변경
      // 3. setValue(newValue) 로 데이터 변경 
      const newTopic = {id:nextId, title:title, body:body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
    }}></Create>
  }

  // 태그
  return (
    <div className="App">
      {/* function() 을 ()=> 로 줄여 쓸 수 있음 */}

      <Header title="WEB" onChangeMode={()=> {
        setMode("WELCOME");
      }}></Header>

      <Nav topics={topics} onChangeMode={id=>{
        setMode("READ");
        setId(id);
      }}></Nav>

      <Artical title="Welcome" body="Hello, WEB"></Artical>
      <Artical title="Welcome" body="Hi, WEB"></Artical>
      
      {/* 요소를 조건에 따라 마음대로 바꿀 수 있음 */}
      {content}

      <br></br>

      <a href='/create' onClick={event=> {
        event.preventDefault();
        setMode("CREATE");
        // setMode('READ');
        // setId(nextId);
        // setNextId(nextId+1);
      }}>Create</a>

    </div>
  );
}

export default App;

// 정리
// content 요소를 정함
// mode 변수로 content 안에 뭐가 들어갈지 결정
// state 를 사용하면 mode 가 바꿀 때마다 전체 코드를 수행,
// 조건문에 따라 content 안의 내용이 바뀌게 된다
