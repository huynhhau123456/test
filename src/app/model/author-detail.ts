import { CreatedTime } from "./created-time";
import { RemoteIDS } from "./remote-ids";

export class AuthorDetail {
    name!:string;
	personal_name!:string;
	death_date!:string;
	alternate_names!:string[];
	created!:CreatedTime;
	last_modified!: CreatedTime;
	latest_rev6ision!:number;
	key!:string;
	birth_date!:string;
	revision!:number;
	type!:string;
	remote_ids!:RemoteIDS;
}
