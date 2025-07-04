const professionalModel = require('../models/professional-model');

const profController = {};

profController.registerProfessional = async (req, res, next) => {
    const {
        professionalName,
        primaryDescription,
        workDescription1,
        workDescription2,
        linkTitleText,
        linkedInText,
        linkedInLink,
        githubText,
        githubLink,
        firstname,
        url
    } = req.body;

    const User = {
        "professionalName": professionalName,
        "base64Image": "/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAoHBwkIBwkKDQoL...",
        "primaryDescription": primaryDescription,
        "workDescription1": workDescription1,
        "workDescription2": workDescription2,
        "linkTitleText": linkTitleText,
        "linkedInLink": {
        "text": linkedInText,
        "link": linkedInLink
        },
        "githubLink": {
        "text": githubText,
        "link": githubLink
        },
        "nameLink": {
        "firstName": firstname,
        "url": url
        }
    }

    try {
        const result = await professionalModel.createProfessional(User);
        if (result) {
            res.status(201).json({"message": `User ${professionalName} registered successfully`});
        } else {
            res.status(400).json({"error": `User ${professionalName} failed. Please try again`});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({"error": `Server error:  ${err.message}`});
    }
}

profController.getProfessionalList = async (req, res, next) => {
    try {
        const professionals = await professionalModel.getAllProfessionals();
        res.status(200).json(professionals[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({"error": `Server error: ${err.message}`});
    }
}

module.exports = profController;