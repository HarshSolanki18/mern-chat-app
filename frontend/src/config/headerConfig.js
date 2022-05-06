
const getheaderConfig = function(user){
    const config={
     headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
}
return config;
  };

export default getheaderConfig;  