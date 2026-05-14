import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { VirusTotalUploadResponseModel } from '../models/virus-total-upload-response.model';
import { EngineResultModel } from '../models/engine-result.model';

@Component({
  selector: 'app-analisis',
  standalone: false,
  templateUrl: './analisis.html',
  styleUrl: './analisis.css',
})
export class Analisis implements OnInit, OnChanges {
  @Input() analisis!: VirusTotalUploadResponseModel;
  @Input() darkMode = true;

  vista = 'resumen';
  antivirusExpandido: string | null = null;

  maliciosos: EngineResultModel[] = [];
  sospechosos: EngineResultModel[] = [];
  limpios: EngineResultModel[] = [];
  noDetectados: EngineResultModel[] = [];

  totalAntivirus = 0;
  categoriaVirus = '';

  ngOnInit() {
    this.cargarDatos();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['analisis']) {
      this.cargarDatos();
    }
  }

  cargarDatos() {
    this.maliciosos = [];
    this.sospechosos = [];
    this.limpios = [];
    this.noDetectados = [];
    this.totalAntivirus = 0;
    this.vista = 'resumen';
    this.antivirusExpandido = null;

    if (!this.analisis?.data?.attributes) return;

    const results = this.analisis.data.attributes.results;
    const statsTemp = this.analisis.data.attributes.stats;

    for (const nombre of Object.keys(results)) {
      const entry = results[nombre];
      if (entry.category === 'malicious') {
        this.maliciosos.push(entry);
      } else if (entry.category === 'suspicious') {
        this.sospechosos.push(entry);
      } else if (entry.category === 'harmless') {
        this.limpios.push(entry);
      } else {
        this.noDetectados.push(entry);
      }
    }

    this.totalAntivirus =
      statsTemp.malicious + statsTemp.suspicious + statsTemp.undetected + statsTemp.harmless;
  }

  setVista(v: string) {
    this.vista = v;
    this.antivirusExpandido = null;
  }

  toggleAntivirus(nombre: string) {
    this.antivirusExpandido = this.antivirusExpandido === nombre ? null : nombre;
  }

  getNivelRiesgo(): string {
    const stats = this.analisis.data.attributes.stats;
    if (stats.malicious > 5) return 'peligroso';
    if (stats.malicious > 0 || stats.suspicious > 0) return 'sospechoso';
    return 'limpio';
  }

  setCategoryLabel(categoria: string) {
    if (categoria === 'malicious') this.categoriaVirus = 'Malicioso';
    else if (categoria === 'suspicious') this.categoriaVirus = 'Sospechoso';
    else if (categoria === 'harmless') this.categoriaVirus = 'Limpio';
    else this.categoriaVirus = 'Sin Datos';
  }
}
