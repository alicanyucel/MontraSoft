import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'back-to-top',
  standalone: true,
  template: `
    <button
      class="back-to-top"
      (click)="scrollToTop()"
      [style.display]="isVisible ? 'block' : 'none'"
      aria-label="Sayfanın üstüne git"
    >
      ↑
    </button>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      background-color: #667eea;
      color: white;
      border: none;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    .back-to-top:hover {
      background-color: #5568d3;
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
    }

    .back-to-top:active {
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      .back-to-top {
        width: 45px;
        height: 45px;
        bottom: 15px;
        right: 15px;
        font-size: 20px;
      }
    }
  `]
})
export class BackToTopComponent {
  isVisible = false;

  constructor() {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  onWindowScroll() {
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, BackToTopComponent],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>YÜCELSOFT</h3>
          <p>Kurumsal yazılım çözümleriyle işletmenizi dijitale taşıyoruz.</p>
        </div>
        <div class="footer-section">
          <h4>Hızlı Linkler</h4>
          <ul>
            <li><a routerLink="/" class="footer-link">Anasayfa</a></li>
            <li><a routerLink="/services" class="footer-link">Hizmetler</a></li>
            <li><a routerLink="/about" class="footer-link">Hakkımızda</a></li>
            <li><a routerLink="/contact" class="footer-link">İletişim</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>İletişim</h4>
          <p>📧 info@yucelsoft.com</p>
          <p>📞 0541 692 36 75</p>
          <p>📍 İstanbul, Türkiye</p>
        </div>
        <div class="footer-section">
          <h4>Sosyal Medya</h4>
          <ul>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 YÜCELSOFT Yazılım Şirketi. Tüm hakları saklıdır. | Tasarımcı: Ali Can Yücel</p>
      </div>
    </footer>
    <back-to-top></back-to-top>
  `,
  styles: [`
    .footer {
      background-color: #1a1a2e;
      color: #ecf0f1;
      padding: 1.5rem 2rem 0.75rem;
      margin-top: 3rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      max-width: 1200px;
      margin: 0 auto 1rem;
    }

    .footer-section h3,
    .footer-section h4 {
      margin-bottom: 0.75rem;
      color: #667eea;
      font-size: 0.95rem;
    }

    .footer-section h3 {
      font-size: 1.1rem;
    }

    .footer-section p {
      font-size: 0.9rem;
      margin: 0.3rem 0;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section ul li {
      margin-bottom: 0.3rem;
    }

    .footer-section a {
      color: #ecf0f1;
      text-decoration: none;
      transition: color 0.3s;
      font-size: 0.9rem;
      cursor: pointer;
    }

    .footer-section a:hover {
      color: #667eea;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 0.75rem;
      border-top: 1px solid #444;
      font-size: 0.8rem;
      color: #999;
    }
  `]
})
export class FooterComponent {}
