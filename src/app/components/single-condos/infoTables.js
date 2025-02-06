import '../../styles/location.css';

const InfoTables=({locationTables})=>{


    

        return(
            <div className="px-10 p-9 bg-white rounded-[20px]" style={{border:"1px solid rgba(36, 62, 81, 0.10)"}}>
                 <table>
                    <tbody>
                    {locationTables.map((item, index) => (
                        <tr key={index}>
                        <td className='tbl-title text-clr1100 text-base font-bold leading-[140%] -tracking-[0.16px]'>{item.title}</td>
                        <td className='tbl-content text-black text-base font-normal leading-[140%] -tracking-[0.16px]'>{item.content}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
}
export default InfoTables;