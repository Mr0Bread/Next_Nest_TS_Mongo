import IProps from './interfaces/componentProps.interface';

export default function FieldComponent(props: IProps) {
  const {
    type,
    name,
    id,
    onChange,
    label,
    placeholder,
    maxLength,
    minLength,
    required,
    pattern,
    renderAfter,
    renderBefore,
    autocomplete = 'on',
  } = props;

  const renderInputField = () => (
    <>
      <input
        placeholder={ placeholder }
        type={ type }
        name={ name }
        id={ id }
        onChange={ onChange }
        maxLength={ maxLength }
        minLength={ minLength }
        className="validate"
        required={ required }
        pattern={ pattern }
        autoComplete={ autocomplete }
      />
      { label && (
        <label htmlFor={ id }>{ label }</label>
      ) }
    </>
  );

  const renderSubmitButton = () => (
    <button className="btn waves-effect waves-light" type="submit" name="action">
      Submit
      <i className="material-icons right">send</i>
    </button>
  );

  const renderField = () => {
    switch (type) {
      case 'password':
        return renderInputField();
      case 'submit':
        return renderSubmitButton();
      case 'text':
        return renderInputField();
      default:
        return null;
    }
  };

  return (
    <>
      { renderBefore }
      <div className="input-field">
        { renderField() }
      </div>
      { renderAfter }
    </>
  );
}
