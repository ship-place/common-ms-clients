import { ChangesAction } from '../enums/changes-action.enum';

export class CreateChangesDto {
  category!: string;
  action: ChangesAction;
  timestamp?: number;
  object_id!: number;
  author_id!: number;
  details!: [object, object];
}
