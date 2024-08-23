import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { WhoWeAreComponent } from "../who-we-are/who-we-are.component";
import { ServicesComponent } from "../services/services.component";
import { PriceListComponent } from "../price-list/price-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhoWeAreComponent, ServicesComponent, PriceListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private words: string[] = ['renovation', 'industrie', 'routes', 'bâtiment', 'villas', 'piscines', 'barrières'];
  private currentIndex: number = 0;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startTypingAnimation();
    }
  }

  startTypingAnimation() {
    const changingTextElement = document.querySelector('.changing-text');

    if (changingTextElement) {
      this.typeWord(changingTextElement);
    }
  }

  typeWord(element: Element) {
    const word = this.words[this.currentIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      element.textContent = word.slice(0, ++charIndex);

      if (charIndex === word.length) {
        clearInterval(typingInterval);
        setTimeout(() => this.eraseWord(element), 1000);
      }
    }, 150);
  }

  eraseWord(element: Element) {
    let word = element.textContent || '';
    let charIndex = word.length;

    const erasingInterval = setInterval(() => {
      element.textContent = word.slice(0, --charIndex);

      if (charIndex === 0) {
        clearInterval(erasingInterval);
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
        setTimeout(() => this.typeWord(element), 500);
      }
    }, 100);
  }
}
