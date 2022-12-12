import { Sales } from 'pages/Sales';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Invoices } from './Invoices';
import {InvoiceDetails} from './InvoiceDetails';
import { Layout } from './Layout';


export const App = () => {
  return(
    <>
    <Routes>
    <Route path="/" element={<Layout/>}>
        <Route path="dashboard" element={<div>Dashboard</div>} />
        <Route path="sales" element={<Sales />}>
        <Route path="analytics" element={<div>Analytics</div>}/>
        <Route path="invoices" element={<Invoices/>}>
        <Route path=":invoiceId" element={<InvoiceDetails/>}/>
        </Route>
        <Route path="deposits" element={<div>Deposits</div>}/>
        </Route>
        <Route path="reports" element={<div>Reports</div>} />
        <Route path="feedback" element={<div>Feedback</div>} />
        <Route path="customers" element={<div>Customers</div>} />
    </Route>
    </Routes>
    <GlobalStyle/> 
    <Toaster position="top-right" reverseOrder={false} />
    
    </>
  )
}



//  - / Layout
      // -/dashboard
      // -/sales Sales
      //   - /analytics
      //   - /invoices Invoices
      //     - /:invoiceId InvoiceDetails
      //   - /deposits
      // -/reports
      // -/feedback
      // -/customers

