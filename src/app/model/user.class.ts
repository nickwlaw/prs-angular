export class User {
  id: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  reviewer: boolean;
  admin: boolean;
  active: boolean;

  constructor(id: number, userName: string, password: string, firstName: string, lastName: string, phoneNumber: string, email: string,
              reviewer: boolean, admin: boolean, active: boolean) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.reviewer = reviewer;
    this.admin = admin;
    this.active = active;
  }
}
