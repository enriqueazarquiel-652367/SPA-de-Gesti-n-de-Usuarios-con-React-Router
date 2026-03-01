const API_URL = "http://127.0.0.1:8000/users";

export async function getUsers() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Error fetching users");
    }
    return response.json();
}
