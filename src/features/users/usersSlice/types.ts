export type User = {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: number;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchphrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export type UsersApiResponse = {
  data: Array<User>;
};

export type UserState = {
  users: Array<User>;
};

export type UserSliceState = {
  users: UserState;
};
