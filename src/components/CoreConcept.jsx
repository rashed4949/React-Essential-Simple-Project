export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
    </li>
  );
}
