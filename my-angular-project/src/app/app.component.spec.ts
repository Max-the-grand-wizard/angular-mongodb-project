import { Component, OnInit } from '@angular/core';
import { BilarService } from './services/bilar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bilapp';
  bilar: any[] = [];

  constructor(private bilarService: BilarService) {}

  ngOnInit(): void {
    this.hämtaBilar();
  }

  hämtaBilar(): void {
    this.bilarService.getBilar().subscribe({
      next: (data) => this.bilar = data,
      error: (error) => console.error('Fel vid hämtning av bilar:', error)
    });
  }
}
