import { Component, OnInit } from '@angular/core';
import { ListUserChat } from 'src/app/common/interfaces/list-user-chat.d';
import { ListUserChatService } from 'src/app/common/services/list-chat-user';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {

  public listUserChat: ListUserChat[] = [];

  constructor(
    protected listUserChatService: ListUserChatService,
  ) { }

  ngOnInit(): void {
    this.listUserChat = this.listUserChatService.listUsers;
    console.log(this.listUserChat);
    
  }

}
