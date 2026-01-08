import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ],
  template: `
    <div class="contact-header">
      <div class="header-content">
        <h1>İletişim</h1>
        <p>Bize yazın, teklif alın, sorularınızı sorun</p>
      </div>
    </div>

    <div class="contact-container">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2>Ulaşım Bilgileri</h2>
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div class="info-text">
                  <h4>Adres</h4>
                  <p>Maslak, Maslak Mah., 4. Cadde No:77<br>Sarıyer, İstanbul, Türkiye</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">📞</div>
                <div class="info-text">
                  <h4>Telefon</h4>
                  <p>+90 541 692 3675</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">📧</div>
                <div class="info-text">
                  <h4>E-posta</h4>
                  <p>info@yucelsoft.com<br>support@yucelsoft.com</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">🕒</div>
                <div class="info-text">
                  <h4>Çalışma Saatleri</h4>
                  <p>Pazartesi - Cuma: 09:00 - 18:00<br>Cumartesi - Pazar: Kapalı</p>
                </div>
              </div>
            </div>

            <h3 style="margin-top: 2rem;">Sosyal Medya</h3>
            <div class="social-links">
              <a href="#" class="social-link">LinkedIn</a>
              <a href="#" class="social-link">Twitter</a>
              <a href="#" class="social-link">GitHub</a>
              <a href="#" class="social-link">Facebook</a>
            </div>
          </div>

          <div class="contact-form">
            <h2>Bize Yazın</h2>
            <form (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">İsim <span class="required">*</span></label>
                <input
                  pInputText
                  id="name"
                  [(ngModel)]="formData.name"
                  name="name"
                  placeholder="Adınız"
                  required
                />
                <span *ngIf="submitted && !formData.name" class="error-message">İsim gereklidir</span>
              </div>

              <div class="form-group">
                <label for="email">E-posta <span class="required">*</span></label>
                <input
                  pInputText
                  id="email"
                  type="email"
                  [(ngModel)]="formData.email"
                  name="email"
                  placeholder="E-posta adresiniz"
                  required
                />
                <span *ngIf="submitted && !formData.email" class="error-message">E-posta gereklidir</span>
                <span *ngIf="submitted && formData.email && !isValidEmail(formData.email)" class="error-message">Geçerli bir e-posta adresi girin</span>
              </div>

              <div class="form-group">
                <label for="phone">Telefon (İsteğe bağlı)</label>
                <input
                  pInputText
                  id="phone"
                  [(ngModel)]="formData.phone"
                  name="phone"
                  placeholder="+90 (XXX) XXX-XXXX"
                />
              </div>

              <div class="form-group">
                <label for="company">Şirket Adı <span class="required">*</span></label>
                <input
                  pInputText
                  id="company"
                  [(ngModel)]="formData.company"
                  name="company"
                  placeholder="Şirketinizin adı"
                  required
                />
                <span *ngIf="submitted && !formData.company" class="error-message">Şirket adı gereklidir</span>
              </div>

              <div class="form-group">
                <label for="subject">Konu <span class="required">*</span></label>
                <select
                  id="subject"
                  [(ngModel)]="formData.subject"
                  name="subject"
                  class="form-select"
                  required
                >
                  <option value="">Bir konu seçin</option>
                  <option value="teklif">Teklif Talebı</option>
                  <option value="destek">Teknik Destek</option>
                  <option value="isbirligi">İşbirliği</option>
                  <option value="diger">Diğer</option>
                </select>
                <span *ngIf="submitted && !formData.subject" class="error-message">Konu seçilmelidir</span>
              </div>

              <div class="form-group">
                <label for="message">Mesaj <span class="required">*</span></label>
                <textarea
                  id="message"
                  [(ngModel)]="formData.message"
                  name="message"
                  placeholder="Mesajınızı yazın..."
                  rows="6"
                  required
                ></textarea>
                <span *ngIf="submitted && !formData.message" class="error-message">Mesaj gereklidir</span>
                <span *ngIf="formData.message" class="char-count">{{ formData.message.length }}/500 karakter</span>
              </div>

              <button
                pButton
                type="submit"
                label="Gönder"
                class="p-button-lg"
                icon="pi pi-send"
                [disabled]="!isFormValid() && submitted"
              ></button>
            </form>

            <div *ngIf="submitted && isFormValid()" class="success-message">
              ✓ Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
            </div>
            <div *ngIf="submitted && !isFormValid()" class="error-alert">
              ⚠️ Lütfen tüm zorunlu alanları doldurunuz.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="map-section">
      <div class="container">
        <h2>Konumumuz</h2>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.5646!2d29.00579!3d41.06544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sMaslak%20Mah.%20-%20Sarıyer%20Istanbul!5e0!3m2!1str!2str!4v1234567890"
            width="100%"
            height="400"
            style="border:0; border-radius: 10px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-header {
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

    .contact-container {
      padding: 4rem 2rem;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .contact-info h2,
    .contact-form h2 {
      color: #667eea;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }

    .info-items {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .info-item {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #eee;
    }

    .info-item:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }

    .info-icon {
      font-size: 2rem;
      min-width: 40px;
    }

    .info-text h4 {
      margin: 0 0 0.5rem 0;
      color: #667eea;
    }

    .info-text p {
      margin: 0;
      color: #555;
      line-height: 1.6;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .social-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: opacity 0.3s;
    }

    .social-link:hover {
      opacity: 0.8;
    }

    .contact-form {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 500;
    }

    .form-group input,
    .form-group textarea,
    .form-select {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-family: inherit;
      font-size: 0.95rem;
    }

    .form-group input:focus,
    .form-group textarea:focus,
    .form-select:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    :deep(.p-select) {
      width: 100%;
    }

    .success-message {
      margin-top: 1.5rem;
      padding: 1rem;
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
      border-radius: 5px;
      text-align: center;
      animation: slideIn 0.3s ease-in-out;
    }

    .error-alert {
      margin-top: 1.5rem;
      padding: 1rem;
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
      border-radius: 5px;
      text-align: center;
      animation: slideIn 0.3s ease-in-out;
    }

    .error-message {
      display: block;
      color: #dc3545;
      font-size: 0.85rem;
      margin-top: 0.3rem;
    }

    .required {
      color: #dc3545;
    }

    .char-count {
      display: block;
      font-size: 0.8rem;
      color: #999;
      margin-top: 0.3rem;
    }

    .map-section {
      padding: 4rem 2rem;
      background: white;
    }

    .map-section h2 {
      text-align: center;
      color: #667eea;
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .map-placeholder {
      width: 100%;
      height: 400px;
      background: #ddd;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: #999;
    }

    .map-container {
      width: 100%;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isFormValid(): boolean {
    return (
      this.formData.name.trim() !== '' &&
      this.formData.email.trim() !== '' &&
      this.isValidEmail(this.formData.email) &&
      this.formData.company.trim() !== '' &&
      this.formData.subject !== '' &&
      this.formData.message.trim() !== ''
    );
  }

  onSubmit() {
    this.submitted = true;

    if (!this.isFormValid()) {
      return;
    }

    console.log('Form Data:', this.formData);

    // Reset form after 3 seconds
    subject: '',
    message: ''
  };

  subjectOptions = [
    { label: 'Teklif Talebı', value: 'teklif' },
    { label: 'Teknik Destek', value: 'destek' },
    { label: 'İşbirliği', value: 'isbirligi' },
    { label: 'Diğer', value: 'diger' }
  ];

  submitted = false;

  onSubmit() {
    console.log('Form Data:', this.formData);
    this.submitted = true;

    // Reset form
    setTimeout(() => {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      };
      this.submitted = false;
    }, 3000);
  }
}
