let userList = [
     {
        id: 1,
        name: "Rikkei",
        age: 30,
      },
      {
         id: 2,
        name: "Academy",
        age: 20,
       },
     ];
function createrUser() {
     newObj.id = userList.length + 1;
     newObj.name = prompt('Enter your user name');
     newObj.age = prompt('Enter your user name');
     userList.push(newObj);
    }
    function updateUser() {
        let id = +prompt("Enter your id user want to update:");
        if(userList.indexOf(id) |--undefined){
            userList[id].name = prompt("update your user name");
        }
        else{console.log("user not found");}
    }
    function deleteUser() {
        let id =+prompt("Enter your id user want to delete:");
        let isTrue=false;
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].id===id) {
                userList.splice(i,1);
                isTrue = true;
            }
        }
        if (isTrue===false) {
            console.log("user not found");
        }
    }
    if (option ==="C") {
        createrUser();
        console.table(userList);
    }else if (option==="R") {
        console.table(userList);
    }else if (option==="U") {
        updateUser();
        console.table(userList);
    }else if (option==="D") {
        deleteUser();
        console.table(userList);
    }