const { v4: uuidv4 } = require("uuid");
const { cloudinary } = require("./config/cloudinary");

/**
 * addPost.
 *
 * @param {[req]} req [req has category, title, description, images, location, coordinates]
 * @param {} res [res send in response of json confirming the state of the action]
 * @param {} next
 */
const uploadImage = async (req, res, next) => {
    let _ = req.body;
    try {
        const datas = JSON.parse(_.imageCollection);
        const arr = [];
        await Promise.all(
            datas.map(async (data) => {
                let id = uuidv4();
                arr.push(id); let response = cloudinary.uploader.upload(data, {
                    upload_preset: "dev_setups", // changes will be made later on
                    public_id: id,
                });
                return response;
            })
        ).then(() => {
          console.log(arr);
          res.json({url: "id"})
        });
    } catch (err) {
        res.status(500).json({ err: err });
    }
};

module.exports = {uploadImage};


