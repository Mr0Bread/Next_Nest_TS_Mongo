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
		fieldClassName,
		wrapperClassName,
		labelClassName
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
				required={ required }
				pattern={ pattern }
				autoComplete={ autocomplete }
				className={ fieldClassName }
			/>
			{ label && (
				<label className={ labelClassName } htmlFor={ id }>{ label }</label>
			) }
		</>
	);

	const renderSubmitButton = () => (
		<button type="submit" name="action" className={ fieldClassName }>
			Submit
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
			<div className={ wrapperClassName }>
				{ renderField() }
			</div>
			{ renderAfter }
		</>
	);
}
