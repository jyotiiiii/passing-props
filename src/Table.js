import './Table.css';

const Table = ({ data, tableRowIdHighlighted, onNodeMouseOver, onNodeMouseOut }) => {
    const header = Object.keys(data[0]);

    return (
        <div>
            <h1 className='title'>All data</h1>
            <table className='students'>
                <tbody>
                    <tr>
                        {header.map((key, index) => (
                            <th key={index}>{key.toUpperCase()}</th>
                        ))}
                    </tr>
                    {data.map((student, index) => {
                        // Work out which row is activated based on the id
                        const isThisStudentHighlighted = String(student.id) === tableRowIdHighlighted;

                        const onMouseOver = () => {
                            onNodeMouseOver(student.id)
                        }

                        return (
                            <tr id={isThisStudentHighlighted ? "highlighted" : ""} key={student.id}
                                onMouseOver={onMouseOver} onMouseOut={onNodeMouseOut}
                            >
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.email}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default Table;
