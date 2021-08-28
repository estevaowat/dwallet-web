import React, { useState, useMemo } from 'react';

import formatNumberToCurrency from '../../../utils/currency';
import Input from '../../atoms/Input';
import {
   Invoice as StyledInvoice,
   ContainerInput,
   Title,
   Results,
} from './styles';

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

   return (
      <StyledInvoice>
         <Title>INVOICE AMOUNT</Title>
         <ContainerInput>
            <span>Hours:</span>
            <Input
               type="number"
               name="hours"
               min={1}
               hasError={false}
               value={hours}
               onChange={e => {
                  const number =
                     e.target.value === '' ? '' : Number(e.target.value);
                  setHours(number);
               }}
            />
         </ContainerInput>

         <ContainerInput>
            Amount per Hour:
            <Input
               type="number"
               name="amountPerHour"
               hasError={false}
               value={amountPerHour}
               min={0}
               onChange={e => {
                  const number =
                     e.target.value === '' ? '' : Number(e.target.value);
                  setAmountPerHour(number);
               }}
            />
         </ContainerInput>

         <ContainerInput>
            Tax Percentage:
            <Input
               type="number"
               name="taxPercentage"
               min={0}
               hasError={false}
               value={taxPercentage}
               onChange={e => {
                  const number =
                     e.target.value === '' ? '' : Number(e.target.value);
                  setTaxPercentage(number);
               }}
            />
         </ContainerInput>

         <Results>
            <Title>RESULTS</Title>
            <span>Amount to Receive: {amountToReceive}</span>
            <span>Amount to Invoice: {amountInvoice}</span>
         </Results>
      </StyledInvoice>
   );
};

export default Invoice;
