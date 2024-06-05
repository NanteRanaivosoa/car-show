// pages/admin.tsx
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from '../components/admin/users';
import { CarList, CarEdit, CarCreate } from '../components/admin/cars';
import { ImageList, ImageEdit, ImageCreate } from '../components/admin/images';
import { AppointmentList, AppointmentEdit } from '../components/admin/appointments';
import dataProvider from '../dataProvider';

const AdminPanel: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
      <Resource name="cars" list={CarList} edit={CarEdit} create={CarCreate} />
      <Resource name="images" list={ImageList} edit={ImageEdit} create={ImageCreate} />
      <Resource name="appointments" list={AppointmentList} edit={AppointmentEdit} />
    </Admin>
  );
};

export default AdminPanel;
