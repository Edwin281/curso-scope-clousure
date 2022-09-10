function greeting(){
    let userName = 'Jared';
   function displaysUserName(){
      return `Hello ${userName}!`;
   }
   return displaysUserName;

}

const g = greeting();
console.log(g);
console.log(g());