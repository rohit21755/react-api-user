import React, { useEffect, useState } from "react";
import "./App.css";
import Adduser from "./components/Adduser";
// import Pagination from "./components/Pagintation";
import User from "./components/User";


const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setpostsPerPafe] = useState(2);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name:any, email:any) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
        // setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id:number) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onEdit = async (id:any, newName:any, newEmail:any) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: newName,
        email: newEmail
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        // setUsers((users) => [...users, data]);
        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            user.name = newName;
            user.email = newEmail;
          }

          return user;
        });

        setUsers((users) => updatedUsers);
      })
      .catch((error) => console.log(error));
  };
  // console.log(users);
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
  // const paginate = ({pageNumber}:{pageNumber:number}) => setCurrentPage(pageNumber);
  return (
    <div className="App border-2">
      <h3>User Setting </h3>

      <br />
      <Adduser onAdd={onAdd} />
      <div className="text-start p-4" style={{marginLeft:"30%"}}>
        <h1 ><b>User</b></h1>
        <p>Manage Team members and their account permission here .</p>
      </div>
      <div className="flex item-center" style={{marginLeft:"30%"}}>
        <div className="font-medium text-start flex-initial w-48">Name</div>
        <div className="ml-28">Status</div>
        <div className="ml-4">Role</div>
        <div className="ml-12">Loggined</div>
      </div>
      <div className="" style={{marginLeft:"30%"}}>
        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
            onDelete={onDelete} onEdit={onEdit}     />
        ))}
        {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={users.length}
        paginate={paginate}/> */}
      </div>
    </div>
  );
};

export default App;
