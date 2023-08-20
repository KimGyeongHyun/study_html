import './componentForm';

const Header = ({ title, onChangeMode }: HeaderProps) => {
	return (
		<header>
			{/* function(event) 을 event=> 로 줄여 씀 */}
			<h1>
				<a
					href='#'
					onClick={(event) => {
						event.preventDefault(); // 기본 동작 방지 (링크 연결되지 않음)
						onChangeMode(); // 전달받은 함수 실행
					}}>
					{title}
				</a>
			</h1>
		</header>
	);
};

export default Header;
