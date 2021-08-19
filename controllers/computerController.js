let db = require("../models");

module.exports = {
    create: async(req, res) => {
        try {
            console.log("BODY: ", req.body)
            const dbComputer = await db.Computer.create(req.body)
            res.json(dbComputer)
        } catch (e) {
            console.log("[computerController]: ", e)
        }
    },
    read: async(req, res) => {
            try {
                const dbComputer = await db.Computer.findAll()
                res.json(dbComputer)
            } catch (e) {
                console.log("[computerController]: ", e)
            }
        }
        // update:
        // delete:
}