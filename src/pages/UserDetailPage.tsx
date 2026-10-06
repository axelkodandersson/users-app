import { useParams } from "react-router-dom";

const UserDetailPage = () => {
    const { id } = useParams();

    return (
        <main>
            <h1>Användare {id}</h1>
        </main>
    );
};

export default UserDetailPage;
