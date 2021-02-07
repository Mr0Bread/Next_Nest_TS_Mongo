export default async function Handler(req, res) {
  const response = await (await fetch('http://app/test')).json();
  res.status(200).json({ response });
}
