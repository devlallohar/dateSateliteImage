const { default: axios } = require("axios");

exports.birthPictureController = (async (req, res) => {
    console.log(("Inside birth Piture COntroller"));
    const { DOB } = req.query;
    console.log(req.query);

    function fx(x) {

        if (!x.DOB) {
            return `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
        } else {
            return `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${x.DOB}`
        }
    }

    const url = fx(req.query)

    await axios.get(`${url}`).then((result) => {
        console.log(JSON.stringify(result.data));
        const here = result.data.url;
        return res.json({
            message: `click ${here} to see the picture nasa satellite took on ${DOB} `,
            details: `${result.data.explanation}`
        })
    }).catch((err) => {
        console.log(JSON.stringify(err));
        return res.json({
            message: `Error: ${err}`
        })
    })
})