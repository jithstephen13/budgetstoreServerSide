const { cloudinary } = require("../Utility/cloudinary");





const uploadImage = (image) => {
    //imgage = > base64
    
    return new Promise((resolve, reject) => {
       
      cloudinary.uploader.upload(image, {
        folder: "Product",
        width: 1920,
        crop: "scale"
  }, (error, result) => {
        
        if (result && result.secure_url) {
          return resolve(result.secure_url);
        }
        console.log(error.message);
        return reject({ message: error.message });
      });
    });
  };

module.exports = {uploadImage}
  