import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
import { confetti } from 'tsparticles-confetti';

@Component({
  selector: 'app-anniversary',
  standalone: true,
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.scss'],
})
export class AnniversaryComponent implements OnInit {
  ngOnInit(): void {
    this.addConfettiCanvas();
    this.launchConfetti();
  }

  @Input() years: number = 0;

  addConfettiCanvas(): void {
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '2147483647'; 
    canvas.style.pointerEvents = 'none'; 

    document.body.appendChild(canvas);
  }

  launchConfetti(): void {
    const duration = 8000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 45,
        spread: 50,
        ticks: 200,
        gravity: 0.5,
        decay: 0.9,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.3,
        },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }
}
