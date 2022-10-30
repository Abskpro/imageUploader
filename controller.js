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
    const arr = [];
    await Promise.all(
        _.imageCollection.map(async (data) => {
            let id = uuidv4();
            arr.push(id); let response = cloudinary.uploader.upload(data, {
                folder: 'images',
                upload_preset: "dev_setups", // changes will be made later on
                public_id: id,
            });
            return response;
        })
    ).then(() => {
      res.json({url: arr})
    });
  } catch (err) {
    console.log("Error is ", err);
    res.status(500).json({ err: err });
  }
};

module.exports = { uploadImage };
