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
  ReferenceField,
  ReferenceManyField,
  ReferenceInput,
} from "react-admin"
import RichTextInput from "ra-input-rich-text"

export const QuestionList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="question" />
      <ShowButton label="View" />
      <EditButton label="Edit" />
      <DeleteButton label="Delete" redirect={false} />
    </Datagrid>
  </List>
)

export const QuestionShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField label="ID" source="id" />
      <TextField source="question" />
      <ReferenceField
        label="Collection"
        source="collection_id"
        reference="collections"
      >
        <TextField source="name" />
      </ReferenceField>
      <ReferenceManyField
        label="Answers"
        reference="answers"
        target="question_id"
      >
        <Datagrid>
          <ReferenceField label="ID" source="id" reference="answers">
            <TextField source="answer" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
)

export const QuestionCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="question" />
      <ReferenceInput
        label="Collection"
        source="collection_id"
        reference="collections"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)

export const QuestionEdit = props => (
  <Edit {...props}>
    <SimpleForm warnWhenUnsavedChanges redirect={false}>
      <TextInput source="id" options={{ disabled: true }} />
      <TextInput source="question" />
      <ReferenceInput
        label="Collection"
        source="collection_id"
        reference="collections"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceManyField
        label="Answers"
        reference="answers"
        target="question_id"
      >
        <Datagrid>
          <ReferenceField label="ID" source="id" reference="answers">
            <TextField source="answer" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
)
