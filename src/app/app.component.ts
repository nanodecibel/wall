import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wall';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startWhatsAppAnimation();
    }
  }

  startWhatsAppAnimation() {
    const whatsappButton = document.getElementById('whatsapp-button');

    if (whatsappButton) {
      setInterval(() => {
        whatsappButton.classList.toggle('expand');
      }, 20000); // Toggle class every 20 seconds
    }
  }

  openWhatsApp() {
    const phoneNumber = '+41795104352'; // Reemplaza con el número de teléfono real
    window.open(`https://wa.me/${phoneNumber}?text=Bonjour Washington, je voudrais demander un devis.`, '_blank');
  }
}
