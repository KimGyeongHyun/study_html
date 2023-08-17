import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
	onChangeMode: (value: string) => void;
}

function RadioButton(props: Props) {
	// 페이지 전환 라디오 버튼

	// 페이지 지정할 변수
	const [radioValue, setRadioValue] = useState('1');

	// 버튼 제목과 index 지정
	const radios = [
		{ name: 'Fundamental functions', value: '1' },
		{ name: 'Modals', value: '2' },
		{ name: 'Words', value: '3' },
	];

	return (
		// ButtonGroup 설정
		<ButtonGroup style={{ margin: '20px 0 0 20px' }}>
			{radios.map((radio, idx) => (
				// radio : radios 에서 하나씩 뽑아낸 data 객체
				// idx : 0으로 시작하고 반복할 때마다 +1되는 변수

				// 부트스트랩에 내장되어 있는 ToggleButton 옵션 설정
				<ToggleButton
					key={idx}
					id={`radio-${idx}`}
					type='radio'
					variant={'outline-primary'} // 색상
					name='radio'
					value={radio.value}
					checked={radioValue === radio.value}
					onChange={(e) => {
						setRadioValue(e.currentTarget.value);
						// onChangeMode 에 App 의 setState 함수가 들어있음
						// 해당 버튼의 value 로 setState 되어 body 내용 바뀜
						props.onChangeMode(e.currentTarget.value);
					}}>
					{radio.name}
				</ToggleButton>
			))}
		</ButtonGroup>
	);
}

export default RadioButton;
