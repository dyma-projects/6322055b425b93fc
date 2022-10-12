import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {}

  public addUser(user: string) {
    // console.log("valeur reçue : ", user);
    // Ajout de l'utilisateur dans la liste users$
    this.users$.next(this.users$.getValue().concat([user]));

    // console.log(this.users$.value);
  }
}
