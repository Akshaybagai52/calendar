import dayjs from "dayjs";

export const generateDate =(month:number=dayjs().month(),year:number=dayjs().year())=>{

  const firstDateOfMonth=dayjs().year(year).month(month).startOf("month")
  const endtDateOfMonth=dayjs().year(year).month(month).endOf("month")

let dateArray=[]


// create prefix date
for(let i =0;i<firstDateOfMonth.date();i++){
    dateArray.push({date:firstDateOfMonth.date(i),currentmonth:false})
}



// current date
  for(let i =firstDateOfMonth.date();i<endtDateOfMonth.date();i++ ){
    dateArray.push({date:firstDateOfMonth.date(i),currentmonth:true,
    today:firstDateOfMonth.date(i).toDate().toDateString()===dayjs().toDate().toDateString()})
  }


  const remaing=42-dateArray.length

  // last date 
  for(let i=endtDateOfMonth.date()+1;i<=endtDateOfMonth.date()+remaing;i++){
    dateArray.push({date:endtDateOfMonth.date(i),currentmonth:false})
  }


  return dateArray;
}
