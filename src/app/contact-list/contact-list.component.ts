import { Component, OnInit} from '@angular/core';
import {Contact} from "./models/contact.model";
import {ContactsService} from '../services/contacts.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

public contacts: Contact[] = [];
public isFiltered : boolean = false;

constructor( private contactsService:ContactsService){}
ngOnInit(): void {
this.updateContacts();
}


public filter(e: KeyboardEvent): void {
  const value = (e.target as HTMLInputElement).value.toLocaleLowerCase();
  if(value){
  this.contacts = this.contacts.filter(contact=>
  contact.name.toLocaleLowerCase().includes(value));
  this.isFiltered = true;}
  else {
    this.updateContacts();
    this.isFiltered=false;
  }

}

public emptyMessage(): string{
  if(this.contacts.length === 0 && this.isFiltered) {
    return 'No result';
  }
  if(this.contacts.length === 0 && !this.isFiltered){
    return 'No contact'
  }
}

public updateContacts():void{
  this.contacts = this.contactsService.updateContacts();


}

}
