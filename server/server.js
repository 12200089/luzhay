const express = require('express');
const pool = require('./database');
const cors = require('cors');
const multer = require('multer');
const validInfo = require('./middleware/validInfo');
const bcrypt = require("bcrypt");
const jwtGenerator = require("./utils/jwtGenerator");
const authorize = require("./middleware/authorize");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/image', express.static ('./uploads'));

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, `file-${file.originalname}`)
    }
});

const imgfilter = (req, file, callback) => {
    if (file.mimetype.startswith('file')){
        callback(null, true)
    }else{
        callback(null, Error('only image is allowed'))
    }
};

const uploads = multer({
    storage: storage,
    fileFilter: imgfilter
}); 

const upload = multer({storage: storage})

//Read
app.get('/song', async(req, res) => {
    try {
        const response = await pool.query("SELECT * FROM music ");

        res.json(response.rows)
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
});







//Create
app.post('/song', upload.fields([
    { name: 'img', maxCount: 1 },
    { name: 'song', maxCount: 1 }
  ]), async(req, res) => {
    try {
        // const {filename} = req.file
        const { filename: imageFilename } = req.files['img'][0];
        const { filename: audioFilename } = req.files['song'][0];
        const {name, author, type} = req.body;
        const response = await pool.query("INSERT INTO music(name, author, type, img, song) VALUES($1, $2, $3, $4, $5)", [name, author, type, imageFilename, audioFilename]);

        res.json(response.rows)
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
});

//Delete
app.delete('/song/:id', async(req, res) => {
    try {

        const response = await pool.query("DELETE FROM music WHERE id = $1", [req.params.id]);
        res.json({
            response:{
                song: response.rows[0],
            }
        })

    }catch(err){
        console.error(err)
    }
})









//register
app.post("/song/register", validInfo, async (req, res) => {
    const { email, name, password, confirmpassword } = req.body;
  
    try {
      const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
        email
      ]);
  
      if (user.rows.length > 0) {
        return res.status(401).json("User already exist!");
      }

      if(password !== confirmpassword){
        return res.status(401).json("Password Mismatch");
      }

  
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);
  
      let newUser = await pool.query(
        "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, bcryptPassword]
      );
  
      const jwtToken = jwtGenerator(newUser.rows[0].user_id);
  
      return res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
//login
app.post("/song/login", validInfo, async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
        email
      ]);
  
      if (user.rows.length === 0) {
        return res.status(401).json("Invalid Credential");
      }
  
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].user_password
      );
  
      if (!validPassword) {
        return res.status(401).json("Invalid Credential");
      }
      const jwtToken = jwtGenerator(user.rows[0].user_id);
      return res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });

  //verify
  app.post("/song/verify", authorize, (req, res) => {
    try {
      res.json(true);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });










//get name
  app.get('/user', async(req, res) => {
    try {
        const response = await pool.query("SELECT * FROM users");

        res.json(response.rows)
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
});

  
app.listen(5000, () => {
    console.log('Server running is port 5000')
})