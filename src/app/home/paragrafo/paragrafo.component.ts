import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-paragrafo',
  templateUrl: './paragrafo.component.html',
  styleUrls: ['./paragrafo.component.scss']
})
export class ParagrafoComponent implements OnInit, OnDestroy{

  number: number = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    console.log('ParagrafoComponent.constructor()')
  }

  ngOnInit(): void {
    console.log('ParagrafoComponent.ngOnInit()')
    this.activatedRoute.params.subscribe(params => {
      this.number = params['id'];
    })
  }

  ngOnDestroy(): void {
    console.log('ParagrafoComponent.ngOnDestroy()')
  }

}
