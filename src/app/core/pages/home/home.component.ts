import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  profile?: Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (data) => (this.profile = data),
      error: (err) => console.error('Erro ao carregar perfil', err),
    });
  }
}
