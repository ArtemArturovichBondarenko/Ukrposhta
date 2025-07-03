export interface User {
  address: Adress;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

interface Adress {
  city: string;
  geo: { lat: string; lng: string };
  street: string;
  suite: string;
  zipcode: string;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}
