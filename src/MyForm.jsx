import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, resetFormData } from './redux/formSlice';
import './App.css';

const MyForm = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.data);

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    dispatch(resetFormData()); 
    reset(); 
  };

  useEffect(() => {
    const subscription = watch((value) => {
      dispatch(updateFormData(value));
    });
    return () => subscription.unsubscribe();
  }, [watch, dispatch]);

  return (
    <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          className="form-control"
          {...register('firstName')}
          defaultValue={formData.firstName || ''}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          className="form-control"
          {...register('lastName')}
          defaultValue={formData.lastName || ''}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="form-control"
          {...register('email')}
          defaultValue={formData.email || ''}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          className="form-control"
          {...register('phone')}
          defaultValue={formData.phone || ''}
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default MyForm;
