import type { User } from "../types/User";
import { getInitials } from "../utils/getInitials";

interface UserDetailsProps {
    user: User;
}

const UserDetails = ({ user }: UserDetailsProps) => {
    const { profile, settings, roles } = user;

    return (
        <div className="userDetails">
            <header>
                <div className="avatar large" aria-hidden="true">
                    {getInitials(profile.name)}
                </div>
                <div>
                    <h1>{profile.name}</h1>
                    <p>@{user.username}</p>
                </div>
            </header>

            <section>
                <h2>Kontakt</h2>
                <p>{profile.email}</p>
                <p>
                    {profile.address.street}, {profile.address.zipCode}{" "}
                    {profile.address.city}
                </p>
            </section>

            <section>
                <h2>Roller</h2>
                <ul className="roles">
                    {roles.map(role => (
                        <li key={role}>{role}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Inställningar</h2>
                <p>Tema: {settings.theme === "dark" ? "Mörkt" : "Ljust"}</p>
                <p>
                    Notiser via e-post:{" "}
                    {settings.notifications.email ? "Ja" : "Nej"}
                </p>
                <p>
                    Push-notiser: {settings.notifications.push ? "Ja" : "Nej"}
                </p>
            </section>
        </div>
    );
};

export default UserDetails;
