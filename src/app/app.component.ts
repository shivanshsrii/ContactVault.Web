import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contacts.model';
import {FormGroup,FormControl,FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HttpClientModule,FormsModule,ReactiveFormsModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ContactVault.web';
  http = inject(HttpClient);
  contactsForm=new FormGroup({
    name:new FormControl<string>(''), 
    email:new FormControl<string | null>(null),
    phone:new FormControl<string>(''),
    favorite:new FormControl<boolean>(false),
  });
  contacts: Contact[] = [];

  ngOnInit() {
    this.getContacts().subscribe(data => {
      this.contacts = data;
    }, error => {
      console.error('Error fetching contacts', error);
    });
  }


  private getContacts():Observable<Contact[]> {
    return this.http.get<Contact[]>('https://localhost:7078/api/Contacts');
 }
 trackByIndex(index: number, item: Contact): number {
  return index;
}
deleteContact(contact: Contact) {
  this.contacts = this.contacts.filter(c => c !== contact);
}

onSubmit() {
  if (this.contactsForm.valid) {
    this.http.post<Contact>('https://localhost:7078/api/Contacts', this.contactsForm.value)
      .subscribe(
        () => {
          this.getContacts().subscribe(data => {
            this.contacts = data; // Refresh list from API after adding a contact
          });
          this.contactsForm.reset(); // Reset form after submission
        },
        (error) => console.error('Error adding contact', error)
      );
  }
}
}