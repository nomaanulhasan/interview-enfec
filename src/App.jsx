import { useState } from 'react';
import { toast } from 'react-toastify';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { TitleBar, HeaderRow, UserPopup, UserRow } from './components';
import { usersApiUrl } from './utils';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState();
  const [deletedUser, setDeletedUser] = useState(null);
  const togglePopup = () => setIsModalOpen((open) => {
    if (open) {
      setUserId(null)
    }
    return !open
  });
  const queryClient = useQueryClient()
  const { data: usersData, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const res = await fetch(usersApiUrl);
        const data = res.json();
        return data;
      } catch (err) {
        toast.error('Something went wrong');
        console.error(err);
        return err;
      }
    }
  });

  const { data: userData } = useQuery(['user', userId],
    async () => {
      try {
        const res = await fetch(`${usersApiUrl}/${userId}`);
        const data = res.json();
        return data;
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong');
        return err;
      } finally {
        setTimeout(() => {
          togglePopup()
        }, 1);
      }
    }, {
    // The query will not execute until the userId exists
    enabled: !!userId,
  });

  const openUpdateUserPopup = (id) => {
    setUserId(id)
  }

  const deleteUserMutation = useMutation({
    mutationFn: async (userId) => {
      //NOTE: this function is deleting the user data but after refetching the users are getting populated from jsonplaceholder api
      // for (let i = 0; i < usersData.length; i++) {
      //   if (usersData[i].id === userId) {
      //     delete usersData[i]
      //   }
      // }
      try {
        setDeletedUser(userId);
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId ? userId : ''}`, { method: 'DELETE' });
        const data = res.json();
        return data;
      } catch (err) {
        toast.info('Something went wrong');
        console.error(err);
        return err;
      } finally {
        toast.info('User deleted successfully');
        setDeletedUser(null);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['users'])
    }
  })

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <h1 className='bg-slate-300 p-10 text-center rounded-lg w-fit text-xl'>Loading...</h1>
      </div>
    );
  }

  if (error || deleteUserMutation.error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  return (<>
    <section className='
      bg-slate-300 text-slate-950 drop-shadow-xl
      rounded-lg p-4 lg:p-8 m-2 lg:m-4 
    '>
      <TitleBar togglePopup={togglePopup} />
      <div className='flex flex-col min-w-[1024] overflow-auto'>
        <HeaderRow />

        <div>
          {usersData.map((user) => {
            return (
              <UserRow
                {...user}
                key={user.id}
                openUpdateUserPopup={id => openUpdateUserPopup(id)}
                deletableUserId={deletedUser}
                deleteUser={(id) => deleteUserMutation.mutate(id)}
              />
            )
          })}
        </div>
      </div>
    </section>

    {isModalOpen && (
      <UserPopup userData={userData} close={togglePopup} />
    )}
  </>
  );
}

export default App;