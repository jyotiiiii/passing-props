import './InfoPanel.css';

const InfoPanel = ({ student }) => {
    return (
        <div>
            <table className='info'>
                <tbody>
                    <tr>
                        <th>Information</th>
                    </tr>

                    <tr>{student?.id}</tr>
                    <tr>{student?.name}</tr>
                    <tr>{student?.age}</tr>
                    <tr>{student?.email}</tr>
                </tbody>
            </table>
        </div>
    );
};
export default InfoPanel;
