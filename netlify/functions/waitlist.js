exports.handler = async function (event, context) {

  const { email } = JSON.parse(event.body);

  try {
    const response = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization":
            `Bearer ${process.env.MAILERLITE_API_KEY}`
        },

        body: JSON.stringify({
          email,
          groups: ["190434567091389758"]
        })
      }
    );

    const data = await response.json();
    console.log("STATUS:", response.status);
    console.log("DATA:", data);

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};