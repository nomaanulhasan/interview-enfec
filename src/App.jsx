import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { UserRow, TitleBar, HeaderRow, Modal } from './components';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const togglePopup = () => setIsModalOpen((open) => !open);
  const queryClient = useQueryClient()
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = res.json();
        return data;
      } catch (err) {
        console.error(err);
        return err;
      }
    }
  });
  const usersData = usersQuery.data;

  const deleteUserMutation = useMutation({
    mutationFn: userId => {
      //NOTE: this function is deleting the user data but after refetching the users are getting populated from jsonplaceholder api
      for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].id === userId) {
          delete usersData[i]
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['users'])
    }
  })

  function savedAlert() {
    alert('Users data saved');
  }

  if (usersQuery.isLoading || deleteUserMutation.isLoading) {
    return (
      <div className='flex justify-center'>
        <h1 className='bg-slate-300 p-10 text-center rounded-lg w-fit text-xl'>Loading...</h1>
      </div>
    );
  }

  if (usersQuery.error) {
    return <pre>{JSON.stringify(usersQuery.error)}</pre>;
  }

  return (<>
    <section className='
    bg-slate-300 text-slate-950 drop-shadow-xl rounded-lg p-4 lg:p-8 m-2 lg:m-4 
    '>
      <TitleBar togglePopup={togglePopup} />
      <div className='flex flex-col min-w-[1024] overflow-auto'>
        <HeaderRow />

        <div>
          {usersData.map((user) => {
            return <UserRow key={user.id} {...user} togglePopup={togglePopup} isDeleting={deleteUserMutation.isLoading} deleteUser={(id) => deleteUserMutation.mutate(id)} />;
          })}
        </div>
      </div>
    </section>

    {isModalOpen && <Modal title='Add/Update User Information' close={togglePopup} action={savedAlert}>
      <>User form will load here...</>
    </Modal>}
  </>
  );
}

export default App;