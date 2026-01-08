import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  template: `
    <div class="about-header">
      <div class="header-content">
        <h1>Hakkımızda</h1>
        <p>BAAN Yazılım - Türkiye'nin Güvenilir Teknoloji Ortağı</p>
      </div>
    </div>

    <div class="about-container">
      <div class="container">
        <div class="about-section">
          <div class="about-text">
            <h2>Kimiz?</h2>
            <p>
              BAAN Yazılım, 2010 yılından beri kurumsal yazılım çözümleri sunmakta olan ve
              Türkiye'nin önde gelen teknoloji şirketlerinden biridir.
              Kuruluşundan günümüze kadar 150'den fazla projeyi başarıyla tamamlayarak,
              50'den fazla kurumsal müşteriye hizmet vermiştir.
            </p>
            <p>
              Vizyonumuz, işletmelerin dijital dönüşümünü kolaylaştırarak,
              teknoloji aracılığıyla ekonomik ve sosyal kalkınmaya katkı sağlamaktır.
            </p>
          </div>
          <div class="about-image">
            <div class="image-placeholder">
              <span>🏢</span>
            </div>
          </div>
        </div>

        <div class="mission-vision">
          <div class="mission-card">
            <h3>Misyonumuz</h3>
            <p>
              Müşterilerimizin ihtiyaçlarını anlamak, en yüksek kalitede yazılım çözümleri
              sunmak ve uzun vadeli iş ortaklıklarını kurmak.
            </p>
          </div>
          <div class="vision-card">
            <h3>Vizyonumuz</h3>
            <p>
              Küresel pazarda tanınan, yenilikçi teknoloji çözümleri ile işletmeleri
              başarıya ulaştıran bir yazılım şirketi olmak.
            </p>
          </div>
        </div>

        <div class="values-section">
          <h2>Değerlerimiz</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🎯</div>
              <h4>Kalite</h4>
              <p>Her projede en yüksek kaliteyi hedefleriz</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h4>İşbirliği</h4>
              <p>Müşterilerimiz ile yakın işbirliği yapıyoruz</p>
            </div>
            <div class="value-card">
              <div class="value-icon">💡</div>
              <h4>İnovasyon</h4>
              <p>Sürekli yeni teknolojiler öğreniyor ve uyguluyoruz</p>
            </div>
            <div class="value-card">
              <div class="value-icon">⏰</div>
              <h4>Zamanında Teslimat</h4>
              <p>Proje sürelerine her zaman uyarız</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🔒</div>
              <h4>Güvenilirlik</h4>
              <p>Verilerinizin güvenliği bizim önceliğimiz</p>
            </div>
            <div class="value-card">
              <div class="value-icon">📚</div>
              <h4>Öğrenme</h4>
              <p>Ekibimiz sürekli kendini geliştirmektedir</p>
            </div>
          </div>
        </div>

        <div class="team-section">
          <h2>Ekibimiz</h2>
          <p>BAAN'da 50+ uzman yazılımcı, tasarımcı ve proje yöneticisinden oluşan
             bir ekip çalışmaktadır. Tamamı IT alanında minimum 5 yıl deneyime sahip
             profesyonelleri ile gururluyız.</p>
          <div class="team-stats">
            <div class="stat">
              <h4>50+</h4>
              <p>Ekip Üyesi</p>
            </div>
            <div class="stat">
              <h4>20+</h4>
              <p>Ortalama Deneyim (Yıl)</p>
            </div>
            <div class="stat">
              <h4>100+</h4>
              <p>Teknik Sertifika</p>
            </div>
            <div class="stat">
              <h4>15+</h4>
              <p>Dil Bilgisi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-header {
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

    .about-container {
      padding: 4rem 2rem;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .about-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
      align-items: center;
    }

    .about-text h2,
    .values-section h2,
    .team-section h2 {
      color: #667eea;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .about-text p {
      line-height: 1.8;
      margin-bottom: 1.5rem;
      color: #555;
    }

    .image-placeholder {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      height: 400px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 5rem;
    }

    .mission-vision {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin: 3rem 0;
    }

    .mission-card,
    .vision-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .mission-card h3,
    .vision-card h3 {
      color: #667eea;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .mission-card p,
    .vision-card p {
      line-height: 1.8;
      color: #555;
    }

    .values-section {
      margin: 3rem 0;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .value-card {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .value-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .value-card h4 {
      color: #667eea;
      margin-bottom: 0.5rem;
    }

    .value-card p {
      color: #555;
      font-size: 0.95rem;
    }

    .team-section {
      background: white;
      padding: 3rem;
      border-radius: 10px;
      margin-top: 3rem;
    }

    .team-section p {
      line-height: 1.8;
      color: #555;
      margin-bottom: 2rem;
    }

    .team-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .stat {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 2rem;
      border-radius: 10px;
      text-align: center;
    }

    .stat h4 {
      font-size: 2rem;
      margin: 0 0 0.5rem 0;
    }

    .stat p {
      margin: 0;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .about-section {
        grid-template-columns: 1fr;
      }

      .mission-vision {
        grid-template-columns: 1fr;
      }

      .image-placeholder {
        height: 300px;
      }
    }
  `]
})
export class AboutComponent {}
