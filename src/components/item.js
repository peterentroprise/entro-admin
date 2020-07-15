// in src/Comments.js
import * as React from "react"
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateInput,
  ArrayField,
  DateField,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
  NumberField,
  SingleFieldList,
  ReferenceManyField,
  ReferenceField,
  ChipField,
  SelectArrayInput,
  ReferenceArrayInput,
  ReferenceArrayField,
} from "react-admin"
import RichTextInput from "ra-input-rich-text"

export const ItemList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="question" />
      <ShowButton label="View" />
      <EditButton label="Edit" />
      <DeleteButton label="Delete" redirect={false} />
    </Datagrid>
  </List>
)

export const ItemShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="question" />
      <TextField source="answer" />
      <TextField source="content" />
    </SimpleShowLayout>
  </Show>
)

export const ItemCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="question" />
      <TextInput source="answer" />
      <TextInput source="content" />
    </SimpleForm>
  </Create>
)

export const ItemEdit = props => (
  <Edit {...props}>
    <SimpleForm warnWhenUnsavedChanges redirect={false}>
      <TextInput source="id" options={{ disabled: true }} />
      <TextInput source="question" />
      <TextInput source="answer" />
      <TextInput source="content" />
    </SimpleForm>
  </Edit>
)
