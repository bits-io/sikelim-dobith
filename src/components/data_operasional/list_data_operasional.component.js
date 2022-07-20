import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Col, Form, Modal, Row } from 'react-bootstrap';

export default function ListDataOperasional() {

    const [data_operasional, setDataOperasional] = useState([])

    useEffect(()=>{
        fetchDataOperasional() 
    },[])

    const fetchDataOperasional = async () => {
        await axios.get(`https://62cf8265826a88972d0dbf66.mockapi.io/api/operasional`).then(({data})=>{
            setDataOperasional(data)
        })
    }

    const deleteDataOperasional = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            return result.isConfirmed
          });

          if(!isConfirm){
            return;
          }

          await axios.delete(`https://62cf8265826a88972d0dbf66.mockapi.io/api/operasional/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchDataOperasional()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        
        
      <div className="container">
          <div className="row">
            <div className='col-6 float-start'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Dari</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Control 
                            type="date"
                            placeholder="Dari"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Sampai</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Control 
                            type="date"
                            placeholder="Dari"
                        />
                    </Form.Group>
                </Row>
            </div>
            <div className='col-6 float-end'>
                <Link className='btn btn-primary mx-1 mb-2 float-end' to={"/categories/create"}>
                    Eksport
                </Link>
                <Button className='btn btn-primary mx-1 mb-2 float-end' variant="primary" onClick={handleShow}>
                    Import
                </Button>
                <Link className='btn btn-primary mx-1 mb-2 float-end' to={"/categories/create"}>
                    Cetak
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>Tanggal</th>
                                    <th>No Ref</th>
                                    <th>Pelanggan</th>
                                    <th>Sub Total</th>
                                    <th>Diskon</th>
                                    <th>Pajak</th>
                                    <th>Total Penjualan</th>
                                    <th>Pembayaran</th>
                                    <th>Saldo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data_operasional.length > 0 && (
                                        data_operasional.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.tanggal}</td>
                                                <td>{row.no_ref}</td>
                                                <td>{row.pelanggan}</td>
                                                <td><span className="float-start">Rp</span>{row.sub_total}</td>
                                                <td><span className="float-start">Rp</span>{row.diskon}</td>
                                                <td><span className="float-start">Rp</span>{row.pajak}</td>
                                                <td><span className="float-start">Rp</span>{row.total_penjualan}</td>
                                                <td><span className="float-start">Rp</span>{row.pembayaran}</td>
                                                <td><span className="float-start">Rp</span>{row.saldo}</td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
                </Modal.Header> */}
                <Modal.Body className="justify-content-center m-5 text-center">
                    <Col className="mt-5 mb-3">
                        <b>Jatuhkan file disini</b>
                    </Col>
                    <Col className="mb-3">
                        atau
                    </Col>
                    <Col className="mb-3">
                        <Form.Control type="file"  />
                    </Col>
                    {/* <Col className="mb-5">
                        <Button variant="primary" onClick={handleClose}>
                            Import
                        </Button>
                    </Col> */}
                </Modal.Body>
                {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer> */}
            </Modal>
          </div>
      </div>
    )
}