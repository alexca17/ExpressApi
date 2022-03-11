import Con from "../db.js";

let users = [];

const client = await Con.connect();

//OK
export const getUsers = async (req, res) => {
  users = await client.query("SELECT * FROM users;");
  res.send(users);
  if (!users) {
    return res.status(200).json({
      status: "success",
    });
  }
};

//OK
export const createUser = async (req, res) => {
  //const client = await Con.connect();
  const nameUser = req.body.name.toString();
  const email = req.body.email.toString();
  const contact = req.body.contact.toString();

  const newUser = await client.query(
    `INSERT INTO users (name,mail,contact) VALUES ('${nameUser}','${email}',${contact});`
  );
  res.send("User Added Successfully");
  if (!newUser) {
    res.json(newUser);
    return res.status(200).json({
      status: "success",
    });
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  const singleUser = await client.query(
    `SELECT * FROM users where id = ${id};`
  );
  res.send(singleUser);
  if (!singleUser) {
    return res.status(200).json({
      status: "success",
    });
  }
};

export const deleteUser = async (req, res) => {
  const user =  req.params.id;

  const deleteContact = await client.query(`DELETE FROM users WHERE id = ${user};`);
  res.send("User Deleted Successfully");

  if(!deleteContact){
    res.json(deleteContact);
    return res.status(200).json({
      status: "success",
    });
  }
};

export const updateUser = async (req, res) => {
  const user = req.params.id;
  const name = req.body.name;
  const contact = req.body.contact;
  const mail = req.body.mail;

  const update = await client.query(
    `UPDATE users SET name = '${name}', mail = '${mail}', contact = '${contact}' WHERE id = ${user};`
  );
  res.send("User Updated Successfully");
  if (!update) {
    res.json(update);
    return res.status(200).json({
      status: "success",
    });
  }
};
