import { Component, OnInit } from '@angular/core';
import { BilarService } from './services/bilar.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule], // CommonModule för att få tillgång till *ngFor
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bilar: any[] = [];

  constructor(private bilarService: BilarService) {}

  ngOnInit(): void {
    this.bilarService.getBilar().subscribe((data: any) => {
      this.bilar = data;
    });
  }
}
