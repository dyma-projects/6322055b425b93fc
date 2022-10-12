import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  public users: string[];
  public subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService // il faut probablement injecter un service ici !
  ) {}

  ngOnInit() {
    // il faut initialiser les users ici avec le service
    this.subscription.add(
      this.userService.users$.subscribe((value) => (this.users = value))
    );
    // console.log(this.users);
  }
}
