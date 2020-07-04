import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  
  @Input() public contact: Contact;
  @Output() remove =new EventEmitter();
  
  constructor( private contactsService:ContactsService){}

  ngOnInit(): void {
  }

  public removeContact() {

    this.contactsService.removeContact(this.contact.id);
    this.remove.emit();
  }

}
