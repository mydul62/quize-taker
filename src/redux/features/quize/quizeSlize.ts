import { quizData } from '@/home/QuestionData'
import { createSlice } from '@reduxjs/toolkit'

export interface Iquize {
  startQuize: boolean;
  currentQuestionIndex: number;
  userAnswers: string[];
  correctAnswer:number;
  questions:typeof quizData,
  quizeComplete:boolean;
}

const initialState:Iquize = {
  startQuize: false,
  currentQuestionIndex: 0,
  correctAnswer : 0,
  userAnswers: Array(quizData.length).fill(null),
  questions:quizData,
  quizeComplete: false
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
    },
    setQuizeComplete:(state)=>{
     state.quizeComplete=true;
    }
  },
})


export const { setStartQuize, nextQuestion, previousQuestion ,setAnswers,setQuizeComplete} = QuizeSlice.actions;

export default QuizeSlice.reducer