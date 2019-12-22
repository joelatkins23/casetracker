import { classBody } from "@babel/types";
import { callbackify } from "util";

class Auth{
        constructor(){
this.authrnticated= false;

        }

        login(){

                this.authrnticated=true;
            

        }
        logout(){
            this.authrnticated=false;
          callbackify();
        }
        
        isAuthenticated(){
            return this.authrnticated;
        }

}

export default new Auth()