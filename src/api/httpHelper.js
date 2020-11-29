
export async function handleResponse(response) {
    if (response.ok) {
        console.log(response.text())
        return response.text();
    }
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }
    console.log("Network response was not created." + response.status);
}

export function handleError(error) {
    console.error("API call failed. " + error);
    throw error;
}





