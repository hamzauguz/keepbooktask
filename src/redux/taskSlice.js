import {createSlice, nanoid} from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      console.log(nanoid());
      // 'dgPXxUz_6fWIQBD8XmiSy'

      console.log(action.payload);
      const newTask = {
        id: nanoid(),
        name: action.payload.task,
        author: action.payload.author,
        startdate: action.payload.startdate,
        category: action.payload.category,
        completeDate: action.payload.completeDate,
      };
      state.push(newTask);
    },
    editTask: (state, action) => {
      const currentTasks = Array.from(state.initialState);
      currentTasks[action.payload.taskIndex] = action.payload.task;
      return {...state, initialState: currentTasks};
    },
    deleteTask: (state, action) => {
      console.log(action.payload.id);
      console.log(state);
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const {addTask, deleteTask, editTask} = taskSlice.actions;

export default taskSlice.reducer;
