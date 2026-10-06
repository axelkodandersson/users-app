import { Link } from "react-router-dom";
import type { User } from "../types/User";
import { getInitials } from "../utils/getInitials";

interface UserCardProps {
    user: User;
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <Link to={`/users/${user.id}`} className="userCard">
            <div className="avatar" aria-hidden="true">
                {getInitials(user.profile.name)}
            </div>
            <div>
                <h2>{user.profile.name}</h2>
                <p>@{user.username}</p>
                <p>{user.profile.email}</p>
                <p>{user.profile.address.city}</p>
            </div>
        </Link>
    );
};

export default UserCard;
