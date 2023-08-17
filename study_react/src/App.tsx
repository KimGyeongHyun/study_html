import { useState } from 'react'; // state 사용
import FundamentalFunction from './component/FundametalFunction';
import RadioButton from './component/RadioButton';
import MyModal from './component/MyModal';
import MyBrouserRouter from './component/wordsComponent/MyBrouserRouter';

function App() {
	// body 에 띄울 내용을 결정
	const [radioValue, setRadioValue] = useState('1');
	// body 내용
	var body: any = null;

	// add, delete, update
	if (radioValue === '1') body = <FundamentalFunction />;
	// module.css
	else if (radioValue === '2') body = <MyModal />;
	// map, filter
	else if (radioValue === '3') body = <MyBrouserRouter />;

	return (
		<>
			<RadioButton
				onChangeMode={(number: string) => {
					setRadioValue(number);
				}}
			/>
			<hr />

			{body}
		</>
	);
}

export default App;
