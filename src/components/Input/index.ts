import InternalInput from './Input';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Checkbox';

const Input = InternalInput as typeof InternalInput & {
  Select: typeof Select;
  Checkbox: typeof Checkbox;
  Radio: typeof Radio;
};

Input.Select = Select;
Input.Checkbox = Checkbox;
Input.Radio = Radio;

export default Input;
