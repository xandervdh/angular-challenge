import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  languages = ['HTML', 'CSS'];
  friendModel = new Friend('', '', '', 0, null);
  private addFriendService: AddFriendService;
  private allFriends: any;

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }

  public submit(): void {
    const observable = this.addFriendService.addFriend(this.friendModel);
    const myObserver = {
      next: (x: string) => console.log('Observer got a next value: ' + x),
      error: (err: string) => console.error('Observer got an error: ' + err),
      complete: () => this.display('http://localhost:9000/allFriends'),
    };
    observable.subscribe(myObserver);
    console.log(this.allFriends);
  }

  public async display(url: string): Promise<any> {

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const body = await response.json();
    this.allFriends = body;
    return body;
  }

  public ngOnInit(): any {
    this.display('http://localhost:9000/allFriends');
  }
}
