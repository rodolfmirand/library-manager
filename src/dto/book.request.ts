import { ConservationStatus } from "src/model/enum/conservation-status.enum";

export class BookRequest {
    title: string;
    author: string;
    edition: string;
    conservationStatus: ConservationStatus;
}
