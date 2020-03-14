import { Component, OnInit, Input } from "@angular/core";
// import { Content } from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() content;

  constructor() {}

  ngOnInit() {
    console.log(this.content);
  }
}
