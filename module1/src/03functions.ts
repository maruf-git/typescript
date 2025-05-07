function add(num1: number, num2: number=10): number {
  return num1 + num2;
}
console.log(add(2, 3));

const addition = (num1: number, num2: number): number => num1 + num2;
console.log(addition(2, 3));

const user2={
    firstName:"maruf",
    middleName:"Ur Rahman",
    lastName:"munna",
    balance:0,
    addBalance(amount:number):number{ 
        return this.balance+=amount
    }
}