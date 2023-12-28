import "./Home.scss"
import { Col, Container, Modal, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { toast } from 'react-toastify';
import { TypeColor } from "../../Helper/Helper";
import Swal from 'sweetalert2'
import { FaSearch } from "react-icons/fa";

const Home = () => {

  const [todos, setTodo] = useState([]);
  const [search, setSearch] = useState('');
  console.log(search);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({
    title : "",
    type : "",
    date : "",
  })

 

  const handleChange = (e) =>{
    setInput((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  
const handleModalShow = () =>{
  setModal(true);
}

const handleModalHide = () =>{
  setModal(false)
}




  // create todo
  const handleCreatTodo = async () =>{

     // validatation
     if(!input.title || !input.date){
      toast.warning('All Filed Are Required!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     }else{

      await axios.post("http://localhost:4030/todos", input);

      GetAllTodo();
      toast.success('Todo Created Successfull.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     }

   
     setInput({
      title : "",
      type : "",
      date : ""

     });
      

  }


    // get all todo show
  const GetAllTodo = async () =>{

    const response = await axios.get("http://localhost:4030/todos");

       setTodo(response.data)
      

   }

   // todo list update
   const handleTodoEdit = async (id) =>{

    setInput(todos.find((data) => data.id === id));

      handleModalShow();



   }

   // Update data submit
   const HandleTodoUpdate = async () =>{

     await axios.patch(`http://localhost:4030/todos/${input.id}`, input);

    GetAllTodo();

    handleModalHide();


   }


   // Todo delete list
   const handleTodoDelete = async (id) =>{


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        const response = axios.delete(`http://localhost:4030/todos/${id}`);
        GetAllTodo(response.data)

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

   
     

   }

   useEffect(() =>{
    GetAllTodo();
   },[])

  return (
    <>

<Container className="todo-container">
  <Row className="row">
    <Col>
    
     <div className="todo-container">
       <div className="todo-list">
           <h1>Todo List</h1>

        <div className="create-item">
        <div className="my-3">
        <label>Title</label>
        <input type="text" className="form-control"  name="title" value={input.title} onChange={handleChange}/>
       </div>

       <div className="my-3">
        <label>Type</label>
        <select className="form-control" name="type" value={input.type} onChange={handleChange}>
          <option value="">-Select-</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Deleted">Deleted</option>
        </select>
       </div>

       <div className="my-3">
        <label>Created Date</label>
       <input className="form-control" type="date"  name="date" value={input.date} onChange={handleChange}/>
    
       </div>

        <button className="btn btn-sm btn-primary" type="submit" onClick={handleCreatTodo}>Add Todo</button>
        </div>

       <div className="search">
       <input className="form-control" type="search" placeholder="search" onChange={(e) => setSearch(e.target.value)}/>
       
       <FaSearch/>
       </div>
      
       </div>

      


     </div>

       <div className="todo-list-item">

         {todos?.length > 0 ? (
          todos.filter((item) =>{
            return search.toLowerCase()=== "" ? item : item.title.toLowerCase().includes(search) || item.type.toLowerCase().includes(search)
          }).map((item, index) => {
           return (
         <div className="todo" key={index} style={{backgroundColor : TypeColor(item.type)}}>
        <div className="todo-element">
       <h1>Task : {item.title}</h1>
       <p>Type : {item.type}</p>      
       <span>Date : {item.date}</span>
      
          
         </div>

         <div className="edit-update">

          <button className="btn btn-sm btn-info" onClick={() => handleTodoEdit(item.id)}><FaEdit/></button>

          <button className="btn btn-sm btn-danger" onClick={() => handleTodoDelete(item.id)}><MdDelete/></button>

         </div>

          </div>
           )
          })
         ) : (
           <h3 style={{margin: "auto", padding : "10px", color : "black"}}>No Todo Found</h3>
         )}

         
           
       </div>

    
         
       
         
         <Modal show={modal} onHide={handleModalHide}>
            <Modal.Header>
              <Modal.Title style={{display :"flex", justifyContent : "space-between", alignItems : "center"}}>
                 <h1 style={{color : "black"}}>Update Todo List</h1>
                 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className="modal-element">
              <div className="my-3">
                <label htmlFor="">Title</label>
              <input className="form-control" type="text" name="title" value={input.title} onChange={handleChange}/>
              </div>

              <div className="my-3">
              <label htmlFor="">Type</label>
              <label>Type</label>
        <select className="form-control" name="type" value={input.type} onChange={handleChange}>
          <option value="">-Select-</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Deleted">Deleted</option>
        </select>
              </div>

              <div className="my-3">
              <input className="form-control" type="date" name="date" value={input.date} onChange={handleChange}/>
              </div>
              
              <button type="submit" className="btn btn-sm btn-success" onClick={() => HandleTodoUpdate(input.id)}>Update</button> 
               </div>
               
            </Modal.Body>
         </Modal>

 

     

    </Col>
  </Row>
</Container>
  
  
    </>



  )
}

export default Home