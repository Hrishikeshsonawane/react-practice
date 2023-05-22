import React, {useState, useEffect} from 'react';
const sportsList = [
    'cricket',
    'badminton',
    'volleyball',
    'cycling',
    'swimming'
];


const MultiCheckbox = () => {
    const [sports, setSports] = useState([]);
    const [indeterminate, setIndeterminate] = useState(false);

    useEffect(() => {
        if (sports.length === 0 || sports.length === sportsList.length) {
            setIndeterminate(false);
        } else {
            setIndeterminate(true);
        }
    }, [sports]);


    const handlecheckboxChange = (event) => {
        if (event.target.value === "select-all") {
            if (event.target.checked) {
                setSports([...sportsList]);
            } else {
                setSports([]);
            }
        } else {
            const newSports = [...sports];
            if (event.target.checked) {
                newSports.push(event.target.value);
            } else {
                const index = newSports.indexOf(event.target.value);
                newSports.splice(index, 1);
            }
            setSports(newSports);
        }
    };
    return (
        <div>
            <div>
                <label>
                    <input type="checkbox" name="Select-all" value="select-all"
                        checked={
                            sports.length === sportsList.length
                        }
                        onChange={handlecheckboxChange}
                        ref={
                          (input) => {
                              if (input) {
                                  input.indeterminate = indeterminate;
                              }
                          }
                      } 
                        >
                        
                  
                    
                    </input>
                    Select all</label>
            </div>
            {
            sportsList.map((sport) => (
                <div key={sport}>

                    <label>
                        <input type='checkbox'
                            name={sport}
                            value={sport}
                            onChange={handlecheckboxChange}
                            checked={
                                sports.includes(sport)
                            }/> {sport} </label>
                </div>
            ))
        } 
        </div>
    );
};


export default MultiCheckbox;
