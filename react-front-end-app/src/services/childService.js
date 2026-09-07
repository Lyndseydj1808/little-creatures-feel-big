import { API_URL } from './apiConfig';

export async function createChild(childData) {
    const response = await fetch(`${API_URL}/parent/child`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(childData),
    });

    if (!response.ok) {
        throw new Error('⚠️ Failed to create account');
    }

    const data = await response.json();
    return data;
}