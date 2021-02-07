import IProps from './interfaces/componentProps.interface';

export default function FormComponent(props: IProps) {
  const {
    children,
    onSubmit
  } = props;
  return (
    <form onSubmit={ onSubmit }>
      { children }
    </form>
  );
}
