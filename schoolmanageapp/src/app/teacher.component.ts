import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  public teachers: Teacher[];
  public editTeacher: Teacher;
  public deleteTeacher: Teacher;

  constructor(private teacherService: TeacherService){
    this.teachers = [];
  }

  ngOnInit(){
    this.getTeachers();
  }
  
  public getTeachers(): void{
    this.teacherService.getTeachers().subscribe(
      (response: Teacher[]) =>{
        this.teachers = response;
        console.log(this.teachers);
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
}

public onAddTeacher(addForm: NgForm): void {
  document.getElementById('add-teacher-form').click();
  this.teacherService.addTeacher(addForm.value).subscribe(
    (response: Teacher) => {
      console.log(response);
      this.getTeachers();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}

public onUpdateTeacher(teacher: Teacher): void {
  this.teacherService.updateTeacher(teacher).subscribe(
    (response: Teacher) => {
      console.log(response);
      this.getTeachers();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onDeleteTeacher(teacherId: number): void {
  this.teacherService.deleteTeacher(teacherId).subscribe(
    (response: void) => {
      console.log(response);
      this.getTeachers();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public searchTeachers(key: string): void {
  console.log(key);
  const results: Teacher[] = [];
  for (const teacher of this.teachers) {
    if (teacher.teachername.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || teacher.teacheremail.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || teacher.teachercontact.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
      results.push(teacher);
    }
  }
  this.teachers = results;
  if (results.length === 0 || !key) {
    this.getTeachers();
  }
}

public onOpenTeacherModal(teacher: Teacher, mode: string): void{
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-bs-toggle', 'modal');
  if(mode=='add'){
    button.setAttribute('data-bs-target', '#addTeacherModal');
  }
  if(mode=='edit'){
    this.editTeacher = teacher;
    button.setAttribute('data-bs-target', '#updateTeacherModal');
  }
  if(mode=='delete'){
    this.deleteTeacher = teacher;
    button.setAttribute('data-bs-target', '#deleteTeacherModal');
  }
  container?.appendChild(button);
  button.click();
}

}
