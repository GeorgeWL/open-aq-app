export default function Input({ type = "string", onChange, ...rest }) {
  return (
    <input
      type={type}
      onChange={(evt) => onChange(evt.target.name, evt.target.value)}
      {...rest}
    />
  );
}
