import { Link } from "react-router-dom";

interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <div>
      <h1>Home</h1>

      <Link to="/event">Ir para página do evento</Link>
    </div>
  );
}

export default Home;
