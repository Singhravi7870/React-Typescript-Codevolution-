import { relative } from 'path';
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName ={
    first :'Ravi',
    last : 'Ranjan' 

  }

  const nameList =[
    {
     first :'Ravi',
     last : 'Ranjan'
    },
    {
      first :'Utkarsh',
      last : 'Anand'
    },
    {
      first : 'Vishnu',
      last : 'verma'
    }


  ]

  return (
     <div className="App">
       <Greet name='Ravi' messageCount={20} isLoggedIn={true}  />
       <Person name={personName} />
       <PersonList  names={nameList} />
       <Status status='success'/>
       <Heading>Placeholder text</Heading>
       
       <Oscar>
          <Heading> Oscar goes to Patna City</Heading>
       </Oscar>
       
     </div>
  )
}

export default App;
