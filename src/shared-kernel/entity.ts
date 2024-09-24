import { PrimaryColumn } from "typeorm";

export abstract class Entity {
  @PrimaryColumn({
    type: "text"
  })
  public id: string = "";
}
