import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <main>
            <h1>Users App</h1>
            <p>
                Välkommen! Här kan du se en lista över alla användare och klicka
                dig vidare för att se mer information om varje användare.
            </p>
            <Link to="/users">Visa alla användare</Link>
        </main>
    );
};

export default HomePage;
