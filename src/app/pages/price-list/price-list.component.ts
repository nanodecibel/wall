import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent {
  selectedImage: string | null = null;

  // Rutas de las imágenes
  diversTravauxImage = 'https://res.cloudinary.com/dactwdkqr/image/upload/v1724446707/Wall/priceList/lkrvnpxlpfk7jmovvzg9.png';
  maconnerieImage = 'https://res.cloudinary.com/dactwdkqr/image/upload/v1724446707/Wall/priceList/me9q5fm1mrmatseevoen.png';

  // Método para abrir el modal con la imagen seleccionada
  openModal(image: string) {
    this.selectedImage = image;
  }

  // Método para cerrar el modal
  closeModal() {
    this.selectedImage = null;
  }
}
