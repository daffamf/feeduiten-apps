
import './App.css';
import React from 'react'


class App extends React.Component {
  // constructor(){
  //   super()
  // }

  render() {
    return (
      <>
        <div className='container py-5'>

          <div className='row'>
            <div className='col-12 text-center'>
              <h1>Feeduiten Apps</h1>
              <hr className='w-75 mx-auto' />
              <h2 className='fw-bold'>Rp. 1.500.00,-</h2>
              <span className='title'>Sisa uang kamu tersisa 75% lagi </span>
            </div>
          </div>


          <div className='row'>
            <div className='col-6'>
              <div className='card-wraper p-4'>
                <div className='icon-wraper '>
                  <i class="bi bi-wallet2"></i>
                </div>
                <span className='title'>Pemasukan</span>
                <h3 className='fw-bold'>Rp. 2000.000,-</h3>
                <div>
                  <span className='title text-ungu'>50</span><span className='Title'>Transaksi</span>
                </div>
              </div>
            </div>

          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-between align-items-center'>
              <h2> Ringkasan Transaksi</h2>
              <div className='wrapper-button'>
                <button>Pemasukan   <i class="bi bi-plus-circle-fill"></i></button>
                <button>Pengeluaran   <i class="bi bi-dash-circle-fill"></i></button>

              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>   
                <div className='icon-wraper'>
                  <i class="bi bi-wallet2"></i>

                </div>
                <div className='transaction'>
                  <h6>Menerima Gaji</h6>
                  <span className='title'>1 july 2022</span>
                </div>

              </div>
              <h5 className='money'>Rp. 1000.000 ,-</h5>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App