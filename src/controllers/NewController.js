const mongoose = require('mongoose');


const New = mongoose.model('New');


module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const news = await New.paginate({}, { page, limit: 10 });

        return res.json(news);
    },
    async create(req, res) {
        const newNotice = await New.create(req.body);

        return res.json(newNotice);
    },
    async update(req, res) {
        const newNotice = await New.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(newNotice);
    },
    async delete(req, res) {
        await New.findByIdAndDelete(req.params.id);

        return res.send();
    }
}