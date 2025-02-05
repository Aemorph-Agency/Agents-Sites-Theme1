
const CondoInfoTables = ({ infos }) => {
    return (
        <div className="grid grid-cols-2 bg-white rounded-[20px] overflow-hidden condoinfo-tables">
            {infos.map((info, index) => (
                <div key={index} className="p-5">
                    <p className="text-sm text-black font-bold leading-[140%] -tracking-[0.14px] mb-[10px]">{info.dataTitle}</p>
                    {typeof info.dataContent === 'object' ? (
                        <ul className="text-base font-normal leading-[140%] -tracking-[0.16px] flex flex-wrap gap-1">
                            {Object.values(info.dataContent).flat().map((unit, idx) => (
                                <li key={idx} className="px-2 py-[6px] mini-blocks rounded ">{unit}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-base font-normal leading-[140%] -tracking-[0.16px]">{info.dataContent}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CondoInfoTables;