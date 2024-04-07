const { addOneRecord , getRecords} = require("../dbInterface");


const addCustomer = async(req, res) => {
  try {
  const customer = req.body;
  await addOneRecord('customer', customer);
  return res.send({message: 'New customer added'});
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

const getCustomers = async(req, res) => {
  try {
    console.log('getting customers');
    const {identifier} = req.query;
    const customers = await getRecords('customer', {identifier});
    return res.status(200).send(customers);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

module.exports = {addCustomer, getCustomers};