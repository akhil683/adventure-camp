const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PT09Z09H0YjOiSpzSBhIAUTtNcs3Y0nj03I9gX9zwq5EyMuc4wh9NGla0Oy1LtxrIySV0waDyVA5ow7yQlfBbLS00Ckfn1VsB",
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  const items = req.body.item;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.priceID,
      quantity: item.quantity,
    });
  });
  console.log(lineItems);
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });
  console.log(session.url);
  res.send(
    JSON.stringify({
      url: session.url,
    }),
  );
});

app.listen(4000, () => console.log("listening to port 4000"));
