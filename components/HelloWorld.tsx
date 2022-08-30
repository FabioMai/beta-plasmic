export function HelloWorld({
  heading,
  description,
  test,
}: {
  heading?: string;
  description?: string;
  test?: string;
}) {
  return (
    <>
      <h1 className="text-red-600">{heading}</h1>
      <p>{description}</p>
      <h3>{test}</h3>
    </>
  );
}
