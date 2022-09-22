import Input from '../components/Input'
import Phone from './phonebook'
import LoginForm from './Test'


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >

  
  {/* <LoginForm onSubmit={values => console.log(values)} />, */}


    

<Phone/>

      {/* <Input /> */}
     
    </div>
  );
};
