type inputType = 'text' | 'password' | 'submit';

type autocompleteType = 'on' | 'off';

export default interface IProps {
  type: inputType;
  name: string;
  id: string;
  onChange: (any) => any;
  label?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  pattern?: string;
  renderAfter?: JSX.Element | JSX.Element[];
  renderBefore?: JSX.Element | JSX.Element[];
  autocomplete?: autocompleteType;
}
