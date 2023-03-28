export const adminRegister = {
    type: "object",
    properties: {
      role: { type: 'string' },
      fname: { type: 'string' },
      lname: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' },
  
  
  
    },
    required: ['role', 'fname', 'lname', 'email', 'password']
  };