import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  constructor(private contactService:ContactService) {}

  contacts:any = [];
  showAddContactForm = false;
  newContact: any = {};

  showEditForm = false;
  editedContact: any = {};
  selectedContact: any | null = null;

  ngOnInit()
  {
    this.getAll();
  }

  openAddContactForm() {
    // Show the form and reset newContact data
    this.showAddContactForm = true;
    this.newContact = {};
  }

  openEditContactForm(contact: any) {
    this.showEditForm = true;
    this.editedContact = contact;
  }

  logout() {
    localStorage.removeItem("VNITtoken");
    localStorage.removeItem("VNITid");
    this.contacts = [];
  }
  
  getAll()
  {
    this.contactService.getAll().subscribe(success => {
      console.log("success--", success);
      let sData:any = success;
      this.contacts = sData.data;
    }, error => {
      console.log("error--", error);
    });
  }

  add()
  {
    this.contactService.add(this.newContact).subscribe(success => {
      console.log("success--", success);
      this.getAll();
      this.showAddContactForm = false;
    }, error => {
      console.log("error--", error);
    });
  }

  editContact() {
    this.contactService.edit(this.editedContact).subscribe(success => {
      console.log("success--", success);
      this.getAll();
      this.showEditForm = false;
    }, error => {
      console.log("error--", error);
    })
  }

  deleteContact(contact: any) {

    this.contactService.delete(contact.id).subscribe(success => {
      console.log("success--", success);
      this.getAll();
    }, error => {
      console.log("error--", error);
    })

  }
  

}