import React, { useEffect, useState } from 'react';
import { RootState } from '../../store/store.ts'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/useDispatchType.ts';
import { fetchRecourse  } from '../../store/features/resourceSlice.ts';
import { fetchCurrentUser } from '../../store/features/usersSlice.ts';



const IdfDashboard = () => {
  const { organization, zone, recourse } = useSelector((state:RootState) => state.recourses);
  const { currentUser } = useSelector((state:RootState) => state.users);
  const fullName = `${organization} - ${zone}`
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecourse())
    
  
  }, [])
  console.log("recourse", recourse);
  
  
  
  
  

 
  return (
    <div className="IdfDashboard">
      <h1>Organization:  {fullName}</h1>
     
    {
    recourse.missile.map((missile) => (
      <div key={missile._id}>
        <h2>{missile.name}</h2>
        <p>{missile.description}</p>
        <p>{missile.speed}</p>
        <p>{missile.intercepts}</p>
        <p>{missile.price}</p>
      </div>
    ))
     
    }
    </div>
  );
};
export default IdfDashboard;
