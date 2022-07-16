//pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
    return (
        <div>
            <NavBar />
            <Home name={user.name} city={user.city} color={user.color} />
            <About bio={user.bio} links={user.links} />
        </div>
    );
}

export default App;