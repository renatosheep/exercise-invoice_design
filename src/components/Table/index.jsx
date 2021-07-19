import './styles.css'

const renderInvoices = (item, index) => {
  return (
    <div className='row' key={index}>
      <div className='product'>{`${item.product}`}</div>
      <div className='qtd'>{`${item.qtd}`}</div>
      <div className='price'>{`${item.price}`}</div>
      <hr />
    </div>
  )
}


const Table = () => {
  return (
    <>
      <div className='row'>
        <div className='product'>Product</div>
        <div className='qtd'>Unit</div>
        <div className='price'>Price</div>
      </div>
      <div>
        {INVOICES.map(renderInvoices)}
      </div>
    </>
  )
}

const INVOICES = [
  {
    'product': 'Three Unicorns',
    'qtd': '1',
    'price': '15'
  },
  {
    'prouct': 'Awesome Jacks',
    'qtd': '7',
    'price': '15'
  },
  {
    'product': 'Two Kings',
    'qtd': '1',
    'price': '30'

  }
]

export default Table