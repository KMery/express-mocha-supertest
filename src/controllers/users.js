const getAllUsers = (req, res) => {
    return res.json('all users sent');
};

const getUserById = (req, res) => {
    if (req.params.id === 'U0001') {
        return res.json('User found');
    };
    return res.status(404).json('User not found');
}

const addUser = (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        return res.status(201).json('User created');
    }
    return res.status(400).json('User not created')
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser
}