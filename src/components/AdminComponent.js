import React from "react"

import { Admin, Resource } from "react-admin"

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase"

import hasuraDataProvider from "ra-data-hasura"

import CustomLoginPage from "./CustomLoginPage"

import {
  QuestionList,
  QuestionShow,
  QuestionCreate,
  QuestionEdit,
} from "./question"

import { AnswerList, AnswerShow, AnswerCreate, AnswerEdit } from "./answer"

import {
  CollectionList,
  CollectionShow,
  CollectionCreate,
  CollectionEdit,
} from "./collection"

import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined"
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined"
import RemoveFromQueueOutlinedIcon from "@material-ui/icons/RemoveFromQueueOutlined"

import customTheme from "../components/theme"

const config = {
  apiKey: "AIzaSyCUa-xU01cPj6_l4hodhcACCUb0gfGeJZk",
  authDomain: "entro-production.firebaseapp.com",
  databaseURL: "https://entro-production.firebaseio.com",
  projectId: "entro-production",
  storageBucket: "entro-production.appspot.com",
  messagingSenderId: "881406289911",
  appId: "1:881406289911:web:d0f683ae03a037230330f2",
}

const options = {
  logging: true,
  rootRef: "root_collection/root_document",
}

const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret": "supersecret",
}

const dataProvider = hasuraDataProvider("https://api.entroprise.com", headers)
const authProvider = FirebaseAuthProvider(config, options)

const AdminComponent = () => (
  <Admin
    theme={customTheme}
    loginPage={CustomLoginPage}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="collections"
      icon={LibraryBooksOutlinedIcon}
      list={CollectionList}
      show={CollectionShow}
      create={CollectionCreate}
      edit={CollectionEdit}
    />
    <Resource
      name="questions"
      icon={RemoveFromQueueOutlinedIcon}
      list={QuestionList}
      show={QuestionShow}
      create={QuestionCreate}
      edit={QuestionEdit}
    />
    <Resource
      name="answers"
      icon={FeaturedPlayListOutlinedIcon}
      list={AnswerList}
      show={AnswerShow}
      create={AnswerCreate}
      edit={AnswerEdit}
    />
  </Admin>
)

export default AdminComponent
