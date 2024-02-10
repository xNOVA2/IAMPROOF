import React from 'react'
import DashboardLayout from '../Layouts/DashboardLayout'
import { TableData,  TableData3,  TableHeading3 } from '@/data/userTableHeader'
import BillingTable from '@/components/BillingTable'
import { TableOptions } from '@/components/TablesOptions'

export default function page() {
  return (
    <DashboardLayout>
      <TableOptions isUsersTableOption={false}/>
    <div className="mr-10 border-[#439A86] border-2 h-screen mt-5 rounded-xl">
      <p className="text-white font-bold  bg-[#439A86] border-[#439A86] w-full px-5 py-1 rounded-t-lg">
        Users | <span className="text-sm font-normal">Showing all users</span>
      </p>
      <div className="mt-2 ">
        <button className="mx-2 border-2 border-[#439A86] px-3 rounded-full text-[#439A86] border-dotted">
          + Add a filter
        </button>
        <BillingTable TableData={TableData3} TableHeading={TableHeading3}/>
      </div>
    </div>
  </DashboardLayout>
  )
}
