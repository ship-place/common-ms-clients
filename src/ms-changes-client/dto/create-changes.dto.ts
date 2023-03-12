export class CreateChangesDto {
  category!: string;
  timestamp?: number;
  object_id!: number;
  author_id!: number;
  details!: [object, object];
}
