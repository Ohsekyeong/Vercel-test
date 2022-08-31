import { createSlice } from "@reduxjs/toolkit";


// Action value

const DELETE_Post = "DELETE_Post";
const GET_Post_BY_ID = "GET_Post_BY_ID";

// Action Creator
export const deletePost = (payload) => {
    return {
      type: DELETE_Post,
      payload,
    };
  };

  export const getpostByID = (payload) => {
    return {
      type: GET_Post_BY_ID,
      payload,
    };
  };




// initial state
const initialState = {
    post: {
        id: "0",
        title: "",
        body: "",
        isDone: false,
      },

      posts: [
        {
          id: "1",
          title: "리액트",
          body: "리액트를 배워봅시다",
          isDone: false,
        },
      ],

    };



  const post = (state = initialState, action) => {
    switch (action.type) {
  
      case DELETE_Post:
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
        };

        case GET_Post_BY_ID:
            return {
              ...state,
              post: state.posts.find((post) => {
                return post.id === action.payload;
              }),
            };
          default:
            return state;
        }

    };
