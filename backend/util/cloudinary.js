const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dasiljco5",
  api_key: "692329743388377",
  api_secret: "TxgrAPtWnnvjxKfwQxN9eZkBq8A",
});

const cloudinaryUPloading = async (filetoUploads) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(filetoUploads, (result) => {
      resolve(
        {
          url: result.secure_url,
        },
        {
          resource_type: "auto",
        },
      );
    });
  });
};

module.exports = cloudinaryUPloading;
