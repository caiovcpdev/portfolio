import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  nome = '';
  email = '';
  message = '';

  enviar() {
    if (this.nome || this.email || this.message) { 
      alert('Preencha todos os campos!');
      return;
    }

    alert(`Mensagem enviada! Obrigado pelo contato, ${this.nome}`);
  }
}
