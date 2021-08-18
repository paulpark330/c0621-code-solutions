select "firstName",
       "lastName",
       sum("payments"."amount") as totalAmount
  from "customers"
  join "payments" using ("customerId")
 group by "customerId"
 order by totalAmount desc;
