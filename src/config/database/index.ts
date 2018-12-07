import * as mongoose from "mongoose";

export default class DbConfiguration {
  static configure() {
    mongoose.connect("mongodb://localhost/db_revendedora", {
        useNewUrlParser:true
    }).then(result => {
      console.log("Conectado com o banco de dados");
    });
  }
}
