import { Link } from "react-router-dom";
import type { User } from "../types/User";

interface UserCardProps {
    user: User;
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <Link to={`/users/${user.id}`} className="userCard">
            <h2>{user.profile.name}</h2>
            <p>Användarnamn: {user.username}</p>
            <p>E-post: {user.profile.email}</p>
            <p>Stad: {user.profile.address.city}</p>
        </Link>
    );
};

export default UserCard;
