import { Injectable } from "@angular/core";
import { Project } from "../models/project.models";

@Injectable ({providedIn: 'root'})
export class ProjectService {
    getProjects(): Project[] {
        return [
             {
                name: 'Sistema de Gestão de Veículos',
                description: 'Aplicação em .NET e Angular para controle de frota e infrações.',
                link: 'https://github.com/caiovcpdev'
            },
            {
                name: 'API Financeira',
                description: 'API em .NET Core para emissão de boletos e integração bancária.',
                link: 'https://github.com/caiovcpdev'
            },
            {
                name: 'Dashboard Interativo',
                description: 'Dashboard Angular com gráficos e filtros dinâmicos usando PrimeNG.',
                link: 'https://github.com/caiovcpdev'
            }
        ]
    }
}