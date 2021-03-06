import { Component } from "@angular/core";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "./hero.service";

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <hy-heroes></hy-heroes>
  `,
  directives: [HeroesComponent],
  providers: [HeroService]
})

export class AppComponent {
  title = "Tour of Heroes";
}
