const bookModel = require("../model/novelModel");
// const novel = require("../assets/rawData");

// bookModel
//   .create(novel)
//   .then((res) => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

exports.getBookList = async () => {
  try {
    console.log("success");
    return await bookModel.find();
  } catch (error) {
    console.log("failed");
  }
};
