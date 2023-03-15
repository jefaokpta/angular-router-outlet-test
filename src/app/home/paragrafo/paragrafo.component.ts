import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-paragrafo',
  templateUrl: './paragrafo.component.html',
  styleUrls: ['./paragrafo.component.scss']
})
export class ParagrafoComponent implements OnInit{

  number: number = 0;
  chats: string[] = [];
  activeContact: string = '';
  contactSub: Subscription | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // fazer unsubscribe do stomp usando o this.number atual
      if (this.contactSub) this.contactSub.unsubscribe();
      this.number = params['id'];
      // fazer o subscribe do chats no stomp no /user/:id/private
      // this.contactSub = stomp.subscribe('/user/:id/private', (message) => recebeMsg(message))
      // pedir pro back o chat do contato com o publisher
      // stomp.send('/app/chat', {}, JSON.stringify({id: this.number, publisher: 'user'}))
    })

  }

}
