import { produce } from "immer";

const initialState = {
  toDoList: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TODOS": {
      return {
        ...state,
        toDoList: [...action.data],
      };
    }
    case "ADD_TODO": {
      return {
        ...state,
        toDoList: [...state.toDoList, action.data],
      };
    }
    case "REMOVE_TODO": {
      const updatedList = state.toDoList.filter(
        (item) => item.id !== action.item.id
      );
      return {
        ...state,
        toDoList: [...updatedList],
      };
    }

    case "EDIT_TODO": {
      const updatedList = state.toDoList.map((elm) =>
        elm.id === action.item.id ? { ...elm, ...action.item } : { ...elm }
      );

      return {
        ...state,
        toDoList: [...updatedList],
      };
    }

    case "COMPLETE_LIST_TODO": {
      const updatedList = state.toDoList.map((elm) => {
        return { ...elm, ...action.data };
      });

      return {
        ...state,
        toDoList: [...updatedList],
      };
    }

    case "CLEAR_LIST": {
      return produce(state, (draftState) => {
        return (draftState = initialState);
      });
    }

    default: {
      return state;
    }
  }
}
