const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
  },
};

exports.handler = async function (event, context) {
  const { ticker } = event.queryStringParameters;

  const response = await fetch(
    `https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=${ticker}&region=US`,
    options
  );
  const stockSummary = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ stockSummary }),
  };
};