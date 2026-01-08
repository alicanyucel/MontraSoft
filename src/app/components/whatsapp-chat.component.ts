import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-chat',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      href="https://wa.me/905416923675?text=Merhaba%2C%20Yucelsoft%20hakkında%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-btn"
      title="WhatsApp ile bize yazın"
    >
      <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.473 0-2.928-.413-4.195-1.193l-.301-.178-3.115.82.835-3.026.2-.32C4.01 5.45 5.531 4.02 7.343 4.02c2.05 0 3.95.878 5.235 2.466 1.285 1.588 1.994 3.695 1.994 5.923 0 1.544-.303 3.04-.878 4.423l-.089.214-2.999-.788.151-.485c.531-1.697.823-3.477.823-5.364 0-3.289-1.688-6.322-4.407-7.97-1.377-.805-2.956-1.23-4.57-1.23Z"/>
      </svg>
      <span class="tooltip">WhatsApp Canlı Destek</span>
    </a>
  `,
  styles: [`
    .whatsapp-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #25D366 0%, #20BA5A 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
      z-index: 999;
      transition: all 0.3s ease;
      text-decoration: none;
      border: none;
    }

    .whatsapp-btn:hover {
      width: 70px;
      height: 70px;
      box-shadow: 0 8px 20px rgba(37, 211, 102, 0.6);
      transform: scale(1.1);
    }

    .whatsapp-btn svg {
      width: 35px;
      height: 35px;
      animation: float 3s ease-in-out infinite;
    }

    .whatsapp-btn:hover svg {
      animation: none;
    }

    .tooltip {
      display: none;
      position: absolute;
      right: 70px;
      top: 5px;
      background: #333;
      color: white;
      padding: 8px 12px;
      border-radius: 5px;
      font-size: 12px;
      white-space: nowrap;
      font-weight: 500;
    }

    .whatsapp-btn:hover .tooltip {
      display: block;
      animation: slideIn 0.3s ease;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(10px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @media (max-width: 768px) {
      .whatsapp-btn {
        bottom: 20px;
        right: 20px;
        width: 55px;
        height: 55px;
      }

      .whatsapp-btn:hover {
        width: 60px;
        height: 60px;
      }

      .whatsapp-btn svg {
        width: 30px;
        height: 30px;
      }

      .tooltip {
        right: 60px;
        font-size: 11px;
      }
    }
  `]
})
export class WhatsappChatComponent {}
