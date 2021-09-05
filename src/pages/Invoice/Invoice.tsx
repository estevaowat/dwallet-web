import React, { useState, useMemo } from 'react';

import Input from '../../components/atoms/Input/Input';
import formatNumberToCurrency from '../../utils/currency';
import './Invoice.scss';

const Invoice = () => {
   const [hours, setHours] = useState<string | number>(1);
   const [amountPerHour, setAmountPerHour] = useState<string | number>(1);
   const [taxPercentage, setTaxPercentage] = useState<string | number>(0);

   const amountToReceive = useMemo(() => {
      const amount = Number(hours) * Number(amountPerHour);
      return formatNumberToCurrency(amount);
   }, [hours, amountPerHour]);

   const amountInvoice = useMemo(() => {
      const percentage = (100 - Number(taxPercentage)) / 100;
      const amount = (Number(hours) * Number(amountPerHour)) / percentage;
      return formatNumberToCurrency(amount);
   }, [amountToReceive, taxPercentage]);

   const onChangeInput = (
      e: React.ChangeEvent<HTMLInputElement>,
      setValue: React.Dispatch<React.SetStateAction<string | number>>,
   ) => {
      const number = e.target.value === '' ? '' : Number(e.target.value);
      setValue(number);
   };

   return (
      <main className="invoice">
         <span className="invoice-title">INVOICE AMOUNT</span>
         <label htmlFor="input-hours" className="label">
            <span className="label-text">Hours:</span>
            <Input
               id="input-hours"
               type="number"
               name="hours"
               min={1}
               hasError={false}
               value={hours}
               onChange={e => {
                  onChangeInput(e, setHours);
               }}
            />
         </label>

         <label htmlFor="amount-per-hour" className="label">
            <span className="label-text">Amount per hour:</span>
            <Input
               type="number"
               id="amount-per-hour"
               name="amountPerHour"
               hasError={false}
               value={amountPerHour}
               min={0}
               onChange={e => {
                  onChangeInput(e, setAmountPerHour);
               }}
            />
         </label>

         <label htmlFor="taxes-percentages" className="label">
            <span className="label-text">Amount per hour:</span>
            <Input
               type="number"
               id="taxes-percentage"
               name="taxes-percentage"
               min={0}
               hasError={false}
               value={taxPercentage}
               onChange={e => {
                  onChangeInput(e, setTaxPercentage);
               }}
            />
         </label>

         <div className="results">
            <span className="invoice-title">Results</span>
            <span>Amount to receive: {amountToReceive}</span>
            <span>Amount to invoice: {amountInvoice}</span>
         </div>
      </main>
   );
};

export default Invoice;
