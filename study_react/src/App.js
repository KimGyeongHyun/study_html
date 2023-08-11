import './App.css';
import { useState } from 'react'; // state 사용
import BootstrapModal from './component/MyBootstrapModal'
import FundamentalFunction from './component/FundametalFunction';
import RadioButton from './component/RadioButton';
import MyModal from './component/MyModal';
import MyBrouserRouter from './component/wordsComponent/MyBrouserRouter'

function App() {
  console.clear();

  const [radioValue, setRadioValue] = useState('1');
  var body = null;

  // add, delete, update
  if (radioValue === '1') body = <FundamentalFunction/>
  else if (radioValue === '2') body = <BootstrapModal/>
  // module.css
  else if (radioValue === '3') body = <MyModal/>
  // map, filter
  else if (radioValue === '4') body = <MyBrouserRouter/>
  
  return <>

    <RadioButton onChangeMode={number=>{setRadioValue(number);}}/>
    {/* <p>{radioValue}</p> */}
    <hr/>

    {body}
    
  </>
}

export default App;
