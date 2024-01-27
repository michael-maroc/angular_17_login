import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  users:any[] = []
  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    debugger;
    this.http.get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers').subscribe((res:any) => {
    this.users = res.data;
    }, error => {
      alert('Error from API')
    })
  }
}
