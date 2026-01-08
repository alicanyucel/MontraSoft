import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  template: `
    <div class="services-header">
      <div class="header-content">
        <h1>Hizmetlerimiz</h1>
        <p>Kurumsal ihtiyaçlarınız için kapsamlı yazılım çözümleri</p>
      </div>
    </div>

    <div class="services-container">
      <div class="container">
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🔧</div>
            <h3>Özel Yazılım Geliştirme</h3>
            <p>İşletmenizin spesifik ihtiyaçlarına göre tasarlanmış, sıfırdan geliştirilen yazılım çözümleri.</p>
            <ul>
              <li>Web Uygulamaları</li>
              <li>Mobil Uygulamalar</li>
              <li>Desktop Uygulamalar</li>
            </ul>
            <button pButton type="button" label="Daha Fazla Bilgi" class="p-button-text"></button>
          </div>

          <div class="service-card">
            <div class="service-icon">☁️</div>
            <h3>Bulut Mimarisi</h3>
            <p>Ölçeklenebilir, güvenilir ve maliyet-etkili bulut çözümleri ile işletmenizi modernleştirin.</p>
            <ul>
              <li>AWS Mimarisi</li>
              <li>Azure Çözümleri</li>
              <li>Hibrit Bulut Sistemleri</li>
            </ul>
            <button pButton type="button" label="Daha Fazla Bilgi" class="p-button-text"></button>
          </div>

          <div class="service-card">
            <div class="service-icon">🔐</div>
            <h3>Siber Güvenlik</h3>
            <p>Kuruluşunuzun verilerini ve sistemlerini gelişmiş güvenlik protokolleri ile koruyun.</p>
            <ul>
              <li>Güvenlik Denetimi</li>
              <li>Penetration Testing</li>
              <li>Veri Koruması</li>
            </ul>
            <button pButton type="button" label="Daha Fazla Bilgi" class="p-button-text"></button>
          </div>

          <div class="service-card">
            <div class="service-icon">📊</div>
            <h3>Veri Analitikleri</h3>
            <p>Büyük veri setlerini analiz ederek işletmenize değerli içgörüler sağlayın.</p>
            <ul>
              <li>İş Zekası (BI)</li>
              <li>Yapay Zeka Modelleri</li>
              <li>Raporlama Sistemleri</li>
            </ul>
            <button pButton type="button" label="Daha Fazla Bilgi" class="p-button-text"></button>
          </div>

          <div class="service-card">
            <div class="service-icon">🔄</div>
            <h3>Sistem Entegrasyonu</h3>
            <p>Farklı sistemleri birleştirerek veri akışını optimize edin ve verimliliği artırın.</p>
            <ul>
              <li>ERP Entegrasyonu</li>
              <li>API Geliştirme</li>
              <li>Veri Migrasyon</li>
            </ul>
            <button pButton type="button" label="Daha Fazla Bilgi" class="p-button-text"></button>
          </div>

          <div class="service-card">
            <div class="service-icon">🎓</div>
            <h3>Eğitim & Danışmanlık</h3>
            <p>Ekibinizi en yeni teknolojiler ve en iyi uygulamalar hakkında eğitin.</p>
            <ul>
              <li>Teknik Eğitimler</li>
              <li>Proje Danışmanlığı</li>
              <li>Kapasite Geliştirme</li>
            </ul>
            <button pButton type="button" label="Daha Fazla Bilgi" class="p-button-text"></button>
          </div>
        </div>
      </div>
    </div>

    <div class="process-section">
      <div class="container">
        <h2>Çalışma Sürecimiz</h2>
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <h4>Danışma</h4>
            <p>Gereksinimlerinizi anlıyoruz</p>
          </div>
          <div class="step-arrow">→</div>
          <div class="step">
            <div class="step-number">2</div>
            <h4>Analiz</h4>
            <p>Çözüm planını oluşturuyoruz</p>
          </div>
          <div class="step-arrow">→</div>
          <div class="step">
            <div class="step-number">3</div>
            <h4>Geliştirme</h4>
            <p>Profesyonel ekip ile kodluyoruz</p>
          </div>
          <div class="step-arrow">→</div>
          <div class="step">
            <div class="step-number">4</div>
            <h4>Test</h4>
            <p>Kalite kontrol yapıyoruz</p>
          </div>
          <div class="step-arrow">→</div>
          <div class="step">
            <div class="step-number">5</div>
            <h4>Yayınlama</h4>
            <p>Sistemi kullanıma sunuyoruz</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .services-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 2rem;
      text-align: center;
    }

    .header-content h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .header-content p {
      font-size: 1.2rem;
      opacity: 0.9;
    }

    .services-container {
      padding: 4rem 2rem;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }

    .service-card:hover {
      transform: translateY(-5px);
    }

    .service-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .service-card h3 {
      color: #667eea;
      margin-bottom: 1rem;
    }

    .service-card ul {
      list-style: none;
      padding: 1rem 0;
      margin: 1rem 0;
    }

    .service-card ul li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }

    .service-card ul li:last-child {
      border-bottom: none;
    }

    .process-section {
      padding: 4rem 2rem;
      background: white;
    }

    .process-section h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #333;
    }

    .process-steps {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .step {
      text-align: center;
      padding: 1.5rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 10px;
      min-width: 150px;
    }

    .step-number {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .step-arrow {
      font-size: 2rem;
      color: #667eea;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .process-steps {
        gap: 0.5rem;
      }

      .step-arrow {
        transform: rotate(90deg);
      }
    }
  `]
})
export class ServicesComponent {}
