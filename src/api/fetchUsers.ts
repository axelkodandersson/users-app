import type { User } from "../types/User";

const API_URL = "https://api-userapi.onrender.com/api/users/getUsers";
const API_KEY = "elev-hemlighet-2026";

export const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch(API_URL, {
        headers: {
            "x-api-key": API_KEY,
        },
    });

    if (!response.ok) {
        throw new Error(
            `Kunde inte hämta användare (status ${response.status})`,
        );
    }

    return response.json();
};
