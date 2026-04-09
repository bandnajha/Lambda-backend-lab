exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello from Lambda via GitHub Action!" }),
    };
};
// Trigger dev Deployment
