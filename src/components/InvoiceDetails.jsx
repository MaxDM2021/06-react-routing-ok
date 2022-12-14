import { getInvoiceById } from 'fakeApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    getInvoiceById(invoiceId).then(setInvoice);
  }, [invoiceId]);

  if(!invoice){
    return null;
  }

  const {recipient, account, total, date } = invoice;

  return <div>
    <p><b>Recipient:</b> {recipient}</p>
    <p><b>Account number:</b> {account}</p>
    <p><b>Total due:</b> {total}$</p>
    <p><b>Invoice data:</b> {new Date(date.created).toLocaleDateString()}</p>
    <p><b>Due data:</b> {new Date(date.due).toLocaleDateString()}</p>
    </div>;
};
