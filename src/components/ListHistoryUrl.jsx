import './ListHistoryUrl.css'

function ListHistoryUrl(props) {

  const lista = props.lista;   

  return (
    <section className={lista.length!==0 ?'list-hist-url': 'list-hist-url-none list-hist-url'}>
      <div className='list-hist-url-orig'>
        {lista.original_link}
      </div>
      <div className='list-hist-url-shorten'>
        <span>{lista.full_share_link}</span>
        <button>Copy</button>
      </div>
    </section>
  )  
}

export default ListHistoryUrl