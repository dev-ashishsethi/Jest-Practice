const functions = {
  add: (num1, num2) => num1 + num2,
  nullCheck:()=>null,
  checkValue:(x)=>x,
  createUser:()=>{
   return user={
        firstName:"ashish",
        lastName:"sethi"
    }
  },
  exception: function (){throw new Error("looooooooooooooooool")}
};

module.exports = functions;
