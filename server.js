const express = require("express");
var cors = require("cors");
const { default: config } = require("./src/config/config");
const stripe = require("stripe")(config.stripePublishKey);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/cart", async (req, res) => {
  console.lo(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("listening to port 4000"));
