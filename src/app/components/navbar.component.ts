import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, ToolbarModule],
  template: `
    <div class="navbar-container">
      <nav class="navbar">
        <div class="navbar-brand">
          <h1><span class="brand-icon">💻</span> BAAN</h1>
        </div>
        <ul class="nav-links">
          <li><a routerLink="/" class="nav-link">Anasayfa</a></li>
          <li><a routerLink="/services" class="nav-link">Hizmetler</a></li>
          <li><a routerLink="/about" class="nav-link">Hakkımızda</a></li>
          <li><a routerLink="/contact" class="nav-link">İletişim</a></li>
        </ul>
        <button pButton type="button" label="Teklif Al" class="p-button-rounded contact-btn"></button>
      </nav>
    </div>
  `,
  styles: [`
    .navbar-container {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
    }

    .navbar-brand h1 {
      color: white;
      margin: 0;
      font-size: 1.8rem;
      font-weight: bold;
    }

    .brand-icon {
      margin-right: 0.5rem;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.3s;
    }

    .nav-link:hover {
      opacity: 0.8;
    }

    .contact-btn {
      background-color: white !important;
      color: #667eea !important;
    }

    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        gap: 1rem;
      }

      .nav-links {
        gap: 1rem;
        flex-direction: column;
        width: 100%;
      }

      .contact-btn {
        width: 100%;
      }
    }
  `]
})
export class NavbarComponent {}
