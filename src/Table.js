import './Table.css';

const Table = ({ data, tableRowIdHighlighted }) => {
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

                        return (
                            <tr id={isThisStudentHighlighted ? "highlighted" : ""} key={student.id}>
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
