import { Component } from '@angular/core';

@Component({
  selector: 'app-carga-archivo',
  standalone: false,
  templateUrl: './carga-archivo.html',
  styleUrl: './carga-archivo.css',
})
export class CargaArchivo {

  darkMode = true;

  selectedFile: File | null = null;

  isDragging = false;

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

    if(event.dataTransfer?.files?.length){

      this.selectedFile = event.dataTransfer.files[0];

    }

  }

  onFileSelected(event: any): void {

    if(event.target.files.length){

      this.selectedFile = event.target.files[0];

    }

  }

  removeFile(): void {

    this.selectedFile = null;

  }

  getFileSize(): string {

    if(!this.selectedFile) return '';

    return (this.selectedFile.size / 1024).toFixed(2) + ' KB';

  }

  toggleTheme() {

    this.darkMode = !this.darkMode;

    if(this.darkMode){
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }

  }

}
