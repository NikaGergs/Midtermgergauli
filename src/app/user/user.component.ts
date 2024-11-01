import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildUser, ParentUser } from './ParentUser';
import { DisplayService } from '../display.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() person : ParentUser[] = [];

  childUsers : ChildUser[] = [
    {id: 1,firstName: 'Nika',lastName: 'doe',dateOfBirth: '01.31.2005',phonenumber: '555-555-555',email: 'nika@gmail.com'},
    {firstName: 'Gio', id: 1, lastName: 'Asanovi',dateOfBirth: '02.12.2007', email: 'gio@gmail.com', phonenumber: '888888888'}
  ]

  @Output() sendChildUsers = new EventEmitter<ChildUser[]>();

  emitChildUsers() {
    this.sendChildUsers.emit(this.childUsers);
  }


  displayUsers() {
    this.displayService.displayArray(this.person);
  }


  userForm: FormGroup;
  users: ChildUser[] = [];

  constructor(private formBuilder: FormBuilder, private displayService: DisplayService) {
    this.userForm = this.formBuilder.group({
      id: [null],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.minLength(8), Validators.email]],
    });
  }

  ngOninit(): void {

  }

  
  addUser(){
    if(this.userForm.valid){
      const newUser: ChildUser = this.userForm.value;
      this.users.push(newUser);
      this.userForm.reset();
    }
  }


  get f() {
    return this.userForm.controls;
  }
}
