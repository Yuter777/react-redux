export type User = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
};

export type UserState = {
  users: User[],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: string | null,
};

export type AdminData = {
  id: string,
  name: string,
  email: string,
};

export type AdminState = {
  data: AdminData[],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: string | null,
};
