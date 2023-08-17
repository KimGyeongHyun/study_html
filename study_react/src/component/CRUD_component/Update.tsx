import { useRef } from 'react';

type UpdateProps = {
	onUpdate: (title: string, body: string) => void;
	title: string;
	body: string;
};

const Update = ({ onUpdate, title, body }: UpdateProps) => {
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

	return (
		<article>
			<h2>Update</h2>

			<form
				onSubmit={(event) => {
					event.preventDefault();
					if (titleRef.current && bodyRef.current) {
						const title = titleRef.current.value;
						const body = bodyRef.current.value;
						onUpdate(title, body);
					}
				}}>
				{/* 기존 내용의 title, body 값을 default 로 표시 */}
				{/* onChange 는 html 에서 값이 바뀌고 마우스 포인터가 바깥으로 빠져나갈 때 호출,
      React 는 값이 바뀌면 호출 */}
				<p>
					<input
						type='text'
						name='title'
						placeholder='title'
						defaultValue={title}
						ref={titleRef}></input>
				</p>
				<p>
					<textarea
						name='body'
						placeholder='body'
						defaultValue={body}
						ref={bodyRef}></textarea>
				</p>
				<p>
					<input type='submit' value='Update'></input>
				</p>
			</form>
		</article>
	);
};

export default Update;
