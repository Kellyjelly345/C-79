var name_of_students = [];

function submit(){
var name_1 = document.getElementById("input_1").value;
var name_2 = document.getElementById("input_2").value;
var name_3 = document.getElementById("input_3").value;
var name_4 = document.getElementById("input_4").value;
name_of_students.push(name_1);
name_of_students.push(name_2);
name_of_students.push(name_3);
name_of_students.push(name_4);
console.log(name_of_students);
document.getElementById("display_div").innerHTML=name_of_students;
document.getElementById("submitBtn").style.display="none";
document.getElementById("sortBtn").style.display="inline-block";

}

function sorting(){

    var sorted_array = name_of_students.sort();
    document.getElementById("display_div").innerHTML=sorted_array;
    console.log(sorted_array);
}