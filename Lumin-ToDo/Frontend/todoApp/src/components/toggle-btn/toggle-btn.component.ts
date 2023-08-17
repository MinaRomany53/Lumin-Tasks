import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.css'],
})
export class ToggleBtnComponent {
  isDarkTheme: boolean = false;

  constructor(private renderer: Renderer2) {
    const savedTheme = localStorage.getItem('theme'); // Check local storage for saved theme preference
    this.isDarkTheme = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light'); // Save theme preference to local storage
  }

  private applyTheme() {
    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark');
      this.renderer.removeClass(document.body, 'light');
    } else {
      this.renderer.addClass(document.body, 'light');
      this.renderer.removeClass(document.body, 'dark');
    }
  }
}
