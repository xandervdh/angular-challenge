import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  languages = ['HTML', 'CSS'];
  friendModel = new Friend('', '', '', 0, null);
  private addFriendService: AddFriendService;

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }

  public submit(): void {
    console.log(this.friendModel);
    const observable = this.addFriendService.addFriend(this.friendModel);
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    observable.subscribe(myObserver);
  }
}
