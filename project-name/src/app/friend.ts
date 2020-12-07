export class Friend {
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: number;
  public languages: any;


  constructor(firstName: string, lastName: string, email: string, phoneNumber: number, languages: any) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.languages = languages;
  }
}
