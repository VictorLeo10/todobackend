import mongoose from "mongoose";

const uri =
  "mongodb+srv://So:dbpass10@cluster0.medzjfo.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.connection
  .on("open", () => {
    console.log("db connecction established");
  })
  .once("error", (error) => {
    console.log("failed to establish connection");
  });
