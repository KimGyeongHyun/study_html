import {useState, useRef} from 'react'; // state 사용

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

interface HeaderProps {
  title: string;
  onChangeMode: () => void;
}
function Header(props : HeaderProps) {
  // console.log('props', props,  props.title);
  return <header>
      {/* function(event) 을 event=> 로 줄여 씀 */}
      <h1><a href="/" onClick={event=>{
        event.preventDefault(); // 기본 동작 방지 (링크 연결되지 않음)
        props.onChangeMode();   // 전달받은 함수 실행
      }}>{props.title}</a></h1>
    </header>
}

interface NavProps {
  onChangeMode: (id: number) => void;
  topics: TopicProps[];
}
interface TopicProps {
  id: number; title: string; body: string;
}
// topics 의 제목을 li 태그로 순서대로 출력
function Nav(props : NavProps) {
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
      <a id={t.id.toString()} href={'/read/' + t.id} onClick={e=>{
        e.preventDefault();
        // event.targer : 이벤트를 유발시킨 태그 (a 태그)
        // 문자열이었던 id 를 숫자로 형변환
        if (e.target instanceof Element)
          props.onChangeMode(Number(e.target.id));
      }}>{t.title}</a>
      </li>)
  }

  return <nav>
        <ol>
          {lis}
        </ol>
      </nav>
}

interface ArticleProps {
  title: string; body: string;
}
// topics 의 내용을 하나 가져와 출력
// mode 가 "WELCOME", "READ" 일 때 content 출력에 사용
function Article(props : ArticleProps) {
  return <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
}

interface CreateProps {
  onCreate: (title: string, body: string) => void;
}
// title, body 를 받을 form 태그 리턴
function Create(props : CreateProps) {

  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  return <article>
    <h2>Create</h2>
    {
    /* form 태그 : input 정보를 한꺼번에 처리하는 태그 */
    }
    
    {/* Create 버튼을 눌렀을 때 (sumbit) 실행되는 코드 */}
    <form onSubmit={event=>{
      // submit 을 하면 페이지가 리로드 되어 버린다
      // 이를 방지함
      event.preventDefault();
      // 여기서의 event.target 은 form 태그
      // 아래와 같이 값을 쉽게 가져올 수 있음
      if (titleRef.current && bodyRef.current) {
        const title = titleRef.current.value;
        const body = bodyRef.current.value;
        props.onCreate(title, body);
      }
    }}>
      <p><input type="text" name="title" placeholder="title" ref={titleRef}></input></p>
      <p><textarea name="body" placeholder='body' ref={bodyRef}></textarea></p>
      <p><input type='submit' value="Create"></input></p>
    </form>    
  </article>
}

interface UpdateProps {
  onUpdate: (title: string, body: string) => void;
  title: string; body: string;
}
function Update(props : UpdateProps) {

  // input 속성 중 value 값을 지정하면 웹 input 의 글자가 바뀌지 않는다
  // value 선언을 props 객체로 지정해 버렸기 때문이다
  // react 에서 onChange() 함수는 값이 바뀔 때 실행
  // 웹 input 에서 입력된 값이 기존의 값과 결합하면서, title, body 값을 해당 값으로 바꾼다
  // 즉, input 의 글자가 하나라도 바뀌면 state 값이 바뀌면서 Update 가 갱신된다

  // 대신 defaultValue 속성을 사용하면 이런 복잡한 과정이 필요없다

  // const [title, setTitle] = useState(props.title);
  // const [body, setBody] = useState(props.body);

  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  return <article>
    <h2>Update</h2>
    
    <form onSubmit={event=>{
      event.preventDefault();
      if (titleRef.current && bodyRef.current) {
        const title = titleRef.current.value;
        const body = bodyRef.current.value;
        props.onUpdate(title, body);
      }
    }}>
      {/* 기존 내용의 title, body 값을 default 로 표시 */}
      {/* onChange 는 html 에서 값이 바뀌고 마우스 포인터가 바깥으로 빠져나갈 때 호출,
      React 는 값이 바뀌면 호출 */}
      <p><input type="text" name="title" placeholder="title" defaultValue={props.title}
      ref={titleRef}></input></p>
      <p><textarea name="body" placeholder='body' defaultValue={props.body}
      ref={bodyRef}></textarea></p>
      <p><input type='submit' value="Update"></input></p>
    </form>    
  </article>
}

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
  const [mode, setMode] = useState("WELCOME");  // 축약형

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

  const [id, setId] = useState(0);   // id : 현재 id 저장
  const [nextId, setNextId] = useState(4);  // nextId : id 가 다음으로 변할 값 저장
  // Nav 에 들어가는 id, title, body 값 저장
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'},
  ]);

  let content = null;         // mode 에 따라 다른 내용을 보여주는 component
  let contextControl = null;  // mode 가 READ 일 때만 content 맨 밑에 나오는 component

  // Header
  // content 의 내용을 기본으로 바꿈
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }
  // Nav, Create
  // 클릭한 Nav 의 제목과 내용을 가져와 Article 로 출력
  else if (mode === "READ") {
    let [title, body] = ["", ""];
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
    contextControl = 
    <>
      {/* Update link */}
      <li><a href={'/update/'+id} onClick={event=>{
      event.preventDefault();
      setMode('UPDATE');
      }}>Update</a></li>
      {/* Delete button */}
      <li><input type='button' value='Delete' onClick={()=>{
        const newTopics = [];
        for (let i = 0; i<topics.length ; i++)
          if (topics[i].id !== id) newTopics.push(topics[i]);
          setTopics(newTopics);
          setMode("WELCOME");
      }}></input></li>
    </>;
  }
  // Create
  // topics 에 새로운 내용을 추가하여 갱신
  // topics 는 state 이기 때문에 코드가 다시 실행되면서 Nav 내용이 topics 에 따라 갱신됨
  else if (mode === "CREATE") {
    // Create component 생성
    // submit 했을 때 onCreate 함수가 실행됨
    content = <Create onCreate={(title, body)=> {
      // 1. newValue = {...value} 로 복제
      // 2. newValue 변경
      // 3. setValue(newValue) 로 데이터 변경 
      const newTopic = {id:nextId, title:title, body:body}; // 유저로부터 입력받은 새로운 데이터
      const newTopics = [...topics];  // 기존 topics 깊은 복사
      newTopics.push(newTopic);       // 복사된 데이터에 새로운 데이터 추가
      setTopics(newTopics);           // 새로운 데이터가 추가된 데이터로 setting

      setMode('READ');                // content 를 Nav 의 li 로 바꿈
      setId(nextId);                  // Nav 의 마지막 li 을 index 로 잡음
      // nextId 가 Nav 의 마지막 li 을 가리키면서
      // "READ" 로 설정된 mode 에 따라 Nav 의 마지막 li 이 Article 태그로 content 에 표시된다
      setNextId(nextId+1);            // 다음으로 설정할 index +1
      // +1 값이 들어가서 처음엔 코드가 한 번 더 돌지만,
      // mode 와 nextId 값은 도는 중에 변하지 않으므로 모두 통과,
      // 해당 코드도 파라미터가 이전과 동일한 nextId+1 이므로 통과한다 
    }}></Create>
  }
  // Update
  // Nav 에서 선택된 요소의 title, body 를 다른 값으로 바꿈
  else if (mode === "UPDATE") {
    // mode 가 "READ" 일 때 title, body 를 추출하는 코드
    // 해당 id (바꿀 id) 의 title, body 를 가져와 Update 의 input 값의 디폴트 값으로 넣는다
    let [title, body] = ["", ""];
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    // 바꿀 id 의 title, body 를 props parameter 로 전달
    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      // topics 의 해당 id 내용을 갱신된 값으로 바꾼다
      const newTopics = [...topics];
      // READ 한 상태에서 update 가 되기 때문에 해당 id 가 유지된다
      const updatedTopic = {id:id, title:title, body:body};
      for (let i = 0; i < newTopics.length; i++) 
        if (newTopics[i].id === id) {newTopics[i] = updatedTopic; break;}
      setTopics(newTopics);
      setMode("READ");  // 다시 "READ" 모드로 돌아간다
    }}></Update>;
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

      <Article title="Welcome" body="Hello, WEB"></Article>
      <Article title="Welcome" body="Hi, WEB"></Article>
      
      {/* 요소를 조건에 따라 마음대로 바꿀 수 있음 */}
      {content}

      <br></br>

      <ul>
        <li>
          <a href='/create' onClick={event=> {
            event.preventDefault();
            setMode("CREATE");
          }}>Create</a></li>
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