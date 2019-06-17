import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder,HttpTransportType } from '@aspnet/signalr';

@Injectable()
export class NotificationsService {

  // private hubConnection: HubConnection;

  // name = '';
  // id;
  // message = '';
  // messages: string[] = [];
  // constructor() { }

  // msgService() {
  //    //this.nick = window.prompt('Your name:', 'John');
  //    this.hubConnection = new HubConnectionBuilder().withUrl('http://localhost:5000/notification',
  //    {skipNegotiation:true,transport:HttpTransportType.WebSockets}).build();
 
  //  this.hubConnection
  //      .start()
  //     .then(() => console.log('Connection started!'))
  //      .catch(err => console.log('Error while establishing connection :('));
 
  //      this.hubConnection.on('sendmessageToClientInOnePlant', (name: string, receivedMessage: string) => {
  //        const text = `${name}: ${receivedMessage}`;
  //        this.messages.push(text);
  //      }); 
         
  //      this.hubConnection.on('SendnotificationFOrUserOrder', (name: string, receivedMessage: string) => {
  //        const text = `${name}: ${receivedMessage}`;
  //        this.messages.push(text);
  //      }); 
      
  //      this.hubConnection.on('SendnotificationFOrUserQuestion', (name: string, receivedMessage: string) => {
  //        const text = `${name}: ${receivedMessage}`;
  //        this.messages.push(text);
  //      });
  // }
  
}
