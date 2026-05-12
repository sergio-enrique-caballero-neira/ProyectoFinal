import { VirusTotalUploadResponseModel } from './virus-total-upload-response.model';

export interface UsuarioModel {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  contrasena: string;
  historial: VirusTotalUploadResponseModel[];
}
