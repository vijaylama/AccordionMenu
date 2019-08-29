import { Component, HostListener } from "@angular/core";

export interface Menu{
  name:string;
  title:string;
  body:string;
  isClicked:boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isSmartPhone: boolean;
  currentMenu: Menu;
  contents: Menu[]=[
    {
      name: "First Menu",
      title: "First Title",
      body:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, ab praesentium magnam similique voluptatibus omn voluptates dignissimos corporis illum doloremque.",
      isClicked: false
    },
    {
      name: "Second Menu",
      title: "Second Title",
      body:
        "Porem, ipsum dolor sit amet consectetur adipisicing elit. Ut, ab praesentium magnam similique voluptatibus omn sdafsd dignissimos corporis illum doloremque.",
      isClicked: false
    },
    {
      name: "Third Menu",
      title: "Third Title",
      body: "sdaf, hdsfa dolor sit amet consectetur adipisicing elit. Ut, ab praesentium magnam similique voluptatibus omn sdafsd dignissimos corporis illum dfas.",
      isClicked: false
    }
  ];

  //listen window resize
  @HostListener("window:resize", ["$event"])
  onresize(event): void {
    this.isSmartPhone = event.target.innerWidth < 381;
  }

  onClick(menu): void {
    for(let menuTmp of this.contents){
      if (menu === menuTmp) {
        menuTmp.isClicked = !menuTmp.isClicked;
      }else{
        menuTmp.isClicked = false;
      }
    }
    this.currentMenu = menu;
  }
  ngOnInit(): void {
    this.isSmartPhone = window.innerWidth < 381;
  }
}
