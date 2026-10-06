import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/fetchUsers";
import UserDetails from "../components/UserDetails";

const UserDetailPage = () => {
    const { id } = useParams();

    const {
        data: users,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    if (isLoading) return <p>Laddar användare...</p>;
    if (error) return <p>Ett fel uppstod: {error.message}</p>;

    const user = users?.find(user => user.id === Number(id));

    if (!user) {
        return (
            <main>
                <p>Användaren kunde inte hittas.</p>
                <Link to="/users">Tillbaka till alla användare</Link>
            </main>
        );
    }

    return (
        <main>
            <Link to="/users">← Tillbaka till alla användare</Link>
            <UserDetails user={user} />
        </main>
    );
};

export default UserDetailPage;
