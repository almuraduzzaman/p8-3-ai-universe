import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState({});
    const [showAll, setShowAll] = useState(false);
    const [uniqueId, setUniqueId] = useState(null);


    const handleShowAll = () => {
        setShowAll(true);
    };

    const handleSort = () => {
        const sortedData = data.sort((a, b) => {
            return new Date(a.published_in) - new Date(b.published_in);
        });
        setData([...data, sortedData]);
    }

    useEffect(() => {
        // console.log('hello from useEffect');
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then(res => res.json())
            .then(data => setSingleData(data.data))
    }, [uniqueId])

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
            const value = await res.json();
            // console.log(value.data.tools);
            setData(value.data.tools);
        };

        loadData();
    }, []);

    // console.log(singleData);
    return (
        <>
            <span onClick={handleSort}>
                <Button>Sort by Date</Button>
            </span>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-12 my-6'>
                {data.slice(0, showAll ? 12 : 6).map(singleData => {
                    // console.log(singleData);
                    return <SingleData
                        singleData={singleData}
                        key={singleData.id}
                        setUniqueId={setUniqueId}
                    />;
                })}
            </div>
            {
                !showAll && <span onClick={handleShowAll}>
                    <Button>see more</Button>
                </span>
            }
            <Modal singleData={singleData} />
        </>
    );
};

export default Card;