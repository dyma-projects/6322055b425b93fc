import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent implements OnInit {
  @ViewChild("input") public el: ElementRef;

  public subscription: Subscription = new Subscription();

  constructor(private userService: UserService) {} // il faut probablement injecter un service ici !

  ngOnInit() {}

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      // console.log(username);

      // on utilise le service ici pour ajouter l'utilisateur;
      this.subscription.add(this.userService.addUser(username));

      this.el.nativeElement.value = "";
    }
  }
}
