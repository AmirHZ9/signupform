export const validate = (data,type) => {
  const errors = {};

  

  if (!data.email) {
    errors.email = "Email Requierd";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid Email ";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password Requierd";
  } else if (data.password.length < 6) {
    errors.password = "Password most be more than 6 chracters";
  } else {
    delete errors.password;
  }
  
  if(type =='signup'){
    if (!data.name.trim()) {
        errors.name = "Username Requierd";
      } else {
        delete errors.name;
      }
      if (!data.confirmpassword) {
        errors.confirmpassword = "Confirmpassword Requierd";
      } else if (data.confirmpassword !== data.password) {
        errors.confirmpassword = "Password not match";
      } else {
        delete errors.confirmpassword;
      }
      if (data.isAccept) {
        delete errors.isAccept;
      } else {
        errors.isAccept = "check Required";
      }
  }
  return errors;
};
