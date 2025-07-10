export {};

// generic is universal type who works like function arguments but for types

interface User {
  username: string;
}

interface Article {
  title: string;
}

interface MetaData {}

interface ApiResponse<T> {
  status?: "error" | "success";
  meta?: MetaData;
  requestId?: string;
  data: T;
}

const responseUser: ApiResponse<User> = {
  data: {
    username: "adsa",
  },
};

const responseArticle: ApiResponse<Article> = {
  data: {
    title: "lega",
  },
};

interface Tree<T> {
  id: string;
  value: T;
  children: Tree<T>[] | null;
}

const treeNode: Tree<User> = {
  id: "10",
  value: {
    username: "123",
  },
  children: [
    {
      id: "12",
      value: {
        username: "!23",
      },
      children: null,
    },
  ],
};

function genericFunc<T>(arg: T) {}

const arrowGeneric = <V>(arg: V): V => {
  return arg;
};

const dataTest = arrowGeneric<Article>({ title: "123" });
