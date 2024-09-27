const BASE_URL = "http://localhost:8000"


export const Authendpoints = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
}


export const TaskListEndpoints = {
  FETCH_TASK_LIST: BASE_URL+"/taskLists",
  ADD_TASK_LIST: BASE_URL+"/addTaskList",
  DELETE_LIST: BASE_URL+`/deleteList`,
  GET_ALL_LISTS:BASE_URL+`/all-tasks`,
}

export const TASK_Endpoints = {
  ADD_TASK: BASE_URL+`/add-task`,
  DELETE_TASK: BASE_URL+`/tasks`,
  UPDATE_TASK: BASE_URL+`/tasks`,
  GET_ASSIGNED_TASKS:BASE_URL+`/tasks/assignedTasks`
}

export const User_EndPoints={
  GET_ALL_USERS: BASE_URL+'/users',
  DELETE_USER : BASE_URL+'/delete-user'
}

