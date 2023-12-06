async function funRead(str) {
    try {
        // Fetch the file content from the URL
        const response = await fetch(str);
        const fileContent = await response.text();

        // Process the file content
        const data = fileContent
            .trim() // Remove any leading/trailing whitespace
            .split("\n\n") // Split by double newline
            .map(group => group.split("\r\n")) // Split each group by newline

        return data;
    } catch (error) {
        console.error('Error fetching file:', error);
        throw error; // rethrow the error for caller to handle
    }
}