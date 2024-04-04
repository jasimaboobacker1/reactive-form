import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task-form';
  form = {
    Username: '',
    Email: '',
    Address: '',
    Dob: '',
    Password: '',
    Phone: ''
  };
 
  onSubmit() {
    const message =
      "Username: " + this.form.Username + "\n" +
      "Email: " + this.form.Email + "\n" +
      "Address: " + this.form.Address + "\n" +
      "Date of Birth: " + this.form.Dob + "\n" +
      "Password: " + this.form.Password + "\n" +
      "Phone Number: " + this.form.Phone;
    alert(message);

   
    this.form = {
      Username: '',
      Email: '',
      Address: '',
      Dob: '',
      Password: '',
      Phone: ''
    };
  }

  
}
