import { questionTypes } from './';

const setLoader = (value, name) => ({
  type: questionTypes.SET_LOADER,
  value,
  name,
});

// THIS IS ASYNC ACTION
const createQuestion = (db, document, history) => dispatch => {
  dispatch(setLoader(true, questionTypes.CREATE_QUESTION))
  setTimeout(() => {
    db.questions.insert(document);
    history.push('/');
    dispatch(setLoader(false, questionTypes.CREATE_QUESTION))
  }, 1000);
};

const loadMoreQuestions = () => dispatch => {
  dispatch(setLoader(true, questionTypes.MORE_QUESTION))
  setTimeout(() => {
    dispatch(setLoader(false, questionTypes.MORE_QUESTION))
  }, 1000);
}

export default { setLoader, createQuestion, loadMoreQuestions }