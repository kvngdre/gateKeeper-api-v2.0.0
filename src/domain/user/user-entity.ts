import { Column, Entity } from "typeorm";
import { DomainEntity } from "src/shared-kernel/domain-entity.js";

@Entity("users")
export class User extends DomainEntity {
  @Column({ unique: true })
  public email: string;

  @Column({ unique: true })
  public username: string;

  @Column({ name: "hashed_password", nullable: true })
  public hashedPassword: string | null = null;

  @Column({ name: "oauth_id", nullable: true })
  public oauthId: string | null = null;

  @Column({ name: "oauth_provider", nullable: true })
  public oauthProvider: string | null = null;

  @Column({ name: "role_id" })
  public roleId: string;

  constructor(email: string, username: string, roleId: string) {
    super();

    this.email = email;
    this.username = username;
    this.roleId = roleId;
  }
}
