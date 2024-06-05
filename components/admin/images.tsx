// components/admin/images.tsx
import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const ImageList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="productId" />
      <TextField source="url" />
      <EditButton basePath="/images" />
      <DeleteButton basePath="/images" />
    </Datagrid>
  </List>
);

export const ImageEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="productId" />
      <TextInput source="url" />
    </SimpleForm>
  </Edit>
);

export const ImageCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="productId" />
      <TextInput source="url" />
    </SimpleForm>
  </Create>
);
