const CustomToolbar = (toolbar:any) => {
    const goToToday = () => {
      const now = new Date();
      toolbar.date.setMonth(now.getMonth());
      toolbar.date.setYear(now.getFullYear());
      toolbar.onNavigate("current");
    };
   
    const goToBack = () => {
      let mDate = toolbar.date;
      let newDate = new Date(mDate.getFullYear(), mDate.getMonth() - 1, 1);
      toolbar.onNavigate("prev", newDate);
    };
   
    const goToNext = () => {
      let mDate = toolbar.date;
      let newDate = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 1);
      toolbar.onNavigate("next", newDate);
    };
   
    return (
      <div>
        <button onClick={goToToday}>Today</button>
        <button onClick={goToBack}>Back</button>
        <button onClick={goToNext}>Next</button>
      </div>
    );
   };
   export default CustomToolbar