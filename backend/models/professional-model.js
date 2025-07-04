const  {getDb, closeConnection} = require('../database');

const Profile = {};

Profile.createProfessional = async (newProfile) => {
    try {
        const result = await getDb().collection('professional').insertOne(newProfile);
        return result;
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
}

Profile.getAllProfessionals = async () => {
    try {
        const professionals = await getDb().collection('professional').find().toArray();
        return professionals;
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
}

module.exports = Profile;