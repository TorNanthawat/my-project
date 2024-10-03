import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  
  rotateX: number = 0;
  rotateY: number = 0;

  onMouseMove(event: MouseEvent): void {
    const imageContainer = event.currentTarget as HTMLElement;
    const containerWidth = imageContainer.offsetWidth;
    const containerHeight = imageContainer.offsetHeight;
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    // จำกัดการหมุนไม่ให้เกิน 15 องศา
    const rotateY = (deltaX / centerX) * 15;
    const rotateX = (deltaY / centerY) * -15;

    this.rotateY = rotateY;
    this.rotateX = rotateX;
  }

  onMouseLeave(): void {
    this.rotateX = 0;
    this.rotateY = 0;
  }
}
