
import './App.css';
import React from 'react'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      sisaUang: 100000,
      persentaseUang: 10,
      PengeluaranUang: 500000,
      pemasukanUang: 500000,
      TransaksiIn: 10,
      TransaksiOUT: 5,
      Summary: [
        {
          deskripsi: "Menerima Gaji",
          tanggal: "1 july 2024",
          nominal: 250000,
          category: "IN"

        },
        {
          deskripsi: "Di cukur",
          tanggal: "24 july 2024",
          nominal: 250000,
          category: "OUT"

        }
      ]
    }

  }

  render() {
    return (
      <>
        <div className='container py-5'>

          <div className='row'>
            <div className='col-12 text-center'>
              <h1>Feeduiten Apps</h1>
              <hr className='w-75 mx-auto' />
              <h2 className='fw-bold'>Rp. {this.state.sisaUang},-</h2>
              <span className='title'>Sisa uang kamu tersisa {this.state.persentaseUang}% lagi </span>
            </div>
          </div>


          <div className='row mt-4'>
            <div className='col-6'>
              <div className='card-wraper p-4'>
                <div className='icon-wraper mb-1'>
                  <i class="bi bi-wallet2"></i>
                </div>
                <span className='title '>Pemasukan</span>
                <h3 className='fw-bold'>Rp. {this.state.pemasukanUang},-</h3>
                <div>
                  <span className='title-sm text-ungu fw-bold'>{this.state.TransaksiIn}</span> <span className='Title-sm'>Transaksi</span>
                </div>
              </div>
            </div>


            <div className='col-6'>
              <div className='card-wraper p-4'>
                <div className='icon-wraper mb-1'>
                  <i class="bi bi-cash-stack"></i>
                </div>
                <span className='title '>Pengeluaran</span>
                <h3 className='fw-bold'>Rp. {this.state.PengeluaranUang},-</h3>
                <div>
                  <span className='title-sm text-ungu fw-bold'>{this.state.TransaksiOUT}</span> <span className='Title-sm'>Transaksi</span>
                </div>
              </div>
            </div>


          </div>






          <div className='row mt-4'>
            <div className='col-12 d-flex justify-content-between align-items-center'>
              <h4> Ringkasan Transaksi</h4>
              <div className='wrapper-button'>
                <button className='button btn-ungu px-3 py-2 me-2'>Pemasukan   <i class="bi bi-plus-circle-fill"></i></button>
                <button className='button btn-pink px-3 py-2 me-2'>Pengeluaran   <i class="bi bi-dash-circle-fill"></i></button>

              </div>
            </div>
          </div>
          
          <div className='row mt-4'>
          { this.state.Summary.map((sum)=>{
                  return(
          
            <div className='mb-3 col-12 d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <div className={sum.category === "IN" ? "icon-wraper-in" : "icon-wraper-out"}>
                  <i class={sum.category === "IN" ? "bi bi-wallet2" : "bi bi-bag-dash"}></i>

                </div>
                
                <div className='transaction ms-2 d-flex flex-column'>
                  <h6>{sum.deskripsi}</h6>
                  <span className='title'>{sum.tanggal}</span>
                </div>

              </div>
              <h5 className={sum.category === "IN" ? "money-in" : "money-out"}>Rp. {sum.nominal} ,-</h5>
            </div>
                      
          )

                  
        })}
          </div>
        </div>
      </>
    )
  }
}

export default App