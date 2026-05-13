import { AttributesModel } from './attributes.model';

export interface DataModel {
  data_id: number;
  id: string;
  type: string;
  nombreArchivo: string;
  attributes: AttributesModel;
}
