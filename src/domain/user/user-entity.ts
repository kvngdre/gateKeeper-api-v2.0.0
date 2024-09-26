import { Column, Entity } from "typeorm";
import { DomainEntity } from "src/shared-kernel/domain-entity.js";

@Entity("users")
export class User extends DomainEntity {
  @Column()
  public email: string;

  // @Column()
  // public hashedPassword: string;

  @Column()
  public username: string;

  @Column({
    name: "is_admin"
  })
  public isAdmin: boolean = false;

  @Column()
  public role: string;

  // @Column({
  //   name: "oauth_id"
  // })
  // public oauthId: string;

  // @Column({
  //   name: "oauth_provider"
  // })
  // public oauthProvider: string;

  constructor(email: string, username: string, role: string) {
    super();

    this.email = email;
    this.username = username;
    this.role = role;
  }
}
