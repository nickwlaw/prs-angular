export class User {
  id: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  isReviewer: boolean;
  isAdmin: boolean;
  isActive: boolean;

  constructor(id: number, userName: string, password: string, firstName: string, lastName: string, phoneNumber: string, email: string,
              isReviewer: boolean, isAdmin: boolean, isActive: boolean) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.isReviewer = isReviewer;
    this.isAdmin = isAdmin;
    this.isActive = isActive;
  }
}
