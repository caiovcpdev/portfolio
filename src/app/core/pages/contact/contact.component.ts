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
  loading = false;

  feedbackMessage = '';
  feedbackType: 'success' | 'error' | null = null;

  constructor (private ContactService : ContactService) {}

  send(event: Event) {

    event.preventDefault(); 

    if (!this.name || !this.email || !this.message) { 
      this.showFeedback('Por favor, preencha todos os campos antes de enviar.', 'error');
      return;
    }

    this.loading = true;
    this.feedbackMessage = '';


    const data = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.ContactService.sendContact(data).subscribe({
      next: (res) => {
        this.showFeedback(`Obrigado pelo contato, ${this.name}! Sua mensagem foi enviada com sucesso.`, 'success');
        this.name = this.email = this.message = '';
      },
      error: (err) => {
        console.error(err);
        this.showFeedback('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.', 'error');
      },
      complete: () => {this.loading = false;}
    });
  }

  private showFeedback(message: string, type: 'success'|'error') {
    this.feedbackMessage = message;
    this.feedbackType = type;
    setTimeout (()=>(this.feedbackMessage = ''), 10000) //10s
  }
}
