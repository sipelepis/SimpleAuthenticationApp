import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  apiService = inject(ApiService);
  constructor() { }
  ngOnInit(): void {
    this.apiService.getUser().subscribe((data) => {
      console.log(data);
    });
  }
}
