import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
import { Darktheme } from '../services/darktheme';

@Component({
  selector: 'app-carga-archivo',
  standalone: false,
  templateUrl: './carga-archivo.html',
  styleUrl: './carga-archivo.css',
})
export class CargaArchivo {
  constructor(private router: Router) {}

  private darkTheme = inject(Darktheme);
  private authService = inject(AuthService);
  private cd = inject(ChangeDetectorRef);

  darkMode = true;
  selectedFile: File | null = null;
  isDragging = false;

  usuario: string | null = null;

  ngOnInit() {
    this.usuario = this.authService.getUsername();
    this.darkMode = this.darkTheme.darkMode;
  }

  toggleTheme() {
    this.darkTheme.toggleTheme();
    this.darkMode = this.darkTheme.darkMode;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();

    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();

    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();

    this.isDragging = false;

    if (event.dataTransfer?.files?.length) {
      this.selectedFile = event.dataTransfer.files[0];
    }
  }

  onFileSelected(event: any): void {
    if (event.target.files.length) {
      this.selectedFile = event.target.files[0];
    }
  }

  removeFile(): void {
    this.selectedFile = null;
  }

  getFileSize(): string {
    if (!this.selectedFile) return '';
    return (this.selectedFile.size / (1024 * 1024)).toFixed(2) + ' MB';
  }

  logout() {
    this.router.navigate(['/login']);
    this.authService.logout();
    this.cd.detectChanges();
  }
}
