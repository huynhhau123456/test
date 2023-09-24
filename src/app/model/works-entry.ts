import { Author } from "./author";
import { CreatedTime } from "./created-time";

export class WorksEntry {
    type!:string;
	title!:string;
	subjects!:string[];
	subjects_people!:string[];
	authors!:Author[];
	key!:string;
	latest_revision!:number;
	revision!:number;
	created!: CreatedTime;
	last_modified!:CreatedTime;
}
