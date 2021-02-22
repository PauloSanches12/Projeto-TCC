import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import ButtonInput from '../Button';
import './styles.css';

const Form = () => {
  const [value, setValue] = React.useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const MostrarValor = () => {
    alert("Você clicou no botão");
    setValue('')
  }

  console.log(value)

  return (
    <Container style={{ backgroundColor: "#FFF", top: 10, position: 'relative', height: 200, borderRadius: 8 }} id="container" maxWidth="md">
      <FormLabel id="amount" component="legend">1/10</FormLabel>
      <FormControl style={{ marginTop: 50 }} component="fieldset">
        <FormLabel component="legend">O Quanto vocé é bom em...</FormLabel>
        <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
          <FormControlLabel value="5" control={<Radio />} label="5" />
          <FormControlLabel value="6" control={<Radio />} label="6" />
          <FormControlLabel value="7" control={<Radio />} label="7" />
          <FormControlLabel value="8" control={<Radio />} label="8" />
          <FormControlLabel value="9" control={<Radio />} label="9" />
          <FormControlLabel value="10" control={<Radio />} label="10" />
        </RadioGroup>
        <ButtonInput disabled={!value} type="submit" onClick={MostrarValor} />
      </FormControl>
    </Container>
  );
}

export default Form;
