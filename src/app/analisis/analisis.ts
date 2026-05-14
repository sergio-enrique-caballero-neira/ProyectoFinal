import { Component, Input, OnInit } from '@angular/core';
import { VirusTotalUploadResponseModel } from '../models/virus-total-upload-response.model';

@Component({
  selector: 'app-analisis',
  standalone: false,
  templateUrl: './analisis.html',
  styleUrl: './analisis.css',
})
export class Analisis implements OnInit {
  @Input() analisis!: VirusTotalUploadResponseModel;
  @Input() darkMode: boolean = true;

  vista: string = 'resumen';
  antivirusExpandido: string | null = null;

  maliciosos: any[] = [];
  sospechosos: any[] = [];
  limpios: any[] = [];
  noDetectados: any[] = [];

  totalAntivirus: number = 0;

  ngOnInit() {
    const results = this.analisis.data.attributes.results;
    const s = this.analisis.data.attributes.stats;

    for (const nombre of Object.keys(results)) {
      const e = results[nombre];
      const entry = {
        nombre: e.engine_name,
        categoria: e.category,
        resultado: e.result,
      };

      if (e.category === 'malicious') {
        this.maliciosos.push(entry);
      }
      else if (e.category === 'suspicious') {
        this.sospechosos.push(entry);
      }
      else if (e.category === 'harmless') {
        this.limpios.push(entry);
      }
      else {
        this.noDetectados.push(entry);
      }
    }

    this.totalAntivirus = s.malicious + s.suspicious + s.undetected + s.harmless;
  }

  setVista(v: string) {
    this.vista = v;
    this.antivirusExpandido = null;
  }

  toggleAntivirus(nombre: string) {
    if (this.antivirusExpandido === nombre) {
      this.antivirusExpandido = null;
    } else {
      this.antivirusExpandido = nombre;
    }
  }

  getNivelRiesgo(): string {
    const stats = this.analisis.data.attributes.stats;
    if (stats.malicious > 5) {
      return 'peligroso';
    }

    if (stats.malicious > 0 || stats.suspicious > 0) {
      return 'sospechoso';
    }

    return 'limpio';
  }

  getCategoryLabel(categoria: string): string {
    if (categoria === 'malicious') {
      return 'Malicioso';
    }

    if (categoria === 'suspicious') {
      return 'Sospechoso';
    }

    if (categoria === 'harmless') {
      return 'Limpio';
    }

    return 'Sin datos';
  }
}
