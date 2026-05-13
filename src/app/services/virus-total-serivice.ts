import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VirusTotalUploadResponseModel } from '../models/virus-total-upload-response.model';

@Injectable({
  providedIn: 'root',
})
export class VirusTotalService {
  private cliente = inject(HttpClient);

  private readonly urlbase: string = 'http://localhost:8080';

  postSubirArchivo(id: number, file: File) {
    const formData = new FormData();
    formData.append('file', file);

    const url = this.urlbase + '/virustotal/subir?id=' + id;

    return this.cliente.post(url, formData, { responseType: 'text' });
  }

  getAnalisis(id: number, analysisId: string) {
    const url = this.urlbase + '/virustotal/analisis?' +
      'id=' + id + '&' +
      'analysisId=' + encodeURIComponent(analysisId);
    return this.cliente.get<VirusTotalUploadResponseModel>(url, {
      observe: 'response',
    });
  }
}
