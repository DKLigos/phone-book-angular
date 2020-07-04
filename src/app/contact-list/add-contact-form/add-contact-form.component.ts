import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Contact } from '../models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss']
})
export class AddContactFormComponent implements OnInit {

@Output() public addContact: EventEmitter<Contact> = new EventEmitter<Contact>();

public isShowForm: boolean = false;

public addContactForm: FormGroup;

public showForm(): void{
  this.isShowForm=true;
}

constructor( private contactService : ContactsService
){

}

ngOnInit(): void {
  this.addContactForm = new FormGroup({
    name: new FormControl(null, {validators: [Validators.required]}),
    phone: new FormControl(null, {validators: [Validators.required]}),
  })
}

public onSumbit():void{
  const name=this.addContactForm.value.name;
  const phone = this.addContactForm.value.phone;
  const contact = new Contact(this.addContactForm.value.name,this.addContactForm.value.phone)
  this.contactService.addContact(contact);
  this.addContactForm.reset();
  this.isShowForm=false;
}

}
