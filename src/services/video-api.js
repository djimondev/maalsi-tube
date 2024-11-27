const API_URL = import.meta.env.VITE_BASE_API_URL;

if (!API_URL) {
    throw new Error("Missing API_URL");
}

export const getVideos = async () => {
    const response = await fetch(`${API_URL}/videos`);
    const data = await response.json();
    return data;
};

export const createVideo = async videoData => {
    const response = await fetch(`${API_URL}/videos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(videoData)
    });
    const data = await response.json();
    return data;
};
