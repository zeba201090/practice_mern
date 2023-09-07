const router = require("express").Router();
const todoItems = require("../models/todoSchema");
const db_conn = require("../db_config");
db_conn;

router.get("/", async (req, res) => {
  res.send("homeeee");
});

router.post("/", async (req, res) => {
  try {
    const newItem = new todoItems({
      item: req.body.item,
    });
    const savedItem = await newItem.save();
    console.log(savedItem);
    res.json(savedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/allItem", async (req, res) => {

try{
    const result = await todoItems.find({});
    console.log(result);
    res.json(result);
    
} catch (err) {
    res.json({message: err});
    console.log(err);

}
});

router.get("/api/item/:id", async (req, res) => {
    try {
        const item = await todoItems.findById(req.params.id);
        res.json(item);
    } catch (err) {
        res.json({ message: err });
    }
});

//update item
router.put("/api/item/:id", async (req, res) => {
    try {
        // Find the item by its id and update it
        const updatedItem = await todoItems.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json(updatedItem);
    } catch (err) {
        res.json({ message: err });
    }
});
router.delete("/api/item/:id", async (req,res) => {

    const deletedItem = await todoItems.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
})

module.exports = router;
