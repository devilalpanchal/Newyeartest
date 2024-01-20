const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  
  function printDevelopers(data) {
    for (let person of data) {
      if (person.profession === "developer") {
        console.log(person.name);
      }
    }
  }
  // 2. Add Data
  const newName = prompt("Enter name:");
  const newAge = prompt("Enter age:");
  const newProfession = prompt("Enter profession:");
  
  const newObject = {
    name: newName,
    age: parseInt (newAge),
    profession: newProfession,
  };
  
  data.push(newObject);
  
  console.log( data);
  
  // 3. Remove Admins
  function removeAdmin(data) {
     data.pop();
  }
  
  console.log(removeAdmin(data));
  
  // 4. Concatenate Array
  
  function  concatenateArray(person1, person2) {
    return Object.assign({}, person1, person2);
  }
  
  const person1 = { name: "john", age: 24, profession: "developer" };
  const person2 = { name: "jane", age: 27, profession: "admin" };
  
  const concatenateArray = concatenateArray(person1, person2);
  console.log(concatenateArray(person1, person2));
  
  
  // 5. Average Age
  function averageAge(data) {
  
    return data.reduce((a, b) => a + b.age, 0) ;
  }
  console.log(averageAge(data));
  
  
  // 6. Age Check
  function checkAgeAbove25(data) {
    return data.some(obj => obj.age > 25);
  }
  
  console.log(checkAgeAbove25(data)); 
  
  
  // 7. Unique Professions
  function uniqueProfessions(data) {
    for(let person of data){
      if (person.profession === "developer"){
        console.log(person.profession);
      }
      else if(person.profession === "admin"){
        console.log(person.profession)
      }
    }
  
  
  // 8. Sort by Age
  function sortByAge(data) {
    data.sort(function(a, b){return data.a-data.b});
   
  }
  console.log(data)
  
  // 9. Update Profession
  function updateJohnsProfession(data) {
    
  
    data.forEach((item)=>{
      if(item.name = "john"){
        item.profession = "data scientist"
      }
      console.log(updateJohnsProfession(data))
    }) 
   
    
  }
  
  
  
  // 10. Profession Count
  function getTotalProfessions() {}
  
