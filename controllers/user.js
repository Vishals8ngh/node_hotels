const User = require('./models/User'); // Adjust path as per your project structure

// Example of creating a new user
const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'securepassword',
    age: 30
});

newUser.save()
    .then(user => {
        console.log('User created:', user);
    })
    .catch(err => {
        console.error('Error creating user:', err);
    });
