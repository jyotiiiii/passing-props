import { useState } from 'react';
import GraphContainer from './GraphContainer';
import './App.css';
import Table from './Table';
import InfoPanel from './InfoPanel';

const students = {
    nodes: [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
    ],
    links: [
        { source: 1, target: 2 },
        { source: 1, target: 3 },
        { source: 1, target: 4 }
    ]
};

function App() {
    const [tableRowIdHighlighted, setTableRowIdHighlighted] = useState(
        undefined
    );

    const onNodeMouseOut = () => {
        setTableRowIdHighlighted(undefined);
    };

    const onNodeMouseOver = (nodeId) => {
      setTableRowIdHighlighted(String(nodeId))
    }

    const student = students.nodes.find(element => String(element.id) === tableRowIdHighlighted)

    const studentsWithColorInformation = {
      ...students,
      nodes: students.nodes.map(student => {
        if (
          String(student.id) === tableRowIdHighlighted
        ) {
          return {
            ...student,
            color: 'black'
          }
        } else {
          return student
        }
      }),
    }

    return (
        <div className='App'>
            <GraphContainer
                data={studentsWithColorInformation}
                onNodeMouseOver={onNodeMouseOver}
                onNodeMouseOut={onNodeMouseOut}
            />
            <InfoPanel student={student} />
            <Table
                data={students.nodes}
                onNodeMouseOver={onNodeMouseOver}
                onNodeMouseOut={onNodeMouseOut}
                tableRowIdHighlighted={tableRowIdHighlighted}
            />
        </div>
    );
}

export default App;
