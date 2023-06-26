//import { CypressAuth } from "./auth";
import * as dotenv from "dotenv";
dotenv.config();

CypressAuth.loginViaSSO(process.env.EMAIL!.toString());
