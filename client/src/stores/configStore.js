import { observable} from "mobx";
console.log(window.location.hostname) 
class ConfigStore {
    @observable configData={
        domain : window.location.hostname === "localhost" ? 'http://localhost:8000/' : "https://creme-caramel.herokuapp.com/" 
    };
}
export default new ConfigStore();