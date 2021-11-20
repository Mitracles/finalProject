import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from "./student";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getStudent(): Observable<Student[]>{
      return this.http.get<Student[]>(`${this.apiServerUrl}/student/all`);
  }

  public addStudent(student: Student): Observable<Student>{
      return this.http.post<Student>(`${this.apiServerUrl}.student/add`, student);
  }

  public updateEmployee(student: Student): Observable<Student>{
      return this.http.put<Student>(`${this.apiServerUrl}.student/update`, student);
  }

  public deleteEmployee(studentId: Student): Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}.student/delete/${studentId}`);
  }
}

