import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
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
            <li><a href="#">Anasayfa</a></li>
            <li><a href="#">Hizmetler</a></li>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">İletişim</a></li>
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
  `,
  styles: [`
    .footer {
      background-color: #1a1a2e;
      color: #ecf0f1;
      padding: 3rem 2rem 1rem;
      margin-top: 4rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto 2rem;
    }

    .footer-section h3,
    .footer-section h4 {
      margin-bottom: 1rem;
      color: #667eea;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-section a {
      color: #ecf0f1;
      text-decoration: none;
      transition: color 0.3s;
    }

    .footer-section a:hover {
      color: #667eea;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid #444;
      font-size: 0.9rem;
      color: #999;
    }
  `]
})
export class FooterComponent {}
