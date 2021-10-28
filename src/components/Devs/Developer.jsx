function DevDisplay(props) {
  return (
    <div>
      <h2> Dev: {props.name}</h2>
      <h3>Idade: {props.age}</h3>
      <h3>Pais: {props.country}</h3>
    </div>
  );
}
export default DevDisplay;
