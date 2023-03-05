import InternalInput from './Input';
import Select from './Select';
import Radio from './Radio';

const Input = InternalInput as typeof InternalInput & {
  Select: typeof Select;
  Radio: typeof Radio;
};

Input.Select = Select;
Input.Radio = Radio;

export default Input;
