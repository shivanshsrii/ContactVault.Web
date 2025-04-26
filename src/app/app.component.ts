import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contacts.model';
import {FormGroup,FormControl,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Validators } from '@angular/forms';

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
  contactsForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    email: new FormControl<string | null>(null, { validators: [Validators.required, Validators.email] }),
    phone: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.pattern('^[0-9]{10}$')] }),
    favorite: new FormControl<boolean>(false),
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
  const confirmed = window.confirm(`Are you sure you want to delete ${contact.name}?`);
  this.http.delete(`https://localhost:7078/api/Contacts/${contact.id}`).subscribe(() => {
    this.contacts = this.contacts.filter(c => c.id !== contact.id);
  });  
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