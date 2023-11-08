const mongoose = require("mongoose");

const app = require("./app");

mongoose.connect(
  "mongodb+srv://miannafan:4563502fyH!@cluster0.s5zhsj2.mongodb.net/singer?retryWrites=true&w=majority"
);
mongoose.connection.on("open", () => {
  console.log("success");
});

mongoose.connection.on("error", () => {
  console.log("Connection Falied");
});

app.listen(8000, () => {
  console.log("service is running");
});
