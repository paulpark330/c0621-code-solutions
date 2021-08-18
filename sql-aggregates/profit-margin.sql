With filmCost_CTE
as (
  Select "title",
        sum("replacementCost") as totalCost
    from "films"
    join "inventory" using ("filmId")
  group by "title"
),
filmRevenue_CTE
as (
  Select "title",
         sum("amount") as revenue
    from "films"
    join "inventory" using ("filmId")
    join "rentals" using ("inventoryId")
    join "payments" using ("rentalId")
   group by "title"
)

select "title",
       "description",
       "rating",
       revenue - totalCost as totalProfit
  from filmCost_CTE
       inner join filmRevenue_CTE using ("title")
       inner join "films" using ("title")
 order by totalProfit desc
 limit 5;
