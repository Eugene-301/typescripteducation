export {};

// generics constraints specify which fields expected in transmitted type

interface Post {
  id: string;
  createdAt: Date;
  content?: string;
}

const createMob = <T extends { id: string; createdAt: Date }>(
  argument: T
): Object => {
  return {
    id: argument.id,
    createDate: argument.createdAt,
  };
};

console.log(createMob<Post>({ id: "123", createdAt: new Date() }));

class Blog<T> {
  private data: T;

  constructor(arg: T) {}
}

// in generics can specifi type by default
interface Person<T = string> {
  name: string;
  surname: T;
}

const newPerson: Person = {
  name: "adsa",
  surname: "asdsa",
};
