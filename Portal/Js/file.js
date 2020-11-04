class Student{
    constructor(name, matNo, gender, img){
        this.name = name;
        this.matNo = matNo;
        this.gender = gender;
        this.img = img;
    }
    createStudent(){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let tdMatric = document.createElement('td');
        tdMatric.innerHTML = this.matNo
        let button = document.createElement('a');
        button.innerHTML = 'View Receipt';
        td.innerHTML = this.name;
        tr.appendChild(td);
        tr.appendChild(tdMatric)
        tr.appendChild(button)
        let list = document.querySelector('#student-list');
        list.append(tr);
    }

    

}
let student = new Student('Landmark', 1.20, 'Female', 'img.png');
let student2 = new Student('Olamide', 987654, 'Male', 'img.svg')

document.addEventListener('DOMContentLoaded', ()=>{
    student.createStudent();
    student2.createStudent()
})