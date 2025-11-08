import { Injectable } from "@angular/core";
import { Project } from "../models/project.models";

@Injectable ({providedIn: 'root'})
export class ProjectService {
    getProjects(): Project[] {
        return [
             {
                name: '🏋️‍♂️ Gym Power',
                description: 'Solução desenvolvida com Expo, React Native, Node.Js e JWT, criado para gerenciamento e controle de academias.',
                link: 'https://github.com/caiovcpdev/gym-power'
            },
            {
                name: '🎭 Controle Cordeiros Carnaval',
                description: 'Sistema web construido com ASP.NET MVC voltado à gestão de cordeiros (voluntários responsáveis por isolar blocos de carnaval).',
                link: 'https://github.com/caiovcpdev/Controle-Cordeiros-Carnaval'
            },
            {
                name: '🤖 MeuBotTelegram',
                description: 'Bot desenvolvido em C# para automação de interações no Telegram. Permite responder mensagens, executar comandos personalizados e integrar com APIs externas, servindo como base para bots de atendimento ou notificações.',
                link: 'https://github.com/caiovcpdev/MeuBotTelegram'
            }
        ]
    }
}