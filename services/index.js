const mongoose = require("mongoose")

module.exports = {
    addBooks: async (req, res) => {
        try {
            let { title, author, summary } = req.body
            let resp = await mongoose.models.Books(
                { TITLE: title, AUTHOR: author, SUMMARY: summary })
                .save()
            // send response if data is present else error message
            if (resp && Object.keys(resp).length) {
                return res.json({
                    data: resp,
                    message: 'success'
                })
            } else {
                return res.json({
                    message: 'error while persisting data'
                })
            }
        } catch (e) {
            console.log(e)
            return res.json({
                message: 'error while persisting data',
            })
        }
    },
    list: async (req, res) => {
        try {
            let { page, limit, bk_id } = req.query
            // for pagination
            page ??= 1
            limit ??= 100
            let skip = (page - 1) * limit
            // if bookid is provided filter that perticular data
            let filter = bk_id ? { BOOK_ID: bk_id } : {}
            let resp = await mongoose.models.Books.find(
                filter,
                { _id: 0 })
                .skip(skip).limit(limit).sort({ _id: -1 })
            // send response if data is present else error message
            if (resp && Object.keys(resp).length) {
                return res.json({
                    data: resp,
                    message: 'success'
                })
            } else if (resp) {
                return res.json({
                    message: 'no records found for the given id'
                })
            } else {
                return res.json({
                    message: 'error while fetching data'
                })
            }
        } catch (e) {
            console.log(e)
            return res.json({
                message: 'error while fetching data',
            })
        }
    },
    update: async (req, res) => {
        try {
            let { id } = req.params
            let TITLE = req.body.title ?? null,
                AUTHOR = req.body.author ?? null,
                SUMMARY = req.body.summary ?? null
            let resp = await mongoose.models.Books.updateOne(
                { BOOK_ID: id },
                { TITLE, AUTHOR, SUMMARY },
                { new: true }
            )
            // send response if data is deleted else error message
            if (resp.hasOwnProperty('modifiedCount') && resp.modifiedCount == 0) {
                return res.json({
                    message: 'please provide a valid book_id'
                })
            } else if (resp?.modifiedCount) {
                return res.json({
                    message: 'data updated successfully'
                })
            } else {
                return res.json({
                    message: 'error while updating data'
                })
            }
        } catch (e) {
            console.log(e)
            return res.json({
                message: 'error while updating data',
            })
        }
    },
    delete: async (req, res) => {
        try {
            let { id } = req.params
            let resp = await mongoose.models.Books.deleteOne({ BOOK_ID: id })
            console.log(resp);
            // send response if data is deleted else error message
            if (resp.hasOwnProperty('deletedCount') && resp.deletedCount == 0) {
                return res.json({
                    message: 'please provide a valid book_id'
                })
            } else if (resp?.deletedCount) {
                return res.json({
                    message: 'data deleted successfully'
                })
            } else {
                return res.json({
                    message: 'error while deleting data'
                })
            }
        } catch (e) {
            console.log(e)
            return res.json({
                message: 'error while deleting data',
            })
        }
    }
}