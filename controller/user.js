let users = [];

export const  createUser = (req, res) => {
    const {name, email} = req.body;

    if(!name || !email) {
        return res.status(400).send("Missing fields");
    }
    const user = {
        id: Date.now(),
        name, 
        email
    };
    users.push(user);
    res.send(user);

}

export const getUsers = (req, res)=> {

    if(users.length === 0) {
        return res.status(404).send("No Users Found");
    }
    if(req.query.name) {  //when getting users with query name, we will filter the users bases on the name and return the filtered users
        const filteredUsers = users.filter((u)=> u.name.toLowerCase().includes(req.query.name.toLowerCase()))  // we will use the includes method to check if the name query is included in the user name, and we will use the toLowerCase method to make the search case insesitive
        return res.send(filteredUsers); 
    }
   res.send(users); 
}

export const getUserById = (req, res) => {
    const user = users.find((u) => u.id === Number(req.params.id));

    if (!user){
        return res.status(404).send("User not found");
    }
    res.send(user);
}

export const deleteUser = (req, res) =>{
    const index = users.findIndex((u) => u.id === Number(req.params.id));
    if(index === -1) {
        return res.status(404).send("User not found");
    }
    users.splice(index, 1);
    res.send("User deleted");
}

export const updateUser = (req, res) => {
    const user = users.find((u) => u.id === Number(req.params.id));

    if (!user){
        return res.status(404).send("User not found");
    }
    const {name, email} = req.body;
   if(!name && !email) {
    return res.status(400).send("Please provide name or email to update")
   }

   if(name) user.name = name;
   if(email) user.email = email;
    res.send(user);
}




