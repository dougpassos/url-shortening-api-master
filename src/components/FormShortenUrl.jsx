import './FormShortenUrl.css'

function FormShortenUrl() {
  return (
    <section className='shorter'>
      <form action="">
        <input type="text" placeholder='Shorten a link here...'/>
        <input type="button" value="Shorten It!" />
      </form>
    </section>
  )
  
}

export default FormShortenUrl
