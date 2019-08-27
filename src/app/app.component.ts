import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isSmartPhone: boolean;
  firstMenu: {} = "content.firstMenu.isClicked";
  content = {
    firstMenu: {
      title: "First Title",
      body:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, ab praesentium magnam similique voluptatibus omn voluptates dignissimos corporis illum doloremque.",
      isClicked: false
    },
    secondMenu: {
      title: "Second Title",
      body:
        "Porem, ipsum dolor sit amet consectetur adipisicing elit. Ut, ab praesentium magnam similique voluptatibus omn sdafsd dignissimos corporis illum doloremque.",
      isClicked: false
    },
    thirdMenu: {
      title: "Third Title",
      body:
        "sdaf, hdsfa dolor sit amet consectetur adipisicing elit. Ut, ab praesentium magnam similique voluptatibus omn sdafsd dignissimos corporis illum dfas.",
      isClicked: false
    }
  };

  //listen window resize
  @HostListener("window:resize", ["$event"])
  onresize(event): void {
    this.isSmartPhone = event.target.innerWidth < 381;
  }

  onClick(title): void {
    if (title === this.content.firstMenu.title) {
      this.content.firstMenu.isClicked = !this.content.firstMenu.isClicked;
      this.content.secondMenu.isClicked = false;
      this.content.thirdMenu.isClicked = false;
    }
    if (title === this.content.secondMenu.title) {
      this.content.secondMenu.isClicked = !this.content.secondMenu.isClicked;
      this.content.firstMenu.isClicked = false;
      this.content.thirdMenu.isClicked = false;
    }
    if (title === this.content.thirdMenu.title) {
      this.content.thirdMenu.isClicked = !this.content.thirdMenu.isClicked;
      this.content.firstMenu.isClicked = false;
      this.content.secondMenu.isClicked = false;
    }
  }
  ngOnInit(): void {
    this.isSmartPhone = window.innerWidth < 381;
  }
}
