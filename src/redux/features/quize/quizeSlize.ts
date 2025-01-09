import { quizData } from '@/home/QuestionData'
import { createSlice } from '@reduxjs/toolkit'

export interface Iquize {
  startQuize: boolean;
  currentQuestionIndex: number;
  userAnswers: string[];
  questions:typeof quizData,
}

const initialState:Iquize = {
  startQuize: false,
  currentQuestionIndex: 0,
  userAnswers: Array(quizData.length).fill(null),
  questions:quizData,
}

export const QuizeSlice = createSlice({
  name: 'quize',
  initialState,
  reducers: {
    setStartQuize: (state) => {
      state.startQuize = true;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    setAnswers:(state,actions)=>{
      state.userAnswers[actions.payload.currentQuestionIndex]=actions.payload.item;
    }
  },
})


export const { setStartQuize, nextQuestion, previousQuestion ,setAnswers} = QuizeSlice.actions;

export default QuizeSlice.reducer