const App = () => {
  const [animal, setAnimal] = useState("");
  return (
    <div className="container">
      <div className="animal-buttons">
        <button onClick={() => setAnimal('"Dog 🐶"')}>Dog 🐶</button>
        <button onClick={() => setAnimal('"Fish 🐠"')}>Fish 🐠</button>
        <button onClick={() => setAnimal("Cat 🐱")}>Cat 🐱</button>
      </div>
      <div className="display-animal">{animal}</div>
    </div>
  );
};
