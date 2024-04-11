const express = require("express");
const holidaylist = require("./models/Holidays.models");
const router = express.Router();

// for add to cart 
try{
    router.post("/addholiday", async (req, res) => {
        data = await holidaylist.create({
          id:req.body.id,
          holidayName: req.body.holidayName,
          duration: req.body.duration,
          destination: req.body.destination,
          location:req.body.location,
          amenities:req.body.amenities,
        });
        res.send("Posted");
      });
}
catch(err){
    console.log(err);
}


router.get("/getholidaylist",async(req,res)=>{
  try{
  //  let fetchId = req.params.id;
  const value = await holidaylist.find().exec();
  res.send(value);
  }catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
})


router.put('/updateholiday/:id', async (req, res) => {
  const holidayId = req.params.id;

  try {
    // Find the employee by id and update its information
    const updatedholiday = await holidaylist.findOneAndUpdate(
      { id: holidayId },
      {
        $set: {
          holidayName: req.body.holidayName,
          duration: req.body.duration,
          destination: req.body.destination,
          location: req.body.location,
          amenities: req.body.amenities,
        }
      },
      { new: true } // This option ensures that the updated document is returned
    );

    if (!updatedholiday) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json({ message: 'Employee updated successfully', updatedholiday });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/deleteholiday/:id', async (req, res) => {
  const employeeId = req.params.id;

  try {
    // Find the product in the addtocart collection and remove it
    const result = await holidaylist.deleteOne({ id: employeeId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product removed successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;
