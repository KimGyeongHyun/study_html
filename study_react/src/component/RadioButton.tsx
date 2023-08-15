import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  onChangeMode: (value: string) => void;
}

function RadioButton(props : Props) {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Fundamental functions', value: '1' },
    { name: 'Bootstrap modal', value: '2' },
    { name: 'My modal', value: '3' },
    { name: 'map', value: '4'},
  ];

  return (
    <ButtonGroup>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={'outline-primary'}
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => {
            setRadioValue(e.currentTarget.value);
            props.onChangeMode(e.currentTarget.value);
          }}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}

export default RadioButton;