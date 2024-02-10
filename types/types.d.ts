export interface TableRowData  {
    name?: string;
    email?: string;
    status?: string;
    accountType?: string;
    lastSignIn?: string;
    dataUsage?: string;
    SecondaryEmail?: string;
    "2-Factor"?: string;
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
 }