import Con from "../db.js";

const client = await Con.connect();

export const getUserLogin = async (req, res) => {
  const user = req.params.user;
  const pass = req.params.pass;

  const users = await client.query(
    `SELECT * FROM userlogin WHERE (username = '${user}' OR email = '${user}') AND password = '${pass}';`
  );
  console.log('data: ',user);
  console.log(pass);
  console.log(users)

  console.log(users.rowCount);
  if (users.rowCount > 0) {
    res.json(users);
    return res.status(200).json({
      status: "success",
    });
  }
  else{
    return res.status(200).json({
        status: "failed",
        msg: "user failed"
      });
  } 
};
