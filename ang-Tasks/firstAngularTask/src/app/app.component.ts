import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNav } from './nav/nav.component'
import { AppHomeTop } from './home-top/homeTop.component'
import { AppHomeBottom } from './home-bottom/homeBottom.component'
import { AppFooter } from './footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNav, AppHomeTop, AppHomeBottom, AppFooter],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstAngularTask';
}
