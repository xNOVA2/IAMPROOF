export interface TableRowData {
  name?: string;
  email?: string;
  isActive?: boolean;
  role?: string;
  lastSignIn?: string;
  dataUsage?: string;
  SecondaryEmail?: string;
  firstName: string;
  lastName: string;
  photo?: string;
  "2-Factor"?: string;
  _id: string;
  ResetPassword?: string;
  lockAccount?: boolean;
}

export interface TableRowData2 {
  name?: string;
  email?: string;
  subscriptionStatus?: string;
  paymentPlan?: string;
  paymentDue?: string;
  DataOptionsIn?: string;
  firstName: string;
  lastName: string;
  isActive?: boolean;
  photo?: string;
  _id:string
}

export interface PaginationTypes {
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: null | number;
  perPage: number;
  prevPage: null | number;
  totalItems: number;
  totalPages: number;
}

export interface SearchParams {
  limit: number;
  page: number;
  userId?: string;
}
