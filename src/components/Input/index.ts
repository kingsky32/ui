import InternalInput from './Input';
import Select from './Select';

const Input = InternalInput as typeof InternalInput & {
  Select: typeof Select;
};

Input.Select = Select;

export default Input;
