let arr = [];


function checkUserInput(){
    let name = document.getElementById("name").value;
    name = name.trim();
    let profession = document.getElementById("profession").value;
    profession = profession.trim();
    let age = document.getElementById("age").value;

    if(name==="" || profession==="" || age ===""){
        document.getElementById("fail").style.display = "block";
        document.getElementById("success").style.display = "none";
    }
    else{
        document.getElementById("fail").style.display = "none";
        document.getElementById("success").style.display = "block";
    }

    const id = arr.length + 1;
    const employee = { id, name, profession, age };
    arr.push(employee);
}






