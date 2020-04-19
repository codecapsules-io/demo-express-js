const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/api/data", (req, res) => {
  res.status(200).json({
    data: [
      { id: 1, title: "Some data" },
      { id: 2, title: "Some other data" },
    ],
  });
});

app.listen(port, () => console.log(`Listening on ${port}`));
