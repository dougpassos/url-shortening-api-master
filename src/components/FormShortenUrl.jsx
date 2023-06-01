import { useState } from 'react'
import './FormShortenUrl.css'
import { useEffect } from 'react';
import ListHistoryUrl from './ListHistoryUrl'

function FormShortenUrl() {
  const [localStorageUrl, setLocalStorageUrl] = useState([]);

  const shortApi =  (url) => {
    const base = `https://api.shrtco.de/v2/shorten?url=${url}`
     const response = fetch(base)
    .then(response => response.json())
    .then(respJson => {
      if (respJson['ok']===true) {
        const full_share_link = respJson['result'].full_share_link      
        return {
          ok: true,
          full_share_link: full_share_link,
          original_link: url
        }        
      } else {
        const error = respJson['error']
        return {
          ok: false,
          error: error
        }
      }
    }) 
    .catch(error => console.error(error))
    return response
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const { shortUrl } = e.target.elements;    
    const response = await shortApi(shortUrl.value)
    
    if (response.ok===true) {
      const {full_share_link, original_link} = response
      setLocalStorageUrl({full_share_link, original_link})
      //window.localStorage.setItem('historyShorten',  JSON.stringify(localStorageUrl))
    } else {
      console.log('messagem de erro');
    }
  }
  
  useEffect(() => {
   console.log(localStorageUrl)
   window.localStorage.setItem('historyShorten',  JSON.stringify(localStorageUrl))
  }, [localStorageUrl])




  return (
    <>
      <section className='shorter'>
        <form onSubmit={onSubmit} >
          <input 
            name='shortUrl'
            id='shortUrl' 
            type="text" 
            placeholder='Shorten a link here...'                 
            />
          <input type="submit" value="Shorten It!" />
        </form>
      </section>
      <ListHistoryUrl lista={localStorageUrl}></ListHistoryUrl>
    </>
  )
  
}

export default FormShortenUrl
