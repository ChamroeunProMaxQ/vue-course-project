const fs = require("fs");
const readFile = require("../util/readFile");
const signToken = require("../auth/signToken");
const coachService = require("../services/coach");

const signUp = async (req, res, next) => {

    const { name, password, areas, price } = req.body;

    try {
        const newCoach = coachService.signUpCoach({name, password, areas, price});
        const token = signToken(newCoach);
        res.status(201).json({
            access_token  : token,
            coach: newCoach
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const signIn = async (req, res, next) => {
}

module.exports = {
    signUp,
    signIn
}