import React, { useReducer, useEffect, Fragment } from 'react'
import './app.sass'
import reducer from './reducer'

function App() {
  const url = 'https://api.thecatapi.com/v1/images/search'

  const initState = {
    isLoading: true,
    img: '',
    error: false,
  }
  const [state, dispatch] = useReducer(reducer, initState)

  const fetchCats = () => {
    dispatch({ type: 'LOADING' })

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const img = res[0].url
        dispatch({ type: 'SUCESS', payload: img })
      })
      .catch((error) => {
        dispatch({ type: 'ERROR', payload: error })
      })
  }
  useEffect(() => fetchCats(), [])

  return (
    <div className='container'>
      {state.isLoading && <div className='lds-dual-ring'></div>}
      {state.img ? (
        <Fragment>
          <img src={state.img} alt='cat' />
          <input
            value='I want some cats picture!!!'
            type='submit'
            onClick={fetchCats}
          />
        </Fragment>
      ) : (
        <div className='error'>{state.error}</div>
      )}
    </div>
  )
}

export default App
