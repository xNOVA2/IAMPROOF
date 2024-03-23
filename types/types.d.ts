export interface TableRowData  {
    name?: string;
    email?: string;
    isActive?: boolean;
    role?: string;
    lastSignIn?: string;
    dataUsage?: string;
    SecondaryEmail?: string;
    firstName:string;
    lastName:string
    photo?:string
    "2-Factor"?: string;
    _id:string
    ResetPassword?: string;
    lockAccount?: boolean;  
}


 export interface TableRowData2 {
    name?:string
    email?:string
    subscriptionStatus?:string
    paymentPlan?:string
    paymentDue?:string
    DataOptionsIn?:string
    firstName:string;
    lastName:string
    isActive?:boolean;
    photo?:string
 }