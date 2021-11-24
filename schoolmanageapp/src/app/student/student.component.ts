import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public students: Student[];
  public editStudent: Student;
  public deleteStudent: Student;

  constructor(private studentService: StudentService){
    this.students = [];
  }

  ngOnInit(){
    this.getStudents();
  }
  
  public getStudents(): void{
    this.studentService.getStudents().subscribe(
      (response: Student[]) =>{
        this.students = response;
        console.log(this.students);
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
}
  
public onAddStudent(addForm: NgForm): void {
  document.getElementById('add-student-form').click();
  this.studentService.addStudent(addForm.value).subscribe(
    (response: Student) => {
      console.log(response);
      this.getStudents();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}

public onUpdateStudent(student: Student): void {
  this.studentService.updateStudent(student).subscribe(
    (response: Student) => {
      console.log(response);
      this.getStudents();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onDeleteStudent(studentId: number): void {
  this.studentService.deleteStudent(studentId).subscribe(
    (response: void) => {
      console.log(response);
      this.getStudents();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public searchStudents(key: string): void {
  console.log(key);
  const results: Student[] = [];
  for (const student of this.students) {
    if (student.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || student.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || student.contact.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || student.section.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
      results.push(student);
    }
  }
  this.students = results;
  if (results.length === 0 || !key) {
    this.getStudents();
  }
}

public onOpenModal(student: Student, mode: string): void{
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-bs-toggle', 'modal');
  if(mode=='add'){
    button.setAttribute('data-bs-target', '#addStudentModal');
  }
  if(mode=='edit'){
    this.editStudent = student;
    button.setAttribute('data-bs-target', '#updateStudentModal');
  }
  if(mode=='delete'){
    this.deleteStudent = student;
    button.setAttribute('data-bs-target', '#deleteStudentModal');
  }
  container?.appendChild(button);
  button.click();
}

}
 
