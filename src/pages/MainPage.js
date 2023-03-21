import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainPage() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get('/json/Invoices')
      .then(res => setInvoices(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Fatura Takip Uygulaması</h1>
      <table>
        <thead>
          <tr>
            <th>Fatura Numarası</th>
            <th>Müşteri Adı</th>
            <th>Fatura Tutarı</th>
            <th>Ödeme Tarihi</th>
            <th>Ödeme Durumu</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.number}</td>
              <td>{invoice.customer}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.payment_date}</td>
              <td>{invoice.payment_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainPage;
