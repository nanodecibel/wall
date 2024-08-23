import { Component } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [],
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css'],
  host: { 'ngSkipHydration': '' } // Deshabilitar la hidratación para este componente
})
export class WhoWeAreComponent { }
