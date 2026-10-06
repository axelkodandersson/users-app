import type { User } from "../types/User";

interface UserDetailsProps {
    user: User;
}

const UserDetails = ({ user }: UserDetailsProps) => {
    const { profile, settings, roles } = user;

    return (
        <div className="userDetails">
            <h1>{profile.name}</h1>
            <p>Användarnamn: {user.username}</p>

            <section>
                <h2>Kontakt</h2>
                <p>E-post: {profile.email}</p>
                <p>
                    Adress: {profile.address.street}, {profile.address.zipCode}{" "}
                    {profile.address.city}
                </p>
            </section>

            <section>
                <h2>Roller</h2>
                <p>{roles.join(", ")}</p>
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
