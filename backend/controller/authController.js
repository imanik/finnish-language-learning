import validator from 'validator'
import bcrypt from 'bcryptjs'
import { getDBConnection } from "../database/db.js"


export async function registerUser (req, res){

    

    let { name, username, email, password} = req.body

    name =  name ? name.trim() : ''
    email = email ? email.trim() : ''
    username = username ? username.trim() : ''

    if(!name || !username || !email || !password){
        console.log('Validation failed: missing fields');
        return res.status(400).json({ error: 'All fields are required.' });

    }

    const usernameRegex = /^[a-zA-Z0-9_-]{1,20}$/

    if(!usernameRegex.test(username)){
        console.log('Validation failed: invalid username', username);
        return res.status(400).json({ error: 'Username contains invalid characters.' });
    }

    if(!validator.isEmail(email)){
        console.log('Validation failed: invalid email', username);
        return res.status(400).json({ error: 'Invalid email address' });
    }

     // Passed validation
    console.log('Validation passed:', { name, email, username, password });


    
    try {

        const db = await getDBConnection()

        if (!db) {
            console.error('Database connection failed');
            return res.status(500).json({ error: 'Database connection failed.' });
        }

        const existingUser  = await db.get('SELECT * FROM users WHERE username = ? OR email = ?', [username, email])

        if(existingUser){
            console.error('Database connection failed');
            return res.status(400).json({ error: 'Username or Email already in use.' });
        }

        const hashedPassword = await bcrypt.hash(password,10)

        let query = "INSERT INTO users(name, email, username, password) VALUES (?, ?, ?, ?)"
        let params = [name, email, username, hashedPassword]

        
        
        const user = await db.run(query, params)

        const newUser = {
            id: user.lastID,
            name,
            username,
            email,
        };

        // ✅ store session\
        req.session.userId = newUser.id

        console.log( req.session.userId )
   // Optionally, fetch the newly created user or send a success message
       // ✅ consistent response
    res.status(201).json({
      authenticated: true,
      user: newUser,
    });

   console.log('User registered')





    }catch(err){
        console.error('Registration error:', err);
    res.status(500).json({ error: 'Registration failed. Please try again.', details: err.message })
    }

}


export async function getCurrentUser(req, res) {

    const userId = req.session.userId

    try{

        const db = await getDBConnection()

        if(!userId){
          return res.json({authenticated: false})
        }

        const user = await db.get('SELECT * FROM users WHERE  id = ?', [userId])

         if (!user) {
      return res.json({ authenticated: false });
    }


        res.json({authenticated:true, user})

    }catch(err){
        console.error('getCurrentUser error:', err)
    res.status(500).json({ error: 'Internal server error' })

    }
    
}

export async function loginUser(req,res) {

    console.log('I am here now')

    console.log("here",req.body)

    let {username, password} = req.body

    username = username ? username.trim() : ''

    if(!username || !password){
            console.log('Validation failed: missing fields');
        return res.status(400).json({messsage: 'All fields are required'})
    }

    const usernameRegex = /^[a-zA-Z0-9_-]{1,20}$/

    if(!usernameRegex.test(username)){
            console.log('Invalid Username');
        return res.status(400).json({messsage: 'Username contains invalid characters.'})
    }

    try {


        const db = await getDBConnection()
        const user = await db.get('SELECT * FROM users WHERE username = ?', [username])

        if(!user){
            return res.status(401).json({error: 'Invalid username or password'})
        }

        const match = await bcrypt.compare(password, user.password)

        if(!match){
            return res.status(401).json({ error: 'Invalid password' })
        }

        req.session.userId = user.id

           // ✅ Consistent response format
    res.json({
      authenticated: true,
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      },
    });

    console.log("User logged in:", user.username);




    }catch(err){
        console.error('Login error:', err.message)
        res.status(500).json({ error: 'Login failed. Please try again.' }) 
    }
    
}


// export async function check(req, res) {

//     const userId = req.session.userId
//     const name = req.session.name

//     if (userId) {
//     return res.json({
//       authenticated: true,
//       user: { id: userId, name: name }, // expand with real data
//     });
//   }
//   res.status(401).json({ authenticated: false });


    
// }
