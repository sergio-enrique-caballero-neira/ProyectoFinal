import { StatsModel } from './stats.model';
import { EngineResultModel } from './engine-result.model';

export interface AttributesModel {
  id_Attributes: number;
  status: string;
  stats: StatsModel;
  results: { [key: string]: EngineResultModel };
}
