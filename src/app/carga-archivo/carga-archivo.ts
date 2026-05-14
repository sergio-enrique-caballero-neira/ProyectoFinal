import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
import { Darktheme } from '../services/darktheme';
import { UsuarioService } from '../services/usuario-service';
import { VirusTotalService } from '../services/virus-total-serivice';
import { VirusTotalUploadResponseModel } from '../models/virus-total-upload-response.model';

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
  private usuarioService = inject(UsuarioService);
  private virustotalService = inject(VirusTotalService);
  private cd = inject(ChangeDetectorRef);

  darkMode = true;
  selectedFile: File | null = null;
  isDragging = false;

  usuario: string | null = null;
  id_usuario: number | null = null;
  id_analisis: string | null = null;
  nombre_archivo: string | null = null;

  seccion: string = 'upload';

  analisis: VirusTotalUploadResponseModel | null = null;

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

  subirArchivo() {
    if (!this.selectedFile) return;

    this.nombre_archivo = this.selectedFile.name;

    this.seccion = 'cargando';

    this.usuarioService.getIdByUsername(this.usuario!).subscribe({
      next: (res) => {
        this.id_usuario = res.body;

        this.virustotalService.postSubirArchivo(this.id_usuario!, this.selectedFile!).subscribe({
          next: (res) => {
            this.id_analisis = res;
            this.seccion = 'subido';
            this.cd.detectChanges();
          },
          error: (err) => {
            console.log(err);
            this.seccion = 'upload';
            this.cd.detectChanges()
          },
        });
      },
      error: (err) => {
        console.log(err);
        this.seccion = 'upload';
      },
    });
  }

  analizar() {
    if (!this.id_usuario || !this.id_analisis) return;

    this.seccion = 'cargando';

    this.virustotalService.getAnalisis(this.id_usuario, this.id_analisis).subscribe({
      next: (res) => {
        console.log(res.body);
        this.seccion = 'analizado';
        this.analisis = res.body;
        this.cd.detectChanges();
      },
      error: (err) => {
        console.log(err);
        this.seccion = 'subido';
        this.cd.detectChanges();
      },
    });

    this.cd.detectChanges();
  }
}
