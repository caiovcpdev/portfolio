import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.models';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
