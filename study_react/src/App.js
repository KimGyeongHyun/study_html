import './App.css';
import { useState } from 'react'; // state 사용
import BootstrapModalModal from './component/BootstrapModal'
import Fundamental_function from './Pages/Fundametal_function';
import RadioButton from './component/RadioButton';
import MyModal from './component/MyModal';

function App() {
  console.clear();

  const [radioValue, setRadioValue] = useState('1');
  var body = null;

  if (radioValue == '1') body = <Fundamental_function/>
  else if (radioValue == '2') body = <BootstrapModalModal/>
  else if (radioValue == '3') body = <MyModal/>
  
  return <>

    <RadioButton onChangeMode={number=>{setRadioValue(number);}}/>
    {/* <p>{radioValue}</p> */}
    <hr/>

    {body}
    
  </>
}

export default App;
