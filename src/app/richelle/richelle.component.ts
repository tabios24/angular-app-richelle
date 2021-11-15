import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-richelle',
  templateUrl: './richelle.component.html',
  styleUrls: ['./richelle.component.css']
})
export class RichelleComponent implements OnInit {
public nameOfOA:any = [
{
  name: "jonathan tabios"
  age: 20
}
]
  constructor() { }

  ngOnInit() {
  }

}