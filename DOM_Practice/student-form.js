
let u_name = document.getElementById("name")
let email = document.getElementById("email")
let age = document.getElementById("age")
let course = document.getElementById("course");
let resultTable = document.getElementById("result-table")

function saveData() {
    
  let genderElement = document.querySelector('input[name="gender"]:checked');
let gender = genderElement ? genderElement.value : "Not Specified";
    let newTr = document.createElement("tr")
    newTr.innerHTML = "<td>" + u_name.value + "</td>" + "<td>" + age.value + "</td>" + "<td>" + gender + "</td>" + "<td>" + course.value + "</td>" + "<td>" + email.value + "</td>" + "<td class=\"delete-btn\" > <button  onclick='removedata(event)'>Delete</button></td>"

    resultTable.append(newTr)

    u_name.value = "";
    age.value = "";
    email.value = "";
     course.selectedIndex = 0;
    if (genderElement) {
        genderElement.checked = false;
    }


}





function removedata(event) {

      event.target.parentElement.parentElement.remove()
}