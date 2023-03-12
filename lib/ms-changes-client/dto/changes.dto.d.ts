import { ChangesAction } from '../enums/changes-action.enum';
export declare class Changes {
    category: string;
    action: ChangesAction;
    timestamp: Date;
    object_id: number;
    author_id: number;
    details: object[];
}
