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

export const CollectionList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <ShowButton label="View" />
      <EditButton label="Edit" />
      <DeleteButton label="Delete" redirect={false} />
    </Datagrid>
  </List>
)

export const CollectionShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="short_name" />
      <ReferenceManyField
        label="Questions"
        reference="questions"
        target="collection_id"
      >
        <Datagrid>
          <ReferenceField label="ID" source="id" reference="questions">
            <TextField source="question" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
)

export const CollectionCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="short_name" />
    </SimpleForm>
  </Create>
)

export const CollectionEdit = props => (
  <Edit {...props}>
    <SimpleForm warnWhenUnsavedChanges redirect={false}>
      <TextInput source="id" options={{ disabled: true }} />
      <TextInput source="name" />
      <TextInput source="short_name" />
      <ReferenceManyField
        label="Questions"
        reference="questions"
        target="collection_id"
      >
        <Datagrid>
          <ReferenceField label="ID" source="id" reference="questions">
            <TextField source="question" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
)
