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
  ReferenceInput,
} from "react-admin"
import RichTextInput from "ra-input-rich-text"

export const AnswerList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="answer" />
      <ShowButton label="View" />
      <EditButton label="Edit" />
      <DeleteButton label="Delete" redirect={false} />
    </Datagrid>
  </List>
)

export const AnswerShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="answer" />
      <ReferenceField
        label="Question"
        source="question_id"
        reference="questions"
      >
        <TextField source="question" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
)

export const AnswerCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="answer" />
      <ReferenceInput
        label="Question"
        source="question_id"
        reference="questions"
      >
        <SelectInput optionText="question" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)

export const AnswerEdit = props => (
  <Edit {...props}>
    <SimpleForm warnWhenUnsavedChanges redirect={false}>
      <TextInput source="id" options={{ disabled: true }} />
      <TextInput source="answer" />
      <ReferenceInput
        label="Question"
        source="question_id"
        reference="questions"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)
