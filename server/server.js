import config from "./../config/config";
import app from "./express";
import dbConnect from "./helpers/dbConnect";

// Connect to the database
dbConnect();

// Start the server
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
