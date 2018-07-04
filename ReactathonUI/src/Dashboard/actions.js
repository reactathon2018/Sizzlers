import ajax from '../ajax';
import {createAction} from '../redux_utils'

export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_REQUEST_SUCCESS = 'FETCH_EVENTS_REQUEST_SUCCESS';
export const FETCH_EVENTS_REQUEST_FAILURE = 'FETCH_EVENTS_REQUEST_FAILURE';

export const fetchEventsRequest = createAction(FETCH_EVENTS_REQUEST, 'fetchEventsRequestLoading')
export const fetchEventsSuccess = createAction(FETCH_EVENTS_REQUEST_SUCCESS,'events')
export const fetchEventsFailure = createAction(FETCH_EVENTS_REQUEST_FAILURE, 'errors')



let api_input = {"query": " query{allevents(orderBy:eventName_ASC){eventName,eventId,startDate,endDate,imageURL,readMoreContent,deliverables,faqs{qes,ans},leaderboards{participants,rank,totalScore,attempts,lastSubmitted}}}"}

let api_comment_input = {"query": "query{  alldiscussions(orderBy:user_ASC) {   Qus,    user,    dated}}"}


export function FetchEvents () {
  return dispatch => {
    dispatch(fetchEventsRequest())
    return ajax.post(`/`,api_input)
      .then(res => {
        dispatch(fetchEventsSuccess(res.data.data.allevents))
      })
      .catch(errors => dispatch(fetchEventsFailure(errors)))
  }
}



export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_REQUEST_SUCCESS = 'FETCH_COMMENTS_REQUEST_SUCCESS';
export const FETCH_COMMENTS_REQUEST_FAILURE = 'FETCH_COMMENTS_REQUEST_FAILURE';

export const fetchCommentsRequest = createAction(FETCH_COMMENTS_REQUEST, 'fetchCommentsRequestLoading')
export const fetchCommentsSuccess = createAction(FETCH_COMMENTS_REQUEST_SUCCESS,'comments')
export const fetchCommentsFailure = createAction(FETCH_COMMENTS_REQUEST_FAILURE, 'errors')


export function FetchComments () {
  return dispatch => {
    dispatch(fetchCommentsRequest())
    return ajax.post(`/`,api_comment_input)
      .then(res => {
        dispatch(fetchCommentsSuccess(res.data.data.alldiscussions))
      })
      .catch(errors => dispatch(fetchCommentsFailure(errors)))
  }
}
