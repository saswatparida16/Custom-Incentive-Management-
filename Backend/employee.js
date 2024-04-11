const express = require("express");
const employee = require("./models/EmployeeModel");
const router = express.Router();

router.post("/addemployee", async (req, res) => {
  try {
    const data = await employee.create({
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.role,
      sales: req.body.sales,
      email: req.body.email,
      password: req.body.password,
    });
    res.send("Posted");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/getemployeelist", async (req, res) => {
  try {
    const value = await employee.find().exec();
    res.send(value);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.delete('/deleteEmployee/:id', async (req, res) => {
  const employeeId = req.params.id;

  try {
    // Find the product in the addtocart collection and remove it
    const result = await employee.deleteOne({ id: employeeId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product removed successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/updateEmployee/:id', async (req, res) => {
  const employeeId = req.params.id;

  try {
    // Find the employee by id and update its information
    const updatedEmployee = await employee.findOneAndUpdate(
      { id: employeeId },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          role: req.body.role,
          sales: req.body.sales,
          email: req.body.email,
          password: req.body.password,
        }
      },
      { new: true } // This option ensures that the updated document is returned
    );

    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json({ message: 'Employee updated successfully', updatedEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
