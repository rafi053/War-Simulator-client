import React, { useEffect, useState } from 'react';
import { RootState } from '../../store/store.ts'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/useDispatchType.ts';
import { fetchMissiles } from '../../store/features/resourceSlice.ts';



const IdfDashboard = () => {
  const { organization, zone } = useSelector((state:RootState) => state.recourses);
  if (!organization || !zone) {
    return null;
  }
  const fullName = `${organization} - ${zone}`
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMissiles())
  
  }, [])

 
  return (
    <div className="IdfDashboard">
      <h1>Organization:  {fullName}</h1>
    {
    //  <h1>{availableAmmo?._id}</h1>
     
    }
    </div>
  );
};
export default IdfDashboard;
