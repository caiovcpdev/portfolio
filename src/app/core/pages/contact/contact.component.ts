import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  name = '';
  email = '';
  message = '';

  constructor (private ContactService : ContactService) {}

  send() {
    if (!this.name || !this.email || !this.message) { 
      alert('Preencha todos os campos!');
      return;
    }

    const data = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.ContactService.sendContact(data).subscribe({
      next: (res) => {
        alert(`Mensagem enviada! Obrigado pelo contato, ${this.name}`);
        this.name = this.email = this.message = '';
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
      }
    })
  }
}
