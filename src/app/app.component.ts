import { Component } from '@angular/core';
import { ChildUser, ParentUser } from './user/ParentUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nikoloz Gergauli';

  receivedChildUsers: ChildUser[] = [];
  onReceiveChildUsers(childUsers: ChildUser[]) {
    this.receivedChildUsers = childUsers;
  }


  person : ParentUser[] = [
    {firstName: 'Nika', id: 1, lastName: 'Gergauli',dateOfBirth: '01.31.2005', email: 'nika@gmail.com', phonenumber: '12345678'},
    
]


  users = [
    { name: 'Tazo ', lastname : 'doe',age: 15,  },
    { name: 'Levan ', lastname : 'doe',age: 20,  },
    { name: 'Nino ',lastname : 'doe', age: 18,  },
    { name: 'Nika ', lastname : 'doe',age: 22,  },
    { name: 'Gio ',lastname :'doe', age: 28,  }
  ]

}
