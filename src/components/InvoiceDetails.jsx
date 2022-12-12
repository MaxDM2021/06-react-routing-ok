import { useParams } from 'react-router-dom';



export const InvoiceDetails = () => {
const {invoiceId } = useParams();

    return <div>InvoiceDetails {invoiceId}</div>;
}