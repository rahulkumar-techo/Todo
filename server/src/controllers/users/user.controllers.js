import User from "../../models/user.models.js";


const createUser = async (req, res) => {

    try {
      const userdata = await new User(req?.body).save();
      return res.json(userdata);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to create user.' });
    }
  };
  
  export default createUser;
  