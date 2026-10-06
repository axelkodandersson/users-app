import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/fetchUsers";
import UserList from "../components/UserList";

const UsersPage = () => {
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
    if (!users || users.length === 0)
        return <p>Det finns inga användare att visa.</p>;

    return (
        <main>
            <h1>Användare</h1>
            <UserList users={users} />
        </main>
    );
};

export default UsersPage;
