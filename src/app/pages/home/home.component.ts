import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  template: `
    <div class="hero-section">
      <div class="hero-content">
        <h1>Dijital Dönüşümün Güçlü Çözüm Ortağı</h1>
        <p>BAAN ile işletmenizi modern teknolojiler kullanarak geleceğe taşıyın</p>
        <div class="hero-buttons">
          <button pButton type="button" label="Teklif Al" class="p-button-lg p-button-primary"></button>
          <button pButton type="button" label="Daha Fazla Bilgi" class="p-button-lg p-button-outlined"></button>
        </div>
      </div>
    </div>

    <div class="features-section">
      <div class="container">
        <h2>Neden BAAN'ı Seçmelisiniz?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Hızlı Geliştirme</h3>
            <p>Agile metodoloji ile hızlı ve etkili çözümler sunuyoruz</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Güvenlik</h3>
            <p>Kuruluşsal standartlara uygun en yüksek güvenlik protokolleri</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📈</div>
            <h3>Ölçeklenebilirlik</h3>
            <p>İşletmenizin büyümesi ile birlikte büyüyen çözümler</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h3>Global Deneyim</h3>
            <p>Uluslararası standartlar ve yerel bilgi birleşimi</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👥</div>
            <h3>Uzman Ekip</h3>
            <p>20+ yıl deneyime sahip profesyonel geliştirici ekibi</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Uygun Fiyat</h3>
            <p>Yüksek kalite, makul fiyatlarla sunulan çözümler</p>
          </div>
        </div>
      </div>
    </div>

    <div class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <h3>150+</h3>
            <p>Tamamlanan Proje</p>
          </div>
          <div class="stat-card">
            <h3>95%</h3>
            <p>Müşteri Memnuniyeti</p>
          </div>
          <div class="stat-card">
            <h3>50+</h3>
            <p>Kurumsal Müşteri</p>
          </div>
          <div class="stat-card">
            <h3>24/7</h3>
            <p>Teknik Destek</p>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <div class="cta-content">
        <h2>Başlamaya Hazır mısınız?</h2>
        <p>Bugün bize ulaşın ve işletmeniz için doğru çözümü bulun</p>
        <button pButton type="button" label="İletişim Formu" class="p-button-lg"></button>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 6rem 2rem;
      text-align: center;
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-content h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: bold;
    }

    .hero-content p {
      font-size: 1.3rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .features-section {
      padding: 4rem 2rem;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .features-section h2 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
      color: #333;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-5px);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      color: #667eea;
      margin-bottom: 1rem;
    }

    .stats-section {
      padding: 4rem 2rem;
      background-color: white;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .stat-card {
      text-align: center;
      padding: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 10px;
    }

    .stat-card h3 {
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
    }

    .stat-card p {
      margin: 0;
      font-size: 1.1rem;
    }

    .cta-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 2rem;
      text-align: center;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .cta-content p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .hero-content p {
        font-size: 1rem;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .features-section h2 {
        font-size: 1.8rem;
      }
    }
  `]
})
export class HomeComponent {}
